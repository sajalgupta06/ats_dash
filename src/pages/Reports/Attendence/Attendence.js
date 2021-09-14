import React, {useState} from 'react'

import AttendCustom from './AttendCustom/AttendCustom'
import AttendAuto from './AttendAuto/AttendAuto';
import AttendQuick from './AttendQuick/AttendQuick';


export default function Attendence() {

    const [navClicked, setNavClicked] = useState("AttendQuick");
    
    return (
      <div>
        <div className="navOptions" style={{    justifyContent: "space-between"
  }}>
            <div>
  
         
          <div
            className={`option ${
              navClicked === "AttendQuick" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("AttendQuick")}
          >
            <h3>Quick Report</h3>
          </div>
          <div
            className={`option ${
              navClicked === "AttendCustom" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("AttendCustom")}
          >
            <h3> Customized Report</h3>
          </div>
  
          <div
            className={`option ${
              navClicked === "AttendAuto" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("AttendAuto")}
          >
            <h3>Auto Emailing</h3>
          </div>
      
          </div>
  
 
        </div>
     
        
        {navClicked === "AttendQuick" &&  <AttendQuick></AttendQuick>}
        {navClicked === "AttendCustom" && <AttendCustom></AttendCustom>}
        {navClicked === "AttendAuto" && <AttendAuto></AttendAuto>}
      </div>
    )
}
