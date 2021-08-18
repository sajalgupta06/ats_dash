import React from "react";
import "./Profile.scss";

import { InformationIcon, MailIcon, PhoneIcon } from "../../asserts/icons";
import Acce from "./../../asserts/images/acc.png";
import Placeholder from "./../../asserts/images/placeholder.jpg";
import { PenEditIcon } from "./../../asserts/icons/index";
import twitter from '../../asserts/icons/twitter.png'
import instagram from '../../asserts/icons/instagram.png'
import facebook from '../../asserts/icons/facebook.png'
import google from '../../asserts/icons/google2.png'
import linkedin from '../../asserts/icons/linkedin.svg'

const Profile = () => {
  return (
    <div className='profile-container'>
      {/* left */}
      <div className='profile-left'>
        {/* profile head */}
        <div className='profile-head'>
          <div className='mt fw6'>Edit Profile</div>
          <div className='profile-btns'>
            <div className='btn btn-cancel2'>Cancel</div>
            <div className='btn btn-save'>Save Changes</div>
          </div>
        </div>
        {/* end of profile head */}

        {/* profile body */}
        <div className='mt fw6'>Generals</div>
        <div className='createjob-adddoc-batch'>
          {/* first row */}
          <div>
            <label htmlFor='firstname'>First Name</label>
            <InformationIcon className='info-icon' />
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.firstname}
              name='firstname'
              id='firstname'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='clientJobId'>Middle Name</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.clientJobId}
              name='clientJobId'
              id='clientJobId'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='jobtitle'>Last Name</label>

            <input
              name='title'
              // onChange={handleEventChange}
              // value={jobRequirementDetails.title}
              id='jobtitle'
              type='text'
            />
          </div>
          {/* end of first row */}

          {/* second row */}
          <div>
            <label htmlFor='firstname'>Username</label>
            <InformationIcon className='info-icon' />
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.firstname}
              name='firstname'
              id='firstname'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='clientJobId'>Password</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.clientJobId}
              name='clientJobId'
              id='clientJobId'
              type='text'
            />
          </div>
          {/* end of second row */}
        </div>

        <div className='mt fw6'>contact</div>
        <div className='createjob-adddoc-batch'>
          {/* third row */}
          <div>
            <label htmlFor='firstname'>Mobile</label>
            <InformationIcon className='info-icon' />
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.firstname}
              name='firstname'
              id='firstname'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='clientJobId'>Whatsapp</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.clientJobId}
              name='clientJobId'
              id='clientJobId'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='jobtitle'>Email</label>

            <input
              name='title'
              // onChange={handleEventChange}
              // value={jobRequirementDetails.title}
              id='jobtitle'
              type='text'
            />
          </div>
          {/* end of third row */}

          {/* fourth row */}
          <div>
            <label htmlFor='firstname'>Headline</label>
            <InformationIcon className='info-icon' />
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.firstname}
              name='firstname'
              id='firstname'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='clientJobId'>Experience</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.clientJobId}
              name='clientJobId'
              id='clientJobId'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='jobtitle'>Skill Set</label>

            <input
              name='title'
              // onChange={handleEventChange}
              // value={jobRequirementDetails.title}
              id='jobtitle'
              type='text'
            />
          </div>
          {/* end of fourth row */}

          {/* fifth row */}
          <div>
            <label htmlFor='firstname'>Designation</label>
            <InformationIcon className='info-icon' />
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.firstname}
              name='firstname'
              id='firstname'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='clientJobId'>Recruting For</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.clientJobId}
              name='clientJobId'
              id='clientJobId'
              type='text'
            />
          </div>
          {/* end of fifth row */}
        </div>
       
        <div className='mt fw6'>I am currently hiring for</div>
        <div className='currently-hiring'>
          <div className='currently-hiring-dev'>
            <div className='currently-hiring-dev-left'>
              <img src={Acce} alt='accenture' />
              <div>Senior Web Developer at Accentric India Techno Global</div>
            </div>
            <div>14/6/2021 • 10 Vacancies</div>
          </div>
          <div className='currently-hiring-dev'>
            <div className='currently-hiring-dev-left'>
              <img src={Acce} alt='accenture' />
              <div>Senior Web Developer at Accentric India Techno Global</div>
            </div>
            <div>14/6/2021 • 10 Vacancies</div>
          </div>
          <div className='currently-hiring-dev'>
            <div className='currently-hiring-dev-left'>
              <img src={Acce} alt='accenture' />
              <div>Senior Web Developer at Accentric India Techno Global</div>
            </div>
            <div>14/6/2021 • 10 Vacancies</div>
          </div>
          <div className='currently-hiring-dev'>
            <div className='currently-hiring-dev-left'>
              <img src={Acce} alt='accenture' />
              <div>Senior Web Developer at Accentric India Techno Global</div>
            </div>
            <div>14/6/2021 • 10 Vacancies</div>
          </div>
        </div>

        <div className='mt fw6'>Positions i have managed in the past</div>

        <div className='currently-hiring'>
          <div className='currently-hiring-dev'>
            <div className='currently-hiring-dev-left'>
              <img src={Acce} alt='accenture' />
              <div>Senior Web Developer at Accentric India Techno Global</div>
            </div>
            <div>14/6/2021 • 10 Vacancies</div>
          </div>
          <div className='currently-hiring-dev'>
            <div className='currently-hiring-dev-left'>
              <img src={Acce} alt='accenture' />
              <div>Senior Web Developer at Accentric India Techno Global</div>
            </div>
            <div>14/6/2021 • 10 Vacancies</div>
          </div>
          <div className='currently-hiring-dev'>
            <div className='currently-hiring-dev-left'>
              <img src={Acce} alt='accenture' />
              <div>Senior Web Developer at Accentric India Techno Global</div>
            </div>
            <div>14/6/2021 • 10 Vacancies</div>
          </div>
          <div className='currently-hiring-dev'>
            <div className='currently-hiring-dev-left'>
              <img src={Acce} alt='accenture' />
              <div>Senior Web Developer at Accentric India Techno Global</div>
            </div>
            <div>14/6/2021 • 10 Vacancies</div>
          </div>
        </div>

        <div className='mt fw6'>Social Media Links</div>
        
        <div className="socialLinks">

        <div className="companyLinks">
          <h4 style={{textAlign:"left",marginLeft:"0rem"}}>Company Social Links (Auto Posting is on)
</h4>
          <div className="link">
            <div><img src={twitter}></img></div>
            <div><button className="btn btn-connect">Connect</button></div>
          </div>
          <div className="link">
            <div><img src={linkedin}></img></div>
            <div><button className="btn btn-connect">Connect</button></div>
          </div>  <div className="link">
            <div><img src={facebook}></img></div>
            <div><button className="btn btn-connect">Connect</button></div>
          </div> 
           <div className="link">
            <div><img src={instagram}></img></div>
            <div><button className="btn btn-connect">Connect</button></div>
          </div>
          <div className="link">
            <div><img src={google}></img></div>
            <div><button className="btn btn-connect">Connect</button></div>
          </div>
          
        </div>
        <div className="personalLinks">
        <h4 style={{textAlign:"left",marginLeft:"1rem"}}>Company Social Links (Auto Posting is on)
</h4>
<div className="link">
            <div><img src={twitter}></img></div>
            <div><button className="btn btn-connect">Connect</button></div>
          </div>
          <div className="link">
            <div><img src={linkedin}></img></div>
            <div><button className="btn btn-connect">Connect</button></div>
          </div>  <div className="link">
            <div><img src={facebook}></img></div>
            <div><button className="btn btn-connect">Connect</button></div>
          </div> 
           <div className="link">
            <div><img src={instagram}></img></div>
            <div><button className="btn btn-connect">Connect</button></div>
          </div>
          <div className="link">
            <div><img src={google}></img></div>
            <div><button className="btn btn-connect">Connect</button></div>
          </div>

        </div>
        </div>
        {/* end of profile body */}
      </div>
      {/*end of left  */}

      {/* right */}
      <div className='profile-right'>
        <div className='profile-right-info'>
          <div className='profile-right-info-head'>
            <img src={Placeholder} alt='meow' />
            <div className='profile-name'>Oda Dink</div>
            <div>Recruiter</div>
            <div className='profile-right-info-follow'>
              <div className='profile-right-info-follow-1'>
                <div className='f-num'>228</div>
                <div>Following</div>
              </div>
              <div className='profile-right-info-follow-2'>
                <div className='f-num'>4,842</div>
                <div>Followers</div>
              </div>
            </div>
          </div>

          <div className='profile-right-info-bottom'>
            <div className='profile-right-info-bottom-contact'>
              <PhoneIcon />
              <div>PhoneIcon</div>
            </div>
            <div className='profile-right-info-bottom-contact'>
              <PhoneIcon /> <div>odadink@mail.com</div>
            </div>
            <div className='profile-right-info-bottom-contact'>
              <PenEditIcon /> <div>Add/Edit Email Signature</div>
            </div>
          </div>
        </div>
      </div>
      {/* end of right */}
    </div>
  );
};

export default Profile;
