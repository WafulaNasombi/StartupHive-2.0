import React, { useEffect, useState } from "react";
import socketIO from "socket.io-client";
import ChatBody from "./chatbody";
import ChatFooter from "./chatfooter";

const socket = socketIO.connect("http://localhost: 4000");

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  return (
    <div>
      <div className="chat_main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
