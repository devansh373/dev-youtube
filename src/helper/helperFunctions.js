import { GOOGLE_API_KEY, YOUTUBE_DATA_API_URL } from "../utils/constants";

export const fetchAllVideos = (regionCode) => {
  const data = fetch(YOUTUBE_DATA_API_URL + "&regionCode=" + regionCode);
  return data;
};

export const fetchFilteredVideos = (filter) => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet${
      filter && "&q=" + filter
    }&key=${GOOGLE_API_KEY}&maxResults=20`
  );
};
