import React from "react";
import { BreifcaseIcon, SchoolIcon } from "../../asserts/icons";
import "./JobCandidatePost.scss";

const JobCandidatePost = () => {
  return (
    <div className='job-candidate-box'>
      <div className='job-candidate-name'>Priya Anand</div>
      <div className='job-candidate-role'>
        Automation Testing Analyst <span>Can Join in 3 Weeks</span>
      </div>
      <div className='job-candidate-user-info'>
        <span>#JC-00150</span>
        <li>Soylent Corp</li>
        <li>INR 3,60,000</li>
        <li>Gurugram</li>
        <li>3.8 Years</li>
      </div>
      <div className='job-candidate-skills'>
        <div>Java</div>
        <div>Automated Testing</div>
        <div>Regression Testing</div>
        <div>Python</div>
        <div>Maven</div>
      </div>
      <div className='job-candidate-ed'>
        <div className='job-candidate-ed-left'>
          <SchoolIcon />
          <div>University Of Melbourne (BCs)</div>
        </div>
        <div className='job-candidate-ed-right'>
          <BreifcaseIcon />
          <div>Worked as a Senior Analyst</div>
        </div>
      </div>

      <div className='job-candidate-bottom'>
        Match %: <span>98%</span>
      </div>
    </div>
  );
};

export default JobCandidatePost;
