import React, { useState } from "react";
import "./Submission.scss";
import {
  CheckboxIcon,
  DownArrIcon,
  Filter2Icon,
  FilterIcon,
} from "../../asserts/icons";
import NewSubmissionCard from "../../components/NewSubmissionCard/NewSubmissionCard";
import CandidateProfile from "../../components/CandidateProfile/CandidateProfile";
import JobPost from "../../components/JobPost/JobPost";
import Tables from "../../components/Table/Tables";
import { Link } from "react-router-dom";


import Correct from "./../../asserts/images/correct.png";
import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import Cancel from "./../../asserts/images/cancel.png";
import Popup from "../../components/Bulk-Email-Popup/Popup";

const AllSubmissions = () => {
  const [candidateDetail, setCandidateDetail] = useState(false);
  const [clicked, setClicked] = useState("AllSubmissions");
  const [active, setActive] = useState("inactive");
  const [PopupOpen, setPopupOpen] = useState(false);

  const handleBatch = () => {
    const dropdown = document.querySelector(".batch-action");
    const batchArrow = document.querySelector(".batch-arrow");

    dropdown.classList.toggle("batch-visible");
    batchArrow.classList.toggle("batch-rotate");
  };

  if (candidateDetail) {
    return <CandidateProfile setCandidateDetail={setCandidateDetail} />;
  } else {
    return (

     <>
  <div className="listings-bar" style={{ margin: "2rem 0" }}>
            <div className="listings-bar-left">
              <button onClick={handleBatch} className="btn btn-white">
                <span className="batch-action-rel">
                  <span>Batch Actions</span>
                  <>
                    <ul className="batch-action">
                      <div className="batch-action-square">&nbsp;</div>
                      <li>
                        <img src={Correct} alt="Correct icon" />
                        <span>Appove</span>
                      </li>
                      <li>
                        <img src={Cancel} alt="Cancel icon" />
                        <span>Dissapprove</span>
                      </li>
                      <li>
                        <img src={Delete} alt="Delete icon" />
                        <span>Delete</span>
                      </li>{" "}
                      <span></span>
                      <li onClick={() => setPopupOpen(true)}>
                        <img src={Share} alt="Share icon" />
                        <span>Email</span>
                      </li>
                    </ul>
                  </>
                </span>
                {PopupOpen && <Popup setPopupOpen={setPopupOpen} />}
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
        
       
      
      
       <div className='job-listings-jobs'>
          <NewSubmissionCard  requirement={true}/>
          <NewSubmissionCard  requirement={true}/>
          <NewSubmissionCard  requirement={true}/>
          <NewSubmissionCard  requirement={true}/>
          <NewSubmissionCard  requirement={true}/>
        
    
        </div>
        </>
      
     
    );
  }
};

export default AllSubmissions;
