import React, { useEffect, useState } from "react";
import "./Profile.scss";
import axios from "axios";


import { InformationIcon, PhoneIcon } from "../../asserts/icons";
import MailIcon from "../../asserts/icons/MailIcon.png";
import Whatsapp from "../../asserts/icons/Whatsapp.png";
import eyeOpen from "../../asserts/icons/eye-open.png";
import eyeClose from "../../asserts/icons/eye-close.png";
import editPencilBlack from "../../asserts/icons/edit-pencil-black.png";
import Acce from "./../../asserts/images/acc.png";
import Placeholder from "./../../asserts/images/placeholder.jpg";
import { PenEditIcon } from "./../../asserts/icons/index";
import twitter from '../../asserts/icons/twitter.png'
import instagram from '../../asserts/icons/instagram.png'
import facebook from '../../asserts/icons/facebook.png'
import google from '../../asserts/icons/google2.png'
import linkedin from '../../asserts/icons/linkedin.svg'
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();

  const [profileData,setProfileData] =useState({

    firstName:"",
    middleName:"",
    lastName:"",
    userName:"",
    password:"",
    phone:"",
    whatsapp:"",
    email:"",
    headline:"",
    experience:"",
    skillSet:"",
    designation:"",
    recrutingFor:"",
   

  })

  const [hide,setHide] = useState({
    phone:true,
    whatsapp:true,
    email:true,
  })
const handleHide=(value)=>{
  // setHide({[hide.value]:!hide.value})
  // console.log(hide)

  hide[value] = !hide[value]
setHide({
  ...hide
  })

}

  const handleEventChange = (evt) => {
    setProfileData({
      ...profileData,
      [evt.target.name]: evt.target.value,
    });
  };



const handleSubmitProfile= async()=>{
  const token = localStorage.getItem("token");
  
  if(!token){
    history.push("/")
  }

  try {
    const response = await axios({
      // url: "http://localhost:8000/api/dash/user",
      url: "https://job-market-node.codedeployment.tk/api/dash/user",
      method: "PUT",
      headers:{"Authorization":`Bearer ${token}`},
      data: {
        
        profileData
      },
    });
    console.log(response);

  //  console.log(profileData)
    // console.log(response);
  
    //  console.log(response.data.data);

  } catch (err) {
  console.log(err)
  }
}


const getProfile=async()=>{
  const token = localStorage.getItem("token");
  try {
    const response = await axios({
      // url: "http://localhost:8000/api/dash/user",
      url: "https://job-market-node.codedeployment.tk/api/dash/user",
      method: "GET",
      headers:{"Authorization":`Bearer ${token}`},
    });
    setProfileData(response.data.data)
    console.log(profileData)

  } catch (err) {
  console.log(err)
  }
}

const handleCancel=()=>{
getProfile()
}

useEffect(() => {
  getProfile()
}, [])




  return (
    <div className='profile-container'>
      {/* left */}
      <div className='profile-left'>
        {/* profile head */}
        <div className='profile-head'>
          <div className='mt fw6'>Edit Profile</div>
          <div className='profile-btns'>
            <div className='btn btn-cancel2' onClick={handleCancel}>Cancel</div>
            <div className='btn btn-save' onClick={handleSubmitProfile}>Save Changes</div>
          </div>
        </div>
        {/* end of profile head */}

        {/* profile body */}
        <div className='mt fw6'>Generals</div>
        <div className='createjob-adddoc-batch'>
          {/* first row */}
          <div>
            <label htmlFor='firstName'>First Name</label>
            <InformationIcon className='info-icon' />
            <input
              onChange={handleEventChange}
              value={profileData.firstName}
              name='firstName'
              id='firstName'
              type='text' 
            />
          </div>
          <div>
            <label htmlFor='middleName'>Middle Name</label>
            <input
              onChange={handleEventChange}
              value={profileData.middleName}
              name='middleName'
              id='middleName'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label>

            <input
              name='lastName'
              onChange={handleEventChange}
              value={profileData.lastName}
              id='lastName'
              type='text'
            />
          </div>
          {/* end of first row */}

          {/* second row */}
          <div>
            <label htmlFor='userName'>Username</label>
            <InformationIcon className='info-icon' />
            <input
              onChange={handleEventChange}
              value={profileData.userName}
              name='userName'
              id='userName'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              onChange={handleEventChange}
              value={profileData.password}
              name='password'
              id='password'
              type='password'
            />
          </div>
          {/* end of second row */}
        </div>

        <div className='mt fw6'>contact</div>
        <div className='createjob-adddoc-batch'>
          {/* third row */}
          <div >
            <label htmlFor='phone'>Phone</label>
            <div className="icon-div">

            <PhoneIcon></PhoneIcon>
            <div className="icon-div-eye">
       
               <input
               onChange={handleEventChange}
               value={profileData.phone}
               name='phone'
               id='phone'
               type={hide.phone===true?'password':"text"}

               /> 
        
           
              <img src={hide.phone===true? eyeOpen:eyeClose} onClick={()=>handleHide("phone")}></img>
              </div>
              </div>
          </div>
          <div>
            <label htmlFor='whatsapp'>Whatsapp</label>
            <div className="icon-div">

          <img src={Whatsapp}></img>
          <div className="icon-div-eye">
            <input
              onChange={handleEventChange}
              value={profileData.whatsapp}
              name='whatsapp'
              id='whatsapp'
              type={hide.whatsapp===true?'password':"text"}
            />
            <img src={hide.whatsapp===true? eyeOpen:eyeClose}  onClick={()=>handleHide("whatsapp")}></img>
            </div>
          </div>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <div className="icon-div">
            <img src={MailIcon}></img>
            <div className="icon-div-eye">

            <input
              name='email'
              onChange={handleEventChange}
              value={profileData.email}
              id='email'
              type={hide.email===true?'password':"text"}
            />
            <img src={hide.email===true? eyeOpen:eyeClose}  onClick={()=>handleHide("email")} ></img>

            </div>
            </div>
          </div>
          {/* end of third row */}

          {/* fourth row */}
          <div>
            <label htmlFor='headline'>Headline</label>
            <InformationIcon className='info-icon' />
            <input
              onChange={handleEventChange}
              value={profileData.headline}
              name='headline'
              id='headline'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='experience'>Experience</label>
            <input
              onChange={handleEventChange}
              value={profileData.experience}
              name='experience'
              id='experience'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='skillSet'>Skill Set</label>

            <input
              name='skillSet'
              onChange={handleEventChange}
              value={profileData.skillSet}
              id='skillSet'
              type='text'
            />
          </div>
          {/* end of fourth row */}

          {/* fifth row */}
          <div>
            <label htmlFor='designation'>Designation</label>
         
            <input
              onChange={handleEventChange}
              value={profileData.designation}
              name='designation'
              id='designation'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='recrutingFor'>Recruting For</label>
            <input
              onChange={handleEventChange}
              value={profileData.recrutingFor}
              name='recrutingFor'
              id='recrutingFor'
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
              <img src={MailIcon} style={{marginRight:"1rem"}}></img><div>odadink@mail.com</div>
            </div>
          <br></br>
          <br></br>
          <br></br>

            <div className='profile-right-info-bottom-contact'  style={{display:"flex",justifyContent:"space-between"}}>
               <div>Email Signature(Internal) </div>
               <div>

               <img src={eyeOpen} style={{marginLeft:"4rem",
              border:"1px solid gray",
              borderRadius:"100px",
              padding:"3px",
            }}></img>
             <img src={editPencilBlack} style={{marginLeft:"2rem",
              border:"1px solid gray",
              borderRadius:"100px",
              padding:"3px",
            }}></img>
            </div>
            </div>
            




            <div className='profile-right-info-bottom-contact'  style={{display:"flex",justifyContent:"space-between"}}>
               <div>Email Signature(Internal) </div>
               <div>

               <img src={eyeOpen} style={{marginLeft:"4rem",
              border:"1px solid gray",
              borderRadius:"100px",
              padding:"3px",
            }}></img>
             <img src={editPencilBlack} style={{marginLeft:"2rem",
              border:"1px solid gray",
              borderRadius:"100px",
              padding:"3px",
            }}></img>
            </div>
            </div>
            



            <div className='profile-right-info-bottom-contact'  style={{display:"flex",justifyContent:"space-between"}}>
               <div>Email Signature(Internal) </div>
               <div>

               <img src={eyeOpen} style={{marginLeft:"4rem",
              border:"1px solid gray",
              borderRadius:"100px",
              padding:"3px",
            }}></img>
             <img src={editPencilBlack} style={{marginLeft:"2rem",
              border:"1px solid gray",
              borderRadius:"100px",
              padding:"3px",
            }}></img>
            </div>
            </div>
            
            <br></br>

            <div className='profile-right-info-bottom-contact'
            style={{display:"flex",justifyContent:"flex-end"}}>
              

              <PenEditIcon /> 
              <div>Add/Edit Email Signature</div>
             
            </div>
          </div>
        </div>
      </div>
      {/* end of right */}
    </div>
  );
};

export default Profile;
