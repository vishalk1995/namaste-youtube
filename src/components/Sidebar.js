import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const showSidebar = useSelector((state) => state.global.showSidebar);

  if (!showSidebar) {
    return null;
  }

  return (
    <div className="shadow-lg p-5 w-36">
      <ul className="">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="">
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="">
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};
export default Sidebar;
