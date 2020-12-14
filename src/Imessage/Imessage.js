import React from "react";
import { useSelector } from "react-redux";
import Chat from "../Chat/Chat";
import { selectBackHome } from "../features/chatSlice";
import Sidebar from "../Sidebar/Sidebar";
import "./Imessage.css";
function Imessage() {
  const backHome = useSelector(selectBackHome);
  return (
    <div className="imessage">
      <div
        className={`imessage__sidebar ${
          !backHome ? "imessage__sidebarOut" : ""
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`imessage__chat ${!backHome ? "imessage__chatExpand" : ""}`}
      >
        <Chat />
      </div>
    </div>
  );
}

export default Imessage;
