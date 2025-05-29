import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  GOOGLE_API_KEY,
  YOUTUBE_COMMENTS_SINGLE_VIDEO_URL,
} from "../utils/constants";

const CommentsList = ({ comments, reply }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} className="my-2">
          <Comment comment={comment} reply={reply} />
          {comment.replies && (
            <div className=" p-2 m-2 border-l-2 border-gray-400">
              <CommentsList comments={comment.replies.comments} reply={true} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
const Comment = ({ comment, reply }) => {
  const nameOfReply = reply && comment.snippet.authorDisplayName;
  const textOfReply = reply && comment.snippet.textOriginal;
  const userAvatarOfReply = reply && comment.snippet.authorProfileImageUrl;

  const name = comment?.snippet?.topLevelComment?.snippet?.authorDisplayName;
  const text = comment?.snippet?.topLevelComment?.snippet?.textOriginal;
  const userAvatar =
    comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl;
  return (
    <div className="flex items-center gap-2">
      {/* <div className=" border-2 border-gray-200 shadow-lg p-4 m-2"> */}
      {/* <img
        className="w-10 h-10 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2X1g3r4v5x6c7f8j8z4k4k4k4k4k4k4k4&usqp=CAU"
        alt="user"
      /> */}
      {userAvatar || userAvatarOfReply ? (
        <img
          src={reply ? userAvatarOfReply : userAvatar}
          alt="User Avatar"
          className="w-[30px] h-[30px] rounded-full"
        />
      ) : (
        <FaUserCircle className="text-lg" />
      )}
      <div>
        <h1 className="font-medium">{reply ? nameOfReply : name}</h1>
        <p>{reply ? textOfReply : text}</p>
      </div>
    </div>
  );
};
const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [commentsSliced, setCommentsSliced] = useState([]);

  const comments2 = [
    {
      name: "Devansh Raghav",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
      replies: [
        {
          name: "Devansh Raghav",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
          replies: [
            {
              name: "Devansh Raghav",
              text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
              replies: [],
            },
          ],
        },
        {
          name: "Devansh Raghav",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
          replies: [
            {
              name: "Devansh Raghav",
              text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Devansh Raghav",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
      replies: [
        {
          name: "Devansh Raghav",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
          replies: [
            {
              name: "Devansh Raghav",
              text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Devansh Raghav",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
      replies: [
        {
          name: "Devansh Raghav",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
          replies: [
            {
              name: "Devansh Raghav",
              text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
              replies: [],
            },
          ],
        },
      ],
    },
  ];
  useEffect(() => {
    fetch(
      YOUTUBE_COMMENTS_SINGLE_VIDEO_URL + videoId + "&key=" + GOOGLE_API_KEY
    )
      .then((data) => data.json())
      .then((json) => {
        console.log(json?.items);
        setComments(json?.items);
        setCommentsSliced(json.items.slice(0, 20));
      });
  }, []);
  return (
    <div className="m-4 p-4 border-2 border-gray-200 shadow-lg">
      <h1 className=" font-bold text-2xl my-2">Comments:</h1>
      <CommentsList comments={commentsSliced} reply={false} />
      <button
        className="cursor-pointer p-2 bg-red-500 text-white rounded-lg hover:bg-red-800"
        onClick={() => {
          commentsSliced.length < comments.length
            ? setCommentsSliced(comments.slice(0, commentsSliced.length + 10))
            : setCommentsSliced(comments.slice(0,20));
        }}
      >
        {`${
          comments.length === commentsSliced.length ? "Show Less" : "Load More"
        }`}
      </button>
    </div>
  );
};

export default CommentsContainer;
