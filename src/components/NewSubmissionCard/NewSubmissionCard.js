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
      
      setSubmissionDetail(true)
  
    }
  };



  return (
    <div onClick={checkJobListOrReq} className={`newcad mb5 ${batch && inBatch && "batch-border"}`}>
      <div className='newSub-top'>
        <div className='newSub-top-left'>
          <div className='newSub-top-name'>Priya Agrawal &nbsp;<span style={{fontWeight:"400",fontSize:"1.4rem"}}>
          #APL-003  </span> </div>
        
        </div>
        <div className='newSub-top-right'>
         
          <img src={Placeholder} alt='placeholder' />
        </div>
      </div>
      <div className='newSub-role'>Automation Testing Analyst &nbsp; &nbsp;</div>
       <div className='newSub-top-active'>Can join in 3 weeks</div>
       <div className='newSub-role'>&nbsp;&nbsp;- MindTree</div>
     
      <div className='newSub-infski'>
        <div className='jobpost-user-info'>
          <span>#JT-673453</span>
          <li>Soylent Corp </li>
          <li>INR 3,60,000</li>
          <li>Delhi, India</li>
          <li>3.8Years</li>
        </div>
        <div className='job-candidate-skills'>
          <div>Java</div>
          <div>Automated Testing</div>
          <div>Regression Testing</div>
          <div>Python</div>
          <div>Maven</div>
        </div>
      </div>

      <div className='job-candidate-ed mb2 ed-ex'>
        <div className='job-candidate-ed-left mr3'>
          <SchoolIcon />
          <div>University Of Melbourne (BCs)</div>
        </div>
        <div className='job-candidate-ed-right'>
          <BreifcaseIcon />
          <div>Worked as a Senior Analyst</div>
        </div>
      </div>

      {/* new candidate bottom */}
      <div className='newSub-bottom'>
        <div className='newSub-bottom-left'>
          <div className='mr1'>Applying for: </div>
          <div className='newSub-bottom-lock'>
            <div>Senior Analyst</div>
          
          </div>
          <div className='mr1'>Status </div>
          <div className='newSub-bottom-lock'>
            <div>Client Submitted</div>
            <DownArrIcon />
          </div>
        </div>
        <div className='newSub-bottom-right'>
     
          <LinkedinIcon />
        </div>
      </div>
      {/* end of  new candidate bottom */}
    </div>
  );
};

export default NewSubmissionCard;
