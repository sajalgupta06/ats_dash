import React, { useState } from 'react'
import {
    CheckboxIcon,
    DownArrIcon,
  
    FilterIcon,
  } from "../../../asserts/icons";


  import NewCandidate from "../../../components/NewCandidate/NewCandidate";
  import CandidateProfile from "../../../components/CandidateProfile/CandidateProfile";
  


export default function InactiveCandidates({setCandidateDetail}) {


  const [isFilter, setIsFilter] = useState(false);
 
    return (
       
            <>
            <div className="listings-bar">
            <div className="listings-bar-left">
              <button className="btn btn-white">
                <span className="batch-action-rel">
                  <span>Batch Actions</span>
                  <>
                    <ul className="batch-action">
                      <div className="batch-action-square">&nbsp;</div>
                   

                    </ul>
                  </>
                </span>

                <DownArrIcon className="batch-arrow" />
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
                onClick={() => setIsFilter(!isFilter)}
              >
                {" "}
                Advance Search
              </button>
            </div>
            <div className="listings-bar-right">
              <div className="plus">
                <CheckboxIcon />
              </div>
              <div className="listings-bar-right-filter">
                <FilterIcon />
                <div>Newest</div>
                <DownArrIcon />
              </div>
            </div>
          </div>

        
          <NewCandidate setCandidateDetail={setCandidateDetail} />
          <NewCandidate />
          <NewCandidate />
          <NewCandidate />
            </>
       
    )
}

