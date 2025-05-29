import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";

import { fetchAllVideos } from "../helper/helperFunctions";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const showSearchResults = useSelector((store) => store.app.showSearchResults);
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  useEffect(() => {
    fetchAllVideos()
      .then((data) => data.json())
      .then((json) => setVideos(json?.items));
  }, []);

  return (
    <div className={`${isMenuOpen?"":"pl-[-20%]"}`}>
      {showSearchResults ? (
        <SearchResults/>
      ) : (
        <div className="flex flex-wrap">
          {videos && videos.length > 0 ? (
            videos?.map((video) => (
              <VideoCard
                key={video.id}
                info={video}
                className="p-2 m-2 w-80 shadow-lg"
              />
            ))
          ) : (
            <Shimmer />
          )}
        </div>
      )}
    </div>
  );
};

export default VideosContainer;
