import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info, searchResult, isFiltered }) => {
  const { snippet, statistics, id } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    // for useParams
    // <Link to={`/watch/${id}`} className='p-2 m-2 w-80 shadow-lg'>

    // for useSearchParams
    <Link
      to={`/watch?v=${searchResult || isFiltered ? id.videoId : id}`}
      className={`p-2   shadow-lg overflow-hidden rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all delay-100 gap-[5%] sm:gap-[10%] mt-4 ${
        searchResult
          ? "flex w-full h-[140px] sm:h-[250px]  "
          : "flex flex-col sm:flex-row md:flex-col   w-full md:w-76 md:h-[310px] h-auto"
      }`}
    >
      <div
        className={`${
          searchResult
          ? "sm:min-w-[450px] min-w-[230px]  sm:w-[450px] h-full"
          : "min-w-[310px] sm:w-[310px] h-full w-full sm:h-[162px]"
        } bg-gray-300 rounded-lg `}
      >
        <img
          className="rounded-lg object-contain mx-auto w-full"
          src={
            searchResult || isFiltered
              ? thumbnails?.medium?.url
              : thumbnails.maxres? thumbnails.maxres.url:thumbnails.medium.url
          }
          alt="thumbnail"
        />
      </div>
      <div>
        <h1
          className={`sm:font-bold text-sm  sm:text-lg ${
            !searchResult || (!isFiltered && "md:truncate")
          }`}
          title={title}
        >
          {title}
        </h1>
        <p className="text-sm font-bold">{channelTitle}</p>
        {!searchResult && !isFiltered && <p>{statistics?.viewCount} views</p>}
      </div>
    </Link>
  );
};

export default VideoCard;
