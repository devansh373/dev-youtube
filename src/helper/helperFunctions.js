import { YOUTUBE_DATA_API_URL } from "../utils/constants";

export const fetchAllVideos = ()=>{
    
    const data =  fetch(YOUTUBE_DATA_API_URL);
    return data;
  };