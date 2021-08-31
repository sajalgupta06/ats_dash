import Correct from "./../../asserts/images/correct.png";
import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import Cancel from "./../../asserts/images/cancel.png";
import JobPost from "../../components/JobPost/JobPost";
import { useState } from "react";
import "./Requirement.scss";
import JobCandidate from "../../components/JobCandidate/JobCandidate";

import { PlusIcon, CheckboxIcon, DownArrIcon } from "./../../asserts/icons";
import { FilterIcon } from "./../../asserts/icons/index";
import CreateRequirement from "../../components/CreateRequirement/CreateRequirement";

const Requirement = () => {
  const [reqView, setReqView] = useState("r1");

  const [active,setActive] = useState("AllJobs")


  const handleBatch = () => {
    const dropdown = document.querySelector(".batch-action");
    const batchArrow = document.querySelector(".batch-arrow");

    dropdown.classList.toggle("req-batch-visible");
    batchArrow.classList.toggle("batch-rotate");
  };

  return (
    <div className='requirements'>
      {reqView === "r1" && (
           <div className='tob-btns'>
           <button className={`btn btn-w btn-${active==="AllJobs"?"active":"inactive"}`}
           onClick={()=>setActive("AllJobs")}
           >All Jobs</button>
           <button className={`btn btn-w btn-${active==="ActiveJobs"?"active":"inactive"}`}
            onClick={()=>setActive("ActiveJobs")}
           >Active Jobs</button>
           <button className={`btn btn-w btn-${active==="InactiveJobs"?"active":"inactive"}`}
            onClick={()=>setActive("InactiveJobs")}
           >Inactive Jobs</button>
         </div>
      )}

      {/* listings bar */}
      {reqView === "r1" && (
        <div className='listings-bar'>
          <div className='listings-bar-left'>
            <button onClick={handleBatch} className='btn btn-white'>
              <span className='batch-action-rel'>
                <span>Batch Actions</span>
                <>
                  <ul className='batch-action'>
                    <div className='batch-action-square'>&nbsp;</div>
                    <li>
                      <img src={Correct} alt='Correct icon' />
                      <span>Appove</span>
                    </li>
                    <li>
                      <img src={Cancel} alt='Cancel icon' />
                      <span>Dissapprove</span>
                    </li>
                    <li>
                      <img src={Delete} alt='Delete icon' />
                      <span>Delete</span>
                    </li>
                    <li>
                      <img src={Share} alt='Share icon' />
                      <span>Share</span>
                    </li>
                  </ul>
                </>
              </span>

              <DownArrIcon className='batch-arrow' />
            </button>
            <div className='listings-bar-search'>
              <input type='text' placeholder='Search Job Title, Job ID, Tags' />
            </div>
          </div>
          <div className='listings-bar-right'>
            <div className='plus'>
              <PlusIcon />
            </div>
            <div className='plus'>
              <CheckboxIcon />
            </div>
            <div className='listings-bar-right-filter'>
              <FilterIcon />
              <div>Newest</div>
              <DownArrIcon />
            </div>
          </div>
        </div>
      )}
      {/* end listings bar */}

      {/* requiremetnts job list */}

      {/* start of job listings */}
      {/* {reqView === "r1" && (
        <div className='job-listings-jobs'>
          <JobPost requirement={true} setReqView={setReqView} />
          <JobPost requirement={true} />
          <JobPost requirement={true} />
          <JobPost requirement={true} />
          <JobPost requirement={true} />
          <JobPost requirement={true} />
          <JobPost requirement={true} />
          <JobPost requirement={true} />
          <JobPost requirement={true} />
          <JobPost requirement={true} />
          <JobPost requirement={true} />
        </div>
      )} */}

      {/* end of job listings */}

      {/* start of r2 */}
      {reqView !== "r1" && (
        <>
          {/* back btn */}
          <div onClick={() => setReqView("r1")} className='createjob-back'>
            &larr;
          </div>

          {/* end of back btn */}
          <div className='requirements-list'>
            <div className='requirements-list-headings'>
              <div
                onClick={() => setReqView("r2")}
                className={`${reqView === "r2" && "bac"}`}>
                Job Details
              </div>
              <div
                onClick={() => setReqView("r3")}
                className={`${reqView === "r3" && "bac"}`}>
                Candidates
              </div>
              <div
                onClick={() => setReqView("r4")}
                className={`${reqView === "r4" && "bac"}`}>
                Under Review
              </div>
              <div
                onClick={() => setReqView("r5")}
                className={`${reqView === "r5" && "bac"}`}>
                Client Submitted
              </div>
              <div
                onClick={() => setReqView("r6")}
                className={`${reqView === "r6" && "bac"}`}>
                Joined
              </div>
            </div>

            {reqView === "r1" && (
              <>
                <JobPost requirement={true} setReqView={setReqView} />
                <JobPost requirement={true} />
                <JobPost requirement={true} />
                <JobPost requirement={true} />
                <JobPost requirement={true} />
                <JobPost requirement={true} />
                <JobPost requirement={true} />
                <JobPost requirement={true} />
                <JobPost requirement={true} />
                <JobPost requirement={true} />
                <JobPost requirement={true} />
              </>
            )}

            {reqView === "r2" && <CreateRequirement />}
            {reqView === "r3" && <JobCandidate type='Candidates' />}
            {reqView === "r4" && (
              <JobCandidate type='Under Review Applicants' />
            )}
            {reqView === "r5" && <JobCandidate type='Total Submitted' />}
            {reqView === "r6" && <JobCandidate type='Total Onboarded' />}
          </div>
        </>
      )}
      {/* end of r2 */}

      {/* end of requiremetnts job list */}
    </div>
  );
};

export default Requirement;
