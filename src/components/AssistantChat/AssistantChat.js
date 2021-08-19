import React from "react";
import "./AssistantChat.scss";

import Placeholder from "./../../asserts/images/placeholder.jpg";

const AssistantChat = ({ own }) => {
  return (
    <div className={`${own ? "assistantchat-message message-own" : "assistantchat-message"}`}>
        
      <div className='message-top'>
        <img src={Placeholder} alt='placeholder' />
        <div>
          <div className={`${own ? "message-top-msg cbg" : "message-top-msg"}`}>
            Sed ut perspiciatis unde omnis iste natu
          </div>
          <div className='message-date'>
            Sunday, October 24th, 2020 at 4.30 AM
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantChat;
