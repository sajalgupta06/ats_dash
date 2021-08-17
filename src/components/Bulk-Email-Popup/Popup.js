import React from "react";
import "./Popup.scss";
import Cross from "./../../asserts/icons/close.svg";

const Popup = ({
  setPopupOpen,
  
  jobSuccess,
  addNewJob,
}) => {
  return (
    <div className='email-popup-container'>
      <div className='email-popup'>
        <div className='email-popup-top'>
          <div className='email-popup-title' >Bulk E-mail</div>
          <img
            onClick={() => {
              setPopupOpen(false);
            }}
            src={Cross}
            alt='close icon'
          />
        </div>
        {jobSuccess ? (
          <div className='job-success'>Job Added Successfully!</div>
        ) : (
          <>
            <div className='email-popup-body'>
            <div className="input-container">
              <label>Choose Requirement</label>
              <div className="input-box">
                <input type="email" />
              </div>
            </div>
        
            <div className="input-container">
              <label>To</label>
              <div className="input-box">
                <input type="email" />
              </div>
            </div>
            
            <div className="input-container">
              <label>Subject</label>
              <div className="input-box">
                <input type="email" />
              </div>
            </div>

            <div className="input-container">
              <label>Mail Content</label>
              <div className="input-box">
                <input type="email" />
              </div>
            </div>
              <div className='email-popup-bottom'>
              <div className="check-form">
              <input id="r-in-o" type="checkbox" />
              <label htmlFor="r-in-o"> Save this as new template</label>
            </div>
            <div>
            <div
              className="btn btn-w btn-active"
              style={{ minWidth: "0rem", display: "inline-block" }}
              
            >
              Cancel
            </div>
            <div
              className="btn btn-w btn-active"
              style={{ minWidth: "0rem", display: "inline-block" }}
              
            >
              Preview
            </div>
            <div
              className="btn btn-w btn-active"
              style={{ minWidth: "0rem", display: "inline-block" }}
              
            >
              Send
            </div>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
