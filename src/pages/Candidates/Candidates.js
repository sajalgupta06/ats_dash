import React, { useState ,useEffect} from "react";
import "./Candidates.scss";
import {
  DownArrIcon,
  Filter2Icon,
  FilterIcon,
} from "../../asserts/icons";
import NewCandidate from "../../components/NewCandidate/NewCandidate";
import CandidateProfile from "../../components/CandidateProfile/CandidateProfile";
import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import updateField from "./../../asserts/icons/updateField.png";
import publish from "./../../asserts/icons/publish.png";
import addToFolder from "./../../asserts/icons/addToFolder.png";
import tagCandidate from "./../../asserts/icons/tagCandidate.png";
import TagPopup from '../../components/TagPopup/TagPopup';
import ReactPaginate from 'react-paginate'
import AdvancedSearch from "./AdvancedSearch/AdvancedSearch";
import axios from "axios";
import { URL } from "../../config";
import Datasort from 'react-data-sort'



const Candidates = () => {
  const [isCandidateDetail, setIsCandidateDetail] = useState(false);
  const [candidateDetail, setCandidateDetail] = useState({});
  const [advancedSearch, setAdvencedSearch] = useState(false);
  const [activeTab, setActiveTab] = useState("AllCandidates");
  const [batch, setBatch] = useState(false);
  const [batchDelete, setBatchDelete] = useState([]);
  let [candidateList, setCandidateList] = useState([]);
  const [nop, setNop] = useState(0);
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false);
  const [tagPopup,setTagPopup] = useState(false)

  const [sort,setSort]=useState("all")
  const [sortType,setSortType]=useState("asc")

  const [filter, setFilter] = useState({
    experienceFrom:"",
    experienceTo:"",
    workPreference:"",
    currentLocation:"",
    prefferedLocation:"",
    skils:"",
    include:"",
    exclude:"",
    match:"",
    date:""
  })



  const handleDropdown = (cs) => {
    const dropdown = document.querySelector(`.${cs}`);
    dropdown.classList.toggle("form-visible");
  };

  function handlePageClick({ selected: selectedPage }) {
    console.log(selectedPage)
    setPage(selectedPage+1);
}

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


const handleFilter=()=>{
console.log(filter)

  const getCandidateListing=async()=>{

  
    const token = localStorage.getItem("token");
  
    try {
      const response = await axios({
       
        url: `${URL}/api/dash/app/users-filter?page=${1}&limit=${6}`,
        method: "POST",
        headers:{"Authorization":`Bearer ${token}`},
        data:filter
       
      });
    
      if (response.data.status === "success") {

        console.log(response)
        const nof = Math.ceil(response.data.totalCount / 6);
        console.log(nof);
        setNop(nof);
        setCandidateList(response.data.users)
        setBatchDelete([])
      }
  
    }
  
    catch (err) {
      console.log(err)
    }
  }

  getCandidateListing()

}

const tagCandidatefunc=()=>{
  if(batchDelete.length>0){

    setTagPopup(true)
  }
}


const compareObjects = (object1,object2,key,type)=>{
  const obj1 = parseInt(object1[key])
  const obj2 = parseInt(object2[key])
if(type==="desc")
{
  if (obj1 < obj2) {
    return 1
  }
  if (obj1 > obj2) {
    return -1
  }
  return 0
}
if(type==="asc")
{
  if (obj1 < obj2) {
    return -1
  }
  if (obj1 > obj2) {
    return 1
  }
  return 0
}
}

useEffect(() => {

  // setCandidateList(candidateList)
  console.log(candidateList)

}, [candidateList])




const sorting=(type)=>{

  //   setSortState( candidateList.sort((user1,user2)=>{
  //   return compareObjects(user1,user2,"experience",type)
  // })
  //   )
  // console.log(candidateList)

}



useEffect(() => {

  const getCandidateListing=async()=>{

  
  const token = localStorage.getItem("token");

  try {
    let url;
    if(activeTab==="ActiveCandidates"){
      url=`${URL}/api/dash/app/users?page=${page}&limit=${6}&active=true${sort==="all"?"":`&sort=${sort}`}`
    }
    if(activeTab==="InactiveCandidates"){
      url=`${URL}/api/dash/app/users?page=${page}&limit=${6}&active=false${sort==="all"?"":`sort=${sort}`}`
    }
    else{
      url=`${URL}/api/dash/app/users?page=${page}&limit=${6}${sort==="all"?"":`&sort=${sort}`}`

    }


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
      if(sortType==="desc")
      {
        
        response.data.users.reverse()
      }
      setCandidateList(response.data.users)
      setBatchDelete([])

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
}, [page, reload,activeTab,sortType,isCandidateDetail])



  if (isCandidateDetail) 
  {
    console.log("hello");
    return <CandidateProfile candidateDetail={candidateDetail} setIsCandidateDetail={setIsCandidateDetail} />;
  }

  if (advancedSearch) {
    console.log("hello");
    return <AdvancedSearch  setAdvencedSearch={setAdvencedSearch}></AdvancedSearch>
  }

  else {
    return (
      <div className="candidates-container">
        {/* candidates-left */}

        <div className="candidates-left">
          <div className="candidates-left-container">
            <div className="candidates-left-heading">
              <Filter2Icon />
              <div>Filters</div>
            </div>

            {/* filter one */}
            <div className="candidates-left-filter-box">
              <div
                onClick={() => handleDropdown("filter-dropdown1")}
                className="candidates-left-filter-box-heading"
              >
                <div> - Experience</div>
                <DownArrIcon />
              </div>
              <div className="filter-dropdown1">
                <div className="form-group">
                  <label
                    style={{ marginTop: "0" }}
                    className="form-label"
                    htmlFor="from"
                   
                  >
                    From
                  </label>
                  <div className="input-box">
                    <input
                      className="form-input"
                      placeholder="0 years"
                      id="from"
                      type="number"
                      value={filter.experienceFrom}
                      onChange={(e)=>setFilter({...filter,experienceFrom:e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    style={{ marginTop: "0" }}
                    className="form-label"
                    htmlFor="too"
                    type="number"
                  >
                    To
                  </label>
                  <input
                    className="form-input"
                    placeholder="15 years"
                    id="too"
                    type="number"
                    value={filter.experienceTo}

                    onChange={(e)=>setFilter({...filter,experienceTo:e.target.value})}

                  />
                </div>
              </div>
            </div>
            {/* end of filter one */}

            {/* filter two */}
            <div className="candidates-left-filter-box">
              <div
                onClick={() => handleDropdown("filter-dropdown2")}
                className="candidates-left-filter-box-heading"
            
              >
                <div> - Location</div>
                <DownArrIcon />
              </div>
              <div className="filter-dropdown2">
                <div className="check-form">
                  <input id="c-in-o" type="checkbox"
                      checked={filter.workPreference==="in-Office"}

                      onChange={(e)=>setFilter({...filter,workPreference:"in-Office"})}

                  />
                  <label htmlFor="c-in-o">
                    In-Office (Remote During Covid-19)
                  </label>
                </div>
                <div className="check-form">
                  <input id="r-in-oo" type="checkbox"
                   checked={filter.workPreference==="both"}

                   onChange={(e)=>setFilter({...filter,workPreference:"both"})} />
                  <label htmlFor="r-in-oo">Remote Or In-Office</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" 

                   checked={filter.workPreference==="remote"}

                      onChange={(e)=>setFilter({...filter,workPreference:"remote"})}/>
                  <label htmlFor="r-in-o">Remote Only</label>
                </div>
                <label className="form-label" htmlFor="from">
                  Current location of Candidate
                </label>
                <input
                  style={{ width: "100%" }}
                  className="form-input"
                  placeholder="Type a City"
                  id="from"
                  type="text"
                  value={filter.currentLocation}
                  onChange={(e)=>setFilter({...filter,currentLocation:e.target.value})}
                />
                <label className="form-label" htmlFor="too">
                  Location desired by Candidate
                </label>
                <input
                  style={{ width: "100%" }}
                  className="form-input"
                  placeholder="Type a City"
                  id="too"
                  type="text"
                  value={filter.prefferedLocation}
                  onChange={(e)=>setFilter({...filter,prefferedLocation:e.target.value})}
                />
              </div>
            </div>
            {/* end of filter two */}

            {/* filter three */}
            <div className="candidates-left-filter-box">
              <div
                onClick={() => handleDropdown("filter-dropdown3")}
                className="candidates-left-filter-box-heading"
              >
                <div> - Skills</div>
                <DownArrIcon />
              </div>
              <div className="filter-dropdown3">
                <input
                  style={{ width: "100%" }}
                  className="form-input"
                  placeholder="Type a Skill"
                  type="text"
                  value={filter.skills}
                  onChange={(e)=>setFilter({...filter,skills:e.target.value})}
                />
              </div>
            </div>
            {/* end of filter three */}

            {/* filter four */}
            <div className="candidates-left-filter-box">
              <div
                onClick={() => handleDropdown("filter-dropdown4")}
                className="candidates-left-filter-box-heading"
              >
                <div>- Keywords</div>
                <DownArrIcon />
              </div>
              <div className="filter-dropdown4">
                <label className="form-label" htmlFor="for-include">
                  Include
                </label>
                <input
                  style={{ width: "100%" }}
                  className="form-input"
                  placeholder="Included Word"
                  id="for-include"
                  type="text"
                  type="text"
                  value={filter.inclulde}
                  onChange={(e)=>setFilter({...filter,include:e.target.value})}
                />

                <label className="form-label" htmlFor="for-exclude">
                  Exclude
                </label>
                <input
                  style={{ width: "100%" }}
                  className="form-input"
                  placeholder="Excluded word"
                  id="for-exclude"
                  type="text"
                  value={filter.exclude}
                  onChange={(e)=>setFilter({...filter,exclude:e.target.value})}
                />
              </div>
            </div>
            {/* end of filter four */}

            {/* filter fifth */}
            <div className="candidates-left-filter-box">
              <div
                onClick={() => handleDropdown("filter-dropdown5")}
                className="candidates-left-filter-box-heading"
              >
                <div> - Match Score </div>
                <DownArrIcon />
              </div>
              <div className="filter-dropdown5">
                <div className="check-form">
                  <input id="c-in-o" type="checkbox" />
                  <label htmlFor="c-in-o">High Match (75-100%)</label>
                </div>
                <div className="check-form">
                  <input id="r-in-oo" type="checkbox" />
                  <label htmlFor="r-in-oo">Medium Match (45-75%)</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">Low Match (15-45%)</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">Lowest Match (0-15%)</label>
                </div>
              </div>
            </div>
            {/* end of filter fifth */}

            {/* filter fifth */}
            <div className="candidates-left-filter-box">
              <div
                onClick={() => handleDropdown("filter-dropdown6")}
                className="candidates-left-filter-box-heading"
              >
                <div>- Application Date </div>
                <DownArrIcon />
              </div>
              <div className="filter-dropdown6">
                <div className="check-form">
                  <input id="c-in-o" type="checkbox" />
                  <label htmlFor="c-in-o">All</label>
                </div>
                <div className="check-form">
                  <input id="r-in-oo" type="checkbox" />
                  <label htmlFor="r-in-oo">1 Day</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">3 Days</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">7 Days</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">15 Days</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">30 Days</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">2 Months</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">3 Months</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">6 Months</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">9 Months</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">1 Year</label>
                </div>
                <div className="check-form">
                  <input id="r-in-o" type="checkbox" />
                  <label htmlFor="r-in-o">More Than 1 Year </label>
                </div>
              </div>
            </div>
            {/* end of filter fifth */}
         
            <div style={{marginTop:"10rem"}}>
                  <div style={{ minWidth: "0rem", display: "inline-block" ,position:"inherit",top:"0rem"}}>
                    <div
                      className="btn btn-w btn-cancel btn-active"
                      style={{ minWidth: "0rem", display: "inline-block" }}
                    >
                      Cancel
                    </div>
                  </div>

                  <div style={{ minWidth: "0rem", display: "inline-block" }}>
                    <button className="btn btn-w btn-inactive reply"
                    onClick={()=>{handleFilter()}}>
                  Refine Filter
                    </button>
                  </div>
                </div>
          
          </div>

            
        </div>

        <div className="candidates-right">
          <div className="tob-btns">
            <button
              className={`btn btn-w btn-${
                activeTab === "AllCandidates" ? "active" : "inactive"
              }`}
              onClick={() => setActiveTab("AllCandidates")}
            >
              All Candidates
            </button>

            <button
              className={`btn btn-w btn-${
                activeTab === "ActiveCandidates" ? "active" : "inactive"
              }`}
              onClick={() => setActiveTab("ActiveCandidates")}
            >
              Active Candidates
            </button>

            <button
              className={`btn btn-w btn-${
                activeTab === "InactiveCandidates" ? "active" : "inactive"
              }`}
              onClick={() => setActiveTab("InactiveCandidates")}
            >
              Inactive Candidates
            </button>
          </div>

        
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
                   
                     
                    
                      <li onClick={tagCandidatefunc}>
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
                {tagPopup && (
                  <TagPopup batchTag={batchDelete} candidateList={candidateList} setTagPopup={setTagPopup}/>
                )}
              
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
                

                    <li onClick={()=>{setSort("experience");setSortType("desc")}}>
                   
                      <span>Experience : High to Low</span>
                    </li>

                    <li   onClick={()=>{setSort("experience");setSortType("asc")}}>
                   
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
                    {candidateList.length>0 &&(              
                    <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={nop}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                      
                    disabledClassName={"page-numbs"}
                    activeClassName={"page-numbs active"}
                    />
                    )
                    }
                
                
             
              
         
        </div>
      </div>
    );
  }
};

export default Candidates;
