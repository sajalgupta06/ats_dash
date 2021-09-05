import Correct from "./../../asserts/images/correct.png";
import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import Cancel from "./../../asserts/images/cancel.png";
import JobPost from "../../components/JobPost/JobPost";
import { useEffect, useState } from "react";
import "./Requirement.scss";
import JobCandidate from "../../components/JobCandidate/JobCandidate";

import { PlusIcon, CheckboxIcon, DownArrIcon } from "./../../asserts/icons";
import { FilterIcon } from "./../../asserts/icons/index";
import RequirementCandidate from "../../components/RequirementCandidate/RequirementCandidate";
import axios from "axios";
import ShowRequirement from "../../components/CreateRequirement/ShowRequirement";
import CreateRequirement from "../../components/CreateRequirement/CreateRequirement";
import { URL } from "../../config";
import ReactPaginate from "react-paginate";

const Requirement = () => {
  const token = localStorage.getItem("token");

  const [reqView, setReqView] = useState("r1");
  const [reqListings, setReqListings] = useState([]);

  const [page, setPage] = useState(1);
  const [nop, setNop] = useState(0);
  const [batch, setBatch] = useState(false);
  const [batchDelete, setBatchDelete] = useState([]);
  const [reload, setReload] = useState(false);
  const [requirement, setRequirement] = useState({});

  const [active, setActive] = useState("AllJobs");

  function handlePageClick({ selected: selectedPage }) {
    console.log(selectedPage);
    setPage(selectedPage + 1);
  }

  const handleBatch = () => {
    const dropdown = document.querySelector(".batch-action");
    const batchArrow = document.querySelector(".batch-arrow");

    dropdown.classList.toggle("req-batch-visible");
    batchArrow.classList.toggle("batch-rotate");
  };



  const deleteManyJobList = async () => {
    try {
      const response = await axios({
      
         url: `${URL}/api/dash/requirements/deleteMany`,
        method: "DELETE",
        data:  batchDelete  ,
        headers:{"Authorization":`Bearer ${token}`},

      });

      if (response.data.status === "success") {
        alert("selected requirements deleted successfully");
       
        setReload(!reload);
      }

      console.log(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };


  const approveManyJobList = async () => {
    try {
      const response = await axios({
       
        url: `${URL}/api/dash/requirements/acceptMany`,
        method: "POST",
        headers:{"Authorization":`Bearer ${token}`},

        data:  batchDelete ,
      });

      if (response.data.status === "success") {
        alert("selected requirements approved successfully");
        
        setReload(!reload);
      }

      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };


  const dissApproveManyJobList = async () => {
    try {
      const response = await axios({
      
        url: `${URL}/api/dash/requirements/rejectMany`,


        method: "POST",
        headers:{"Authorization":`Bearer ${token}`},

        data:  batchDelete ,
      });

      if (response.data.status === "success") {
        alert("selected requirements dissapproved successfully");
       
        setReload(!reload);
      }

      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };


  useEffect(() => {
    console.log(reqListings);
  }, [reqListings]);

  useEffect(() => {
    const getReqListing = async () => {
      const token = localStorage.getItem("token");

      try {
        let url =
          active === "AllJobs"
            ? `${URL}/api/dash/requirements?page=${page}&limit=${6}`
            : active === "ActiveJobs"
            ? `${URL}/api/dash/requirements?page=${page}&limit=${6}&status=true`
            : active === "InactiveJobs"
            ? `${URL}/api/dash/requirements?page=${page}&limit=${6}&status=false`
            : "";

        const response = await axios({
          url: url,

          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response);

        if (response.data.status === "success") {
          const nof = Math.ceil(response.data.totalCount / 6);
          console.log(nof);
          setNop(nof);
          setReqListings(response.data.requirement);
        }

        console.log(response.data);
      } catch (err) {
        console.log(err.response);
      }
    };

    setBatchDelete([]);

    if (page >= 1) {
      getReqListing();
    }
  }, [page, reload, active]);

  return (
    <div className="requirements">
      {reqView === "r1" && (
        <div className="tob-btns">
          <button
            className={`btn btn-w btn-${
              active === "AllJobs" ? "active" : "inactive"
            }`}
            onClick={() => setActive("AllJobs")}
          >
            All Jobs
          </button>
          <button
            className={`btn btn-w btn-${
              active === "ActiveJobs" ? "active" : "inactive"
            }`}
            onClick={() => setActive("ActiveJobs")}
          >
            Active Jobs
          </button>
          <button
            className={`btn btn-w btn-${
              active === "InactiveJobs" ? "active" : "inactive"
            }`}
            onClick={() => setActive("InactiveJobs")}
          >
            Inactive Jobs
          </button>
        </div>
      )}

      {/* listings bar */}
      {reqView === "r1" && (
        <div className="listings-bar">
          <div className="listings-bar-left">
            <button onClick={handleBatch} className="btn btn-white">
              <span className="batch-action-rel">
                <span>Batch Actions</span>
                <>
                  <ul className="batch-action">
                    <div className="batch-action-square">&nbsp;</div>
                    <li onClick={approveManyJobList}>
                      <img src={Correct} alt="Correct icon" />
                      <span>Appove</span>
                    </li>
                    <li onClick={dissApproveManyJobList}>
                      <img src={Cancel} alt="Cancel icon" />
                      <span>Dissapprove</span>
                    </li>
                    <li onClick={deleteManyJobList}>
                      <img src={Delete} alt="Delete icon" />
                      <span>Delete</span>
                    </li>
                    <li>
                      <img src={Share} alt="Share icon" />
                      <span>Share</span>
                    </li>
                  </ul>
                </>
              </span>

              <DownArrIcon className="batch-arrow" />
            </button>
            <div className="listings-bar-search">
              <input type="text" placeholder="Search Job Title, Job ID, Tags" />
            </div>
          </div>
          <div className="listings-bar-right">
            <div className="plus" onClick={() => setReqView("r0")}>
              <PlusIcon />
            </div>
            <div
              onClick={() => setBatch(!batch)}
              className={`plus ${batch && "batch-border"}`}>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M18 0H6C4.897 0 4 0.897 4 2V14C4 15.103 4.897 16 6 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM6 14V2H18L18.002 14H6Z'
                  fill='#2186F2'
                />
                <path
                  d='M2 6.00037H0V18.0004C0 19.1034 0.897 20.0004 2 20.0004H14V18.0004H2V6.00037ZM10.933 9.51937L9.207 7.79338L7.793 9.20737L11.067 12.4814L16.769 5.64137L15.231 4.35938L10.933 9.51937Z'
                  fill='#2186F2'
                />
              </svg>
            </div>
            
            <div className="listings-bar-right-filter">
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
      {reqView === "r1" && (
        <>
        <div className="job-listings-jobs">
          {reqListings.map((req) => {
            return (
              <RequirementCandidate
                requirement={req}
                setRequirement={setRequirement}
                setBatchDelete={setBatchDelete}
                batchDelete={batchDelete}
                batch={batch}
                key={req._id}
                setReqView={setReqView}
              ></RequirementCandidate>
            );
          })}
        </div>
        {reqListings && (
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={nop}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              // nextLinkClassName={"pagination-next"}
              // previousLinkClassName={"pagination-prev"}
              disabledClassName={"page-numbs"}
              activeClassName={"page-numbs active"}
            />
          )}
        </>
         
      )}

      {/* end of job listings */}

      {/* start of r2 */}
      {reqView === "r0" && <CreateRequirement setReqView={setReqView} />}
      {reqView !== "r1" && reqView !== "r0" && (
        <>
          {/* back btn */}
          <div onClick={() => setReqView("r1")} className="createjob-back">
            &larr;
          </div>

          {/* end of back btn */}
          <div className="requirements-list">
            <div className="requirements-list-headings">
              <div
                onClick={() => setReqView("r2")}
                className={`${reqView === "r2" && "bac"}`}
              >
                Job Details
              </div>
              <div
                onClick={() => setReqView("r3")}
                className={`${reqView === "r3" && "bac"}`}
              >
                Candidates
              </div>
              <div
                onClick={() => setReqView("r4")}
                className={`${reqView === "r4" && "bac"}`}
              >
                Under Review
              </div>
              <div
                onClick={() => setReqView("r5")}
                className={`${reqView === "r5" && "bac"}`}
              >
                Client Submitted
              </div>
              <div
                onClick={() => setReqView("r6")}
                className={`${reqView === "r6" && "bac"}`}
              >
                Joined
              </div>
              <div
                onClick={() => setReqView("r7")}
                className={`${reqView === "r7" && "bac"}`}
              >
                Rejected
              </div>
              <div
                onClick={() => setReqView("r8")}
                className={`${reqView === "r8" && "bac"}`}
              >
                Dropped
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

            {reqView === "r2" && (
              <ShowRequirement
                requirement={requirement}
                setRequirement={setRequirement}
              />
            )}
            {reqView === "r3" && (
              <JobCandidate nmt={true} type="ReqCandidates" job={requirement} />
            )}
            {reqView === "r4" && (
              <JobCandidate
                nmt={true}
                type="Under Review Applicants"
                job={requirement}
              />
            )}
            {reqView === "r5" && (
              <JobCandidate
                nmt={true}
                type="Total Submitted"
                job={requirement}
              />
            )}
            {reqView === "r6" && (
              <JobCandidate
                nmt={true}
                type="Total Onboarded"
                job={requirement}
              />
            )}
            {reqView === "r7" && (
              <JobCandidate nmt={true} type="Rejected" job={requirement} />
            )}
            {reqView === "r8" && (
              <JobCandidate nmt={true} type="Dropped" job={requirement} />
            )}
          </div>
        </>
      )}
      {/* end of r2 */}

      {/* end of requiremetnts job list */}
    </div>
  );
};

export default Requirement;
