import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchResults, setSearchResults } from "../utils/searchSlice";

const useSearchVideos = (query) => {
  const [results, setResults] = useState();
  const dispatch = useDispatch();
  const showSearchResults = useSelector((store) => store.app.showSearchResults);
  useEffect(() => {
    if(query.length===0) dispatch(clearSearchResults())
    showSearchResults && fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet${query&&"&q="+query}&key=${GOOGLE_API_KEY}&maxResults=20`
    )
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setResults(res.items);
        dispatch(setSearchResults(res?.items));
      });

  }, [query]);
  return results;
};

export default useSearchVideos;
