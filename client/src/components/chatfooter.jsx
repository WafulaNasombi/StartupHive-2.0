import React, { useState } from "react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("username")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("username"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="chat_footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type message..."
          className="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit" className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
