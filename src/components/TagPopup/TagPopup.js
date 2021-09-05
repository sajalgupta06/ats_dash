import React from "react";
import "./TagPopup.scss";

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

const TagPopup = ({
    setTagPopup,
  setSend,
  batchTag ,
  candidateList
  }) => {
      console.log(batchTag)
      console.log(candidateList)
  return (
    <div className="email-popup-container">
      <div className="email-popup">
        <div className="email-popup-top">
          <div className="email-popup-title">Tag Candidate</div>
          <img
            onClick={() => {
                setTagPopup(false);
            }}
            src={Cross}
            alt="close icon"
          />
        </div>
        
      
        
          <>

            <div className="email-popup-body">
                <table  >
                    <tr>
                       <td> Candidate Name</td>
                       <td> Status</td>
                    </tr>
                {candidateList.map(can=>{
                    batchTag.map(tag=>{
                        if(tag===can._id){
<tr>
                        <td>{can.name}</td>
                        <td><button className="btn btn-w btn-active"></button></td>   
                    </tr>
                    
                        }
                    })
                })}
                    
                    </table>

                    </div>
            <div className="email-popup-bottom">
                <div>
                  <div style={{ minWidth: "0rem", display: "inline-block" }}>
                    <div
                      className="btn btn-w btn-cancel btn-active"
                      style={{ minWidth: "0rem", display: "inline-block" }}
                      onClick={()=>setTagPopup(false)}
                    >
                      Cancel
                    </div>
                  </div>

                  <div style={{ minWidth: "0rem", display: "inline-block" }}>
                    <button className="btn btn-w btn-inactive reply"
                    onClick={()=>{setSend(true);setTagPopup(false)} }>
                      Next
                    </button>
                  </div>
                </div>
              </div>
         
          </>
        
      </div>
    </div>
  );
};

export default TagPopup;
