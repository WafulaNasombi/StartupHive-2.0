import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("username");
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <div className="message_container">
        {messages.map((message) => {
          message.name === localStorage.getItem("username") ? (
            <div className="messages_chats" key={message.id}>
              <p className="sender_name">You</p>
              <div className="message_sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message_chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message_recipient">
                <p>{message.text}</p>
              </div>
            </div>
          );
        })}

        {/* Triggered when a user is typing */}
        <div className="message_status">
          <p>someone is typing...</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
