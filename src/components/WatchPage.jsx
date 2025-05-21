import React, { use, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const dispatch = useDispatch();
useEffect(() => {
    dispatch(closeMenu());
  }, []);


  // params is used when url has slash(/) videoId
  // for example: /watch/abc123
  // const {videoId} = useParams();

  // using useSearchParams
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const videoId = searchParams.get("v");
  return (
    <div className="w-full">
<div className=" flex w-full p-4">

    <div className="">
      {/* <h1>{videoId}</h1> */}
      <iframe
        width="1000"
        height="600"
        // src="https://www.youtube.com/embed/VIDEO_ID"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
        ></iframe>
        </div>
        <div className="w-full">
          <LiveChat/>
        </div>
        </div>
        <div>
          <CommentsContainer/>
        </div>
    </div>
  );
};

export default WatchPage;
