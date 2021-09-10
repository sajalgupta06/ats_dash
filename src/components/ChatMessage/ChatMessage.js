import React from "react";
import "./ChatMessage.scss";

import Placeholder from "./../../asserts/images/placeholder.jpg";

const ChatMessage = ({ own , mssg,currentUser}) => {

  let daysName = ["Sun",'Mon',"tue","Wed","Thr","Fri","Sat"]
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  let day = daysName[new Date(mssg.createdAt.seconds*1000).getDay()]
  let date = new Date(mssg.createdAt.seconds*1000).getDate()
  let month  = months[new Date(mssg.createdAt.seconds*1000).getMonth()]
  let year = new Date(mssg.createdAt.seconds*1000).getFullYear()

  var hours = new Date(mssg.createdAt.seconds*1000).getHours();
  var minutes = new Date(mssg.createdAt.seconds*1000).getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var time = hours + ':' + minutes + ' ' + ampm;

  
  return (
    <div className={`${own ? "chat-message message-own" : "chat-message"}`}>
      <div className='message-top'>
        <img src={currentUser.profilePicture}  style={{  borderRadius: "5rem"}} />
        <div>
          <div className={`${own ? "message-top-msg cbg" : "message-top-msg"}`}>
         {mssg.body}
          </div>
          <div className='message-date' style={{color:"#878787"}}>
            {`${day}, ${date} ${month} ${year} ${time}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
