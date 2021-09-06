import React, { useState } from 'react'
import "./Submission.scss";
import {
  CheckboxIcon,
  DownArrIcon,
  Filter2Icon,
  FilterIcon,
} from "../../asserts/icons";
import InterviewScheduledTable from '../../components/Table/InterviewScheduledTable/InterviewScheduledTable';
import message from "./../../asserts/icons/message.png";
import email from "./../../asserts/icons/email.png";
export default function InterviewScheduled({ view, setView }) {

  const [PopupOpen, setPopupOpen] = useState(false);



  const handleBatch = () => {
    const dropdown = document.querySelector(".batch-action");
    const batchArrow = document.querySelector(".batch-arrow");

    dropdown.classList.toggle("joined-batch-visible");
    batchArrow.classList.toggle("batch-rotate");
  };
    return (
        <div>
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
    
      <InterviewScheduledTable></InterviewScheduledTable>
        </div>
    )
}
