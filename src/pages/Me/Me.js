import React, { useState } from "react";
import Attendance from "./Attendance/Attendance";
import Feedback from "./Feedback/Feedback";
import MyTeam from "./MyTeam/MyTeam";
import Payroll from "./Payroll/Payroll";
import Tickets from "./Tickets/Tickets";

export default function Me() {
  const [clicked, setClicked] = useState("Attendance");
  return (
    <div>
      <div className="tob-btns">
        <button
          className={`btn btn-w btn-${
            clicked === "Attendance" ? "active" : "inactive"
          }`}
          onClick={() => setClicked("Attendance")}
          
        >
          Attendance
        </button>

        <button
          className={`btn btn-w btn-${
            clicked === "Ticket" ? "active" : "inactive"
          }`}
          onClick={() => {
            setClicked("Ticket");
          }}
        >
          Ticket
        </button>

        <button
          className={`btn btn-w btn-${
            clicked === "Payroll" ? "active" : "inactive"
          }`}
          onClick={() => setClicked("Payroll")}
        >
          Payroll
        </button>

        <button
          className={`btn btn-w btn-${
            clicked === "Feedback" ? "active" : "inactive"
          }`}
          onClick={() => setClicked("Feedback")}
        >
          Feedback
        </button>

        <button
          className={`btn btn-w btn-${
            clicked === "MyTeam" ? "active" : "inactive"
          }`}
          onClick={() => setClicked("MyTeam")}
        >
          My Team
        </button>
      </div>

      {clicked === "Attendance" && (
        <>
          <Attendance></Attendance>
        </>
      )}
      {clicked === "Tickets" && (
        <>
          <Tickets></Tickets>
        </>
      )}
      {clicked === "Payroll" && (
        <>
          <Payroll></Payroll>
        </>
      )}
      {clicked === "Feedback" && (
        <>
          <Feedback></Feedback>
        </>
      )}

      {clicked === "MyTeam" && (
        <>
          <MyTeam></MyTeam>
        </>
      )}
    </div>
  );
}
