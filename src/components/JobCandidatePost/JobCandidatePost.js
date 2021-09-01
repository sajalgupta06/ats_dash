import React from "react";
import { BreifcaseIcon, SchoolIcon } from "../../asserts/icons";
import "./JobCandidatePost.scss";

const JobCandidatePost = ({job,applicant}) => {
  const data = applicant[0]
  return (
    <div className='job-candidate-box'>
      <div className='job-candidate-name'>Priya Anand</div>
      <div className='job-candidate-role'>
         {data.headline}<span>Can Join in 3 Weeks</span>
      </div>
      <div className='job-candidate-user-info'>
        <span>{job.jobID}</span>
        <li>Soylent Corp</li>
        <li>INR 3,60,000</li>
        <li></li>
        <li>3.8 Years</li>
      </div>
      <div className='job-candidate-skills'>
      {data.skills.map(skill=>{
        return<div>{skill}</div>
      })}
     
      </div>
      <div className='job-candidate-ed'>
        <div className='job-candidate-ed-left'>
          <SchoolIcon />
          <div>{data.education}</div>
        </div>
        <div className='job-candidate-ed-right'>
          <BreifcaseIcon />
          <div>Worked as a {data.currentDesignation}</div>
        </div>
      </div>

      <div className='job-candidate-bottom'>
        Match %: <span>98%</span>
      </div>
    </div>
  );
};

export default JobCandidatePost;
