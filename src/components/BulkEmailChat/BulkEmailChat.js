import React from "react";
import "./BulkEmailChat.scss";

import Placeholder from "./../../asserts/images/placeholder.jpg";

const BulkEmailChat = ({ own }) => {
  return (
    <div className="chat-message message-own">
      <div className='message-top'>
       
        <div>
          <div className="message-top-msg cbg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto b
          </div>
          <div className='message-date'>
        4.30 AM
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkEmailChat;
