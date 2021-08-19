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


import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import Popup from "../../components/Bulk-Email-Popup/Popup";

import updateField from "./../../asserts/icons/updateField.png";
import publish from "./../../asserts/icons/publish.png";
import addToFolder from "./../../asserts/icons/addToFolder.png";
import addToPipeline from "./../../asserts/icons/addToPipeline.png";
import tagCandidate from "./../../asserts/icons/tagCandidate.png";


const AllSubmissions = () => {
  const [candidateDetail, setCandidateDetail] = useState(false);
  const [submissionDetail, setSubmissionDetail] = useState(false);
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
                        <img src={updateField} alt="Correct icon" />
                        <span>Update Field</span>
                      </li>
                      <li>
                        <img src={Delete} alt="Delete icon" />
                        <span>Delete</span>
                      </li>
                      <li>
                        <img src={publish} alt="Cancel icon" />
                        <span>Publish</span>
                      </li>
                      <li>
                        <img src={publish} alt="Cancel icon" />
                        <span>Publish in Career Portal</span>
                      </li>
                      <li>
                        <img src={addToFolder} alt="Delete icon" />
                        <span>Add to Folder</span>
                      </li>
                   
                      <li onClick={() => setPopupOpen(true)}>
                        <img src={Share} alt="Share icon" />
                        <span>Share</span>
                      </li>

                      <li>
                        <img src={addToPipeline} alt="Delete icon" />
                        <span>Add to Pipeline</span>
                      </li>
                      <li>
                        <img src={tagCandidate} alt="Delete icon" />
                        <span>Tag Candidate</span>
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
          <NewSubmissionCard  setSubmissionDetail={setSubmissionDetail}/>
          <NewSubmissionCard  setSubmissionDetail={setSubmissionDetail}/>
          <NewSubmissionCard  setSubmissionDetail={setSubmissionDetail}/>
          <NewSubmissionCard  setSubmissionDetail={setSubmissionDetail}/>
          <NewSubmissionCard  setSubmissionDetail={setSubmissionDetail}/>
        
    
        </div>
        </>
      
     
    );
  }
};

export default AllSubmissions;
