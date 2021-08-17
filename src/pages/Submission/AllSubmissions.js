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

const AllSubmissions = () => {
  const [candidateDetail, setCandidateDetail] = useState(false);

  const handleDropdown = (cs) => {
    const dropdown = document.querySelector(`.${cs}`);
    dropdown.classList.toggle("form-visible");
  };

  if (candidateDetail) {
    return <CandidateProfile setCandidateDetail={setCandidateDetail} />;
  } else {
    return (

     

      
      
       <div className='job-listings-jobs'>
          <NewSubmissionCard  requirement={true}/>
          <NewSubmissionCard  requirement={true}/>
          <NewSubmissionCard  requirement={true}/>
          <NewSubmissionCard  requirement={true}/>
          <NewSubmissionCard  requirement={true}/>
        
    
        </div>
      
     
    );
  }
};

export default AllSubmissions;
