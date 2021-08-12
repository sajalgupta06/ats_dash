import React from "react";
import {
  BreifcaseIcon,
  DownArrIcon,
  LinkedinIcon,
  LockIcon,
  SchoolIcon,
  TagIcon,
} from "../../asserts/icons";
import "./NewCandidate.scss";
import Placeholder from "./../../asserts/images/placeholder.jpg";

const NewCandidate = ({ setCandidateDetail }) => {
  return (
    <div onClick={() => setCandidateDetail(true)} className='newcad mb5'>
      <div className='newcad-top'>
        <div className='newcad-top-left'>
          <div className='newcad-top-name'>P A</div>
          <div className='newcad-top-active'>Active</div>
          <div className='newcad-top-cs'>Client Submitted</div>
        </div>
        <div className='newcad-top-right'>
          <div className='newcad-top-lock'>
            <LockIcon />
            <div>Unlock Profile</div>
          </div>
          <img src={Placeholder} alt='placeholder' />
        </div>
      </div>
      <div className='newcad-role'>Automation Testing Analyst</div>
      <div className='newcad-desc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel purus erat. Pellentesque sit amet molestie justo.
      </div>
      <div className='newcad-infski'>
        <div className='jobpost-user-info'>
          <span>#JT-673453</span>
          <li>05 Positions </li>
          <li>$14,000 - $25,000</li>
          <li>Delhi, India (Remote)</li>
        </div>
        <div className='job-candidate-skills'>
          <div>Java</div>
          <div>Automated Testing</div>
          <div>Regression Testing</div>
          <div>Python</div>
          <div>Maven</div>
        </div>
      </div>

      <div className='job-candidate-ed mb2 ed-ex'>
        <div className='job-candidate-ed-left mr3'>
          <SchoolIcon />
          <div>University Of Melbourne (BCs)</div>
        </div>
        <div className='job-candidate-ed-right'>
          <BreifcaseIcon />
          <div>Worked as a Senior Analyst</div>
        </div>
      </div>

      {/* new candidate bottom */}
      <div className='newcad-bottom'>
        <div className='newcad-bottom-left'>
          <div className='mr1'>Aplied for: </div>
          <div className='newcad-bottom-lock'>
            <div>Senior Analyst</div>
            <DownArrIcon />
          </div>
          <div className='newcad-bottom-txt'>
            Last active on 14th July 2021, 11 am • Last Modified on 5th March
            2021
          </div>
        </div>
        <div className='newcad-bottom-right'>
          <TagIcon />
          <LinkedinIcon />
        </div>
      </div>
      {/* end of  new candidate bottom */}
    </div>
  );
};

export default NewCandidate;
