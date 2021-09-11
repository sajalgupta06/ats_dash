import React, { useState } from "react";

import Performance from './Performance/Performance'
import JobPosting from './JobPosting/JobPosting'
import Usage from './Usage/Usage'
import UserLogin from './UserLogin/UserLogin'
import Attendence from "./Attendence/Attendence"
import Leave from "./Leave/Leave"


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

        <button
          className={`btn btn-w btn-${
            navClicked === "UserLogin" ? "active" : "inactive"
        }`}
        onClick={() => setNavClicked("UserLogin")}
        >
          UserLogin
        </button>

        <button
          className={`btn btn-w btn-${
            navClicked === "Attendence" ? "active" : "inactive"
        }`}
        onClick={() => setNavClicked("Attendence")}
        >
          Attendence
        </button>
        <button
          className={`btn btn-w btn-${
            navClicked === "Leave" ? "active" : "inactive"
        }`}
        onClick={() => setNavClicked("Leave")}
        >
         Leave
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
   
{navClicked === "UserLogin" && (
     
     <UserLogin></UserLogin>
   )}

{navClicked === "Attendence" && (
     
     <Attendence></Attendence>
   )}


{navClicked === "Leave" && (
     
     <Leave></Leave>
   )}


    </div>
  );
}
