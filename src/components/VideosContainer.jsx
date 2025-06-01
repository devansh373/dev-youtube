import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";

import { fetchAllVideos, fetchFilteredVideos } from "../helper/helperFunctions";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";
import { countries } from "../utils/constants";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const showSearchResults = useSelector((store) => store.app.showSearchResults);
  const country = useSelector((store) => store.app.country);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const filter = useSelector((store) => store.app.filter);

  useEffect(() => {
    filter==="All" && fetchAllVideos(countries[country])
      .then((data) => data.json())
      .then((json) => {
        console.log(json.items);
        setVideos(json?.items);
      });

    filter &&
      filter !== "All" &&
      fetchFilteredVideos(filter)
        .then((data) => data.json())
        .then((json) => {
          console.log(json.items);
          setVideos(json.items);
        });
  }, [country, filter]);

  return (
    <div className={""}>
      {showSearchResults ? (
        <SearchResults />
      ) : (
        <div className="flex-col sm:flex-row flex flex-wrap">
          {videos && videos.length > 0 ? (
            videos?.map((video) => (
              <VideoCard
                key={filter ? video.id.videoId : video.id}
                info={video}
                isFiltered={filter !== "All"}
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
