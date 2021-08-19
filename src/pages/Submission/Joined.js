import React, { useState } from 'react'
import Tables from '../../components/Table/Tables'
import "./Submission.scss";
import "./Joined.scss";
import {
  CheckboxIcon,
  DownArrIcon,
  Filter2Icon,
  FilterIcon,
} from "../../asserts/icons";
import message from "./../../asserts/icons/message.png";
import email from "./../../asserts/icons/email.png";
import Popup from "../../components/Bulk-Email-Popup/Popup";
import BulkEmailPage from '../../components/Bulk-E-mail-Page/Bulk-E-mail';


export default function Joined() {


  const [candidateDetail, setCandidateDetail] = useState(false);
  const [clicked, setClicked] = useState("AllSubmissions");
  const [active, setActive] = useState("inactive");
  const [PopupOpen, setPopupOpen] = useState(false);
  const [send, setSend] = useState(false);

  const handleBatch = () => {
    const dropdown = document.querySelector(".batch-action");
    const batchArrow = document.querySelector(".batch-arrow");

    dropdown.classList.toggle("joined-batch-visible");
    batchArrow.classList.toggle("batch-rotate");
  };
    return (
        <div>
   
   <>
  
   {send===false &&(
     <>
      <div className="listings-bar" style={{ margin: "2rem 0" }}>
      <div className="listings-bar-left">
        <button onClick={handleBatch} className="btn btn-white">
          <span className="batch-action-rel">
            <span>Batch Actions</span>
            <>
              <ul className="batch-action" >
                <div className="batch-action-square">&nbsp;</div>
                <li>
                  <img src={message} alt="Correct icon" />
                  <span>Send Bulk Message </span>
                </li>
                <li  onClick={() => setPopupOpen(true)}>
                  <img src={email} alt="Cancel icon" />
                  <span>Send Bulk E-mail  </span>
                </li>
             
                <span></span>
              
              </ul>
            </>
          </span>
       
          <DownArrIcon className="batch-arrow" />
        </button>
        <div className="listings-bar-search">
          <input
            type="text"
            placeholder="Search Job Title, Job ID, Tags"
          />
        </div>
      </div>
      <div className="listings-bar-right">
        <div className="plus">
          <CheckboxIcon />
        </div>
        <div className="listings-bar-right-filter">
          <FilterIcon />
          <div>Newest</div>
          <DownArrIcon />
        </div>
      </div>
    </div>
    
            <Tables></Tables>
</>
   )}
   
   {send===true &&(
     <>
    {/* {setPopupOpen(false)} */}
     <BulkEmailPage setSend={setSend}></BulkEmailPage>
     </>
   )}
          {PopupOpen && <Popup setPopupOpen={setPopupOpen} setSend={setSend} />}
    
      
          </>
        </div>
    )
}
