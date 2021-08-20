import React from "react";
import "./FeedbackForm.scss";
import background from "./../../asserts/icons/background.png";



const FeedbackForm = ({ setOpenFeedbackForm, setSend }) => {
  return (
    <div className="feedbackForm-popup-container">
      <div className="feedbackForm-popup">
    

        <div className="feedbackForm-popup-body">
        <div
        style={{height:"30rem"}}
        >
            
            <img src={background} style={{height:"100%",width:"100%"}} ></img>

           
        </div>
          <div className="createjob-adddoc-batch" style={{ display: "block" }}>
            <div>
              <label htmlFor="fullName" style={{ color: "#515151" }}>
                Full Name{" "}
              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="fullName"
                id="fullName"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="contactNumber" style={{ color: "#515151" }}>
                Contact Number{" "}
              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="contactNumber"
                id="contactNumber"
                type="number"
              />
            </div>

            <div>
              <label htmlFor="email" style={{ color: "#515151" }}>
                Email Address{" "}
              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="email"
                id="email"
                type="email"
              />
            </div>

            <div>
              <label htmlFor="department" style={{ color: "#515151" }}>
                Department
              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="department"
                id="department"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="mentor" style={{ color: "#515151" }}>
                Mentor{" "}
              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="mentor"
                id="mentor"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="joiningDate" style={{ color: "#515151" }}>
                Join Date{" "}
              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="joiningDate"
                id="joiningDate"
                type="date"
              />
            </div>

            <div>
              <label htmlFor="resigningDate" style={{ color: "#515151" }}>
                Resigning Date
              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="resigningDate"
                id="resigningDate"
                type="date"
              />
            </div>

            <div>
              <label htmlFor="enjoy" style={{ color: "#515151" }}>
                What did you enjoy most about your job? Why?
              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="enjoy"
                id="enjoy"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="leastLike" style={{ color: "#515151" }}>
                What did you like least about your job? Why?
              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="leastLike"
                id="leastLike"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="better" style={{ color: "#515151" }}>
              What could have been better about your job? Please give an example.

              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="better"
                id="better"
                type="text"
              />
            </div>





            <div>
              <label htmlFor="duties" style={{ color: "#515151" }}>
              Were your duties clearly defined? Did you work to set objectives?


              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="duties"
                id="duties"
                type="text"
              />
            </div>





            <div>
              <label htmlFor="role" style={{ color: "#515151" }}>
              Did you feel/understand how your role contributed to the delivery of the Company’s aim?


              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="role"
                id="role"
                type="text"
              />
            </div>






            <div>
              <label htmlFor="training" style={{ color: "#515151" }}>
              Did you receive adequate training both on-the-job and specialised?


              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="training"
                id="training"
                type="text"
              />
            </div>






            <div>
              <label htmlFor="lastTraining" style={{ color: "#515151" }}>
              When was your last training and what did it involve?


              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="lastTraining"
                id="lastTraining"
                type="text"
              />
            </div>






            <div>
              <label htmlFor="safety" style={{ color: "#515151" }}>
              Were health and safety requirements met? Please give examples.


              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="safety"
                id="safety"
                type="text"
              />
            </div>





            <div>
              <label htmlFor="pay" style={{ color: "#515151" }}>
              How do you feel about the pay and benefits provided by the Trust?


              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="pay"
                id="pay"
                type="text"
              />
            </div>






            <div>
              <label htmlFor="morale" style={{ color: "#515151" }}>
              How would you describe morale in the Company? Please explain it with an example.


              </label>

              <input
                //   onChange={handleEventChange}
                //   value={candidateProfile.jobID}
                name="morale"
                id="morale"
                type="text"
              />
            </div>
          </div>
        
        
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <div
                className="btn btn-w btn-cancel btn-active"
                style={{ minWidth: "0rem", display: "inline-block" }}
                onClick={()=>setOpenFeedbackForm(false)}   
              >
                Cancel
              </div>
            </div>

            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <button
                className="btn btn-w btn-inactive reply"
                // onClick={()=>{setSend(true);setPopupOpen(false)} }
                style={{fontSize:"2rem" , position:"relative",top:"-0.8rem"}}
              >
            Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
