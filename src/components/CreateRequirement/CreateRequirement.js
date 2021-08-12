import React, { useState } from "react";
import "./CreateRequirement.scss";
import { InformationIcon } from "./../../asserts/icons/index";
import Toggle from "./../Toggle/Toggle";

const CreateRequirement = () => {
  const [preferences, setPreferences] = useState({});

  const [jobRequirementDetails, setjobRequirementDetails] = useState({
    jobID: "",
    clientJobId: "",
    title: "",
    customer: "",
    company: "",
    status: "",
    recruiter: "",
    nofPos: "",
    qualification: "",
    degree: "",
    clientName: "",
    skills: [],
    manSkills: [],
    workExperience1: "",
    workExperience2: "",
    hiringType: "",
    targetDate: "",
    salary1: "",
    salary2: "",
    preferredLocation: "",
    officeLocation: "",
    industryPreference: "",
    functionalArea: "",
    preferredComapny: "",
    nonPreferredCompany: "",
    preferredInstitute: "",
    nonPreferredInstitute: "",
    workCriteria: "",
    jobDesc: "",
    companyDesc: "",
    jobQuestions: [],
  });

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
          <label htmlFor='jobid'>Job ID </label>

          <InformationIcon className='info-icon' />
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.jobID}
            name='jobID'
            id='jobid'
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

          <select
            onChange={handleEventChange}
            className='select-d'
            name='status'
            id='status'>
            <option selected disabled hidden></option>
            <option value='Active'>Active</option>
            <option value='In Active'>In Active</option>
          </select>
        </div>
        <div>
          <label htmlFor='hiringType'>Hiring Type</label>
          <select
            onChange={handleEventChange}
            value={jobRequirementDetails.hiringType}
            name='hiringType'
            className='select-d'
            id='hiringType'>
            <option selected disabled hidden></option>
            <option value='Full Time'>Full Time</option>
            <option value='Part Time'>Part Time</option>
          </select>
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
          <label htmlFor='skills'>Primary Skills</label>
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.skills}
            name='skills'
            id='skills'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='mandatorys'>Secondary Skills</label>
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.manSkills}
            name='manSkills'
            id='mandatorys'
            type='text'
          />
          <Toggle setPreferences={setPreferences} name='manSkills' />
        </div>
        {/* end of third row */}

        {/* fourth row */}
        <div>
          <label htmlFor='showVenderAndClientInfo'>
            Show Vendor & Client Information{" "}
          </label>

          <InformationIcon className='info-icon' />
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.showVenderAndClientInfo}
            name='showVenderAndClientInfo'
            id='showVenderAndClientInfo'
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
            <label htmlFor='workExperience1'>Work Experience</label>
            <input
              onChange={handleEventChange}
              value={jobRequirementDetails.workExperience1}
              name='workExperience1'
              id='workExperience1'
              type='text'
            />
          </div>
          <div className='to'>To</div>
          <div>
            <label htmlFor='workExperience2'> &nbsp;</label>
            <input
              onChange={handleEventChange}
              value={jobRequirementDetails.workExperience2}
              name='workExperience2'
              id='workExperience2'
              type='text'
            />
          </div>
        </div>
        <div>
          <label htmlFor='targetDate'>Target Date</label>

          <input
            name='targetDate'
            onChange={handleEventChange}
            value={jobRequirementDetails.title}
            id='targetDate'
            type='text'
          />
        </div>
        {/* end of fifth row */}

        {/* sixth row */}
        <div>
          <label htmlFor='showVenderAndClientInfo'>Remote Status</label>

          <InformationIcon className='info-icon' />
          <input
            onChange={handleEventChange}
            value={jobRequirementDetails.showVenderAndClientInfo}
            name='showVenderAndClientInfo'
            id='showVenderAndClientInfo'
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
          <label htmlFor='state'>Gender required</label>

          <input
            name='state'
            onChange={handleEventChange}
            value={jobRequirementDetails.title}
            id='state'
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
          <label htmlFor='state'>Client Pay Type</label>
          <select
            onChange={handleEventChange}
            value={jobRequirementDetails.hiringType}
            name='clientPayType'
            className='select-d'
            id='clientPayType'>
            <option selected disabled hidden></option>
            <option value='Full Time'>Full Time</option>
            <option value='Part Time'>Part Time</option>
          </select>
        </div>
        <div className='salary-details'>
          <div>
            <label htmlFor='workExperience1'>Client CTC</label>
            <input
              onChange={handleEventChange}
              value={jobRequirementDetails.workExperience1}
              name='workExperience1'
              id='workExperience1'
              type='text'
            />
          </div>
          <div className='to'>To</div>
          <div>
            <label htmlFor='workExperience2'> &nbsp;</label>
            <input
              onChange={handleEventChange}
              value={jobRequirementDetails.workExperience2}
              name='workExperience2'
              id='workExperience2'
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
            id='recruiters'>
            <option selected disabled hidden></option>
            <option value='Full Time'>Full Time</option>
            <option value='Part Time'>Part Time</option>
          </select>
        </div>
        <div>
          <label htmlFor='additionalRecruiters'>Additional Recruiters</label>
          <select
            onChange={handleEventChange}
            value={jobRequirementDetails.additionalRecruiters}
            name='additionalRecruiters'
            className='select-d'
            id='additionalRecruiters'>
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
            id='recruitmentManager'>
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
            value={jobRequirementDetails.recruiters}
            name='interviewPanel'
            className='select-d'
            id='interviewPanel'>
            <option selected disabled hidden></option>
            <option value='Full Time'>Full Time</option>
            <option value='Part Time'>Part Time</option>
          </select>
        </div>
        {/* end of ninth row */}
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
          />
          <label htmlFor='wthtce'>Work From Home Till Covid Ends</label>
        </div>
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

export default CreateRequirement;
