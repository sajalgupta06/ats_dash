import React, { useState } from "react";
import {
  BreifcaseIcon,
  DownArrIcon,
  LinkedinIcon,
  LockIcon,
  SchoolIcon,
  TagIcon,
} from "../../asserts/icons";
import "./NewSubmissionCard.scss";
import Placeholder from "./../../asserts/images/placeholder.jpg";

const NewSubmissionCard = ({ 
  setSubmissionDetail,
  batch,
  batchDelete,
  setBatchDelete,
  candidateDetail,
  job,
}) => {

  const [inBatch, setInBatch] = useState(false);

  const checkJobListOrReq = () => {
    if (batch) {
      console.log("Batch In")
      setInBatch(!inBatch);

      // const ind = batchDelete.indexOf(candidate._id);
      // console.log(ind);
      // if (ind !== -1) {
      //   let newBatch = batchDelete.filter((f) => f !== candidate._id);
      //   setBatchDelete(newBatch);
      // } else {
      //   setBatchDelete((b) => [...b, candidate._id]);
      // }
    } 
     else {
      
      // setSubmissionDetail(true)
  
    }
  };



  return (
    <div onClick={checkJobListOrReq} className={`newcan mb5 ${batch && inBatch && "batch-border"}`}>
      <div className='newSub-top'>
          {console.log(candidateDetail)}
        <div className='newSub-top-left'>
          <div className='newSub-top-name'> {candidateDetail.locked?
            `${candidateDetail.name.split(' ')[0][0]} ${candidateDetail.name.split(' ')[1][0]}`
            : candidateDetail.name}&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"400",fontSize:"1.4rem"}}>
          #APL-003  </span> </div>
        
        </div>
        <div className='newSub-top-right'>
         
          <img src={Placeholder} alt='placeholder' />
        </div>
      </div>
      <div className='newSub-role'>{candidateDetail.headline} &nbsp; &nbsp;</div>
       <div className='newSub-top-active'>Can join in 3 weeks</div>
       <div className='newSub-role'>&nbsp;&nbsp;- {job.title}</div>
     
      <div className='newSub-infski'>
        <div className='jobpost-user-info'>
          <span>#JT-673453</span>
          <li>Soylent Corp </li>
          <li>INR 3,60,000</li>
          <li>Delhi, India</li>
          <li>3.8Years</li>
        </div>
        <div className='job-candidate-skills'>
        {candidateDetail.skills.map(skill=>{
        return<div>{skill}</div>
      })}
        </div>
      </div>

      <div className='job-candidate-ed mb2 ed-ex'>
        <div className='job-candidate-ed-left mr3'>
          <SchoolIcon />
          <div>{candidateDetail.education}</div>
        </div>
        <div className='job-candidate-ed-right'>
          <BreifcaseIcon />
          <div>Worked as a {candidateDetail.currentDesignation}</div>
        </div>
      </div>

      {/* new candidate bottom */}
      <div className='newSub-bottom'>
        <div className='newSub-bottom-left'>
          <div className='mr1'>Applying for: </div>
          <div className='newSub-bottom-lock'>
            
            <div>{job.title}</div>
          
          </div>
          <div className='mr1'>Status </div>
          <div className='newSub-bottom-lock'>
            <div>Client Submitted</div>
           
          </div>
        </div>
        <div className='newSub-bottom-right'>
          {candidateDetail.linkedinProfile && 

            <a href={`${candidateDetail.linkedinProfile}`}  target="_blank">

          <LinkedinIcon />
     </a>
    }
        </div>
      </div>
      {/* end of  new candidate bottom */}
    </div>
  );
};

export default NewSubmissionCard;
