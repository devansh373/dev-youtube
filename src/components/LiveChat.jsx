import React, { use, useEffect } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // API Polling
    // const timer  = setInterval(() => {
    //   dispatch(
    //     addMessage({
    //       name: "Devansh",
    //       message: "Lorem ipsum asddfaddfadas sadsqasfa",
    //     })
    //   );
    // }, 2000);

    return () => {
      // clearInterval(timer);
    };
  }, []);

  const chatMessages = useSelector((store) => store.chat.messages);
  return (
    <div className=" mx-2 p-2 w-full h-[600px] border border-black bg-slate-50 rounded-lg">
      {chatMessages.map((message, index) => (
        <LiveChatMessage
          key={index}
          name={message.name}
          message={message.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;
