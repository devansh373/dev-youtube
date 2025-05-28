import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";

import { fetchAllVideos } from "../helper/helperFunctions";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
  
    fetchAllVideos()
      .then((data) => data.json())
      .then((json) => setVideos(json?.items));
  }, []);
  

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <VideoCard
          key={video.id}
          info={video}
          className="p-2 m-2 w-80 shadow-lg"
        />
      ))}
    </div>
  );
};

export default VideosContainer;
