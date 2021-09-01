import React, { useState } from "react";
import "./JobPost.scss";

import Dummy from "./../../asserts/images/placeholder.jpg";
import { EditIcon, PeopleIcon, ShareIcon } from "../../asserts/icons";
import Candidates from "../../pages/Candidates/Candidates";

const JobPost = ({
  job,
  batch,
  requirement,
  setJobListView,
  setReqView,
  batchDelete,
  setBatchDelete,
  setJob,
  setBatchApprove,
  batchApprove
}) => {
  const [inBatch, setInBatch] = useState(false);

  const checkJobListOrReq = () => {
    if (batch) {  
      setInBatch(!inBatch);
 
      const ind = batchDelete.indexOf(job._id);
      console.log(ind);
      if (ind !== -1) {
        let newBatch = batchDelete.filter((f) => f !== job._id);
       
        setBatchDelete(newBatch);
        // setBatchApprove(newBatch);
      } else {
        setBatchDelete((b) => [...b, job._id]);
        // setBatchApprove((b) => [...b, job._id]);
      }

    } else if (requirement) {
      setReqView("r2"); 
    } else {
      // const temp1 = job.salary.split(",");
      // job.salary1 = temp1[0];
      // job.salary2 = temp1[1];
      // const temp2 = job.workExperience.split(",");
      // job.workExperience1 = temp2[0];
      // job.workExperience2 = temp2[1];
      // let newj = {
      //   ...job,
      //   salary1: temp1[0],
      //   salary2: temp1[1],
      //   workExperience1: temp2[0],
      //   workExperience2: temp2[1],
      // };
      // console.log("job", newj);
      setJob(job);
      setJobListView(3);
    }
  };

  return (
    <div
      onClick={checkJobListOrReq}
      className={`jobpost ${batch && inBatch && "batch-border"}`}>
      <div className='jobpost-heading'>
        <img className='jobpost-user-img' src={Dummy} alt='recruiter pic' />
        <div className='jobpost-user'>
          <div className='jobpost-user-name'>{job.clientName}</div>
          <div className='jobpost-user-role'>{job.title} &nbsp;
          {job.active===0 && 
          
          <p style={{
            display: "inline-block",
            background: "#0ee84b",
            width: "4rem",
            borderRadius: "2rem",
            textAlign: "center",
            color: "white",
            fontSize: "1.5rem"


          }}>Live</p>
          
          }
          </div>
        </div>
      </div>
      <div className='jobpost-user-info'>
        <span>{job.jobID}</span>
        <li>{job.nofPos} Positions </li>
        <li> Rs.{job.salaryFrom}- Rs.{job.salaryTo}</li>
        <li>{job.preferredLocation}</li>
      </div>
      <div className='jobpost-desc'>
       {job.jobDesc }
      </div>

      {/* job post bottom one */}
      {!requirement && (
        <div className='jobpost-bottom'>
          <div className='japp'>
            <PeopleIcon />
            <div>{job.applicants.length} Applicants</div>
          </div>
          <div className='jicons'>
            <EditIcon />
            <ShareIcon />
          </div>
        </div>
      )}
      {/* end of job post bottom one */}

      {/* start of job post bottom two */}
      {requirement && (
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
      )}
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

export default JobPost;
