import React, {useState} from 'react'

import LeaveAuto from './LeaveAuto/LeaveAuto';
import LeaveCustom from './LeaveCustom/LeaveCustom';

import LeaveQuick from './LeaveQuick/LeaveQuick';


export default function JobPosting() {

    const [navClicked, setNavClicked] = useState("LeaveQuick");
    
    return (
      <div>
        <div className="navOptions" style={{    justifyContent: "space-between"
  }}>
            <div>
  
         
          <div
            className={`option ${
              navClicked === "LeaveQuick" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("LeaveQuick")}
          >
            <h3>Quick Report</h3>
          </div>
          <div
            className={`option ${
              navClicked === "LeaveCustom" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("LeaveCustom")}
          >
            <h3> Customized Report</h3>
          </div>
  
          <div
            className={`option ${
              navClicked === "LeaveAuto" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("LeaveAuto")}
          >
            <h3>Auto Emailing</h3>
          </div>
      
          </div>
  
 
        </div>
     
        
        {navClicked === "LeaveQuick" && <LeaveQuick></LeaveQuick>}
        {navClicked === "LeaveCustom" && <LeaveCustom></LeaveCustom>}
        {navClicked === "LeaveAuto" && <LeaveAuto></LeaveAuto>}
      </div>
    )
}
