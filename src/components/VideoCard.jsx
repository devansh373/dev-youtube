import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info, searchResult,isFiltered }) => {
  const { snippet, statistics, id } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    // for useParams
    // <Link to={`/watch/${id}`} className='p-2 m-2 w-80 shadow-lg'>

    // for useSearchParams
    <Link
      to={`/watch?v=${searchResult||isFiltered ? id.videoId : id}`}
      className={`p-2   shadow-lg overflow-hidden rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all delay-100 ${
        searchResult ? "flex w-full h-[250px] mt-4 gap-[10%]" : "w-76 h-[310px]"
      }`}
    >
      <div
        className={`${
          searchResult ? "min-w-[450px] w-[450px] h-full" : " w-full h-[162px]"
        } bg-gray-300 rounded-lg`}
      >
        <img
          className="rounded-lg object-contain"
          src={searchResult ? thumbnails?.high?.url : thumbnails?.medium?.url}
          alt="thumbnail"
        />
      </div>
      <div>
        <h1
          className={`font-bold text-lg ${!searchResult && "truncate"}`}
          title={title}
        >
          {title}
        </h1>
        <p className="text-sm">{channelTitle}</p>
        {!searchResult || !isFiltered && <p>{statistics?.viewCount} views</p>}
      </div>
    </Link>
  );
};

export default VideoCard;
