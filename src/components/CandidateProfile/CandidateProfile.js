import React, { useContext, useEffect, useState } from "react";
import "./CandidateProfile.scss";
import person from "../../asserts/icons/person.png";
import { InformationIcon } from "./../../asserts/icons/index";
import Toggle from "../Toggle/Toggle";
import lock from "../../asserts/icons/lock.png";
import dots from "../../asserts/icons/dots.png";
import dots2 from "../../asserts/icons/dots2.png";
import cloud from "../../asserts/icons/cloud.png";
import pencil from "../../asserts/icons/pencil.png";
import calender from "../../asserts/icons/calender.png";
import chat from "../../asserts/icons/chat.png";
import { LockIcon, DownArrIcon } from "../../asserts/icons";
import Popup from "../Bulk-Email-Popup/Popup";
import ChatScreen from "../ChatScreen/ChatScreen";
import ScheduleMeeting from "../ScheduleMeeting/ScheduleMeeting";

import linkedin from "../../asserts/icons/linkedin.svg";
import attach from "../../asserts/icons/attach.png";
import download from "../../asserts/icons/download.png";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import axios from "axios";
import { MyContext } from "../../App";
import { URL } from "../../config";

const CandidateProfile = ({ setIsCandidateDetail, candidateDetail }) => {

  const token = localStorage.getItem("token");
  const data = useContext(MyContext)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);

  }

  const [buttonName,setButtonName] = useState("")

  const [temp,setTemp ] = useState(candidateDetail)

  const [candidateProfile, setCandidateProfile] = useState({
    candidateID: "",
    candidateName: "",
    currentDesignation: "",
    currentCompany: "",
    currentCtc: "",
    expectedCtc: "",
    dateOfBirth: "",
    workExperience: "",
    maritalStatus: "",
    highestEducationQual: "",
    institute: "",
    readyToRelocate: "",
    phone: [],
    email: "",
    noticePeriod: "",
    currentLocation: "",
    prefferedLocation: "",
    source: "",
    headline: "",
    summary: "",
    socials: [],
    documents: "",
    workExperience2: [],
    education: [],
    skills: [],
    locked:"",
    requirements:[]
  });

  const [obj, setObj] = useState("");

  const stageUser = async (reqId,userId,text) => {

    try {
     

      const response = await axios({
     
        url: `${URL}/api/dash/requirements/stage/${reqId}`,
        method: "PUT",
        data: {update:text,applicantId:userId},
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.status === "success") {
        console.log("Success Update");
        // setCandidateProfile({...candidateProfile,})
        if(text==="underReview1"){
          setButtonName("Awaiting Screening")
        }
        else if(text==="underReview2"){
          setButtonName("Interview Scheduled")
        }
        else if(text==="underReview3"){
          setButtonName("Interview Feedback")
        }
        else if(text==="underReview4"){
          setButtonName("Shortlisted")
        }
        else if(text==="underReview5"){
          setButtonName("Onboarding")
        }
        else if(text==="underReview6"){
          setButtonName("On Hold")
        }
        else if(text==="dropped"){
          setButtonName("Washed Away")
        }
        else if(text==="submitted"){
          setButtonName("Joined")
        }
        else if(text==="rejected"){
          setButtonName("Disqualified")
        }
      }
      console.log(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

const unlockProfile=async()=>{

  // localStorage.setItem("credits",candidateDetail.credits-10)
  // data.setCredits({type:"SET_CREDITS",payload:candidateDetail.credits-10})

  try {
        const response = await axios({
        url: `${URL}/api/dash/app/user/${candidateDetail._id}`,
        method: "PUT",
        data: {locked:false},
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.status === "success") {
        localStorage.setItem("credits",candidateDetail.credits-10)
        data.setCredits({type:"SET_CREDITS",payload:candidateDetail.credits-10})

        console.log("Successfullt unlocked");
      }
      console.log(response.data);
      setCandidateProfile({...candidateProfile,locked:false})
   
  } catch (err) {
    console.log(err.response);
  }
}

useEffect(() => {
  console.log(candidateProfile)
  console.log(buttonName)
}, [candidateProfile,buttonName])

  useEffect(() => {
    setCandidateProfile({
        candidateName: candidateDetail.name,
      currentDesignation: candidateDetail.currentDesignation,
      
      highestEducationQual: candidateDetail.highestEducation,

      workExperience: `${
        candidateDetail.experience
          ? `${candidateDetail.experience.split(" ")[1]} Years ${
              candidateDetail.experience.split(" ")[0]
            } Months `
          : ""
      }`,
      email: candidateDetail.email,
      phone: candidateDetail.phone,

      dateOfBirth: `${
        candidateDetail.birthDate
          ? `${new Date(candidateDetail.birthDate).toLocaleDateString()}`
          : ""
      }`,
      headline: candidateDetail.headline,
      noticePeriod: `${
        candidateDetail.noticePeriod
          ? `${candidateDetail.noticePeriod.split(" ")[1]} Years ${
              candidateDetail.noticePeriod.split(" ")[0]
            } Months `
          : ""
      }`,
      education: candidateDetail.education,
      prefferedLocation: candidateDetail.prefferedLocation,
      summary: candidateDetail.professionalSummary,
      documents: candidateDetail.resume,
      locked:candidateDetail.locked,
      requirements:candidateDetail.requirements,
      currentCtc:candidateDetail.currentCtc,
      expectedCtc:candidateDetail.expectedCtc,
      readyToRelocate:candidateDetail.readyToRelocate,
      currentLocation:candidateDetail.currentLocation,
      currentCompany:candidateDetail.currentCompany,
      maritalStatus:candidateDetail.maritalStatus,
      source:candidateDetail.source,
      institute:candidateDetail.education,
      candidateID:candidateDetail._id



    });

    candidateDetail.requirements.map(req=>{
      req.applicants.map(applicant=>{
        if(applicant.id===candidateDetail._id){
          if(applicant.stage==="underReview1"){
            setButtonName("Awaiting Screening")
          }
          else if(applicant.stage==="underReview2"){
            setButtonName("Interview Scheduled")
          }
          else if(applicant.stage==="underReview3"){
            setButtonName("Interview Feedback")
          }
          else if(applicant.stage==="underReview4"){
            setButtonName("Shortlisted")
          }
          else if(applicant.stage==="underReview5"){
            setButtonName("Onboarding")
          }
          else if(applicant.stage==="underReview6"){
            setButtonName("On Hold")
          }
          else if(applicant.stage==="dropped"){
            setButtonName("Washed Away")
          }
          else if(applicant.stage==="submitted"){
            setButtonName("Joined")
          }
          else if(applicant.stage==="rejected"){
            setButtonName("Disqualified")
          }
       
        }
      })
    })
  
  }, []);

 


  const [popupOpen, setPopupOpen] = useState(false);
  const [meetingPopupOpen, setMeetingPopupOpen] = useState(false);

  const handleEventChange = (evt) => {
    setCandidateProfile({
      ...candidateProfile,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleBatch = (key) => {
    const dropdown = document.querySelector(`.candi-batch-action`);
    const batchArrow = document.querySelector(".batch-arrow");

    dropdown.classList.toggle("candi-batch-visible");
    batchArrow.classList.toggle("batch-rotate");
  };

  return (
    <div>
      <div onClick={() => setIsCandidateDetail(false)} class="createjob-back">
        ???
      </div>

      <div className="candidateProfile-container">
        <div className="candidateProfile-summary">
          <div className="logo">
            <img src={candidateDetail.profilePicture}></img>
            <h2>{candidateDetail.name}</h2>
          </div>
          <div className="applied">
            Applied For


            {candidateDetail.requirements.map((req) => {
              return (
                <>
                  <buttom className="btn btn-white">{req.title}</buttom>
                </>
              );
            })}
            {candidateDetail.jobs.map((job) => {
              return (
                <>
                  <buttom className="btn btn-white">{job.title}</buttom>
                </>
              );
            })}
          </div>
          <div className="status">
            Status
            {candidateProfile.requirements.map((req) => {
              return (
                <>
                  {/* <buttom className="btn btn-white">{job.title}</buttom> */}

                  {req.applicants.map((applicant,key)=>{
                    if(applicant.id===candidateDetail._id){
                      return <button onClick={()=>handleBatch(key)} key={key } className={`btn btn-white`}>
              <span className={`candi-batch-action-rel`}>
                
                <span>{buttonName===""?"Batch Action":buttonName}</span>
                <>
                  <ul className={`candi-batch-action`}>
                    <div className="candi-batch-action-square">&nbsp;</div>

                    <li
                      onClick={() => {
                        setObj("underReview1");
                        stageUser(req._id,key,"underReview1");
                      }}
                    >
                      <span>Internal - Awaiting Screening</span>
                    </li>
                    <li
                      onClick={() => {
                      
                        stageUser(req._id,key,"underReview2");
                      }}
                    >
                      <span>Internal - Interview Scheduled</span>
                    </li>
                    <li
                      onClick={() => {
                      
                        stageUser(req._id,key,"underReview3");
                      }}
                    >
                      <span>Internal - Interview Feedback</span>
                    </li>
                    <li
                      onClick={() => {
                        
                        stageUser(req._id,key,"underReview4");
                      }}
                    >
                      <span>Internal - Shortlisted</span>
                    </li>
                    <li
                      onClick={() => {
                       
                        stageUser(req._id,key,"underReview5");
                      }}
                    >
                      <span>Internal - Onboarding</span>
                    </li>
                    <li
                      onClick={() => {
                       
                        stageUser(req._id,key,"dropped");
                      }}
                    >
                      <span>Internal - Washed Away</span>
                    </li>
                    <li
                      onClick={() => {
                        
                        stageUser(req._id,key,"rejected");
                      }}
                    >
                      <span>Internal - Disqualified</span>
                    </li>
                    <li
                      onClick={() => {
                       
                        stageUser(req._id,key,"underReview6");
                      }}
                    >
                      <span>Internal - On Hold</span>
                    </li>
                    <li
                      onClick={() => {
                   
                        stageUser(req._id,key,"submitted");
                      }}
                    >
                      <span>Joined</span>
                    </li>
                  </ul>
                </>
              </span>

              <DownArrIcon className="batch-arrow" />
            </button>
         
                    }
                  })}
                
                </>
              );
            })}

            
            
          </div>
          <div className="comments">
            Comments
            <buttom className="btn btn-white">
              Senior Analysits At Power Energy
            </buttom>
            <buttom className="btn btn-white">Senior Analysits</buttom>
            <buttom className="btn btn-white">Senior Analysits</buttom>
          </div>
        </div>

        <div className="candidateProfile-detail">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <br></br>
              <h1>Candidate Details</h1>
            </div>
            <div>
              <button className="btn btn-w btn-active">
                <img
                  src={pencil}
                  style={{
                    position: "relative",
                    top: "0.3rem",
                    marginRight: "1rem",
                  }}
                ></img>{" "}
                Edit
              </button>
              <button
                className="btn btn-w btn-active"
                onClick={() => setMeetingPopupOpen(true)}
              >
                <img
                  src={calender}
                  style={{
                    position: "relative",
                    top: "0.3rem",
                    marginRight: "1rem",
                  }}
                ></img>
                Schedule Meeting
              </button>
              <button
                className="btn btn-w btn-active"
                onClick={() => setPopupOpen(true)}
              >
                <img
                  src={chat}
                  style={{
                    position: "relative",
                    top: "0.3rem",
                    marginRight: "1rem",
                  }}
                ></img>
                Chat
              </button>
             {candidateProfile.locked &&
              <button
                className="btn btn-w"
                style={{ border: "1px solid black" }}
                onClick={unlockProfile}
              >
                <LockIcon style={{ marginRight: "1rem" }}></LockIcon>
               Unlock Profile
              

              </button>
                    }
              <img
                src={cloud}
                style={{
                  position: "relative",
                  top: "1rem",
                  marginRight: "1rem",
                  marginLeft: "1rem",
                  cursor: "pointer",
                }}
              ></img>
              <img
                src={dots2}
                style={{
                  position: "relative",
                  top: "2rem",
                  marginLeft: "1rem",
                  cursor: "pointer",
                }}
              ></img>
            </div>
          </div>

          {popupOpen && <ChatScreen setPopupOpen={setPopupOpen}></ChatScreen>}

          {meetingPopupOpen && (
            <ScheduleMeeting
              setMeetingPopupOpen={setMeetingPopupOpen}
            ></ScheduleMeeting>
          )}

          <div className="mt fw6">General</div>
          <div className="createjob-adddoc-batch">
            {/* first row */}
            <div>
              <label htmlFor="candidateID">Candidate ID </label>

              <input
                onChange={handleEventChange}
                value={candidateProfile.candidateID}
                name="candidateID"
                id="candidateid"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="candidateName">Candidate Name</label>

              <input
                onChange={handleEventChange}
                value={candidateProfile.candidateName}
                name="candidateName"
                id="candidateName"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="currentDesignation">Current Designation</label>

              <input
                name="currentDesignation"
                onChange={handleEventChange}
                value={candidateProfile.currentDesignation}
                id="currentDesignation"
                type="text"
              />
            </div>
            {/* end of first row */}

            {/* second row */}

            <div>
              <label htmlFor="currentCompany">Current Company</label>
              <input
                name="currentCompany"
                value={candidateProfile.currentCompany}
                onChange={handleEventChange}
                id="currentCompany"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="currentCtc">Current CTC</label>
              <input
                name="currentCtc"
                value={candidateProfile.currentCtc}
                onChange={handleEventChange}
                id="currentCtc"
                type="number"
              />
            </div>
            <div>
              <label htmlFor="expectedCtc">Expected CTC</label>
              <input
                name="expectedCtc"
                value={candidateProfile.expectedCtc}
                onChange={handleEventChange}
                id="expectedCtc"
                type="number"
              />
            </div>
            {/* end of second row */}
          </div>

          <div className="mt fw6">OTHER DETAILS</div>
          <div className="createjob-adddoc-batch">
            {/* third row */}
            <div>
              <label htmlFor="dateOfBirth">Date Of Birth</label>
              <input
                onChange={handleEventChange}
                value={candidateProfile.dateOfBirth}
                name="dateOfBirth"
                id="dateOfBirth"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="workExperience">Work Experience</label>
              <input
                onChange={handleEventChange}
                value={candidateProfile.workExperience}
                name="workExperience"
                id="workExperience"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="maritalStatus">Marital Status</label>
              <select
                onChange={handleEventChange}
                value={candidateProfile.maritalStatus}
                name="maritalStatus"
                className="select-d"
                id="maritalStatus"
                style={{ background: "#fff" }}
              >
                <option selected disabled hidden></option>
                <option value="Single">Single</option>
                <option value="Maried">Maried</option>
              </select>
            </div>

            {/* end of third row */}

            {/* Fourth Row */}

            <div>
              <label htmlFor="highestEducationQual">
                Highest Educational Qualification
              </label>
              <input
                onChange={handleEventChange}
                value={candidateProfile.highestEducationQual}
                name="highestEducationQual"
                id="highestEducationQual"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="institute">Institute</label>
              <input
                onChange={handleEventChange}
                value={candidateProfile.institute}
                name="institute"
                id="institute"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="readyToRelocate">Ready To Relocate</label>
              <select
                onChange={handleEventChange}
                value={candidateProfile.readyToRelocate}
                name="readyToRelocate"
                className="select-d"
                id="readyToRelocate"
                style={{ background: "#fff" }}
              >
                <option selected disabled hidden></option>
                <option value="No">Yes</option>
                <option value="Yes">No</option>
              </select>
            </div>
            {/* End of Fourth Row */}

            {/* Fifth Row */}

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                onChange={handleEventChange}
                value={candidateProfile.phone}
                name="phone"
                id="phone"
                type="number"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={handleEventChange}
                value={candidateProfile.email}
                name="email"
                id="email"
                type="email"
              />
            </div>

            <div>
              <label htmlFor="noticePeriod">Notice Period</label>
              <input
                onChange={handleEventChange}
                value={candidateProfile.noticePeriod}
                name="noticePeriod"
                id="noticePeriod"
                type="text"
              />
            </div>
            {/* End Of Fifth Row */}

            {/* Sixth Row */}
            <div>
              <label htmlFor="currentLocation">Current Location</label>
              <input
                onChange={handleEventChange}
                value={candidateProfile.currentLocation}
                name="currentLocation"
                id="currentLocation"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="prefferedLocation">Preffered Location</label>
              <input
                onChange={handleEventChange}
                value={candidateProfile.prefferedLocation}
                name="prefferedLocation"
                id="prefferedLocation"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="source">Source</label>
              <input
                onChange={handleEventChange}
                value={candidateProfile.source}
                name="source"
                id="source"
                type="text"
              />
            </div>

            {/* End of Sixth Row */}
          </div>

          <div className="mt fw6">HEADLINE</div>
          <p>Automatic Testing</p>

          <div className="mt fw6">SUMMARY</div>
          <p>{candidateProfile.summary}</p>

          <div className="mt fw6">SOCIALS</div>
          {/* <img src={lock}></img> */}

          { candidateProfile.locked ===true? (
            <img src={lock}></img>
          ) : candidateDetail.linkedinProfile ? (
            <a href={`${candidateDetail.linkedinProfile}`} target="_blank">
              <img src={linkedin}></img>
            </a>
          ) : (
            ""
          )}

          <button
            className="btn btn-white"
            style={{
              border: "1px solid black",
              marginTop: "2rem",
              marginLeft: "-1rem",
              width: "30rem",
              display: "inherit",
            }}
          >
            {" "}
            View Video Resume
          </button>

          <div className="mt fw6">DOCUMANTS ATTACHED</div>

          {candidateProfile.locked === true ? (
            <img src={lock}></img>
          ) : (
            <div className="docs_attached">
              {candidateProfile.documents && (
                <div className="box">
                  <img src={attach}></img>

                  <p>
                    Resume
                    <br></br>
                    <p style={{ fontSize: "1.2rem " }}>5MB</p>
                  </p>
                  <a href={candidateProfile.documents} download>
                    <img src={download}></img>
                  </a>
                </div>
              )}
              <button
                className="btn btn-w btn-active"
                style={{ borderRadius: "1.5rem" }}
              >
                Request For Documents
              </button>
              <button
                className="btn btn-w btn-active"
                style={{ borderRadius: "1.5rem" }}
              >
                Attach Documents
              </button>
            </div>
          )}
          <div className="mt fw6">WORK EXPERIENCE</div>
          <div style={{ display: "grid", gridTemplateColumns: "20rem 1fr" }}>
            <div>
              <h3>2018 - PRESENT</h3>
            </div>
            <div>
              <p>Automatic Testing Analyst</p>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                in nibh vulputate, condimentum quam eget, lobortis mi.
                Pellentesque convallis nulla a tellus dapibus, non posuere elit
                ultricies. Integer nec purus pulvinar, lacinia sem a, laoreet
                turpis. Duis at maximus magna. Sed mauris erat, blandit et orci
                ut, tempor ultrices elit. Vivamus id arcu et ante molestie
                condimentum quis sit amet arcu.
              </p>
            </div>
          </div>

          <div className="mt fw6">RESUME</div>
          <div>
            <Document
              file={{
                url: `${candidateProfile.documents}`,
              }}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                style={{ display: "flex", justifyContent: "center" }}
              />
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
