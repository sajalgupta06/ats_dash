import React, {useState} from 'react'

import AutoEmail from './JobAuto/AutoEmail';
import JobCustomized from './JobCustom/JobCustomized';
import JobQuick from './JobQuick/JobQuick';


export default function JobPosting() {

    const [navClicked, setNavClicked] = useState("JobQuick");
    
    return (
      <div>
        <div className="navOptions" style={{    justifyContent: "space-between"
  }}>
            <div>
  
         
          <div
            className={`option ${
              navClicked === "JobQuick" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("JobQuick")}
          >
            <h3>Quick Report</h3>
          </div>
          <div
            className={`option ${
              navClicked === "JobCustomized" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("JobCustomized")}
          >
            <h3> Customized Report</h3>
          </div>
  
          <div
            className={`option ${
              navClicked === "AutoEmail" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("AutoEmail")}
          >
            <h3>Auto Emailing</h3>
          </div>
      
          </div>
  
 
        </div>
     
        
        {navClicked === "JobQuick" && <JobQuick></JobQuick>}
        {navClicked === "JobCustomized" && <JobCustomized></JobCustomized>}
        {navClicked === "AutoEmail" && <AutoEmail></AutoEmail>}
      </div>
    )
}
