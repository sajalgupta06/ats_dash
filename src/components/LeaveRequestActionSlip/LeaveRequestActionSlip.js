import React from "react";
import "../PaySlip/PaySlip.scss";
import './LeaveRequestActionSlip.scss'

const LeaveRequestActionSlip = ({ setAction }) => {
  return (
    <div
      className="feedbackForm-popup-container"
     
    >
      <div className="feedbackForm-popup"
      style={{width:"130rem"}}>
      < div className="feedbackForm-popup-body"
      style={{height:"70rem"}}
     > 
     <div className="form-head">

     <h1>Leave Stats</h1>
     <br></br>

<h1 style={{fontWeight:"500"}}>Name: Abhishek  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ID: #JT00150</h1>


<div className="leave-top">


<div className="leave-box">
<h3>Total Leave</h3>
<h2>5 Days</h2>
<h4>Last Leave 2 August, 2021</h4>
</div>



<div className="leave-box">
<h3>Last Leave</h3>
<h2>5 Days</h2>
<h4>Leave  2 August, 2021</h4>
</div>




<div className="leave-box">
<h3>Remaining Leave</h3>
<h2>5 Days</h2>
<h4>Leave From 2 August, 2021</h4>
</div>



<div className="leave-box">
<h3>LOP</h3>
<h2>5 Days</h2>
<h4>Leave From 2 August, 2021</h4>
</div>






</div>



     <br></br>
     <br></br>
<h1>Applied Leave</h1>
    


<div className="leave-top">




<div className="leave-box">
<h3>Total Days</h3>
<h2>5 Days</h2>
<h4>Leave From 2 August, 2021</h4>
</div>




<div className="leave-box">
<h3>Applied On</h3>
<h2>5 Days</h2>
<h4>Leave From 2 August, 2021</h4>
</div>



<div className="leave-box">
<h3>Applied For</h3>
<h2>5 Days</h2>
<h4>Leave From 2 August, 2021</h4>
</div>


</div>



<div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <div
                className="btn btn-w btn-cancel btn-active"
                style={{ minWidth: "0rem", display: "inline-block" }}
                onClick={() => setAction(false)}
              >
                Decline
              </div>
            </div>



            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <button
                className="btn btn-w btn-inactive reply"
                // onClick={()=>{setSend(true);setPopupOpen(false)} }
                style={{fontSize:"2rem" , position:"relative",top:"-0.8rem"}}
              >
            Approve
              </button>
            </div>
          </div>


     </div>
     </div>
      </div>
    </div>
  );
};

export default LeaveRequestActionSlip;
