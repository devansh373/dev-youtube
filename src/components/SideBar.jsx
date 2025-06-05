import React, { useEffect } from "react";
import { FaHistory, FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SiYoutubeshorts } from "react-icons/si";
import { MdPlaylistPlay, MdSubscriptions } from "react-icons/md";
import { BiSolidLike, BiSolidVideos } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";
import { closeMenu, setShowSearchResults } from "../utils/appSlice";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(window.innerWidth)
    window.innerWidth < 640 && dispatch(closeMenu());
  }, []);
  if (!isMenuOpen) {
    return;
  }
  return (
    <div
      className={` sm:flex flex-col gap-4 p-4 border-b-2 border-gray-200 shadow-lg fixed top-[55px] left-0 bg-white h-full dark:bg-black`}
    >
      <div>
        <ul className="font-medium p-2 border-b-1 border-b-gray-800 dark:border-b-white">
          <Link to={"/"} onClick={() => dispatch(setShowSearchResults(false))}>
            <li className="sidebar-li">
              <FaHome className="sidebar-li-icon text-xl" />
              Home
            </li>
          </Link>
          <li className="sidebar-li">
            <SiYoutubeshorts className=" text-xl" />
            Shorts
          </li>
          <li className="sidebar-li">
            <MdSubscriptions className=" text-xl" />
            Subscriptions
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-medium sidebar-li">You &gt;</h1>
        <ul className="p-2 border-b-1 border-b-gray-800 dark:border-b-white">
          <li className="sidebar-li">
            <FaHistory className=" text-xl" />
            History
          </li>
          <li className="sidebar-li">
            <MdPlaylistPlay className=" text-xl" />
            Playlists
          </li>
          <li className="sidebar-li">
            {" "}
            <BiSolidVideos className=" text-xl" /> Your Videos
          </li>
          <li className="sidebar-li">
            {" "}
            <GoClockFill className=" text-xl" /> Watch Later
          </li>
          <li className="sidebar-li">
            {" "}
            <BiSolidLike className=" text-xl" /> Liked Videos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
