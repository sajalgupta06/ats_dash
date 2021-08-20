import React from "react";
import "./ChatScreen.scss";
import Cross from "./../../asserts/icons/close.svg";

import smile from "../../asserts/icons/smile.png";
import send from "../../asserts/icons/send.png";
import attach from "../../asserts/icons/attach.png";
import U from "../../asserts/icons/U.png";
import B from "../../asserts/icons/B.png";
import I from "../../asserts/icons/I.png";
import undo from "../../asserts/icons/undo.png";
import redo from "../../asserts/icons/redo.png";
import text from "../../asserts/icons/text.png";
import ChatMessage from "../ChatMessage/ChatMessage";

const ChatScreen = ({
  setPopupOpen,
  setSend,
  }) => {
  return (
    <div className="chatScreen-popup-container">
      <div className="chatScreen-popup">
        <div className="chatScreen-popup-top">
          <div className="chatScreen-popup-title">Priya Anand</div>
          <img
            onClick={() => {
              setPopupOpen(false);
            }}
            src={Cross}
            alt="close icon"
          />
        </div>
        
      
        
          <>
            <div className="chatScreen-popup-body">
           <ChatMessage></ChatMessage>

           <ChatMessage own={true}></ChatMessage>

           <div className="email-right-bottom">
           <div className="textbox">
          <input type="text" placeholder="Start Typing Here.."></input>

          </div>          <div className="email-right-bottom-editorOption" >
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
          </>
        
      </div>
    </div>
  );
};

export default ChatScreen;
