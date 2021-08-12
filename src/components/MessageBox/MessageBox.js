import React from "react";
import "./MessageBox.scss";
import Placeholder from "./../../asserts/images/placeholder.jpg";

const MessageBox = () => {
  return (
    <div className='message-box'>
      <div className='message-box-top'>
        <img src={Placeholder} alt='placeholder ' />
        <div className='message-box-nt'>
          <div className='message-box-name'>Rachel Poppins</div>
          <div className='message-box-time'>5 minutes ago</div>
        </div>
      </div>
      <div className='message-box-info'>
        <p className='msg'>
          A warm welcome and lots of good wishes on becoming part of our growing
          team. Congratulations and on behalf of all the members. Lets all
          welcome
        </p>
        <div className='mr'>2</div>
      </div>
    </div>
  );
};

export default MessageBox;
