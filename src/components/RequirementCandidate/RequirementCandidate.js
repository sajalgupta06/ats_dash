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

  let totlCan=requirement.applicants.length;
  let totlUr=0;
  let totlSub=0;
  let totlJoi=0;
  let totlRej=0;
  let totlDro=0;
  let options = ["underReview","underReview1","underReview2","underReview3","underReview4","underReview5"]


  requirement.applicants.map(applicant=>{
    if(applicant.stage==="submitted"){
      totlSub++;
    }
    else if(applicant.stage==="joined"){
      totlJoi++;
    }
    else if(applicant.stage==="dropped"){
      totlDro++;
    }
    else if(applicant.stage==="rejected"){
      totlRej++;
    }else if(options.includes(applicant.stage)){
      totlUr++;
    }
  })





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
        <li> Rs {requirement.clientCtcFrom}-{requirement.clientCtcTo} </li>
        <li>{requirement.workExperienceFrom}-{requirement.workExperienceTo } Years</li>
      </div>
      <div className='jobpost-desc'>
     {requirement.jobDesc}
      </div>

      {/* job post bottom one */}
  
      {/* end of job post bottom one */}

      {/* start of job post bottom two */}
      
        <div className='requirement-btns'>
          <div className='requirement-btns-one'>
            <div className='btn btn-purple'>0 Matching</div>
            <div className='btn btn-sapire'>{totlUr} Under Review</div>
            <div className='btn btn-yellow'>{totlSub} Client Submitted</div>
            <div className='btn btn-cool'>{totlJoi} Joined</div>
          </div>
          <div className='requirement-btns-two'>
            <div className='btn btn-rose'>{totlRej} Rejected</div>
            <div className='btn btn-rose'>{totlDro} dropped</div>
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
