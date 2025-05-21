import React from "react";
import { FaUserCircle } from "react-icons/fa";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment,index) => (
        <div key={index}>
          <Comment comment={comment} />
          {comment.replies.length > 0 && (
            <div className=" p-2 m-4 border-l-2 border-gray-400">
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
const Comment = ({ comment }) => {
  return (
    <div className="flex items-center gap-2">
      {/* <div className=" border-2 border-gray-200 shadow-lg p-4 m-2"> */}
      {/* <img
        className="w-10 h-10 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2X1g3r4v5x6c7f8j8z4k4k4k4k4k4k4k4&usqp=CAU"
        alt="user"
      /> */}
      <FaUserCircle className="text-2xl"/>
      <div>
        <h1 className="font-medium">{comment.name}</h1>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  const comments = [
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
  return (
    <div className="m-4 p-4 border-2 border-gray-200 shadow-lg">
      <h1 className=" font-bold text-2xl my-2">Comments:</h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
