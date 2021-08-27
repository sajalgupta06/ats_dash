import React, { useState } from "react";
import TeamAttendance from "./TeamAttendance/TeamAttendance";
import TeamLeaveRequuest from "./TeamLeaveRequest/TeamLeaveRequuest";
import './MyTeam.scss'
export default function MyTeam() {
  const [navClicked, setNavClicked] = useState("Attendance");

  return (
    <div>
      <div className="navOptions">
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
      </div>
        {navClicked === "Attendance" && <TeamAttendance></TeamAttendance>}
      {navClicked === "LeaveRequest" && <TeamLeaveRequuest></TeamLeaveRequuest>}
    </div>
  );
}
