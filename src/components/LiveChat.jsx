import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomEntry } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // API Polling
  //   const timer = setInterval(() => {
  //     dispatch(
  //       addMessage({
  //         name: generateRandomEntry().name,
  //         message: generateRandomEntry().message,
  //         // message: "Lorem ipsum asddfaddfadas sadsqasfa",
  //       })
  //     );
  //   }, 2000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const chatMessages = useSelector((store) => store.chat.messages);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(liveMessage.length>0)
    dispatch(
      addMessage({
        name: "Devansh Raghav",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  }
  return (
    <>
      <div className="flex flex-col-reverse mx-2 p-2 w-full h-[600px] border border-black bg-slate-50 rounded-lg overflow-y-scroll dark:bg-gray-800">
        {chatMessages.map((message, index) => (
          <LiveChatMessage
            key={index}
            index={index}
            // name={generateRandomEntry().name}
            // message={generateRandomEntry().message}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="flex  items-center gap-2 p-2 my-2  w-full border border-gray-400 bg-slate-50 rounded-lg dark:bg-gray-800"
        onSubmit={(e) => {
          handleSubmit(e);
          // e.preventDefault();
          // dispatch(
          //   addMessage({
          //     name: "Devansh Raghav",
          //     message: liveMessage,
          //   })
          // );
          // setLiveMessage("");
        }}
      >
        <input
          className="border border-gray-400 rounded-lg p-2 m-2 w-[350px] h-10"
          type="text"
          name="text"
          id="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="border border-gray-400 rounded-lg p-2 m-2 w-20 cursor-pointer" onClick={(e)=>handleSubmit(e)}>
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
