import React from "react";
import { SearchIcon } from "../../asserts/icons";
import "./Message.scss";
import MessageBox from "./../../components/MessageBox/MessageBox";
import ChatMessage from "../../components/ChatMessage/ChatMessage";

const Message = () => {
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
