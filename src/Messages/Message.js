import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
function Message() {
  return (
    <div className="message">
      <Avatar className="message__photo" />
      <p>Hello</p>
      <small>just now</small>
    </div>
  );
}

export default Message;
