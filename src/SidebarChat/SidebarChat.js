import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setChat } from "../features/chatSlice";
import db from "../firebase";
import "./SidebarChat.css";
import * as timeago from "timeago.js";

function SidebarChat({ id, chatName }) {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  return (
    <div
      className="sidebarChat"
      onClick={() => dispatch(setChat({ chatName: chatName, chatId: id }))}
    >
      <Avatar src={messages[0]?.photo} />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>{messages[0]?.message}</p>
        <small>
          {timeago.format(new Date(messages[0]?.timestamp?.toDate()))}
        </small>
      </div>
    </div>
  );
}

export default SidebarChat;
