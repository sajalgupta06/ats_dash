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

const Submissions = () => {
  const [candidateDetail, setCandidateDetail] = useState(false);
  const [clicked, setClicked] = useState("AllSubmissions");
  const [active, setActive] = useState("inactive");

  const handleDropdown = (cs) => {
    const dropdown = document.querySelector(`.${cs}`);
    dropdown.classList.toggle("form-visible");
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
              className={`btn btn-w btn-active`}
              onClick={() => setClicked("AllSubmissions")}
            >
              All Submissions
            </button>
            <button className="btn btn-w btn-inactive">My Submissions</button>

            <button
              className={`btn btn-w btn-${active}`}
              onClick={() => setClicked("InterviewScheduled")}
              clicked={true}
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
          <div className="listings-bar" style={{ margin: "2rem 0" }}>
            <div className="listings-bar-left">
              <button className="btn btn-white">
                <span className="batch-action-rel">
                  <span>Batch Actions</span>
                  {/* <>
                  <ul className='batch-action'>
                    <div className='batch-action-square'>&nbsp;</div>
                    <li>
                      <img src={Correct} alt='Correct icon' />
                      <span>Appove</span>
                    </li>
                    <li>
                      <img src={Cancel} alt='Cancel icon' />
                      <span>Dissapprove</span>
                    </li>
                    <li>
                      <img src={Delete} alt='Delete icon' />
                      <span>Delete</span>
                    </li>
                    <li>
                      <img src={Share} alt='Share icon' />
                      <span>Share</span>
                    </li>
                  </ul>
                </> */}
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
    );
  }
};

export default Submissions;
