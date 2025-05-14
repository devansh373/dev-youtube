import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  // params is used when url has slash(/) videoId
  // for example: /watch/abc123
  // const {videoId} = useParams();

  // using useSearchParams
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const videoId = searchParams.get("v");
  return (
    <div>
      <h1>{videoId}</h1>
      <iframe
        width="560"
        height="315"
        // src="https://www.youtube.com/embed/VIDEO_ID"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
