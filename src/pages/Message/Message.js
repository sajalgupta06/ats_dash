import React, { useState } from "react";
import { SearchIcon } from "../../asserts/icons";
import "./Message.scss";
import MessageBox from "./../../components/MessageBox/MessageBox";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import dots from '../../asserts/icons/dots.png'

import Correct from "./../../asserts/images/correct.png";
import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import Cancel from "./../../asserts/images/cancel.png";
import ChatPopup from "../../components/ChatPopup.js/ChatPopup";

const Message = () => {
  const handleBatch = () => {
    const dropdown = document.querySelector(".batch-action");

    dropdown.classList.toggle("batch-visible");
  };

  const [chatPopupOpen,setChatPopupOpen] = useState(false)
  return (
    <div className='message-container'>
      <div className='message-left'>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center", marginBottom:"2rem"}}>

        <h3 style={{display:"inline-block"}}>Chats</h3>
        <div>

      <img src={dots}  onClick={handleBatch} height="20px" style={{marginRight:"7rem"}}/> 
            
      <span className='batch-action-rel' style={{"left":"-14rem"}}>
               
               <>
                 <ul className='batch-action' style={{width:"14rem"}} >
                   <div className='batch-action-square'>&nbsp;</div>
                   <li>
                    
                     <span> New Chat</span>
                   </li>
                   <li onClick={()=>setChatPopupOpen(true)}>
                     <span>New Group</span>
                   </li>
                   <li>
                     
                     <span>Starred Message</span>
                   </li>
              
                 </ul>
               </>
             </span>
        </div>
        </div>
        {chatPopupOpen &&(
          <ChatPopup setChatPopupOpen={setChatPopupOpen}></ChatPopup>
        )}

        <div className='message-search-box'>
          <SearchIcon />
          <input type='text' placeholder='Search here' />
        </div>
        <div className='message-left-btns'>
          <div className='btn btn-w btn-active'>Internal</div>
          <div className='btn btn-w btn-inactive'>External</div>
         
    
             
        </div>
        <div className='message-left-info-box'>
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
        </div>
      </div>
      <div className='message-right'>
        <div className='message-right-topbar'>hello</div>
        <div className='message-right-middle'>
          <div className='message-right-middle-overflow'>
            <ChatMessage />
            <ChatMessage own={true} />
            <ChatMessage />
            <ChatMessage />
          </div>
        </div>
        <div className='message-right-bottom'>hello</div>
      </div>
    </div>
  );
};

export default Message;
