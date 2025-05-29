import { YOUTUBE_DATA_API_URL } from "../utils/constants";

export const fetchAllVideos = (regionCode)=>{
    
    const data =  fetch(YOUTUBE_DATA_API_URL+"&regionCode="+regionCode);
    return data;
  };