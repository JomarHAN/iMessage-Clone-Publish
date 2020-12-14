import { IconButton } from "@material-ui/core";
import { Apps, MicOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectChatId,
  selectChatName,
  setBackHome,
} from "../features/chatSlice";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import Message from "../Messages/Message";
import "./Chat.css";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function Chat() {
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      message: input,
      displayName: user.displayName,
      photo: user.photo,
      email: user.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid,
    });

    setInput("");
  };

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    }
  }, [chatId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          TO: <span className="chat__name">{chatName}</span>
        </h4>
        <div className="chat__button">
          <IconButton onClick={() => dispatch(setBackHome({ backHome: true }))}>
            <Apps />
          </IconButton>
        </div>
      </div>

      <div className="chat__messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} id={id} data={data} />
          ))}
        </FlipMove>
      </div>
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button onClick={sendMessage}>send</button>
        </form>
        <IconButton>
          <MicOutlined />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
