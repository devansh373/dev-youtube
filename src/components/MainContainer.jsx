import React, { useEffect } from "react";
import Filters from "./Filters";
import VideosContainer from "./VideosContainer";
import { openMenu, setIsPhone } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import useWindowWidthRef from "../hooks/useWindowWidthRef";

const MainContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const showSearchResults = useSelector((store) => store.app.showSearchResults);
  useWindowWidthRef()
  // useEffect(() => {
  //   // window.innerWidth < 640 ? dispatch(setIsPhone()) : dispatch(openMenu());
  //   console.log("first");
  // }, []);
  return (
    <div className={`${isMenuOpen ? "sm:pl-[80px] md:pl-[190px]" : ""} overflow-auto`}>
      {!showSearchResults && <Filters />}
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
