import React from "react";
import "./ScheduleMeeting.scss";
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

import skype from "../../asserts/icons/skype.png";
import call from "../../asserts/icons/call.png";
import gmeet from "../../asserts/icons/gmeet.png";

import ChatMessage from "../ChatMessage/ChatMessage";

const ScheduleMeeting = ({ setMeetingPopupOpen, setSend }) => {
  return (
    <div className="meeting-popup-container">
      <div className="meeting-popup">
        <div className="meeting-popup-top">
          <div className="meeting-popup-title">Schedule Meeting</div>
          <img
            onClick={() => {
              setMeetingPopupOpen(false);
            }}
            src={Cross}
            alt="close icon"
          />
        </div>

        <>
          <div className="meeting-popup-body">
            <div className="createjob-adddoc-batch">
              {/* first row */}

              <div>
                <label htmlFor="date">Date:</label>
                <input
                  name="date"
                  //   value={candidateProfile.currentCompany}
                  //   onChange={handleEventChange}
                  id="date"
                  type="date"
                />
              </div>
              <div>
                <label htmlFor="time">Time:</label>
                <input
                  name="time"
                  //   value={candidateProfile.currentCtc}
                  //   onChange={handleEventChange}
                  id="time"
                  type="time"
                />
              </div>
              <div>
                <label htmlFor="meetingDuration">Meeting Duration:</label>
                <input
                  name="meetingDuration"
                  //   value={candidateProfile.expectedCtc}
                  //   onChange={handleEventChange}
                  id="meetingDuration"
                  type="text"
                />
              </div>
              {/* end of second row */}
            </div>
          </div>
            <div style={{ marginBottom: "1rem", marginLeft: "2rem", color: "#515151" }}>
              Interview Platform
            </div>
          <div style={{ marginLeft: "2rem" ,display:"flex",justifyContent:"space-between" }}>

            <div>
            <img src={call} height="40px" style={{ marginRight: "1rem" }}></img>
            <img
              src={skype}
              height="40px"
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
              ></img>
            <img
              src={gmeet}
              height="40px"
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
              ></img>
              </div>

              <div className="check-form" style={{ marginRight: "2rem",position:"relative", top:"1rem"}}>
              <input id="r-in-o" type="checkbox" />
              <label htmlFor="r-in-o"> Let me set up my account manually</label>
            </div>
          </div>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <div
                className="btn btn-w btn-cancel btn-active"
                style={{ minWidth: "0rem", display: "inline-block" }}
              >
                Cancel
              </div>
            </div>

            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <button
                className="btn btn-w btn-inactive reply"
                // onClick={()=>{setSend(true);setPopupOpen(false)} }
                style={{fontSize:"2rem" , position:"relative",top:"-0.8rem"}}
              >
            Schedule & Notify
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
