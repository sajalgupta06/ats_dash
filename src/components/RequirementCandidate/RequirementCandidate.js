import React, { useState } from "react";
import "./RequirementCandidate.scss";
import Dummy from "./../../asserts/images/placeholder.jpg";

const RequirementCandidate = ({
//   job,
  batch,
  requirement,
  setReqView,
  batchDelete,
  setBatchDelete,
  setRequirement,

}) => {
  const [inBatch, setInBatch] = useState(false);

  const checkJobListOrReq = () => {
    if (batch) {  
      setInBatch(!inBatch);
 
      const ind = batchDelete.indexOf(requirement._id);
      console.log(ind);
      if (ind !== -1) {
        let newBatch = batchDelete.filter((f) => f !== requirement._id);
       
        setBatchDelete(newBatch);
        // setBatchApprove(newBatch);
      } else {
        setBatchDelete((b) => [...b, requirement._id]);
        // setBatchApprove((b) => [...b, job._id]);
      }

    } else {
        setRequirement(requirement)
        setReqView("r2"); 

        
    
    }
  };

  return (
    <div
      onClick={checkJobListOrReq}
      className={`jobpost ${batch && inBatch && "batch-border"}`}>
      <div className='jobpost-heading'>
        <img className='jobpost-user-img' src={Dummy} alt='recruiter pic' />
        <div className='jobpost-user'>
          <div className='jobpost-user-name'>{requirement.clientContactname}</div>
          <div className='jobpost-user-role'>{requirement.title}
          {/* {job.active===0 && 
          
          <p style={{
            display: "inline-block",
            background: "#0ee84b",
            width: "4rem",
            borderRadius: "2rem",
            textAlign: "center",
            color: "white",
            fontSize: "1.5rem"


          }}>Live</p>
          
          } */}
          </div>
        </div>
      </div>
      <div className='jobpost-user-info'>
        <span>{requirement.jobId} </span>
        <li> Positions </li>
        <li> Rs {requirement.clientCtcFrom}-Rs {requirement.clientCtcTo} </li>
        <li>{requirement.workExperienceFrom}-{requirement.workExperienceTo } Years</li>
      </div>
      <div className='jobpost-desc'>
     {requirement.jonDesc}
      </div>

      {/* job post bottom one */}
  
      {/* end of job post bottom one */}

      {/* start of job post bottom two */}
      
        <div className='requirement-btns'>
          <div className='requirement-btns-one'>
            <div className='btn btn-purple'>160 Matching</div>
            <div className='btn btn-sapire'>150 Under Review</div>
            <div className='btn btn-yellow'>20 Client Submitted</div>
            <div className='btn btn-cool'>0 Joined</div>
          </div>
          <div className='requirement-btns-two'>
            <div className='btn btn-rose'>20 Rejected</div>
            <div className='btn btn-rose'>3 dropped</div>
          </div>
        </div>
      
      {/* {requirement && (
        <div className='requirement-btns'>
          <div className='requirement-btns-one'>
            <div className='btn btn-purple'>160 Matching</div>
            <div className='btn btn-sapire'>150 Under Review</div>
            <div className='btn btn-yellow'>20 Client Submitted</div>
          </div>
          <div className='requirement-btns-two'>
            <div className='btn btn-cool'>0 Joined</div>
            <div className='btn btn-rose'>20 Rejected</div>
            <div className='btn btn-rose'>3 dropped</div>
          </div>
        </div>
      )} */}
      {/* end of job post bottom two */}
    </div>
  );
};

export default RequirementCandidate;
