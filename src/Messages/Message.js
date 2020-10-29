import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Message.css";
import * as timeago from "timeago.js";
import { forwardRef } from "react";

const Message = forwardRef(
  ({ id, data: { photo, message, timestamp, email } }, ref) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message__sender"}`}
      >
        <Avatar src={photo} className="message__photo" />
        <p>{message}</p>
        <small>{timeago.format(new Date(timestamp?.toDate()))}</small>
      </div>
    );
  }
);

export default Message;
