import React from "react";
import "./ManualLogin.scss";

export default function ManualLogin({ setManualLogin }) {
  return (
    <div>
        <div
          className="feedbackForm-popup-container"
        
        >
          <div className="feedbackForm-popup" style={{width:"102rem"}}>
            <div className="feedbackForm-popup-body" style={{height:"72rem"}}>
              <div className="form-head">
                <h1>Manual Lgin</h1>
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
            <label htmlFor='arrivalTime'>Arrival Time</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.clientJobId}
              name='arrivalTime'
              id='arrivalTime'
              type='time'
            />
          </div>
          <div>
            <label htmlFor='purpose'>Purpose of Maual Login</label>

            <input
              name='purpose'
              // onChange={handleEventChange}
              // value={jobRequirementDetails.title}
              id='purpose'
              type='text'
            />
          </div>
          {/* end of first row */}

          {/* second row */}
        <div>
            <label htmlFor='breakFrom'>Break Time From</label>
            <input
              name='breakFrom'
              // value={jobRequirementDetails.nofPos}
              // onChange={handleEventChange}
              id='breakFrom'
              type='time'
            />
          </div>
          {/* end of second row */}

          {/* third row */}
          <div>
            <label htmlFor='breakTo'>Break Time To</label>
            <input
              name='breakTo'
              // value={jobRequirementDetails.nofPos}
              // onChange={handleEventChange}
              id='breakTo'
              type='time'
            />
          </div>
          <div>
            <label htmlFor='totalBreak'>Total Break Time</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.skills}
              name='totalBreak'
              id='totalBreak'
              type='text'
            />
          </div>
          
          <div>
            <label htmlFor='exitTime'>Exit Time</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.skills}
              name='exitTime'
              id='exitTime'
              type='time'
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
                  onClick={() => setManualLogin(false)}
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
  );
}
