import React, { useState } from "react";

import Performance from './Performance/Performance'
import JobPosting from './JobPosting/JobPosting'
import Usage from './Usage/Usage'



export default function Reports() {
    const [navClicked, setNavClicked] = useState("Performance");

  return (
    <div>

<div className="tob-btns">
        <button
          className={`btn btn-w btn-${
            navClicked === "Performance" ? "active" : "inactive"
        }`}
        onClick={() => setNavClicked("Performance")}
        >
          Performance
        </button>



        <button
          className={`btn btn-w btn-${
            navClicked === "JobPosting" ? "active" : "inactive"
        }`}
        onClick={() => setNavClicked("JobPosting")}
        >
          Job Posting
        </button>



        <button
          className={`btn btn-w btn-${
            navClicked === "Usage" ? "active" : "inactive"
        }`}
        onClick={() => setNavClicked("Usage")}
        >
          Usage
        </button>





      </div>





      {navClicked === "Performance" && (
     
        <Performance></Performance>
      )}


{navClicked === "JobPosting" && (
     
    <JobPosting></JobPosting>
   )}



{navClicked === "Usage" && (
     
     <Usage></Usage>
   )}




    </div>
  );
}
