import React from "react";
import "./ChatRoom.css";
import socketIO from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./chatpage";

const socket = socketIO.connect("http://localhost:4000");

const Superchat = () => {
  return (
    <div>
      <ChatPage socket={socket} />
    </div>
  );
};

export default Superchat;
