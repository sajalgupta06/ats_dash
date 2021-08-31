import React, { useState } from "react";
import { SearchIcon } from "../../asserts/icons";
import "./Message.scss";
import MessageBox from "./../../components/MessageBox/MessageBox";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import dots from '../../asserts/icons/dots.png'

import smile from '../../asserts/icons/smile.png'
import send from '../../asserts/icons/send.png'
import attach from '../../asserts/icons/attach.png'
import U from '../../asserts/icons/U.png'
import B from '../../asserts/icons/B.png'
import I from '../../asserts/icons/I.png'
import undo from '../../asserts/icons/undo.png'
import redo from '../../asserts/icons/redo.png'
import text from '../../asserts/icons/text.png'


import ChatPopup from "../../components/ChatPopup/ChatPopup";

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
        <div className='message-right-topbar'></div>
        <div className='message-right-middle'>
          <div className='message-right-middle-overflow'>
            <ChatMessage />
            <ChatMessage own={true} />
            <ChatMessage />
            <ChatMessage />
          </div>
        </div>  
         <div className="email-right-bottom">
         <div className="textbox">
          <input type="text" placeholder="Start Typing Here.."></input>

          </div>
          <div className="email-right-bottom-editorOption" >
            <div className="buttons1">
              <button className="btn btn-w btn-inactive reply"><img src={send}></img>Reply</button>
              <img src={smile} height="20px"></img>
              <img src={attach} height="20px"></img>
            </div>
            <div className="buttons2">
            <img src={undo} height="20px"></img>
            <img src={redo} height="20px"></img>
            <img src={text} height="20px"></img>
            <img src={B} height="17px"></img>
            <img src={I} height="17px"></img>
            <img src={U} height="17px"></img>
            
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Message;
