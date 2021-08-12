import React from "react";
import "./ChatMessage.scss";

import Placeholder from "./../../asserts/images/placeholder.jpg";

const ChatMessage = ({ own }) => {
  return (
    <div className={`${own ? "chat-message message-own" : "chat-message"}`}>
      <div className='message-top'>
        <img src={Placeholder} alt='placeholder' />
        <div>
          <div className={`${own ? "message-top-msg cbg" : "message-top-msg"}`}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto b
          </div>
          <div className='message-date'>
            Sunday, October 24th, 2020 at 4.30 AM
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
