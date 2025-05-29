import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";

import { fetchAllVideos } from "../helper/helperFunctions";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";
import { countries } from "../utils/constants";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const showSearchResults = useSelector((store) => store.app.showSearchResults);
  const country = useSelector(store=>store.app.country)
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  useEffect(() => {
    fetchAllVideos(countries[country])
      .then((data) => data.json())
      .then((json) => setVideos(json?.items));
  }, [country]);

  return (
    <div className={''}>
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
