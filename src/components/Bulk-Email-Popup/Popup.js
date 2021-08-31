import React from "react";
import "./Popup.scss";
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

const Popup = ({
  setPopupOpen,
  setSend,
  }) => {
  return (
    <div className="email-popup-container">
      <div className="email-popup">
        <div className="email-popup-top">
          <div className="email-popup-title">Bulk E-mail</div>
          <img
            onClick={() => {
              setPopupOpen(false);
            }}
            src={Cross}
            alt="close icon"
          />
        </div>
        
      
        
          <>
            <div className="email-popup-body">
              <div className="input-container">
                <label>Choose Requirement</label>
                <div className="input-box">
                  <input type="text" />
                </div>
              </div>

              <div className="input-container">
                <label>To</label>
              <div className="input-box">
                <input type="text" 
                 
                >
                </input>
                    
              </div>

              
              </div>

              <div className="input-container">
                <label>Subject</label>
                <div className="input-box">
                  <input type="text" />
                </div>
              </div>

              <div className="input-container">
                <label>Mail Content</label>
                <div className="email-right-bottom">
                  <textarea
                    type="text"
                    placeholder="Start Typing Here.."
                  ></textarea>
                  <div className="email-right-bottom-editorOption">
                    {/* <div className="buttons1">
              <button className="btn btn-w btn-inactive reply"><img src={send}></img>Reply</button>
              <img src={smile} height="20px"></img>
              <img src={attach} height="20px"></img>
            </div> */}
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
              <div className="email-popup-bottom">
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o" style={{ fontSize: "1.6rem" }}>
                    {" "}
                    Save this as new template
                  </label>
                </div>
                <div>
                  <div style={{ minWidth: "0rem", display: "inline-block" }}>
                    <div
                      className="btn btn-w btn-cancel btn-active"
                      style={{ minWidth: "0rem", display: "inline-block" }}
                    >
                      Cancel
                    </div>
                  </div>

                  <div style={{ minWidth: "0rem", display: "inline-block" }}>
                    <button className="btn btn-w btn-inactive reply"
                    onClick={()=>{setSend(true);setPopupOpen(false)} }>
                      <img src={send}></img>Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        
      </div>
    </div>
  );
};

export default Popup;
