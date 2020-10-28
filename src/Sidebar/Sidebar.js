import { Avatar, IconButton } from "@material-ui/core";
import { RateReviewOutlined, SearchOutlined } from "@material-ui/icons";
import React from "react";
import SidebarChat from "../SidebarChat/SidebarChat";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar" />
        <div className="sidebar__input">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton>
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
