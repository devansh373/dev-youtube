import React, { use, useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import Suggestions from "./Suggestions";


const WatchPage = ({ isLiveVideo }) => {
const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
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
    <div className={`w-full ${isMenuOpen?"pl-[190px]":""}`}>
      <div className=" flex w-full p-4">
        <div className=" bg-gray-300">
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
        {isLiveVideo ? (
          <div className="w-full">
            <LiveChat />
          </div>
        ) : (
          <div>
            <Suggestions />
          </div>
        )}
      </div>
      <div>
        <CommentsContainer videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
