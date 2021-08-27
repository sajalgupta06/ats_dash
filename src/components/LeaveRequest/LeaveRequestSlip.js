import React from 'react'
import '../ManualLogin/ManualLogin.scss'

export default function LeaveRequestSlip({setApplyLeave}) {
    return (
        <div>
            
            <div
        className="feedbackForm-popup-container"
       
      >
        <div className="feedbackForm-popup" style={{width:"102rem"}}>
          <div className="feedbackForm-popup-body" style={{height:"72rem"}}>
            <div className="form-head">
              <h1>Apply For Leave Request</h1>
              <br></br>

              <div className='createjob-adddoc-batch'>
        {/* first row */}
        <div>
          <label htmlFor='employeeID'>Employee ID </label>

        
          <input
            // onChange={handleEventChange}
            // value={jobRequirementDetails.jobID}
            name='employeeID'
            id='employeeID'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='employeeName'>Employee Name</label>
          <input
            // onChange={handleEventChange}
            // value={jobRequirementDetails.clientJobId}
            name='employeeName'
            id='employeeName'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='employeeDesignation'>Employee Designation</label>

          <input
            name='employeeDesignation'
            // onChange={handleEventChange}
            // value={jobRequirementDetails.title}
            id='employeeDesignation'
            type='text'
          />
        </div>
        {/* end of first row */}

        {/* second row */}
       <div>
          <label htmlFor='leavesRequired'>Number of leaves required</label>
          <input
            name='leavesRequired'
            // value={jobRequirementDetails.nofPos}
            // onChange={handleEventChange}
            id='leavesRequired'
            type='text'
          />
        </div>
        {/* end of second row */}

        {/* third row */}
        <div>
          <label htmlFor='leaveFrom'>Leave From</label>
          <input
            name='leaveFrom'
            // value={jobRequirementDetails.nofPos}
            // onChange={handleEventChange}
            id='leaveFrom'
            type='date'
          />
        </div>
        <div>
          <label htmlFor='leaveTo'>Leave To</label>
          <input
            // onChange={handleEventChange}
            // value={jobRequirementDetails.skills}
            name='leaveTo'
            id='leaveTo'
            type='date'
          />
        </div>
         
        <div>
          <label htmlFor='purpose'>Purpose Of Leave</label>
          <input
            // onChange={handleEventChange}
            // value={jobRequirementDetails.skills}
            name='purpose'
            id='purpose'
            type='text'
          />
        </div>

        <div>
          <label htmlFor='contactNumber'>Contact Number</label>
          <input
            // onChange={handleEventChange}
            // value={jobRequirementDetails.skills}
            name='contactNumber'
            id='contactNumber'
            type='number'
          />
        </div>


        <div>
          <label htmlFor='emergencyContact'>Emergency Contact</label>
          <input
            // onChange={handleEventChange}
            // value={jobRequirementDetails.skills}
            name='emergencyContact'
            id='emergencyContact'
            type='number'
          />
        </div>
       
        </div>

        <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "2rem",
            }}
          >
            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <div
                className="btn btn-w btn-cancel btn-active"
                style={{ minWidth: "0rem", display: "inline-block" }}
                onClick={() => setApplyLeave(false)}
              >
                Cancel
              </div>
            </div>

            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <div
                className="btn btn-w btn-cancel btn-active"
                style={{ minWidth: "0rem", display: "inline-block" , color:"#2186f2",border:"1px solid #2186f2"}}
              >
                Preview
              </div>
            </div>

            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <button
                className="btn btn-w btn-inactive reply"
                // onClick={()=>{setSend(true);setPopupOpen(false)} }
                style={{fontSize:"2rem" , position:"relative",top:"-0.8rem"}}
              >
            Request
              </button>
            </div>
          </div>



            </div>
          </div>
        </div>
      </div>
   
        </div>
    )
}
