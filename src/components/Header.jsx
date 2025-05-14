import React, { useContext } from "react";
import { RiMenuFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { ToggleSideBarContext } from "../context/SidebarContext";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggle2 = () => {
    dispatch(toggleMenu());
  };

  const { setIsSideBarOpen } = useContext(ToggleSideBarContext);
  const handleToggle = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-gray-200 shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <RiMenuFill
          className="text-[1.5rem] mx-[10px] cursor-pointer"
          // onClick={handleToggle}
          onClick={handleToggle2}
        />
        {/* <Link to={"/"}> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube Logo"
            className="h-6"
          />
        {/* </Link> */}
        <h1 className="text-xl font-bold ml-2">YouTube</h1>
      </div>
      {/* Search Bar */}
      <div className="flex items-center justify-center  overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className=" px-4 py-2 w-[400px] border-2 border-gray-300 rounded-l-full focus:outline-none focus:border-gray-400 "
        />

        <span className="px-4 py-2 bg-gray-100 cursor-pointer border-2 border-l-0 border-gray-300 rounded-r-full ">
          <CiSearch className="text-[1.5rem] " />
        </span>
      </div>
      {/* User Profile */}
      <div className="flex items-center">
        <FaUserCircle className="text-[1.7rem] mx-[10px]" />
      </div>
    </div>
  );
};
export default Header;
