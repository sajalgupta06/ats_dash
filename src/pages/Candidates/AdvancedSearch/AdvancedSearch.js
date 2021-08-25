import React from "react";
import "./AdvancedSearch.scss";

export default function AdvancedSearch({setAdvencedSearch}) {
  return (
      <>
       <div onClick={() => setAdvencedSearch(false)} class="createjob-back" style={{marginBottom:"3rem"}}>
        ←
      </div>
    <div className="addvancedSearch-body">
      <h1>Advanced Search</h1>
      <div
        className="addvancedSearch-adddoc-batch"
        style={{ display: "block" }}
      >
        <div>
          <label htmlFor="anyKeywords" style={{ color: "#515151" }}>
            Any Keywords{" "}
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="anyKeywords"
            id="anyKeywords"
            type="text"
            placeholder="Operational Skills, designation role seperated by comma"
          />
        </div>

        <div>
          <label htmlFor="allKeywords" style={{ color: "#515151" }}>
        All Keywords (Must Have)
          </label>

          <input name="allKeywords" id="allKeywords" type="text" placeholder="Mandatory Skills, designation role seperated by comma " />
        </div>

        <div>
          <label htmlFor="excludingKeywords" style={{ color: "#515151" }}>
            Excluding Keywords
          </label>

          <input name="excludingKeywords" id="excludingKeywords" type="text" placeholder="Skills, designation role seperated by comma" />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="totalexp">
            <label htmlFor="totalExperience" style={{ color: "#515151" }}>
              {" "}
              Total Experience
            </label>
            <br></br>
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="totalExperienceMin"
              id="totalExperienceMin"
              type="number"
              placeholder="Min"
            />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="totalExperienceMax"
              id="totalExperienceMax"
              type="number"
              placeholder="Max"
            />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In Years
          </div>

          <div className="totalexp">
            <label htmlFor="annualSalary" style={{ color: "#515151" }}>
              {" "}
              Annual Salary
            </label>
            <br></br>
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="annualSalary"
              id="annualSalary"
              type="number"
              placeholder="Min"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="annualSalary"
              id="annualSalary"
              type="number"
              placeholder="Max"
            />{" "}
         
          </div>

          <div>
          <label htmlFor="currentLocation" style={{ color: "#515151" }}>
          Current Location{" "}
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="currentLocation"
            id="currentLocation"
            type="text"
            style={{marginTop:"2.5rem"}}
          />
        </div>

        </div>

        <div className="mt fw6">EMPLOYEE DETAILS</div>

        <div>
          <label htmlFor="functionalArea" style={{ color: "#515151" }}>
          Functiona lArea
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="functionalArea"
            id="functionalArea"
            type="text"
            placeholder="Select Functional Area/Role(S) or Start typing"
          />
        </div>

        <div>
          <label htmlFor="industry" style={{ color: "#515151" }}>
          Industry
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="industry"
            id="industry"
            type="text"
            placeholder="Select industry(S) or Start Typing"
          />
        </div>

        <div>
          <label htmlFor="employers" style={{ color: "#515151" }}>
          Employers
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="employers"
            id="employers"
            type="text"
            placeholder="Type Company Name"
          />
        </div>

        <div>
          <label htmlFor="excludedEmployers" style={{ color: "#515151" }}>
          Excluded Employers
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="excludedEmployers"
            id="excludedEmployers"
            type="text"
            placeholder="Type Company Name"
          />
        </div>

        <div>
          <label htmlFor="designation" style={{ color: "#515151" }}>
            Designation
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="designation"
            id="designation"
            type="text"
            placeholder="Type Designation"
          />
        </div>

        <div>
          <label htmlFor="noticePeriod" style={{ color: "#515151" }}>
          Notice Period
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="noticePeriod"
            id="noticePeriod"
            type="text"
            placeholder="Notice Period"
          />
        </div>

        <div className="mt fw6">EDUCATIONAL DETAILS</div>

        <div>
          <label
            htmlFor="fullName"
            style={{ color: "#515151", marginBottom: "2rem" }}
          >
            UG Qualification{" "}
          </label>
          <div>
            <button
              className="btn btn-w btn-inactive"
              style={{ background: "#fff", color: "#575757" }}
            >
              Any UG Qualification
            </button>
            <button className="btn btn-w btn-active">
              Specific UG Qualification
            </button>
            <button
              className="btn btn-w btn-inactive"
              style={{ background: "#fff", color: "#575757" }}
            >
              No UG Qualification
            </button>
          </div>
        
          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="ug"
            id="ug"
            type="text"
            placeholder="Type or Select UG Course From List"
          />
        </div>

        <div>
          <label htmlFor="instituteName" style={{ color: "#515151" }}>
           Institute Name
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="instituteName"
            id="instituteName"
            type="text"
            placeholder="Type Institute Name"
          />
        </div>

        <div>
          <label htmlFor="educationType" style={{ color: "#515151" }}>
          Education Type
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="educationType"
            id="educationType"
            type="text"
            placeholder="Type Here or Select"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>

        <div className="totalexp">
            <label htmlFor="yearOfGrad" style={{ color: "#515151" }}>
              {" "}
              Year Of Graduation
            </label>
            <br></br>
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="yearOfGrad"
              id="yearOfGrad"
              type="number"
              placeholder="From"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="yearOfGrad"
              id="yearOfGrad"
              type="number"
              placeholder="To"
            />{" "}
         
          </div>
        

        <div></div>
        <div></div>
        </div>

        <div>
          <label
            htmlFor="fullName"
            style={{ color: "#515151", marginBottom: "2rem" }}
          >
            PG Qualification{" "}
          </label>
          <div>
            <button
              className="btn btn-w btn-inactive"
              style={{ background: "#fff", color: "#575757" }}
            >
              Any PG Qualification
            </button>
            <button className="btn btn-w btn-active">
              Specific PG Qualification
            </button>
            <button
              className="btn btn-w btn-inactive"
              style={{ background: "#fff", color: "#575757" }}
            >
              No PG Qualification
            </button>
          </div>
        </div>
     
     
     
        <div className="mt fw6">ADDITIONAL DETAILS</div>

        <div>
          <label htmlFor="candidateCategory" style={{ color: "#515151" }}>
            Candidate Category
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="candidateCategory"
            id="candidateCategory"
            type="text"
            placeholder="Select Category"
          />
        </div>




        <div>
          <label htmlFor="diversity" style={{ color: "#515151" }}>
          Diversity
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="diversity"
            id="diversity"
            type="text"
            placeholder="Type Gender"
          />
        </div>




        <div style={{ display: "flex", justifyContent: "space-between" }}>

        <div className="totalexp">
            <label htmlFor="candidateAge" style={{ color: "#515151" }}>
              {" "}
            Candidate Age
            </label>
            <br></br>
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="candidateAge"
              id="candidateAge"
              type="number"
              placeholder="Min"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="candidateAge"
              id="candidateAge"
              type="number"
              placeholder="Max"
            />{" "}
         </div>
         <div></div>
          </div>




        <div>
          <label htmlFor="workStatusFor" style={{ color: "#515151" }}>
          Work Status For
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="workStatusFor"
            id="workStatusFor"
            type="text"
            placeholder="USA"
          />
        </div>



        <div>
          <label htmlFor="workPermitFor" style={{ color: "#515151" }}>
          Work Permit For
          </label>

          <input
            //   onChange={handleEventChange}
            //   value={candidateProfile.jobID}
            name="workPermitFor"
            id="workPermitFor"
            type="text"
            placeholder="Select Countries"
          />
        </div>





        <div className="mt fw6">DISPLAY DETAILS</div>

        <label htmlFor="candidateAge" style={{ color: "#515151" }}>Show Only Candidates Seeking</label>
        <div style={{marginTop:"2rem"}}> 

        <div className="check-form check-adv" style={{marginRight:"-1rem"}}>
              <input id="r-in-o" type="checkbox" />
              <label htmlFor="r-in-o"> Verified Mobile Number</label>
            </div>
            <div className="check-form check-adv">
              <input id="r-in-o" type="checkbox" />
              <label htmlFor="r-in-o"> Verified Email ID</label>
            </div>
            <div className="check-form check-adv">
              <input id="r-in-o" type="checkbox" />
              <label htmlFor="r-in-o"> Attached Resume</label>
            </div>

        </div>




        <div style={{ display: "flex", justifyContent: "space-between" }}>

        <div className="totalexp">
            <label htmlFor="candidateSeeking" style={{ color: "#515151" }}>
            Show Candidates Seeking
            
            </label>
            <br></br>
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="candidateSeeking"
              id="candidateSeeking"
              type="number"
              placeholder="Job Type"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="candidateSeeking"
              id="candidateSeeking"
              type="number"
              placeholder="Employment Type"
            />{" "}
         </div>
         <div></div>
         
          </div>





          <div style={{ display: "flex", justifyContent: "space-between" }}>

          <div className="totalexp">
            <label htmlFor="ResumePerPage" style={{ color: "#515151" }}>
            Resume Per Page
            
            </label>
            <br></br>
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="candidateSeeking"
              id="candidateSeeking"
              type="number"
              placeholder="40"
            />
           
         </div> 
         <div className="totalexp">
            <label htmlFor="sortBy" style={{ color: "#515151" }}>
            Sort By
            
            </label>
            <br></br>
            <input
              //   onChange={handleEventChange}
              //   value={candidateProfile.jobID}
              name="sortBy"
              id="sortBy"
              type="text"
              placeholder="Relevance"
            />
           
         </div>
         <div></div>
          </div>

          <button className="btn btn-w btn-active">Find</button>


      </div>
    </div>
 
 </> );
}
