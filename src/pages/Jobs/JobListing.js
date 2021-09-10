import React, { useContext, useEffect, useState } from "react";
import CreateJob from "../../components/CreateJob/CreateJob";
import JobPost from "../../components/JobPost/JobPost";
import "./JobListing.scss";

import Correct from "./../../asserts/images/correct.png";
import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import Cancel from "./../../asserts/images/cancel.png";
import Email from "./../../asserts/icons/email.png";
import axios from "axios";

import ReactPaginate from 'react-paginate'
import { MyContext } from "../../App";

import publish from "./../../asserts/icons/publish.png";

import tagCandidate from "./../../asserts/icons/tagCandidate.png";
import { URL } from "../../config";


const JobListing = () => {

  const token = localStorage.getItem("token");

  

  const [jobListView, setJobListView] = useState(1);
  const [jobListings, setJobListings] = useState([]);
  const [page, setPage] = useState(1);
  const [nop, setNop] = useState(0);
  const [batch, setBatch] = useState(false);
  const [batchDelete, setBatchDelete] = useState([]);
  const [batchApprove, setBatchApprove] = useState([]);
  const [reload, setReload] = useState(false);
  const [job, setJob] = useState({});
  const [createJobView, setCreateJobView] = useState(false);
  const [search,setSearch] = useState("")

  const [active,setActive] = useState("AllJobs")

  function handlePageClick({ selected: selectedPage }) {
    console.log(selectedPage)
    setPage(selectedPage+1);
}

  const deleteManyJobList = async () => {
    try {
      const response = await axios({
      
         url: `${URL}/api/dash/job/deleteMany`,
        method: "DELETE",
        data:  batchDelete  ,
        headers:{"Authorization":`Bearer ${token}`},

      });

      if (response.data.status === "success") {
        alert("select jobs deleted successfully");
       
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
       
        url: `${URL}/api/dash/job/acceptMany`,
        method: "POST",
        headers:{"Authorization":`Bearer ${token}`},

        data:  batchDelete ,
      });

      if (response.data.status === "success") {
        alert("selected jobs approved successfully");
        
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
      
        url: `${URL}/api/dash/job/rejectMany`,


        method: "POST",
        headers:{"Authorization":`Bearer ${token}`},

        data:  batchDelete ,
      });

      if (response.data.status === "success") {
        alert("selected jobs dissapproved successfully");
       
        setReload(!reload);
      }

      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };

  const searchResults=async()=>{
    console.log(search)
    try {

      let url =`${URL}/api/dash/job/filter`

      const response = await axios({
        url: url, 
        method: "POST",
        data:{filter:search},
        headers:{"Authorization":`Bearer ${token}`},
      });
      console.log(response)

      if (response.data.status === "success") {
        const nof = Math.ceil(response.data.totalCount / 6);
        console.log(nof);
        setNop(nof);
        setJobListings(response.data.jobs);
      }

      console.log(response.data);
    } catch (err) {
      console.log(err.response);
    }

  }

  const handleBatch = () => {
    const dropdown = document.querySelector(".job-batch-action");
    const batchArrow = document.querySelector(".job-batch-arrow");

    dropdown.classList.toggle("job-batch-visible");
    batchArrow.classList.toggle("job-batch-rotate");
  };

  const handleSort = () => {
    const dropdown = document.querySelector(".job-sort-batch-action");
    const batchArrow = document.querySelector(".job-sort-batch-arrow");

    dropdown.classList.toggle("job-sort-batch-visible");
    batchArrow.classList.toggle("job-sort-batch-rotate");
  };



  useEffect(() => {
    
    const getJobListings = async () => {
      const token = localStorage.getItem("token");

      try { 

        let url = active==="AllJobs"?`${URL}/api/dash/jobs?page=${page}&limit=${6}`:active==="ActiveJobs"?`${URL}/api/dash/jobs?page=${page}&limit=${6}&active=1`:active==="InactiveJobs"?`${URL}/api/dash/jobs?page=${page}&limit=${6}&active=0`:""
 
        const response = await axios({

          url: url, 

          method: "GET",
          headers:{"Authorization":`Bearer ${token}`},
        });
        console.log(response)

        if (response.data.status === "success") {
          const nof = Math.ceil(response.data.totalCount / 6);
          console.log(nof);
          setNop(nof);
          setJobListings(response.data.jobs);
        }

        console.log(response.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    
    setBatchDelete([]);

    if (page >= 1) {
      getJobListings();
    }
  }, [page, reload,active]);

  if (jobListView === 1) {
    return (
      <div className='job-lisitngs'>
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

        {/* listings bar */}
        <div className='listings-bar'>
          <div className='listings-bar-left'>
            <button onClick={handleBatch} className='btn btn-white'>
              <span className='job-batch-action-rel'>
                <span>Batch Actions</span>
                <>
                  <ul className='job-batch-action'>
                    <div className='job-batch-action-square'>&nbsp;</div>
                    <li onClick={approveManyJobList}>
                      <img src={Correct} alt='Correct icon' />
                      <span>Appove</span>
                    </li>
                    <li onClick={dissApproveManyJobList}>
                      <img src={Cancel} alt='Cancel icon' />
                      <span>Dissapprove</span>
                    </li>
                    <li onClick={deleteManyJobList}>
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

              <svg
                width='16'
                className='job-batch-arrow'
                height='12'
                viewBox='0 0 492 492'
                fill='#2186F2'>
                <path d='M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z'></path>
              </svg>

            </button>
           
            <div className='listings-bar-search'>
              <input type='text' placeholder='Search Job Title, Job ID, Tags'
               value={search} onChange={(e)=>setSearch(e.target.value)} onKeyPress={(e)=>e.key==="Enter"?searchResults():""}
              
              />
            </div>
          </div>
          <div className='listings-bar-right'>
            <div onClick={() => setJobListView(2)} className='plus'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12 3V21'
                  stroke='#2186F2'
                  strokeWidth='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M3 12L21 12'
                  stroke='#2186F2'
                  strokeWidth='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
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
            
            <div className='listings-bar-right-filter'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.2931 16.293L8.0001 18.5859V3C8.0001 2.73478 7.89474 2.48043 7.70721 2.29289C7.51967 2.10536 7.26532 2 7.0001 2C6.73489 2 6.48053 2.10536 6.293 2.29289C6.10546 2.48043 6.0001 2.73478 6.0001 3V18.5859L3.7071 16.293C3.5185 16.1108 3.2659 16.01 3.0037 16.0123C2.7415 16.0146 2.49069 16.1198 2.30528 16.3052C2.11988 16.4906 2.01471 16.7414 2.01243 17.0036C2.01015 17.2658 2.11094 17.5184 2.2931 17.707L6.2931 21.707C6.4808 21.8942 6.73507 21.9993 7.00015 21.9993C7.26524 21.9993 7.5195 21.8942 7.7072 21.707L11.7072 17.707C11.89 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5108 16.118 11.2595 16.0128 10.997 16.0108C10.7344 16.0088 10.4816 16.1102 10.2931 16.293Z'
                  fill='#2186F2'
                />
                <path
                  d='M11.0001 6H21.0001C21.2653 6 21.5196 5.89464 21.7072 5.7071C21.8947 5.51957 22.0001 5.26521 22.0001 5C22.0001 4.73478 21.8947 4.48043 21.7072 4.29289C21.5196 4.10536 21.2653 4 21.0001 4H11.0001C10.7348 4 10.4805 4.10536 10.293 4.29289C10.1054 4.48043 10.0001 4.73478 10.0001 5C10.0001 5.26521 10.1054 5.51957 10.293 5.7071C10.4805 5.89464 10.7348 6 11.0001 6Z'
                  fill='#2186F2'
                />
                <path
                  d='M21.0001 8H11.0001C10.7348 8 10.4805 8.10536 10.293 8.29289C10.1054 8.48043 10.0001 8.73478 10.0001 9C10.0001 9.26521 10.1054 9.51957 10.293 9.7071C10.4805 9.89464 10.7348 10 11.0001 10H21.0001C21.2653 10 21.5196 9.89464 21.7072 9.7071C21.8947 9.51957 22.0001 9.26521 22.0001 9C22.0001 8.73478 21.8947 8.48043 21.7072 8.29289C21.5196 8.10536 21.2653 8 21.0001 8Z'
                  fill='#2186F2'
                />
                <path
                  d='M18.0001 12H11.0001C10.7348 12 10.4805 12.1054 10.293 12.2929C10.1054 12.4804 10.0001 12.7348 10.0001 13C10.0001 13.2652 10.1054 13.5196 10.293 13.7071C10.4805 13.8947 10.7348 14 11.0001 14H18.0001C18.2653 14 18.5196 13.8947 18.7072 13.7071C18.8947 13.5196 19.0001 13.2652 19.0001 13C19.0001 12.7348 18.8947 12.4804 18.7072 12.2929C18.5196 12.1054 18.2653 12 18.0001 12Z'
                  fill='#2186F2'
                />
              </svg>
              
              <button onClick={handleSort} className='btn btn-white'>
              <span className='job-sort-batch-action-rel'>
                <>
                <span>Newest</span>
                  <ul className='job-sort-batch-action'>
                    <div className='job-sort-batch-action-square'>&nbsp;</div>
                    
                    <li>
                   
                      <span>All</span>
                    </li>
                

                    <li>
                   
                      <span>Experience : High to Low</span>
                    </li>

                    <li>
                   
                   <span>Experience : Low to High</span>
                 </li>

                 <li>
                   
                   <span>Matching % : High to Low</span>
                 </li>


                 <li>
                   
                   <span>Matching % : Low to High</span>
                 </li>


                  </ul>
                </>
              </span>

              <svg
                width='16'
                className='job-sort-batch-arrow'
                height='12'
                viewBox='0 0 492 492'
                fill='#2186F2'>
                <path d='M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z'></path>
              </svg>

            </button>
           
            </div>
          </div>
        </div>
        {/* end listings bar */}

        {/* start of job listings */}
      
      
          <div className='job-lisitngs'>
          {/* start of job listings */}
          <div className='job-listings-jobs'>
            {jobListings.map((job) => (
              <JobPost
                setJob={setJob}
                setBatchDelete={setBatchDelete}
                setBatchApprove={setBatchApprove}
                batchDelete={batchDelete}
                batchApprove={batchApprove}
                batch={batch}
                job={job}
                key={job._id}
                setJobListView={setJobListView}
                candidate={false}
              />
            ))}
          </div>
          {/* end of job listings */}
  
          {/* start of pagination */}
        
          {jobListings &&(

  
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



)
}
          {/* end  of pagination */}
        </div>
      
      

     
      </div>
    );
  } else if (jobListView === 2) {
    return<> 
     <div onClick={() => setJobListView(1)} className='createjob-back'>
        &larr;

      </div>
    <CreateJob setJobListView={setJobListView} setCreateJobView={setCreateJobView}  jobListView={jobListView} createJobView={createJobView}/>;</>

  } else if (jobListView === 3) {

    const handleBatch = () => {
      const dropdown = document.querySelector(".job-candi-batch-action");
      const batchArrow = document.querySelector(".job-batch-arrow");
  
      dropdown.classList.toggle("job-candi-batch-visible");
      batchArrow.classList.toggle("job-batch-rotate");
    };
    return (
      <>
        <div onClick={() => setJobListView(1)} className='createjob-back'>
        &larr;

      </div>
        {/* listings bar */}
        <div className='listings-bar'>
          <div className='listings-bar-left'>
            <button onClick={handleBatch} className='btn btn-white'>
              <span className='job-candi-batch-action-rel'>
                <span>Batch Actions</span>
                <>
                <ul className="job-candi-batch-action">
                      <div className="job-batch-action-square">&nbsp;</div>

                      <li >
                        <img src={Share} alt="Share icon" />
                        <span>Share</span>
                      </li>

                      <li>
                        <img src={Delete} alt="Delete icon" />
                        <span>Delete</span>
                      </li>

                      <li>
                        <img src={Email} alt="Delete icon" />
                        <span>Email</span>
                      </li>

                      <li>

                        
                        <img src={publish} alt="Cancel icon" />
                        <span>Publish</span>
                      </li>


                     
                    
                      <li >
                        <img src={tagCandidate} alt="Delete icon" />
                        <span>Tag Candidate</span>
                      </li>
                  

                      <li>
                        <img src={tagCandidate} alt="Delete icon" />
                        <span>Untag Candidate</span>
                      </li>
                    </ul>
                 </>
              </span>

              <svg
                width='16'
                className='job-batch-arrow'
                height='12'
                viewBox='0 0 492 492'
                fill='#2186F2'>
                <path d='M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z'></path>
              </svg>

            </button>
           
            <div className='listings-bar-search'>
              <input type='text' placeholder='Search Job Title, Job ID, Tags' />
            </div>
          </div>
          <div className='listings-bar-right'>
            <div onClick={() => { setCreateJobView(true);setJobListView(2);}} className='plus'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12 3V21'
                  stroke='#2186F2'
                  strokeWidth='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M3 12L21 12'
                  stroke='#2186F2'
                  strokeWidth='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
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
            
            <div className='listings-bar-right-filter'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.2931 16.293L8.0001 18.5859V3C8.0001 2.73478 7.89474 2.48043 7.70721 2.29289C7.51967 2.10536 7.26532 2 7.0001 2C6.73489 2 6.48053 2.10536 6.293 2.29289C6.10546 2.48043 6.0001 2.73478 6.0001 3V18.5859L3.7071 16.293C3.5185 16.1108 3.2659 16.01 3.0037 16.0123C2.7415 16.0146 2.49069 16.1198 2.30528 16.3052C2.11988 16.4906 2.01471 16.7414 2.01243 17.0036C2.01015 17.2658 2.11094 17.5184 2.2931 17.707L6.2931 21.707C6.4808 21.8942 6.73507 21.9993 7.00015 21.9993C7.26524 21.9993 7.5195 21.8942 7.7072 21.707L11.7072 17.707C11.89 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5108 16.118 11.2595 16.0128 10.997 16.0108C10.7344 16.0088 10.4816 16.1102 10.2931 16.293Z'
                  fill='#2186F2'
                />
                <path
                  d='M11.0001 6H21.0001C21.2653 6 21.5196 5.89464 21.7072 5.7071C21.8947 5.51957 22.0001 5.26521 22.0001 5C22.0001 4.73478 21.8947 4.48043 21.7072 4.29289C21.5196 4.10536 21.2653 4 21.0001 4H11.0001C10.7348 4 10.4805 4.10536 10.293 4.29289C10.1054 4.48043 10.0001 4.73478 10.0001 5C10.0001 5.26521 10.1054 5.51957 10.293 5.7071C10.4805 5.89464 10.7348 6 11.0001 6Z'
                  fill='#2186F2'
                />
                <path
                  d='M21.0001 8H11.0001C10.7348 8 10.4805 8.10536 10.293 8.29289C10.1054 8.48043 10.0001 8.73478 10.0001 9C10.0001 9.26521 10.1054 9.51957 10.293 9.7071C10.4805 9.89464 10.7348 10 11.0001 10H21.0001C21.2653 10 21.5196 9.89464 21.7072 9.7071C21.8947 9.51957 22.0001 9.26521 22.0001 9C22.0001 8.73478 21.8947 8.48043 21.7072 8.29289C21.5196 8.10536 21.2653 8 21.0001 8Z'
                  fill='#2186F2'
                />
                <path
                  d='M18.0001 12H11.0001C10.7348 12 10.4805 12.1054 10.293 12.2929C10.1054 12.4804 10.0001 12.7348 10.0001 13C10.0001 13.2652 10.1054 13.5196 10.293 13.7071C10.4805 13.8947 10.7348 14 11.0001 14H18.0001C18.2653 14 18.5196 13.8947 18.7072 13.7071C18.8947 13.5196 19.0001 13.2652 19.0001 13C19.0001 12.7348 18.8947 12.4804 18.7072 12.2929C18.5196 12.1054 18.2653 12 18.0001 12Z'
                  fill='#2186F2'
                />
              </svg>
              
              <button onClick={handleSort} className='btn btn-white'>
              <span className='job-sort-batch-action-rel'>
                <>
                <span>Newest</span>
                  <ul className='job-sort-batch-action'>
                    <div className='job-sort-batch-action-square'>&nbsp;</div>
                    
                    <li>
                   
                      <span>All</span>
                    </li>
                

                    <li>
                   
                      <span>Experience : High to Low</span>
                    </li>

                    <li>
                   
                   <span>Experience : Low to High</span>
                 </li>

                 <li>
                   
                   <span>Matching % : High to Low</span>
                 </li>


                 <li>
                   
                   <span>Matching % : Low to High</span>
                 </li>


                  </ul>
                </>
              </span>

              <svg
                width='16'
                className='job-sort-batch-arrow'
                height='12'
                viewBox='0 0 492 492'
                fill='#2186F2'>
                <path d='M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z'></path>
              </svg>

            </button>
           
            </div>
          </div>
        </div>
     
      <CreateJob  
        job={job}
        setJobListView={setJobListView}
        candidate={true}
        jobListView={jobListView}
        createJobView={createJobView}
      />
      </>
    );
  }
};

export default JobListing;
