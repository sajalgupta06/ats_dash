import React, { useEffect, useState } from "react";
import "./CreateRequirement.scss";
import { InformationIcon } from "../../asserts/icons/index";
import Toggle from "../Toggle/Toggle";

const ShowRequirement = ({setRequirement,requirement}) => {
  const [preferences, setPreferences] = useState({});

  const [jobRequirementDetails, setjobRequirementDetails] = useState({
    jobId: "",
    clientJobId: "",
    title: "",
    customer: "",
    status: "",
    vendorAndClienInfo:"",
    city:"",
    state:"",
    country:"",
    nofPos: "",
    pSkills:[],
    secSkills:[],
    workExperienceFrom:"",
    workExperienceTo:"",
    hiringType:"",
    targetDate: "",
    remoteStatus:"",
    language:"",
    gender:"",
    placementType:"",
    clientPayType:"",
    clientCtcFrom:"",
    clientCtcTo:"",
    recruiter: "",
    addRecruiters: "",
    recruitementManager: "",
    accountManager: "",
    clientContactname: "",
    maxSubmissions: "",
    interviewPanel: "",
    workCriteria: "",
    jobDesc: "",
    companyDesc: "",
  
  });

 
  useEffect(() => {
  console.log(requirement)
    if (requirement) {

      setjobRequirementDetails(requirement)
      setRequirement(requirement)
    }
  }, [requirement]);

  // handleEventChange
  const handleEventChange = (evt) => {
    setjobRequirementDetails({
      ...jobRequirementDetails,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div className='createjob-adddoc'>
      <div className='mt fw6'>General</div>
      <div className='createjob-adddoc-batch'>
        {/* first row */}
        <div>
          <label htmlFor='jobId'>Job ID </label>

          <InformationIcon className='info-icon' />
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.jobId}
            name='jobId'
            id='jobId'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='clientJobId'>Client Job ID</label>
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.clientJobId}
            name='clientJobId'
            id='clientJobId'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='jobtitle'>Job Title</label>
          <input
            name='title'
            onChange={handleEventChange}
            value={jobRequirementDetails.title}
            id='jobtitle'
            type='text'
          />
        </div>
        {/* end of first row */}

        {/* second row */}
        <div>
          <label htmlFor='status'>Status</label>

        
              <input
            name='status'
            onChange={handleEventChange}
            value={jobRequirementDetails.status}
            id='status'
            type='text'
          />
           
         
        </div>
        <div>
          <label htmlFor='hiringType'>Job Hiring Type</label>
          <input
            name='hiringType'
            onChange={handleEventChange}
            value={jobRequirementDetails.hiringType}
            id='hiringType'
            type='text'
          />
       
        </div>
        <div>
          <label htmlFor='nofPos'>Number of Positions</label>
          <input
            name='nofPos'
            value={jobRequirementDetails.nofPos}
            onChange={handleEventChange}
            id='nofPos'
            type='number'
          />
        </div>
        {/* end of second row */}

        {/* third row */}
        <div>
          <label htmlFor='customer'>Customer</label>
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.customer}
            name='customer'
            id='customer'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='pSkills'>Primary Skills</label>
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.pSkills}
            name='pSkills'
            id='pSkills'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='SecSkills'>Secondary Skills</label>
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.SecSkills}
            name='SecSkills'
            id='SecSkills'
            type='text'
          />
        </div>
        {/* end of third row */}

        {/* fourth row */}
        <div>
          <label htmlFor='vendorAndClienInfo'>
            Show Vendor & Client Information{" "}
          </label>

       
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.vendorAndClienInfo}
            name='vendorAndClienInfo'
            id='vendorAndClienInfo'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='city'>City</label>
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.city}
            name='city'
            id='city'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='state'>State</label>

          <input
            name='state'
            onChange={handleEventChange}
            value={jobRequirementDetails.title}
            id='state'
            type='text'
          />
        </div>
        {/* end of fourth row */}

        {/* fifth row */}
        <div>
          <label htmlFor='country'>Country</label>

          <InformationIcon className='info-icon' />
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.country}
            name='country'
            id='country'
            type='text'
          />
        </div>
        <div className='salary-details'>
          <div>
            <label htmlFor='workExperienceFrom'>Work Experience</label>
            <input
              onChange={handleEventChange}
              value={jobRequirementDetails.workExperienceFrom}
              name='workExperienceFrom'
              id='workExperience1'
              type='text'
            />
          </div>
          <div className='to'>To</div>
          <div>
            <label htmlFor='workExperienceTo'> &nbsp;</label>
            <input
              onChange={handleEventChange}
              value={jobRequirementDetails.workExperienceTo}
              name='workExperienceTo'
              id='workExperienceTo'
              type='text'
            />
          </div>
        </div>
        <div>
          <label htmlFor='targetDate'>Target Date</label>

          <input
            name='targetDate'
            onChange={handleEventChange}
            value={jobRequirementDetails.targetDate}
            id='targetDate'
            type='text'
          />
        </div>
        {/* end of fifth row */}

        {/* sixth row */}
        <div>
          <label htmlFor='remoteStatus'>Remote Status</label>

          <InformationIcon className='info-icon' />
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.remoteStatus}
            name='remoteStatus'
            id='remoteStatus'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='city'>languages required</label>
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.city}
            name='city'
            id='city'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='gender'>Gender required</label>

          <input
            name='gender'
            onChange={handleEventChange}
            value={jobRequirementDetails.gender}
            id='gender'
            type='text'
          />
        </div>
        {/* end of sixth row */}
      </div>

      <div className='mt fw6'>pay & billing DETAILS</div>
      <div className='createjob-adddoc-batch'>
        {/* seventh row */}
        <div>
          <label htmlFor='placementType'>Placement Type</label>

          <InformationIcon className='info-icon' />
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.placementType}
            name='placementType'
            id='placementType'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='clientPayType'>Client Pay Type</label>
        
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.clientPayType}
            name='clientPayType'
            id='clientPayType'
            type='text'
          />
        '</div>
        <div className='salary-details'>
          <div>
            <label htmlFor='clientCtcFrom'>Client CTC</label>
            <input
              onChange={handleEventChange}
              value={jobRequirementDetails.clientCtcFrom}
              name='clientCtcFrom'
              id='clientCtcFrom'
              type='text'
            />
          </div>
          <div className='to'>To</div>
          <div>
            <label htmlFor='clientCtcTo'> &nbsp;</label>
            <input
              onChange={handleEventChange}
              value={jobRequirementDetails.clientCtcTo}
              name='clientCtcTo'
              id='clientCtcTo'
              type='text'
            />
          </div>
        </div>
        {/* end of seventh row */}
      </div>

      <div className='mt fw6'>Recruitment team</div>
      <div className='createjob-adddoc-batch'>
        {/* eight row */}
        <div>
          <label htmlFor='recruiters'>Recruiters</label>

          <InformationIcon className='info-icon' />
          <select
            onChange={handleEventChange}
            value={jobRequirementDetails.recruiters}
            name='recruiters'
            className='select-d'
            id='recruiters'
            style={{background:"#fff"}}
            >
            <option selected disabled hidden></option>
            <option value='Full Time'>Full Time</option>
            <option value='Part Time'>Part Time</option>
          </select>
        </div>
        <div>
          <label htmlFor='additionalRecruiters'>Additional Recruiters</label>
          <select
            onChange={handleEventChange}
            value={jobRequirementDetails.addRecruiters}
            name='additionalRecruiters'
            className='select-d'
            id='additionalRecruiters'
            style={{background:"#fff"}}
            >
            <option selected disabled hidden></option>
            <option value='Full Time'>Full Time</option>
            <option value='Part Time'>Part Time</option>
          </select>
        </div>
        <div>
          <label htmlFor='recruitmentManager'>Recruitment Manager</label>

          <select
            onChange={handleEventChange}
            value={jobRequirementDetails.recruitmentManager}
            name='recruitmentManager'
            className='select-d'
            id='recruitmentManager'
            style={{background:"#fff"}}
            >
            <option selected disabled hidden></option>
            <option value='Full Time'>Full Time</option>
            <option value='Part Time'>Part Time</option>
          </select>
        </div>
        {/* end of eight row */}

        {/* ninth row */}
        <div>
          <label htmlFor='interviewPanel'>Interview Panel</label>

          <InformationIcon className='info-icon' />
          <select
            onChange={handleEventChange}
            value={jobRequirementDetails.interviewPanel}
            name='interviewPanel'
            className='select-d'
            id='interviewPanel'
            style={{background:"#fff"}}
            >
            <option selected disabled hidden></option>
            <option value='Full Time'>Full Time</option>
            <option value='Part Time'>Part Time</option>
          </select>
        </div>
        {/* end of ninth row */}
      </div>

      {/* work criteria */}
      <div className='fw6 mt'>Work Criteria</div>
      {requirement.workCriteria===true?
      <>

       <div>
       <input
         onChange={handleEventChange}
         value={"Work From Home Till Covid Ends"}
         name='workCriteria'
         id='wthtce'
         type='radio'
        checked
       />
       <label htmlFor='wthtce'>Work From Home Till Covid Ends</label>
     </div>
     <div className='radio-box'>
        <div>
          <input
            onChange={handleEventChange}
            value={"Work From Home after Covid"}
            name='workCriteria'
            id='wthac'
            type='radio'
          />
          <label htmlFor='wthac'>Work From Home after Covid</label>
        </div>
      </div>
     
     </>
    
      :
      <>

<div>
       <input
         onChange={handleEventChange}
         value={"Work From Home Till Covid Ends"}
         name='workCriteria'
         id='wthtce'
         type='radio'
       />
       <label htmlFor='wthtce'>Work From Home Till Covid Ends</label>
     </div>
      <div className='radio-box'>
      <div>
        <input
          onChange={handleEventChange}
          value={"Work From Home after Covid"}
          name='workCriteria'
          id='wthac'
          type='radio'
          checked
        />
        <label htmlFor='wthac'>Work From Home after Covid</label>
      </div>
    </div>
   
   </>}
      
      {/* end of work criteria */}

      {/* start of description */}
      <div className='desc'>
        <label className='fw6' htmlFor='job-desc'>
          JOB DESCRIPTION
        </label>
        <textarea
          onChange={handleEventChange}
          value={jobRequirementDetails.jobDesc}
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
        </label>
        <textarea
          onChange={handleEventChange}
          value={jobRequirementDetails.companyDesc}
          name='companyDesc'
          id='comp-desc'
          type='text'
        />
      </div>
      {/* end of description */}
    </div>
  );
};

export default ShowRequirement;
