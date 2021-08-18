import React, { useState } from "react";
import { SearchIcon } from "../../asserts/icons";
import "./Bulk-E-mail.scss";
import MessageBox from "./../../components/MessageBox/MessageBox";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import backButton from "../../asserts/icons/back-button.png";
import dots from "../../asserts/icons/dots.png";
import smile from "../../asserts/icons/white-smile.png";
import sendButton from "../../asserts/icons/send-button.png";
import BulkEmailChat from "../BulkEmailChat/BulkEmailChat";

const BulkEmailPage = ({setSend}) => {

  const [chatPopupOpen, setChatPopupOpen] = useState(false);
  return (
    <div className="bulkEmail-container">
      <div className="bulkEmail-left">
        <img src={backButton} style={{ marginTop: "0rem" ,cursor:"pointer" }} onClick={()=>setSend(false)}></img>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h3
            style={{ display: "inline-block" }}
            style={{ fontSize: "2.7rem" }}
          >
            Previous Messages
          </h3>
          <div></div>
        </div>

        <div className="bulkEmail-left-info-box">
          <MessageBox />
          <MessageBox />
        </div>
      </div>
      <div></div>
      <div className="bulkEmail-right" style={{ marginRight: "3rem" }}>
        <div className="bulkEmail-right-topbar">
          <div className="content">
            <h1 style={{ fontSize: "3rem" }}> ATS </h1>
            <p style={{ fontSize: "2rem" }}>Bulk Message</p>
          </div>
          <img src={dots} height="25px"></img>
        </div>
        <div className="bulkEmail-right-spacer"></div>
        <div className="bulkEmail-right-middle">
          <p style={{ textAlign: "center", marginTop: "1rem" }}>Today</p>
          <div className="bulkEmail-right-middle-overflow">
            <BulkEmailChat></BulkEmailChat>
            <BulkEmailChat></BulkEmailChat>
          </div>
        </div>
        <div className="bulkEmail-right-bottom">
      
          <div
            className="navbar-search-box"
            style={{
              marginRight: "5rem",
              marginLeft: "5rem",
              height: "4rem",
              background: "#fff",
              border: "1px solid #878787",
              width: "90%",
            }}
          >
            <input type="text" placeholder="Type a message here " />
            <img src={smile}></img>
          </div>
          <div>
            <img src={sendButton}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkEmailPage;
