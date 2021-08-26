import React, { useEffect, useState } from 'react'
import {
    CheckboxIcon,
    DownArrIcon,
  
    FilterIcon,
  } from "../../../asserts/icons";

  import axios from "axios";

  import NewCandidate from "../../../components/NewCandidate/NewCandidate";

  
import Delete from "./../../../asserts/images/delete.png";
import Share from "./../../../asserts/images/share.png";
import Popup from "../../../components/Bulk-Email-Popup/Popup";

import updateField from "./../../../asserts/icons/updateField.png";
import publish from "./../../../asserts/icons/publish.png";
import addToFolder from "./../../../asserts/icons/addToFolder.png";
import addToPipeline from "./../../../asserts/icons/addToPipeline.png";
import tagCandidate from "./../../../asserts/icons/tagCandidate.png";





export default function AllCandidates({setIsCandidateDetail,setCandidateDetail,setAdvencedSearch}) {


  const [batch, setBatch] = useState(false);
  const [batchDelete, setBatchDelete] = useState([]);
  const [candidateList, setCandidateList] = useState([]);
  const [nop, setNop] = useState(0);
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false);


  const setPageNum = (e) => {};


  const handleBatch = () => {
    const dropdown = document.querySelector(".candi-batch-action");
    const batchArrow = document.querySelector(".candi-batch-arrow");

    dropdown.classList.toggle("candi-batch-visible");
    batchArrow.classList.toggle("candi-batch-rotate");
  };

  const handleSort = () => {
    const dropdown = document.querySelector(".job-sort-batch-action");
    const batchArrow = document.querySelector(".job-sort-batch-arrow");

    dropdown.classList.toggle("job-sort-batch-visible");
    batchArrow.classList.toggle("job-sort-batch-rotate");
  };

useEffect(() => {

  // setCandidateList(candidateList)
  console.log(candidateList)

}, [candidateList])

useEffect(() => {

  const getCandidateListing=async()=>{

  
  const token = localStorage.getItem("token");

  try {
    const response = await axios({
      url: `http://localhost:8000/api/dash/app/users?page=${page}&limit=${6}`,
      // url: `https://job-market-node.codedeployment.tk/api/dash/app/users?page=${page}&limit=${6}`,
      method: "GET",
      headers:{"Authorization":`Bearer ${token}`},
     
    });
    console.log(response)
    if (response.data.status === "success") {
      const nof = Math.ceil(response.data.totalCount / 6);
      console.log(nof);
      setNop(nof);
      setCandidateList(response.data.users)
    }

  }

  catch (err) {
    console.log(err)
  }
}

setBatchDelete([]);
    if (page >= 1) {
      getCandidateListing();
    }
}, [page, reload])

    return (
       
            <>
            <div className="listings-bar">
            <div className="listings-bar-left">
            <button onClick={handleBatch} className="btn btn-white">
                <span className="batch-action-rel">
                  <span>Batch Actions</span>
                  <>
                    <ul className="candi-batch-action">
                      <div className="candi-batch-action-square">&nbsp;</div>

                      <li >
                        <img src={Share} alt="Share icon" />
                        <span>Share</span>
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
                        <img src={addToFolder} alt="Delete icon" />
                        <span>Add to Folder</span>
                      </li>
                   
                     

                      <li>
                        <img src={addToPipeline} alt="Delete icon" />
                        <span>Add to Pipeline</span>
                      </li>

                     
                    
                      <li>
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
              
                <DownArrIcon className="candi-batch-arrow" />
              </button>
              

              <div className="listings-bar-search">
                <input
                  type="text"
                  placeholder="Search Job Title, Job ID, Tags"
                />
              </div>
              <button
                className="btn btn-white"
                style={{ marginLeft: "1rem" }}
                onClick={() =>setAdvencedSearch(true)}
              >
                {" "}
                Advance Search
              </button>
            </div>


            <div className="listings-bar-right">
              {/* <div className="plus">
                <CheckboxIcon />
              </div> */}
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
                {/* 
                <div>Newest</div>
              <DownArrIcon /> */}
              <FilterIcon />
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


  
        {candidateList.map(candidate=>{

         return <NewCandidate 
       
         setIsCandidateDetail={setIsCandidateDetail}
         setCandidateDetail={setCandidateDetail}
          setBatchDelete={setBatchDelete}
          batchDelete={batchDelete}
          batch={batch}
          candidate={candidate}
          key={candidate._id}
          
          />
        })}

<div className='pagination'>
            {page < nop && (
              <div onClick={() => setPage(page + 1)} className='pagination-next'>
                <div>Next</div>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M12 18.5L6 12.5L12 6.5'
                    stroke='#2186F2'
                    strokeWidth='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M19 18.5L13 12.5L19 6.5'
                    stroke='#2186F2'
                    strokeWidth='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
            )}
            <div className='pagination-numbs'>
              {nop === 1 && <div className='page-numbs'>1</div>}
              {nop === 2 && (
                <>
                  <div onClick={setPageNum} className='page-numbs'>
                    1
                  </div>
                  <div className='page-numbs'>2</div>
                </>
              )}
              {nop === 3 && (
                <>
                  <div className='page-numbs'>1</div>
                  <div className='page-numbs'>2</div>
                  <div className='page-numbs'>3</div>
                </>
              )}
              {nop >= 4 && (
                <>
                  <div className='page-numbs'>1</div>
                  <div className='page-numbs'>2</div>
                  <div className='page-numbs'>3</div>
                  <div className='page-numbs'>4</div>
                </>
              )}
            </div>
            {page > 1 && (
              <div onClick={() => setPage(page - 1)} className='pagination-prev'>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M12 18.5L6 12.5L12 6.5'
                    stroke='#2186F2'
                    strokeWidth='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M19 18.5L13 12.5L19 6.5'
                    stroke='#2186F2'
                    strokeWidth='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <div>Previous</div>
              </div>
            )}
          </div>
          
       
     
            </>
       
    )
}

