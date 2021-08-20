import React, { useState } from "react";

import CandidateProfile from "../../components/CandidateProfile/CandidateProfile";

import AllSubmissions from "./AllSubmissions";
import Joined from "./Joined";
import "./Submission.scss";

import InterviewScheduled from "./InterviewScheduled";


const Submissions = () => {
  const [candidateDetail, setCandidateDetail] = useState(false);
  const [clicked, setClicked] = useState("AllSubmissions");
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
              className={`btn btn-w btn-${clicked==="AllSubmissions"?"active":"inactive"}`}
              onClick={() => setClicked("AllSubmissions")}
              
            >
              All Submissions
            </button>
            <button className={`btn btn-w btn-${clicked==="MySubmissions"?"active":"inactive"}`}
              onClick={() => {setClicked("MySubmissions")}}
            >My Submissions</button>

            <button
              className={`btn btn-w btn-${clicked==="InterviewScheduled"?"active":"inactive"}`}
              onClick={() => {setClicked("InterviewScheduled")}}
            
            >
              Interview Scheduled
            </button>

            <button
              className={`btn btn-w btn-${clicked==="Joined"?"active":"inactive"}`}
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
