import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../utils/globalSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchVideo = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="flex flex-col px-5 py-10 w-full">
      <div className="flex">
        <div>
          <iframe
            width="1200"
            height="600"
            src={'https://www.youtube.com/embed/' + params.get('v')}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};
export default WatchVideo;
