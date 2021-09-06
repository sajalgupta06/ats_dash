// primary import
import axios from "axios";
import { useEffect, useState } from "react";
import "./CreateJob.scss";

// secondary import
import JobCandidate from "../JobCandidate/JobCandidate";
import SharePopUp from "../SharePopUp/SharePopUp";
import Toggle from "../Toggle/Toggle";

// icons
import { PlusIcon, InformationIcon } from "./../../asserts/icons/index";
import { URL } from "../../config";

const CreateJob = ({ candidate, setJobListView, setCreateJobView,jobListView,job ,createJobView}) => {
  const [viewCandidate, setViewCandidate] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [viewQuestion, setViewQuestion] = useState(false);
  const [questionsGenerated, setQuestionsGenerated] = useState(false);
  const [sharePopUp, setSharePopUp] = useState(false);
  const [questionVal, setQuestionVal] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editQval, setEditQval] = useState("");
  const [preferences, setPreferences] = useState({});
  const [jobSuccess, setJobSuccess] = useState(false);

  const [jobPostDetails, setjobPostDetails] = useState({
    jobId: "",
    title: "",
    company: "",
    status: "",
    recruiter: "",
    nofPos: "",
    minQualification: "",
    degree: "",
    clientName: "",
    skills: [],
    manSkills: [],
    workExperienceFrom: "",
    workExperienceTo: "",
    hiringType: "",
    targetDate: "",
    salaryFrom: "",
    salaryTo: "",
    preferredLocation: "",
    officeLocation: "",
    industryPreference: "",
    functionalArea: "",
    preferredComapny: "",
    nonPreferredCompany: "",
    preferredInstitute: "",
    nonPreferredInstitute: "",
    workCriteria: false,
    jobDesc: "",
    companyDesc: "",
    jobQuestions: [],
  });


    useEffect(() => {
      console.log(job)

      if(jobListView===2){
        setjobPostDetails({...jobPostDetails,jobId:`#JC-${Math.floor(Math.random()*90000) + 10000}`})

        setCreateJobView(true)
      }
      if(jobListView===3){
        if (job) {
          setjobPostDetails(job)
        }
      }
     
    }, [job]);

  const addNewJob = async () => {
    try {
      // let newobj = {
      //   ...jobPostDetails,
      //   salary: jobPostDetails.salaryFrom + jobPostDetails.salaryTo,
      //   workExperience:
      //     jobPostDetails.workExperienceFrom + jobPostDetails.workExperienceTo,
      // };
      // delete newobj.workExperienceFrom;
      // delete newobj.workExperienceTo;
      // delete newobj.salaryFrom;
      // delete newobj.salaryTo;
      // newobj = { ...newobj, preferences };

      const token = localStorage.getItem("token")
      const response = await axios({
              // url: "http://localhost:8000/api/dash/jobs",
        url: `${URL}/api/dash/jobs`,
        method: "POST",
        data: jobPostDetails,
        headers:{"Authorization":`Bearer ${token}`},

      });
      if (response.data.status === "success") {
        setJobSuccess(true);
      }
      console.log(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  // handleEventChange
  const handleEventChange = (evt) => {
    setjobPostDetails({
      ...jobPostDetails,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleGenerateQuestionare = () => {
    setGenerated(true);
    let questions = [
      "Why should we hire you..?",
      "Can you work in the job's location after pandamic..?",
      "Why are we here..?",
    ];

    setjobPostDetails({ ...jobPostDetails, jobQuestions: questions });
    setQuestionsGenerated(true);
    setGenerated(false);
  };

  // add question
  const addQuestion = () => {
    setjobPostDetails({
      ...jobPostDetails,
      jobQuestions: [...jobPostDetails.jobQuestions, questionVal],
    });
  };

  return (
    <div className='createjob'>
    
      {!candidate && (
        <div className='createjob-doc'>
          <div className='createjob-doc-add'>
            <PlusIcon />
            <span>Add Doc</span>
          </div>
          <div>Active Job</div>
        </div>
      )}

      {/* end of add doc btns */}

      {/* start of add doc  */}
      <div className='createjob-adddoc'>
        {candidate ? (
          <>
            <div
              onClick={() => setViewCandidate(false)}
              className={`job-details ${!viewCandidate && "bac"}`}>
              Job Details
            </div>
            <div
              onClick={() => setViewCandidate(true)}
              className={`job-details ${viewCandidate && "bac"}`}>
              Candidates
            </div>
          </>
        ) : (
          <div className='job-details bac'>Job Details</div>
        )}

        {!viewCandidate ? (
          <>
            <div className='fw6'>General</div>
            <div className='createjob-adddoc-batch'>
              {/* first row */}
              <div>
                <label htmlFor='jobid'>Job ID </label> 

                <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.jobId}
                  name='jobId'
                  id='jobid'
                  type='text'
                  readOnly
                />
              </div>
              <div>
                <label htmlFor='jobtitle'>Job Title</label> <InformationIcon className='info-icon' />

                <input
                  name='title'
                  onChange={handleEventChange}
                  value={jobPostDetails.title}
                  id='jobtitle'
                  type='text'
                />
              </div>
              <div>
                <label htmlFor='company'>Company</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.company}
                  name='company'
                  id='company'
                  type='text'
                />
              </div>
              {/* end of first row */}

              {/* second row */}
              <div>
                <label htmlFor='active'>Status</label> <InformationIcon className='info-icon' />

                <select
                  onChange={handleEventChange}
                  className='select-d'
                  name='active'
                  id='active'>
                  <option disabled hidden></option>
                  <option value='1' onClick={()=>setjobPostDetails({...jobPostDetails,active:1})}>Active</option>
                  <option value='0' onClick={()=>setjobPostDetails({...jobPostDetails,active:0})}>In Active</option>
                </select>
              </div>
              <div>
                <label htmlFor='recruiter'>Recruiter</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.recruiter}
                  name='recruiter'
                  id='recruiter'
                  type='text'
                />
              </div>
              <div>
                <label htmlFor='nof'>Number of Positions</label> <InformationIcon className='info-icon' />
                <input
                  name='nofPos'
                  value={jobPostDetails.nofPos}
                  onChange={handleEventChange}
                  id='nof'
                  type='number'
                />
              </div>
              {/* end of second row */}

              {/* third row */}
              <div>
                <label htmlFor='qual'>Minimum Qualification</label> <InformationIcon className='info-icon' />
                <select
                  onChange={handleEventChange}
                  value={jobPostDetails.minQualification}
                  className='select-d'
                  name='minQualification'
                  id='qual'>
                  <option selected>Choose One</option>
                  <option value='Phd' >Phd</option>

                  <option value='Masters' onClick={()=>setjobPostDetails({...jobPostDetails,minQualification:"Masters"})}>Masters</option>

                  <option value='Graduate' onClick={()=>setjobPostDetails({...jobPostDetails,minQualification:"Graduate"})}>Graduate</option>

                  <option value='Diploma' onClick={()=>setjobPostDetails({...jobPostDetails,minQualification:"Diploma"})}>Diploma</option>

                  <option value='10+2 Pass' onClick={()=>setjobPostDetails({...jobPostDetails,minQualification:"10+2 Pass"})}>10+2 Pass</option>

                
                  <option value='10th Pass' onClick={()=>setjobPostDetails({...jobPostDetails,minQualification:"10th Pass"})}>10th Pass</option>

                  <option value='Below 10th' onClick={()=>setjobPostDetails({...jobPostDetails,minQualification:'Below 10th'})}>Below 10th</option>

                  <option value='Other than mentioned' onClick={()=>setjobPostDetails({...jobPostDetails,minQualification:"Other than mentioned"})}>
                    Other than mentioned
                  </option>
                </select>
                <Toggle setPreferences={setPreferences} name='minQualification' />
              </div>
              <div>
                <label htmlFor='degree'>Degree</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.degree}
                  name='degree'
                  id='degree'
                  type='text'
                />
                <Toggle setPreferences={setPreferences} name='degree' />
              </div>
              <div>
                <label htmlFor='client-name'>Client Name</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.clientName}
                  name='clientName'
                  id='client-name'
                  type='text'
                />
              </div>
              {/* end of third row */}
            </div>
            <div style={{ marginTop: "3rem" }} className='fw6'>
              Other Details
            </div>
            <div className='createjob-adddoc-batch2'>
              <div>
                <label htmlFor='skills'>Skills</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.skills}
                  name='skills'
                  id='skills'
                  type='text'
                />
              </div>
              <div>
                <label htmlFor='mandatorys'>Mandatory Skills</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.manSkills}
                  name='manSkills'
                  id='mandatorys'
                  type='text'
                />
                <Toggle setPreferences={setPreferences} name='manSkills' />
              </div>
            </div>

            {/* batch3 */}
            <div className='createjob-adddoc-batch3'>
              <div className='salary-details'>
                <div>
                  <label htmlFor='workExperienceFrom'>Work Experience</label> <InformationIcon className='info-icon' />
                  <input
                    onChange={handleEventChange}
                    value={jobPostDetails.workExperienceFrom}
                    name='workExperienceFrom'
                    id='workExperienceFrom'
                    type='text'
                  />
                </div>
                <div className='to'>To</div>
                <div>
                  <label htmlFor='salaryd2'> &nbsp;</label> <InformationIcon className='info-icon' />
                  <input
                    onChange={handleEventChange}
                    value={jobPostDetails.workExperienceTo}
                    name='workExperienceTo'
                    id='salaryd2'
                    type='text'
                  />
                </div>
              </div>
              <div>
                <label htmlFor='hiringType'>Hiring Type</label> <InformationIcon className='info-icon' />
                <select
                  onChange={handleEventChange}
                  value={jobPostDetails.hiringType}
                  name='hiringType'
                  className='select-d'
                  id='hiringType'
                    style={{background:"#fff"}}
                  >
                  <option selected disabled hidden></option>

                  <option value='Full Time'  onClick={()=>setjobPostDetails({...jobPostDetails,hiringType:"Full Time"})} >Full Time</option>

                  <option value='Contract'  onClick={()=>setjobPostDetails({...jobPostDetails,hiringType:"Contract"})}>Contract</option>
               

                  <option value='Intern'  onClick={()=>setjobPostDetails({...jobPostDetails,hiringType:"Intern"})}>Intern</option>
               

                  <option value='Freelancer'  onClick={()=>setjobPostDetails({...jobPostDetails,hiringType:"Freelancer"})}>Freelancer</option>
               
               
                </select>
              </div>
              <div>
                <label htmlFor='targetDate'>Target Date</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.targetDate}
                  name='targetDate'
                  id='targetDate'
                  type='text'
                />
              </div>
            </div>

            <div className='createjob-adddoc-batch3'>
              <div className='salary-details'>
                <div>
                  <label htmlFor='salaryd'>Salary Details</label> <InformationIcon className='info-icon' />
                  <input
                    onChange={handleEventChange}
                    value={jobPostDetails.salaryFrom}
                    name='salaryFrom'
                    id='salaryd'
                    type='text'
                  />
                </div>
                <div className='to'>To</div>
                <div>
                  <label htmlFor='salaryTo'> &nbsp;</label> <InformationIcon className='info-icon' />
                  <input
                    name='salaryTo'
                    onChange={handleEventChange}
                    value={jobPostDetails.salaryTo}
                    id='salaryTo'
                    type='text'
                  />
                </div>
              </div>
              <div>
                <label htmlFor='preferredLocation'>Preferred Location</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.preferredLocation}
                  name='preferredLocation'
                  id='preferredLocation'
                  type='text'
                />
                <Toggle
                  setPreferences={setPreferences}
                  name='preferredLocation'
                />
              </div>
              <div>
                <label htmlFor='olocation'>Office Location</label> <InformationIcon className='info-icon' />
              
                      <select
                  onChange={handleEventChange}
                  value={jobPostDetails.officeLocation}
                  name='officeLocation'
                  id='olocation'
                  className='select-d'
                    style={{background:"#fff"}}
                  >
                  <option selected disabled hidden></option>

                  <option value='Delhi'  onClick={()=>setjobPostDetails({...jobPostDetails,officeLocation:"Delhi"})} >Delhi</option>

                  <option value='Mumbai'  onClick={()=>setjobPostDetails({...jobPostDetails,officeLocation:"Mumbai"})}>Mumbai</option>
               
                  <option value='Chennai'  onClick={()=>setjobPostDetails({...jobPostDetails,officeLocation:"Chennai"})}>Chennai</option>
                
               
                </select>




                <Toggle setPreferences={setPreferences} name='officeLocation' />
              </div>
            </div>

            {/* batch1 repeat */}
            <div className='createjob-adddoc-batch'>
              {/* first row */}
              <div>
                <label htmlFor='ind-pre'>Industry Preference</label> <InformationIcon className='info-icon' />
                {/* <input onChange={handleEventChange} id='ind-pre' type='text' /> */}
                <select
                  onChange={handleEventChange}
                  name='industryPreference'
                  className='select-d'
                  value={jobPostDetails.industryPreference}
                  id='ind-pre'>
                  <option selected disabled hidden></option>
                  <option value='Information Technology'>
                    Information Technology
                  </option>
                  <option value='Medical Engineering'>
                    Medical Engineering
                  </option>
                </select>
                <Toggle
                  setPreferences={setPreferences}
                  name='industryPreference'
                />
              </div>
              <div>
                <label htmlFor='fun-area'>Functional Area </label> <InformationIcon className='info-icon' />
                {/* <input onChange={handleEventChange} id='fun-area' type='text' /> */}
                <select
                  onChange={handleEventChange}
                  value={jobPostDetails.functionalArea}
                  className='select-d'
                  name='functionalArea'
                  id='fun-area'>
                  <option selected disabled hidden></option>
                  <option value='Full Time' onClick={()=>setjobPostDetails({...jobPostDetails,functionalArea:"Full Time"})}>Full Time</option>
                  <option value='Part Time' onClick={()=>setjobPostDetails({...jobPostDetails,functionalArea:"Part Time"})}>Part Time</option>
                </select>
                <Toggle setPreferences={setPreferences} name='functionalArea' />
              </div>
              <div>
                <label htmlFor='pre-comp'>Preferred Comapny</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.preferredComapny}
                  name='preferredComapny'
                  id='pre-comp'
                  type='text'
                />
              </div>
              {/* end of first row */}

              {/* second row */}
              <div>
                <label htmlFor='nind-pre'>Not Preferred Comapny</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.nonPreferredCompany}
                  name='nonPreferredCompany'
                  id='ind-pre'
                  type='text'
                />
              </div>
              <div>
                <label htmlFor='pre-in'>Preferred Institute</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.preferredInstitute}
                  name='preferredInstitute'
                  id='pre-in'
                  type='text'
                />
              </div>
              <div>
                <label htmlFor='npre-in'>Not Preferred Institute</label> <InformationIcon className='info-icon' />
                <input
                  onChange={handleEventChange}
                  value={jobPostDetails.nonPreferredInstitute}
                  name='nonPreferredInstitute'
                  id='npre-in'
                  type='text'
                />
              </div>
              {/* end of second row */}
            </div>

            {/* work criteria */}
            <div className='fw6 mt'>Work Criteria</div>
            <div className='radio-box'>
              <div>
                <input
                  onChange={handleEventChange}
                  value={"Work From Home Till Covid Ends"}
                  name='workCriteria'
                  id='wthtce'
                  type='radio'
                  onChange={()=>setjobPostDetails({...jobPostDetails,workCriteria:false})}
                  checked={jobPostDetails.workCriteria===false}
                />
                <label htmlFor='wthtce'>Work From Home Till Covid Ends</label> <InformationIcon className='info-icon' />
              </div>
              <div>
                <input
                  onChange={handleEventChange}
                  value={"Work From Home after Covid"}
                  name='workCriteria'
                  id='wthac'
                  type='radio'
                  onChange={()=>setjobPostDetails({...jobPostDetails,workCriteria:false})}
                  checked={jobPostDetails.workCriteria===true}

                />
                <label htmlFor='wthac'>Work From Home after Covid</label> <InformationIcon className='info-icon' />
              </div>
            </div>
            {/* end of work criteria */}

            {/* start of description */}
            <div className='desc'>
              <label className='fw6' htmlFor='job-desc'>
                JOB DESCRIPTION
              </label> <InformationIcon className='info-icon' />
              <textarea
                onChange={handleEventChange}
                value={jobPostDetails.jobDesc}
                name='jobDesc'
                id='job-desc'
                type='text'
              />
            </div>
            {/* end of description */}

            {/* start of description */}
            <div className='desc'>
              <label className='fw6' htmlFor='comp-desc'>
                COMPANY DESCRIPTION
              </label> <InformationIcon className='info-icon' />
              <textarea
                onChange={handleEventChange}
                value={jobPostDetails.companyDesc}
                name='companyDesc'
                id='comp-desc'
                type='text'
              />
            </div>
            {/* end of description */}
          {console.log(createJobView)}
            {createJobView && (
            <>
                 <div className='createjob-bottom'>
              <div className='createjob-bottom-left'>
                {generated && <div>Generating Questionnaire.....</div>}
                {questionsGenerated && (
                  <>
                    <div>Questionnaire Generated</div>
                    <div
                      className='vieww'
                      onClick={() => setViewQuestion(!viewQuestion)}>
                      View
                    </div>
                  </>
                )}
              </div>
              <div className='createjob-bottom-right'>
                <div className='btn btn-cancel'>Cancel</div>
                {sharePopUp && (
                  <SharePopUp
                    addNewJob={addNewJob}
                    setSharePopUp={setSharePopUp}
                    jobSuccess={jobSuccess}
                    setJobSuccess={setJobSuccess}
                  />
                )}

                {questionsGenerated ? (
                  <div
                    onClick={() => setSharePopUp(true)}
                    className='btn btn-questionare'>
                    Add Job
                  </div>
                ) : (
                  <div
                    onClick={handleGenerateQuestionare}
                    className='btn btn-questionare'>
                    Generate Questionnaire
                  </div>
                )}
              </div>
          
            </div>
            {viewQuestion && (
              <div className='job-questions'>
                <div>
                  <div className='ques-box'>
                    {jobPostDetails &&
                      jobPostDetails.jobQuestions.map((ques, ind) => (
                        <>
                          <div className='question'>
                            {editMode === `edit${ind}` ? (
                              <>
                                <input
                                  onChange={(e) => setEditQval(e.target.value)}
                                  type='text'
                                  value={`${ques}`}
                                />
                                <div
                                  onClick={() => {
                                    let temp = jobPostDetails.jobQuestions;
                                    temp[ind] = editQval;
                                    setjobPostDetails({
                                      ...setjobPostDetails,
                                      jobQuestions: temp,
                                    });
                                    setEditMode(false);
                                  }}>
                                  Update
                                </div>
                              </>
                            ) : (
                              <>
                                <span>{ind + 1}.</span> <span>{ques}</span>
                                <div onClick={() => setEditMode(`edit${ind}`)}>
                                  Edit
                                </div>
                                <div
                                  onClick={() =>
                                    jobPostDetails.jobQuestions.splice(ind, 1)
                                  }>
                                  Delete
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      ))}
                  </div>
                </div>

                <div className='questions-bottom'>
                  <input
                    onChange={(e) => setQuestionVal(e.target.value)}
                    value={questionVal}
                    type='text'
                  />
                  <div onClick={addQuestion} className='btn btn-add'>
                    Add
                  </div>
                </div>
              </div>
            )}
              </>
            )}
        
          </>
        ) : (

          <JobCandidate job={job} type='Candidates' nmt={true} />
        )}
      </div>
      {/* end of start of add doc  */}
    </div>
  );
};

export default CreateJob;
