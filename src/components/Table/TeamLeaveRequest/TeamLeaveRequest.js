
import React, { useState } from "react";
import LeaveRequestActionSlip from "../../LeaveRequestActionSlip/LeaveRequestActionSlip";
import "../JoinedTable/JoinedTable.scss";


export default function TeamLeaveRequest() {
  const [action, setAction] = useState(false)
   
  return (
    <div>
      <div class="container">
        <table class="table table--shaded">
        <thead class="table__head">
            <tr class="table__row">
            <td class="table__cell table__cell--no-wrap">
               Name
              </td>

              <td class="table__cell table__cell--no-wrap">
               ID
              </td>
              <td class="table__cell table__cell--no-wrap">
               Applied On
              </td>
              <td class="table__cell table__cell--no-wrap">
                Comments
              </td>
              <td class="table__cell table__cell--no-wrap">Leave Taken</td>
              <td class="table__cell table__cell--remaino-wrapnder">
                Applied Days
              </td>
              <td class="table__cell table__cell--no-wrap">LOP</td>
              <td class="table__cell table__cell--no-wrap">Status</td>
              <td class="table__cell table__cell--no-wrap">Action</td>
            </tr>
          </thead>
          
          <tbody class="table__body">

            {[...Array(10)].map((elementInArray, index) => {
                return (
                    <>
                     <tr className="spacer"></tr>
            <tr class="table__row">
            
            <td class="UserTable__name table__cell table__cell--no-wrap">
                Avi
              </td>


              <td class="UserTable__name table__cell table__cell--no-wrap">
            #J4521FFD
              </td>
         
              <td class="UserTable__name table__cell table__cell--no-wrap">
                22 July, 2021
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                Lorem Ipsum
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                5 Days
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              3 Days
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              4 Days
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap"
              style={{color:"red"}}
             
              >
               Pending
              </td>

              <td class="UserTable__name table__cell table__cell--no-wrap"
            
              >
               <button className="btn btn-w btn-active" style={{borderRadius:"1rem",fontSize:"2rem"}}  onClick={()=>setAction(true)}>Take Action</button>
              </td>
            </tr>
          </>
                )
            } 
)}
                 </tbody>
        </table>
{
  action&&(
    <LeaveRequestActionSlip setAction={setAction} ></LeaveRequestActionSlip>
  )
}

        <div className="table-footer">
                <div className="footer-left">
                    Showing 10 from 100 data
                </div>
                <div className="footer-right">  

                    <button className="btn btn-w btn-inactive">{`<< Previous`}</button>
                    
                    <button  className="btn btn-inactive pages">1</button>
                    <button  className="btn  btn-inactive pages">2</button>
                 
                    
                    <button className="btn btn-w btn-inactive">{`Next >>`}</button>
                </div>
            </div>
      </div>
    </div>
  );
}
