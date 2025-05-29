import React from "react";
import { FaHistory, FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SiYoutubeshorts } from "react-icons/si";
import { MdPlaylistPlay, MdSubscriptions } from "react-icons/md";
import { BiSolidLike, BiSolidVideos } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";
import { setShowSearchResults } from "../utils/appSlice";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch()
  if (!isMenuOpen) {
    return;
  }
  return (
    <div className="flex flex-col gap-4 p-4 border-b-2 border-gray-200 shadow-lg fixed top-[73px] left-0 bg-white h-full dark:bg-black">
      <div>
        <ul className="font-medium p-2 border-b-1 border-b-gray-800 dark:border-b-white">
          <Link to={"/"} onClick={()=>dispatch(setShowSearchResults(false))}>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer transition duration-200 ease-in-out">
              <FaHome />
              Home
            </li>
          </Link>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer transition duration-200 ease-in-out">
            <SiYoutubeshorts />
            Shorts
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer transition duration-200 ease-in-out">
            <MdSubscriptions />
            Subscriptions
          </li>
        </ul>
      </div>
      <div>
        
        <h1 className="font-medium sidebar-li">You &gt;</h1>
        <ul className="p-2 border-b-1 border-b-gray-800 dark:border-b-white">
          <li className="sidebar-li">
            <FaHistory />
            History
          </li>
          <li className="sidebar-li">
            <MdPlaylistPlay />
            Playlists
          </li>
          <li className="sidebar-li">
            {" "}
            <BiSolidVideos /> Your Videos
          </li>
          <li className="sidebar-li">
            {" "}
            <GoClockFill /> Watch Later
          </li>
          <li className="sidebar-li">
            {" "}
            <BiSolidLike /> Liked Videos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
