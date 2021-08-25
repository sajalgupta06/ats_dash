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

const NewCandidate = ({ 
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

      setCandidateDetail(false)
  
    }
  };


  return (
    <div onClick={checkJobListOrReq} className={`newcad mb5 ${batch && inBatch && "batch-border"}`}>
      <div className='newcad-top'>
        
        <div className='newcad-top-left'>
          <div className='newcad-top-name'>P A</div>
          <div className='newcad-top-active'>Active</div>
          <div className='newcad-top-cs'>Client Submitted</div>
        </div>
        <div className='newcad-top-right'>
          <div className='newcad-top-lock'>
            <LockIcon />
            <div>Unlock Profile</div>
          </div>
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
          <li>{candidate.jobs.length} Positions </li>
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

      {/* new candidate bottom */}
      <div className='newcad-bottom'>
        <div className='newcad-bottom-left'>
          <div className='mr1'>Applied for: </div>
          {/* <div className='newcad-bottom-lock'>
            <div>Senior Analyst</div>
              </div> */}
              {/* <DownArrIcon /> */}
            <div>
                <select
                  // onChange={handleEventChange}
                  // value={candidateProfile.maritalStatus}
                  name="maritalStatus"
                  className="select-d"
                  id="maritalStatus"
                  style={{width:"15rem",background:"#fff",border:"1px solid black",borderRadius:"1.3rem",marginRight:"1rem"}}
                >
                  {/* <option selected disabled hidden></option> */}
               {candidate.jobs.map(job=>{
                 return <option value="Single">{job.title}</option>
               })}
               
                </select>
              </div>
          <div className='newcad-bottom-txt'>
            Last active on 14th July 2021, 11 am • Last Modified on 5th March
            2021
          </div>
        </div>
        <div className='newcad-bottom-right'>
          <TagIcon />
          <LinkedinIcon />
        </div>
      </div>
      {/* end of  new candidate bottom */}
    </div>
  );
};

export default NewCandidate;
