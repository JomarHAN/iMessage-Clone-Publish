import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h3>Yoooo</h3>
        <p>This is message here</p>
        <small>Timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
