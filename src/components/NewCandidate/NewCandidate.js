import React, { useState } from "react";
import {
  BreifcaseIcon,
  DownArrIcon,
  LinkedinIcon,
  LockIcon,
  SchoolIcon,
  TagIcon,
} from "../../asserts/icons";
import "./NewCandidate.scss";
import Placeholder from "./../../asserts/images/placeholder.jpg";
import Moment from "react-moment";
const   NewCandidate = ({ 
  setIsCandidateDetail,
  setCandidateDetail,
  batch,
  batchDelete,
  setBatchDelete,
  candidate

}) => {
  const [inBatch, setInBatch] = useState(false);
  

  

  const checkJobListOrReq = () => {
    if (batch) {
      console.log("Batch In")
      setInBatch(!inBatch);

      const ind = batchDelete.indexOf(candidate._id);
      console.log(ind);
      if (ind !== -1) {
        let newBatch = batchDelete.filter((f) => f !== candidate._id);
        setBatchDelete(newBatch);
      } else {
        setBatchDelete((b) => [...b, candidate._id]);
      }
    } 
     else {
      setCandidateDetail(candidate)
      setIsCandidateDetail(true)
  
    }
  };


  return (
    <div  className={`newcan mb5 ${batch && inBatch && "batch-border"}`}>
      <div className="newcad" onClick={checkJobListOrReq}>

      <div className='newcad-top'>
        
        <div className='newcad-top-left'>
          <div className='newcad-top-name'>
          {candidate.locked?
            `${candidate.name.split(' ')[0][0]} ${candidate.name.split(' ')[1][0]}`
            : candidate.name}
            </div>
          <div className='newcad-top-active'>Active</div>
          {candidate.requirements.map(req=>{
              return req.applicants.map(applicant=>{
                if(applicant.id===candidate._id && applicant.stage==="submitted"){

                  return <div className='newcad-top-cs'>Client Submitted</div>
                }
              })
          })}
        </div>
        <div className='newcad-top-right'>
        {candidate.locked && 
          <div className='newcad-top-lock' >
            <LockIcon />
            <div>Unlock Profile</div>
          </div>
          }
          <img src={Placeholder} alt='placeholder' />
        </div>
      </div>
  
      <div className='newcad-role'>{candidate.headline}</div>
      <div className='newcad-desc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel purus erat. Pellentesque sit amet molestie justo.
      </div>
      <div className='newcad-infski'>
        <div className='jobpost-user-info'>
          <span>#JT-673453</span>
          <li>{candidate.jobs.length+ candidate.requirements.length} Positions </li>
          <li>$14,000 - $25,000</li>
          <li>{candidate.prefferedLocation}</li>
        </div>
        <div className='job-candidate-skills' style={{justifyContent:"unset"}}>
          {candidate.skills.map(skill=>{
            return(
              <>

              <div style={{marginLeft:"1rem",marginRight:"0.5rem"}}>{skill}</div>
         

            
              
              </>) 
              

          })}
          
       
      </div>
</div>
      <div className='job-candidate-ed mb2 ed-ex'>
        <div className='job-candidate-ed-left mr3'>
          <SchoolIcon />
          <div>{candidate.education}</div>
        </div>
        <div className='job-candidate-ed-right'>
          <BreifcaseIcon />
          <div>Worked as a {candidate.currentDesignation}</div>
        </div>
      </div>
</div>
      {/* new candidate bottom */}
      <div className='newcan-bottom'>
        <div className='newcan-bottom-left'>
          <div className='mr1'>Applied for: </div>
     
            <div>
                <select
                 
                  name="maritalStatus"
                  className="select-d"
                  id="maritalStatus"
                  style={{width:"18rem",background:"#fff",border:"1px solid black",borderRadius:"1.3rem",marginRight:"1rem"}}
                >
                  {/* <option selected disabled hidden></option> */}
               {candidate.jobs.map(job=>{
                 return <option value="Single">{job.title}</option>
               })}

          {candidate.requirements.map(req=>{
                 return <option value="Single">{req.title}</option>
               })}
               
                </select>
              </div>
          <div className='newcan-bottom-txt'  onClick={checkJobListOrReq}>
            Last active on  <Moment date={candidate.lastLogin}></Moment>
          </div>
        </div>
        <div className='newcan-bottom-right'  onClick={checkJobListOrReq}>
          <TagIcon />
          {candidate.locked &&(

            <LockIcon style={{height:"2.5rem",width:"3rem"}}></LockIcon>
          )}
          
        
        </div>
      </div>
      {/* end of  new candidate bottom */}
    </div>
  );
};

export default NewCandidate;
