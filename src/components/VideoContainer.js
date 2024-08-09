import { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  const fetchYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    fetchYoutubeVideos();
  }, []);

  if (!videos) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={'/watch?v=' + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
