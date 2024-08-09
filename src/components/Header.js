import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../utils/globalSlice';
import { useEffect, useState } from 'react';
import { DEFAULT_PROFILE_IMG, YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((s) => s.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    // update cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-8 mx-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="hamburger menu icon"
          onClick={toggleSidebarHandler}
        />
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          alt="youtube logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 py-1 px-10 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-200 ">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white px-5 w-[44rem] rounded-lg shadow-lg border">
            <ul>
              {searchSuggestions.map((s) => (
                <li key={s} className="py-2  shadow-sm hover:bg-gray-100 ">
                  {'🔍 ' + s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src={DEFAULT_PROFILE_IMG}
          alt="default user icon"
        />
      </div>
    </div>
  );
};

export default Header;
