import React, { useContext } from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { ToggleSideBarContext } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Body = () => {
  const { isDark } = useContext(ThemeContext);
  // if using useContext
  // const { isSideBarOpen } = useContext(ToggleSideBarContext);

  return (
    // <div className={`flex ${isDark?"dark":""}`}>
    <div className="flex ">
      {/* {isSideBarOpen && <SideBar />} */}
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
