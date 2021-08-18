import React, { useState } from "react";
import "./JobPost.scss";

import Dummy from "./../../asserts/images/placeholder.jpg";
import { EditIcon, PeopleIcon, ShareIcon } from "../../asserts/icons";

const JobPost = ({
  job,
  batch,
  requirement,
  setJobListView,
  setReqView,
  batchDelete,
  setBatchDelete,
  setJob,
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
      } else {
        setBatchDelete((b) => [...b, job._id]);
      }
    } else if (requirement) {
      setReqView("r2"); 
    } else {
      const temp1 = job.salary.split(",");
      job.salary1 = temp1[0];
      job.salary2 = temp1[1];
      const temp2 = job.workExperience.split(",");
      job.workExperience1 = temp2[0];
      job.workExperience2 = temp2[1];
      let newj = {
        ...job,
        salary1: temp1[0],
        salary2: temp1[1],
        workExperience1: temp2[0],
        workExperience2: temp2[1],
      };
      console.log("job", newj);
      setJob(newj);
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
          <div className='jobpost-user-name'>Olivia & Pope</div>
          <div className='jobpost-user-role'>Mern stack developer</div>
        </div>
      </div>
      <div className='jobpost-user-info'>
        <span>#JT-673453</span>
        <li>05 Positions </li>
        <li>$14,000 - $25,000</li>
        <li>Delhi, India (Remote)</li>
      </div>
      <div className='jobpost-desc'>
        A job description or JD is a written narrative that describes the
        general tasks, or other related duties, and responsibilities of a
        position. It may specify the functionary to who the position reports. A
      </div>

      {/* job post bottom one */}
      {!requirement && (
        <div className='jobpost-bottom'>
          <div className='japp'>
            <PeopleIcon />
            <div>80 Applicants</div>
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
