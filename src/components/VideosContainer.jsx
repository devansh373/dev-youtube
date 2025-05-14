import React, { use, useEffect, useState } from "react";
import { YOUTUBE_DATA_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(YOUTUBE_DATA_API_URL);
    const json = await data.json();
    console.log(json);
    setVideos(json?.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} className="p-2 m-2 w-80 shadow-lg" />
      ))}
    </div>
  );
};

export default VideosContainer;
