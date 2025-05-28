
export const  GOOGLE_API_KEY = "AIzaSyBPrtxEdj1fxlCzgsepnQ7fddYNRXjyYnM"
export const YOUTUBE_DATA_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`
export const YOUTUBE_AUTO_SUGGEST_API_URL = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`
// "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query"

export const YOUTUBE_COMMENTS_SINGLE_VIDEO_URL = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=`