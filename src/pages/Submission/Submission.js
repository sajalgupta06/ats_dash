import React, { useState } from "react";

import CandidateProfile from "../../components/CandidateProfile/CandidateProfile";

import AllSubmissions from "./AllSubmissions";
import Joined from "./Joined";
import "./Submission.scss";

import InterviewScheduled from "./InterviewScheduled";


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
              clicked
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
