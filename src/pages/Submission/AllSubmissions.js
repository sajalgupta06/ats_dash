import React, { useEffect, useState } from "react";
import "./Submission.scss";
import {
  CheckboxIcon,
  DownArrIcon,
  Filter2Icon,
  FilterIcon,
} from "../../asserts/icons";
import NewSubmissionCard from "../../components/NewSubmissionCard/NewSubmissionCard";
import CandidateProfile from "../../components/CandidateProfile/CandidateProfile";


import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import Popup from "../../components/Bulk-Email-Popup/Popup";

import updateField from "./../../asserts/icons/updateField.png";
import publish from "./../../asserts/icons/publish.png";
import addToFolder from "./../../asserts/icons/addToFolder.png";
import addToPipeline from "./../../asserts/icons/addToPipeline.png";
import tagCandidate from "./../../asserts/icons/tagCandidate.png";
import axios from "axios";
import { URL } from "../../config";


const AllSubmissions = () => {
  const [candidateDetail, setCandidateDetail] = useState(false);
  const [submissionDetail, setSubmissionDetail] = useState(false);
  const [clicked, setClicked] = useState("AllSubmissions");
  const [active, setActive] = useState("inactive");
  const [PopupOpen, setPopupOpen] = useState(false);
  const [nop, setNop] = useState(0);
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false);
  const [batch, setBatch] = useState(false);
  const [batchDelete, setBatchDelete] = useState([]);

  const setPageNum = (e) => {};


  const handleBatch = () => {
    const dropdown = document.querySelector(".batch-action");
    const batchArrow = document.querySelector(".batch-arrow");

    dropdown.classList.toggle("batch-visible");
    batchArrow.classList.toggle("batch-rotate");
  };

  useEffect(() => {
  console.log(submissionDetail)
  }, [submissionDetail])

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getSubmissions=async()=>{
      try {
        const response = await axios({
       
          url: `${URL}/api/dash/requirements?page=${page}&limit=${6}`,
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.status === "success") {
          console.log("Success Update");
          setSubmissionDetail(response.data.requirement)
        }
        
      } catch (error) {
        console.log(error)
      }
    }
  
 getSubmissions()

  }, [])



    return (

     <>
  <div className="listings-bar" style={{ margin: "2rem 0" }}>
            <div className="listings-bar-left">
              <button onClick={handleBatch} className="btn btn-white">
                <span className="batch-action-rel">
                  <span>Batch Actions</span>
                  <>
                    <ul className="batch-action">
                      <div className="batch-action-square">&nbsp;</div>
                      <li>
                        <img src={updateField} alt="Correct icon" />
                        <span>Update Field</span>
                      </li>
                      <li>
                        <img src={Delete} alt="Delete icon" />
                        <span>Delete</span>
                      </li>
                      <li>
                        <img src={publish} alt="Cancel icon" />
                        <span>Publish</span>
                      </li>
                      <li>
                        <img src={publish} alt="Cancel icon" />
                        <span>Publish in Career Portal</span>
                      </li>
                      <li>
                        <img src={addToFolder} alt="Delete icon" />
                        <span>Add to Folder</span>
                      </li>
                   
                      <li onClick={() => setPopupOpen(true)}>
                        <img src={Share} alt="Share icon" />
                        <span>Share</span>
                      </li>

                      <li>
                        <img src={addToPipeline} alt="Delete icon" />
                        <span>Add to Pipeline</span>
                      </li>
                      <li>
                        <img src={tagCandidate} alt="Delete icon" />
                        <span>Tag Candidate</span>
                      </li>
                  
                    </ul>
                  </>
                </span>
                
                {PopupOpen && <Popup setPopupOpen={setPopupOpen} />}
                <DownArrIcon className="batch-arrow" />
              </button>
              
              <div className="listings-bar-search">
                <input
                  type="text"
                  placeholder="Search Job Title, Job ID, Tags"
                />
              </div>
            </div>
            <div className="listings-bar-right">
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
        
         
       <div className='job-listings-jobs'>

         
         { submissionDetail && submissionDetail.map(req=>{

          return req.applicants.map(applicant=>{
            if(applicant.stage==="submitted"){
              return < NewSubmissionCard
           setCandidateDetail={setCandidateDetail}
           candidateDetail={applicant.candidates[0]}
           setBatchDelete={setBatchDelete}
           batchDelete={batchDelete}
           batch={batch}
           job={req}
           />
            }
          })

         })}
          
        
  
        
    
        </div>
        </>
      
     
    );
  
};

export default AllSubmissions;
