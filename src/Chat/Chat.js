import { IconButton } from "@material-ui/core";
import { MicOutlined } from "@material-ui/icons";
import React from "react";
import Message from "../Messages/Message";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          TO: <span className="chat__name">Yooo</span>
        </h4>
        <strong>Detail</strong>
      </div>

      <div className="chat__messages">
        <Message />
      </div>
      <div className="chat__input">
        <form>
          <input type="text" />
          <button>send</button>
        </form>
        <IconButton>
          <MicOutlined />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
