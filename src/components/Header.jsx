import React, { use, useContext, useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { ToggleSideBarContext } from "../context/SidebarContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_AUTO_SUGGEST_API_URL } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const handleToggle2 = () => {
    dispatch(toggleMenu());
  };

  const { setIsSideBarOpen } = useContext(ToggleSideBarContext);
  const { isDark, setIsDark } = useContext(ThemeContext);
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
        setShowSuggestions(true);
      } else {
        handleSearch();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleToggle = () => {
    setIsSideBarOpen((prev) => !prev);
  };
  const handleSearch = () => {
    console.log(searchQuery);
    searchQuery.length > 0 &&
      fetch(YOUTUBE_AUTO_SUGGEST_API_URL + searchQuery)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSuggestions(data[1]);
          setShowSuggestions(true);
          dispatch(cacheResults({ [searchQuery]: data[1] }));
        });
    if (searchQuery.length === 0) {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };
  // const handleThemeChange = () => {
  //   // Handle theme change logic here
  // };
  // const [isDark, setIsDark] = useState(() => {
  //   return localStorage.getItem("theme") === "dark";
  // });

  // useEffect(() => {
  //   if (isDark) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  //   localStorage.setItem("theme", isDark ? "dark" : "light");
  // }, [isDark]);

  const handleThemeChange = () => {
    setIsDark((prev) => !prev);
  };

  // useEffect(() => {
  // },[isDark])

  // const handleThemeChange = () => {
  //   const newTheme = !isDark;
  //   setIsDark(newTheme);
  //   document.documentElement.classList.toggle("dark", newTheme);
  // };
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-gray-200 shadow-lg sticky top-0 z-10 bg-white dark:bg-gray-800">
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
        <h1 className="text-xl font-bold ml-2 dark:!text-white !text-black">
          YouTube
        </h1>
      </div>
      {/* Search Bar */}
      <div className="flex items-center justify-center   relative">
        <input
          type="text"
          placeholder="Search"
          className=" px-4 py-2 w-[400px] border-2 border-gray-300 rounded-l-full focus:outline-none focus:border-gray-400  "
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        {showSuggestions && (
          <div className="absolute top-[100%] bg-white border-2 border-gray-300 rounded-lg  w-full overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearchQuery(suggestion);
                  setShowSuggestions(false);
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
        <span className="px-4 py-2 bg-gray-100 cursor-pointer border-2 border-l-0 border-gray-300 rounded-r-full dark:bg-gray-800">
          <CiSearch className="text-[1.5rem]  " />
        </span>
      </div>
      {/* User Profile */}
      <div className="flex items-center">
        {isDark ? (
          <MdLightMode className="text-[1.5rem] mx-[10px] cursor-pointer"
            // onClick={() => document.documentElement.classList.toggle("dark")}
            onClick={handleThemeChange}/>
        ) : (
          <MdDarkMode
            className="text-[1.5rem] mx-[10px] cursor-pointer"
            // onClick={() => document.documentElement.classList.toggle("dark")}
            onClick={handleThemeChange}
          />
        )}
        <FaUserCircle className="text-[1.7rem] mx-[10px] cursor-pointer" />
      </div>
    </div>
  );
};
export default Header;
