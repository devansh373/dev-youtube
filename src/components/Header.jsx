import React, { useContext, useEffect, useRef, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ToggleSideBarContext } from "../context/SidebarContext";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountry,
  setShowSearchResults,
  toggleMenu,
} from "../utils/appSlice";
import { countries, YOUTUBE_AUTO_SUGGEST_API_URL } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import ThemeContext from "../context/ThemeContext";
import useSearchVideos from "../hooks/useSearchVideos";
import { useNavigate } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  // const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionClicked, setSuggestionClicked] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const { isDark, setIsDark } = useContext(ThemeContext);
  const showSearchResults = useSelector((store) => store.app.showSearchResults);
  const filter = useSelector((store) => store.app.filter);
  const countryFromStore = useSelector((store) => store.app.country);
  const { setIsSideBarOpen } = useContext(ToggleSideBarContext);
  const inputRef = useRef("");
  const widthRef = useRef(window.innerWidth);
  useSearchVideos(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
        !suggestionClicked && setShowSuggestions(true);
      } else {
        fetch(YOUTUBE_AUTO_SUGGEST_API_URL + searchQuery)
          .then((res) => res.json())
          .then((data) => {
            setSuggestions(data[1]);
            // setShowSuggestions(true);
            !suggestionClicked && setShowSuggestions(true);
            dispatch(cacheResults({ [searchQuery]: data[1] }));
          });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);
  useEffect(() => {
    if (widthRef.current < 740) {
      setShowSearchBar(false);
    } else {
      setShowSearchBar(true);
    }
    const handleResize = () => {
      widthRef.current = window.innerWidth;
      //   console.log("Current width:", widthRef.current);
      widthRef.current < 740 ? setShowSearchBar(false) : setShowSearchBar(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleKeyDown = (e) => {
    console.log("here");
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0) {
        setSearchQuery(suggestions[highlightedIndex]);
        setShowSuggestions(false);
        setHighlightedIndex(-1);
        dispatch(setShowSearchResults(true));
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setHighlightedIndex(-1);
    }
    // inputRef.current = suggestions[highlightedIndex + 1];
  };

  const handleThemeChange = () => setIsDark((prev) => !prev);

  return (
    <div className="flex justify-between items-center p-4 shadow-lg sticky w-full top-0 z-10 bg-white dark:bg-black">
      {/* Logo & Sidebar Toggle */}
      {showLogo && (
        <div className="flex justify-around items-center">
          <RiMenuFill
            className=" text-2xl sm:text-[20px] mx-[10px] cursor-pointer min-w-[50px]"
            onClick={() => dispatch(toggleMenu())}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube Logo"
            className=" h-6"
          />
          <a
            href="/"
            className="sm:text-xl font-bold ml-2 dark:text-white text-black cursor-pointer"
            onClick={() => dispatch(setShowSearchResults(false))}
          >
            YouTube
          </a>
        </div>
      )}

      {/* Search Bar */}
      <div className=" flex-col items-center relative w-[300px] md:w-[400px] flex  sm:flex bg-white">
        {showSearchBar ? (
          <div className="flex w-full  sm:mr-0">
            <input
            id="search"
            name="search"
              ref={inputRef}
              type="text"
              value={searchQuery}
              // value={inputRef.current}
              placeholder="Search"
              onChange={(e) => {
                // inputRef.current = e.target.value;
                console.log(e.target.value.length);
                if (e.target.value.length === 0)
                  dispatch(setShowSearchResults(false));
                setSearchQuery(e.target.value);
                setHighlightedIndex(-1);
              }}
              onFocus={() => searchQuery && setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              onKeyDown={handleKeyDown}
              className="px-4 py-2 sm:ml-[5%] md:w-full border border-gray-600 rounded-l-full focus:outline-none"
            />
            <span className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-600 rounded-r-full dark:bg-gray-600 cursor-pointer">
              {showLogo ? (
                <CiSearch className="text-[1.5rem]" />
              ) : (
                <HiXMark
                  className="text-[1.5rem]"
                  onClick={() => {

                    !showLogo && setShowSearchBar(false);

                    setShowLogo(true);
                  }}
                />
              )}
            </span>
          </div>
        ) : (
          <></>
        )}

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-[100%] mt-1 w-full bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg h-auto  z-50">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`p-2 cursor-pointer ${
                  index === highlightedIndex
                    ? "bg-gray-200 dark:bg-zinc-700"
                    : "hover:bg-gray-100 dark:hover:bg-zinc-600"
                }`}
                onMouseDown={() => {
                  setSearchQuery(suggestion);
                  setHighlightedIndex(-1);
                  setShowSuggestions(false);
                  setSuggestionClicked(true);
                  dispatch(setShowSearchResults(true));
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Theme & Profile */}
      <div className="flex items-center">
        {!showSearchBar && (
          <CiSearch
            className="sm:hidden text-[1.5rem]"
            onClick={() => {
              setShowSearchBar(true);
              setShowLogo(false);
            }}
          />
        )}
        {isDark ? (
          <MdLightMode
            className="text-[1.5rem] mx-2 cursor-pointer"
            onClick={handleThemeChange}
          />
        ) : (
          <MdDarkMode
            className="text-[1.5rem] mx-2 cursor-pointer"
            onClick={handleThemeChange}
          />
        )}

        {!showSearchResults && filter==="All" &&
          <select
          name="country"
          id="country"
          onChange={(e) => dispatch(setCountry(e.target.value))}
          className=" text-center w-[100px] border rounded-lg cursor-pointer dark:bg-black"
          value={countryFromStore}
        >
          {Object.keys(countries).map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>}
        {/* <FaUserCircle className="text-[1.7rem] mx-2 cursor-pointer" /> */}
      </div>
    </div>
  );
};

export default Header;
