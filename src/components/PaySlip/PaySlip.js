import React from "react";
import "./PaySlip.scss";
import background from "./../../asserts/icons/background.png";



const PaySlip = ({ setShowSlip, setSend }) => {
  return (
    <div className="feedbackForm-popup-container" onClick={()=>setShowSlip(false)}>
      <div className="feedbackForm-popup">
    

     < div className="feedbackForm-popup-body"
      style={{height:"56rem"}}
     > 
     <div className="form-head">

     <h1>Received Amount</h1>
     <br></br>

<table>
  <tr>
    <th>Candidate Name</th>
    <th>Received Amount</th>
    <th>Eligible Amount</th>
  </tr>
  <tr>
    <td>Abhishek Sawant</td>
    <td>40,000</td>
    <td>40,000</td>
  </tr>

</table>
     
<br></br>
<br></br>

<h3 style={{fontWeight:"400"}}>Total : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs. 40,000/-</h3>
<h3 style={{fontWeight:"400"}}>In Words :  &nbsp;Fourty Thousands Only.</h3>

<br></br>
<br></br>


<p style={{color:"#515151"}}>This is an auto generated invoice. No signature is required.</p>
<br></br>
<br></br>
<p>With Regards,</p>
<p>Team ATS</p>

     </div>
     </div>
     
      </div>
    </div>
  );
};

export default PaySlip;
