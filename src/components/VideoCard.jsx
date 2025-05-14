import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics, id } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    // for useParams
    // <Link to={`/watch/${id}`} className='p-2 m-2 w-80 shadow-lg'>

    // for useSearchParams
    <Link to={`/watch?v=${id}`} className="p-2 m-2 w-80 shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-sm">{channelTitle}</p>
      <p>{statistics?.viewCount} views</p>
    </Link>
  );
};

export default VideoCard;
