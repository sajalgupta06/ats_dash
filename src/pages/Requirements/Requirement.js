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

  const [active,setActive] = useState("AllJobs")

  function handlePageClick({ selected: selectedPage }) {
    console.log(selectedPage)
    setPage(selectedPage+1);
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
        url: `https://job-market-node.codedeployment.tk/api/dash/requirements/deleteMany`,
        // url: `http://localhost:8000/api/dash/requirements/deleteMany`,
        method: "DELETE",
        data: { ids: batchDelete },
        headers:{"Authorization":`Bearer ${token}`},

      });

      if (response.data.status === "success") {
        alert("selected Requirements deleted successfully");
        setReload(!reload);
      }

      console.log(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };


useEffect(() => {
  console.log(reqListings)
}, [reqListings])

  useEffect(() => {
    
    const getReqListing = async () => {
      const token = localStorage.getItem("token");

      try {

      //  const url= active==="InactiveJobs"?`https://job-market-node.codedeployment.tk/api/dash/jobs?page=${page}&limit=${6}`: active==="ActiveJobs"?`https://job-market-node.codedeployment.tk/api/dash/jobs?page=${page}&limit=${6}`:active==="AllJobs"?`https://job-market-node.codedeployment.tk/api/dash/jobs?page=${page}&limit=${6}`:""

     
      // const  url= `http://localhost:8000/api/dash/requirements?page=${page}&limit=${6}`;
      const  url= `https://job-market-node.codedeployment.tk/api/dash/requirements?page=${page}&limit=${6}`;
       
        const response = await axios({

          url:url,

          method: "GET",
          headers:{"Authorization":`Bearer ${token}`},
        });
        console.log(response)

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
  }, [page, reload,active]);



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
            <div className='plus' onClick={()=>setReqView('r0')}>
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
      {reqView === "r1" && (
        <div className='job-listings-jobs'>
          
          {reqListings.map(req=>{
           return <RequirementCandidate 
           requirement={req}
           setRequirement={setRequirement}
                setBatchDelete={setBatchDelete}
                batchDelete={batchDelete}
                batch={batch}
                key={req._id}
                setReqView={setReqView}
            
           
           ></RequirementCandidate>
          })}

        </div>
      )}

      {/* end of job listings */}

      {/* start of r2 */}
      {reqView === "r0" && <CreateRequirement setReqView={setReqView}/>}
      {reqView !== "r1" &&reqView !== "r0"  && (
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
              <div
                onClick={() => setReqView("r7")}
                className={`${reqView === "r7" && "bac"}`}>
                Rejected
              </div>
              <div
                onClick={() => setReqView("r8")}
                className={`${reqView === "r8" && "bac"}`}>
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

            
            {reqView === "r2" && <ShowRequirement  requirement={requirement} setRequirement={setRequirement}/>}
            {reqView === "r3" && <JobCandidate nmt={true}  type='Candidates' job={requirement}    />}
            {reqView === "r4" && (
              <JobCandidate  nmt={true} type='Under Review Applicants'  job={requirement} />
            )}
            {reqView === "r5" && <JobCandidate  nmt={true} type='Total Submitted' job={requirement} />}
            {reqView === "r6" && <JobCandidate nmt={true} type='Total Onboarded' job={requirement} />}
            {reqView === "r7" && <JobCandidate nmt={true} type='Rejected' job={requirement} />}
            {reqView === "r8" && <JobCandidate nmt={true} type='Dropped' job={requirement} />}
          </div>
        </>
      )}
      {/* end of r2 */}

      {/* end of requiremetnts job list */}
    </div>
  );
};

export default Requirement;
