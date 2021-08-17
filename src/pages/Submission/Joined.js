import React from 'react'
import Tables from '../../components/Table/Tables'
import "./Submission.scss";
import {
  CheckboxIcon,
  DownArrIcon,
  Filter2Icon,
  FilterIcon,
} from "../../asserts/icons";

export default function Joined({ view, setView }) {
    return (
        <div>
                <div className="header">
       <div className='tob-btns'>
            <button className='btn btn-w btn-inactive' onClick={() => setView("submissions")}>All Submissions</button>
            <button className='btn btn-w btn-inactive'>My Submissions</button>
            <button className='btn btn-w btn-inactive' onClick={() => setView("interviewScheduled")}>Interview Scheduled</button>
            <button className='btn btn-w btn-active' onClick={() => setView("joined")}>
              Joined
            </button>
          </div>
          <div className='listings-bar' style={{margin:'2rem 0'}}>
            <div className='listings-bar-left'>
              <button className='btn btn-white'>
                <span className='batch-action-rel'>
                  <span>Batch Actions</span>
                  {/* <>
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
                </> */}
                </span>

                <DownArrIcon className='batch-arrow' />
              </button>
              <div className='listings-bar-search'>
                <input
                  type='text'
                  placeholder='Search Job Title, Job ID, Tags'
                />
              </div>
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


       </div>
      
          <Tables></Tables>
        </div>
    )
}
