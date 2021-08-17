import React from "react";
import { SearchIcon } from "../../asserts/icons";
import "./Message.scss";
import MessageBox from "./../../components/MessageBox/MessageBox";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import dots from '../../asserts/icons/dots.png'

import Correct from "./../../asserts/images/correct.png";
import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import Cancel from "./../../asserts/images/cancel.png";

const Message = () => {
  const handleBatch = () => {
    const dropdown = document.querySelector(".batch-action");

    dropdown.classList.toggle("batch-visible");
  };
  return (
    <div className='message-container'>
      <div className='message-left'>
        <div className='message-search-box'>
          <SearchIcon />
          <input type='text' placeholder='Search here' />
        </div>
        <div className='message-left-btns'>
          <div className='btn btn-w btn-active'>Internal</div>
          <div className='btn btn-w btn-inactive'>External</div>
          <img src={dots}  onClick={handleBatch} height="30px" style={{marginLeft:"16rem"}}/> 
         
          
          <span className='batch-action-rel'>
               
                <>
                  <ul className='batch-action' style={{"left":"-9rem","top":"5.8rem"}}>
                    <div className='batch-action-square'>&nbsp;</div>
                    <li>
                     
                      <span>Create a new group</span>
                    </li>
                    <li>
                      
                      <span>Dissapprove</span>
                    </li>
           
               
                  </ul>
                </>
              </span>
             
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
