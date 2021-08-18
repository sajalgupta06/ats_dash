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
import AllSubmissions from "./AllSubmissions";
import Joined from "./Joined";
import InterviewScheduled from "./InterviewScheduled";
import Correct from "./../../asserts/images/correct.png";
import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import Cancel from "./../../asserts/images/cancel.png";
import Popup from "../../components/Bulk-Email-Popup/Popup";

const Submissions = () => {
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
      <div className="submissions-container">
        {/* submissions-left */}

        <div className="header">
          <div className="tob-btns">
            <button
              className={`btn btn-w btn-inactive`}
              onClick={() => setClicked("AllSubmissions")}
            >
              All Submissions
            </button>
            <button className="btn btn-w btn-inactive">My Submissions</button>

            <button
              className='btn btn-w btn-inactive'
              onClick={() => {setClicked("InterviewScheduled")}}
            
            >
              Interview Scheduled
            </button>

            <button
              className={`btn btn-w btn-${active}`}
              onClick={() => setClicked("Joined")}
            >
              Joined
            </button>
          </div>
        
        {clicked === "AllSubmissions" && (
          <>
            <AllSubmissions></AllSubmissions>
          </>
        )}
        {clicked === "MySubmissions" && (
          <>
            <AllSubmissions></AllSubmissions>
          </>
        )}
        {clicked === "Joined" && (
          <>
            <Joined></Joined>
          </>
        )}
        {clicked === "InterviewScheduled" && (
          <>
            <InterviewScheduled></InterviewScheduled>
          </>
        )}
      </div>
      </div>
    );
  }
};

export default Submissions;
