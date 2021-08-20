import React from "react";
import "./ResponseForm.scss";
import background from "./../../asserts/icons/background.png";



const ResponseForm = ({ setOpenResponseForm, setSend }) => {
  return (
    <div className="feedbackForm-popup-container">
      <div className="feedbackForm-popup">
    

     < div className="feedbackForm-popup-body"> 
     <div className="form-head">

     <h1>Training Feedback</h1>
     <br></br>

     <h2>Name : Avi &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp;ID : #JT00125</h2> 
     <div className="createjob-adddoc-batch" style={{ display: "block" }}>
            <div>
              <label htmlFor="Name" style={{ color: "#515151" }}>
              Name{" "}
              </label>
            <p>Priyal</p>
           
            </div>



            <div>
              <label htmlFor="Name" style={{ color: "#515151" }}>
              Age Group{" "}
              </label>

              <div class="radio">
    <input id="radio-1" name="radio" type="radio" checked/>
    <label for="radio-1" class="radio-label">Checked</label>
  </div>

  <div class="radio">
    <input id="radio-2" name="radio" type="radio"/>
    <label  for="radio-2" class="radio-label">Unchecked</label>
  </div>

  <div class="radio">
    <input id="radio-3" name="radio" type="radio" disabled/>
    <label for="radio-3" class="radio-label">Disabled</label>
  </div>
  


               

        
           
            </div>

</div>
     </div>
     </div>
     
      </div>
    </div>
  );
};

export default ResponseForm;
