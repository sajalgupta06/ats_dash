import React from "react";
import { BreifcaseIcon, SchoolIcon } from "../../asserts/icons";
import "./JobCandidatePost.scss";

const   JobCandidatePost = ({job,applicant}) => {
  const data = applicant[0]
  console.log(data)
  return (
    <div className='job-candidate-box'>
      <div className='job-candidate-name'>{data.name}</div>
      <div className='job-candidate-role'>
         {data.headline}<span>Can Join in 3 Weeks</span>
      </div>
      <div className='job-candidate-user-info'>
        <span>{job.jobId}</span>
        <li>{data.workExperience[0].companyName  }</li>
        <li>INR {data.salary}</li>
        <li></li>
        <li>{data.experience} Years</li>
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
