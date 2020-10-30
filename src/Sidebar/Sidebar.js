import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
import { RateReviewOutlined, SearchOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import SidebarChat from "../SidebarChat/SidebarChat";
import "./Sidebar.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Sidebar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [newChat, setNewChat] = useState("");

  const addChats = (e) => {
    e.preventDefault();
    db.collection("chats").add({
      chatName: newChat,
    });
    setOpen(false);
    setNewChat("");
  };

  const handleClose = () => {
    setOpen(false);
    setNewChat("");
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form>
        <FormControl>
          <TextField
            value={newChat}
            onChange={(e) => setNewChat(e.target.value)}
            label="New Chat Name"
          />
          <Button onClick={addChats} className="addChatBtn">
            Create
          </Button>
        </FormControl>
      </form>
    </div>
  );

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
        <Modal open={open} onClose={handleClose}>
          {body}
        </Modal>
        <IconButton>
          <RateReviewOutlined onClick={() => setOpen(true)} />
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
