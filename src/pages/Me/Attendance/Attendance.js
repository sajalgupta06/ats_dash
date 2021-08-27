import React, { useState } from "react";
import LeaveRequestSlip from "../../../components/LeaveRequest/LeaveRequestSlip";
import './Attendance.scss'
import AttendanceTab from "./Attendance/AttendanceTab";
import LeaveRequest from "./LeaveRequest/LeaveRequest";
import LeaveStats from "./LeaveStats/LeaveStats";

export default function Attendance() {
  const [navClicked, setNavClicked] = useState("Attendance");
  const [applyLeave, setApplyLeave] = useState(false);

  return (
    <div>
      <div className="navOptions" style={{    justifyContent: "space-between"
}}>
          <div>

       
        <div
          className={`option ${
            navClicked === "Attendance" ? "option-active" : ""
          }`}
          onClick={() => setNavClicked("Attendance")}
        >
          <h3>Attendance</h3>
        </div>
        <div
          className={`option ${
            navClicked === "LeaveRequest" ? "option-active" : ""
          }`}
          onClick={() => setNavClicked("LeaveRequest")}
        >
          <h3>Leave Request</h3>
        </div>

        <div
          className={`option ${
            navClicked === "LeaveStats" ? "option-active" : ""
          }`}
          onClick={() => setNavClicked("LeaveStats")}
        >
          <h3>Leave Stats</h3>
        </div>
    
        </div>

{navClicked==="LeaveRequest"&&(

    
    <button className="btn btn-w btn-active"
    onClick={()=>setApplyLeave(true)}
    >+Apply</button>
    )
}
      </div>
      {applyLeave && (<LeaveRequestSlip setApplyLeave={setApplyLeave}></LeaveRequestSlip>)}
      
      {navClicked === "Attendance" && <AttendanceTab></AttendanceTab>}
      {navClicked === "LeaveRequest" && <LeaveRequest></LeaveRequest>}
      {navClicked === "LeaveStats" && <LeaveStats></LeaveStats>}
    </div>
  );
}
