import React, { useState } from "react";
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
import { WithContext as ReactTags } from 'react-tag-input';
import { URL } from "../../config";
import axios from "axios";


const Popup = ({
  setPopupOpen,
  setSend,
  }) => {

const[tags ,setTags] = useState([
],)

const [body,setBody] = useState("")
const [subject,setSubject] = useState("")


    const KeyCodes = {
      comma: 188,
      enter: [10, 13],
    };

    const delimiters = [...KeyCodes.enter, KeyCodes.comma];



   const  handleDelete=(i)=> {
      
      setTags(
       tags.filter((tag, index) => index !== i),
      );
  }

  const handleAddition= (tag)=>{
      setTags([...tags,tag])
  }

  const handleSend=async()=>{
    const token = localStorage.getItem('token')

    
    const recipients =[]
    tags.map(tag=>{
      recipients.push(tag.text)
    })
    console.log(recipients,subject,body)
    try {
      const response = await axios({

    
        url: `${URL}/api/dash/bulkEmail`,
        method: "POST",
        data:{recipients,subject,body},
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.status === "success") {
        console.log("Success Update");
      }
      
    } catch (error) {
      console.log(error)
    }


  }




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
              <ReactTags tags={tags}
                   
                    handleDelete={(i)=>handleDelete(i)}
                    handleAddition={(tag)=>handleAddition(tag)}
                    delimiters={delimiters}
                    placeholder="Add new recipient"
                    />
            
                    
              </div>

              
              </div>

              <div className="input-container">
                <label>Subject</label>
                <div className="input-box">
                  <input type="text" 
                  placeholder="Subject"
                  value={subject}
                  onChange={e=>setSubject(e.target.value)} 
                  />
                </div>
              </div>

              <div className="input-container">
                <label>Mail Content</label>
                <div className="email-right-bottom">
                  <textarea
                    type="text"
                    placeholder="Start Typing Here.."
                    value={body}
                    onChange={e=>setBody(e.target.value)}
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
                    onClick={()=>{handleSend();setPopupOpen(false)} }>
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
