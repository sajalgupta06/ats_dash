import React, { useState } from "react";
import "./Candidates.scss";
import {
  CheckboxIcon,
  DownArrIcon,
  Filter2Icon,
  FilterIcon,
} from "../../asserts/icons";
import NewCandidate from "../../components/NewCandidate/NewCandidate";
import CandidateProfile from "../../components/CandidateProfile/CandidateProfile";


import Delete from "./../../asserts/images/delete.png";
import Share from "./../../asserts/images/share.png";
import Popup from "../../components/Bulk-Email-Popup/Popup";

import updateField from "./../../asserts/icons/updateField.png";
import publish from "./../../asserts/icons/publish.png";
import addToFolder from "./../../asserts/icons/addToFolder.png";
import addToPipeline from "./../../asserts/icons/addToPipeline.png";
import tagCandidate from "./../../asserts/icons/tagCandidate.png";

const Candidates = () => {
  const [candidateDetail, setCandidateDetail] = useState(false);

  const handleDropdown = (cs) => {
    const dropdown = document.querySelector(`.${cs}`);
    dropdown.classList.toggle("form-visible");
  };

  const [isFilter , setIsFilter] = useState(false)

  if (candidateDetail) {
    return <CandidateProfile setCandidateDetail={setCandidateDetail} />;
  } else {
    return (
      <div className='candidates-container'>
        {/* candidates-left */}
      
        <div className='candidates-left'>
          <div className='candidates-left-container'>
            <div className='candidates-left-heading'>
              <Filter2Icon />
              <div>Filters</div>
            </div>

           
            {/* filter one */}
            <div className='candidates-left-filter-box'>
              <div
                onClick={() => handleDropdown("filter-dropdown1")}
                className='candidates-left-filter-box-heading'>
                <div> - Experience</div>
                <DownArrIcon />
              </div>
              <div className='filter-dropdown1'>
                <div className='form-group'>
                  <label
                    style={{ marginTop: "0" }}
                    className='form-label'
                    htmlFor='from'>
                    From
                  </label>
                  <div className="input-box">

                  <input
                    className='form-input'
                    placeholder='0 years'
                    id='from'
                    type='text'
                    />
                    </div>
                </div>
                <div className='form-group'>
                  <label
                    style={{ marginTop: "0" }}
                    className='form-label'
                    htmlFor='too'>
                    To
                  </label>
                  <input
                    className='form-input'
                    placeholder='15 years'
                    id='too'
                    type='text'
                  />
                </div>
              </div>
            </div>
            {/* end of filter one */}

            {/* filter two */}
            <div className='candidates-left-filter-box'>
              <div
                onClick={() => handleDropdown("filter-dropdown2")}
                className='candidates-left-filter-box-heading'>
                <div> - Location</div>
                <DownArrIcon />
              </div>
              <div className='filter-dropdown2'>
                <div className='check-form'>
                  <input id='c-in-o' type='checkbox' />
                  <label htmlFor='c-in-o'>
                    In-Office (Remote During Covid-19)
                  </label>
                </div>
                <div className='check-form'>
                  <input id='r-in-oo' type='checkbox' />
                  <label htmlFor='r-in-oo'>Remote Or In-Office</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>Remote Only</label>
                </div>
                <label className='form-label' htmlFor='from'>
                  Current location of Candidate
                </label>
                <input
                  style={{ width: "100%" }}
                  className='form-input'
                  placeholder='Type a City'
                  id='from'
                  type='text'
                />
                <label className='form-label' htmlFor='too'>
                  Location desired by Candidate
                </label>
                <input
                  style={{ width: "100%" }}
                  className='form-input'
                  placeholder='Type a City'
                  id='too'
                  type='text'
                />
              </div>
            </div>
            {/* end of filter two */}

            {/* filter three */}
            <div className='candidates-left-filter-box'>
              <div
                onClick={() => handleDropdown("filter-dropdown3")}
                className='candidates-left-filter-box-heading'>
                <div> - Skills</div>
                <DownArrIcon />
              </div>
              <div className='filter-dropdown3'>
                <input
                  style={{ width: "100%" }}
                  className='form-input'
                  placeholder='Type a Skill'
                  type='text'
                />
              </div>
            </div>
            {/* end of filter three */}

            {/* filter four */}
            <div className='candidates-left-filter-box'>
              <div
                onClick={() => handleDropdown("filter-dropdown4")}
                className='candidates-left-filter-box-heading'>
                <div>- Keywords</div>
                <DownArrIcon />
              </div>
              <div className='filter-dropdown4'>
                <label className='form-label' htmlFor='for-include'>
                  Location desired by Candidate
                </label>
                <input
                  style={{ width: "100%" }}
                  className='form-input'
                  placeholder='Type a Skill'
                  id='for-include'
                  type='text'
                />

                <label className='form-label' htmlFor='for-exclude'>
                  Location desired by Candidate
                </label>
                <input
                  style={{ width: "100%" }}
                  className='form-input'
                  placeholder='Type a Skill'
                  id='for-exclude'
                  type='text'
                />
              </div>
            </div>
            {/* end of filter four */}

            {/* filter fifth */}
            <div className='candidates-left-filter-box'>
              <div
                onClick={() => handleDropdown("filter-dropdown5")}
                className='candidates-left-filter-box-heading'>
                <div> - Match Score </div>
                <DownArrIcon />
              </div>
              <div className='filter-dropdown5'>
                <div className='check-form'>
                  <input id='c-in-o' type='checkbox' />
                  <label htmlFor='c-in-o'>High Match (75-100%)</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-oo' type='checkbox' />
                  <label htmlFor='r-in-oo'>Medium Match (45-75%)</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>Low Match (15-45%)</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>Lowest Match (0-15%)</label>
                </div>
              </div>
            </div>
            {/* end of filter fifth */}

            {/* filter fifth */}
            <div className='candidates-left-filter-box'>
              <div
                onClick={() => handleDropdown("filter-dropdown6")}
                className='candidates-left-filter-box-heading'>
                <div>- Application Date </div>
                <DownArrIcon />
              </div>
              <div className='filter-dropdown6'>
                <div className='check-form'>
                  <input id='c-in-o' type='checkbox' />
                  <label htmlFor='c-in-o'>All</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-oo' type='checkbox' />
                  <label htmlFor='r-in-oo'>1 Day</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>3 Days</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>7 Days</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>15 Days</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>30 Days</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>2 Months</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>3 Months</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>6 Months</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>9 Months</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>1 Year</label>
                </div>
                <div className='check-form'>
                  <input id='r-in-o' type='checkbox' />
                  <label htmlFor='r-in-o'>More Than 1 Year </label>
                </div>
              </div>
            </div>
            {/* end of filter fifth */}
          </div>
        </div>
          
       
    
       
        <div className='candidates-right'>
          <div className='tob-btns'>
            <button className='btn btn-w btn-inactive'>All Candidates</button>
            <button className='btn btn-w btn-active'>Active Candidates</button>
            <button className='btn btn-w btn-inactive'>
              Inactive Candidates
            </button>
          </div>

          {/* listings bar */}
          <div className='listings-bar'>
            <div className='listings-bar-left'>
              <button className='btn btn-white'>
                <span className='batch-action-rel'>
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
                   
                      <li >
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

                <DownArrIcon className='batch-arrow' />
              </button>

              <div className='listings-bar-search'>
                <input
                  type='text'
                  placeholder='Search Job Title, Job ID, Tags'
                />
              </div>
              <button className='btn btn-white' style={{marginLeft:"1rem"}} onClick={()=>setIsFilter(!isFilter)}> Advance Search</button>
            </div>
            <div className='listings-bar-right'>
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

          {/* end listings bar */}

          {/* candidates */}
          <NewCandidate setCandidateDetail={setCandidateDetail} />
          <NewCandidate />
          <NewCandidate />
          <NewCandidate />
          {/* end of candidates */}
        </div>
       
      </div>
    );
  }
};

export default Candidates;
