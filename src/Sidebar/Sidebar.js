import { Avatar, IconButton } from "@material-ui/core";
import { RateReviewOutlined, SearchOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import SidebarChat from "../SidebarChat/SidebarChat";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);

  const addChats = () => {
    const chatName = prompt("Please Enter A New Chat Room");
    db.collection("chats").add({
      chatName: chatName,
    });
  };

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          src={user.photo}
          className="sidebar__avatar"
          onClick={() => auth.signOut()}
        />
        <div className="sidebar__input">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton>
          <RateReviewOutlined onClick={addChats} />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
