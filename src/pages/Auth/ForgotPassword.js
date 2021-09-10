import "./Auth.scss";
import Hero from "./../../asserts/images/hero.jpg";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {  URL, ENV } from "../../config";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState("login");

  const history = useHistory();

  // handelForgotPassword
  const handelForgotPassword = async () => {

    try {
      
      let reseturl;
      if(ENV==="development"){
        reseturl = 'http://localhost:3000'
      }
      else if(ENV==="production"){
        reseturl = 'https://ats-dash.vercel.app/'
      }
   

      const response = await axios({
       
        url: `${URL}/api/dash/forgotPassword`,
        method: "POST",
        data: {
          email,
          reseturl
        },
      });
      console.log(response.data.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <section className='login-container'>
      <div className='left'>
        <img className='hero-img' src={Hero} alt='hero' />
      </div>
      <div className='right'>
        <h1 className='primary-heading'>Jobs Market.AI</h1>

        {/* start of forgot password */}
          <section className='auth-form'>
            <div className='pass-reset'>Password Reset</div>
            <p className='pass-text'>
              We will send you a password reset link on your Email. Once Done,
              Please login again with new password.
            </p>
            <div className='input-container'>
              <label>Email Address</label>
              <input
                type='email'
                  value={email}
                placeholder='Your Email'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

          
              <button onClick={handelForgotPassword}> Send Link </button>
          </section>
        
        {/* end of forgot password */}

        {/* start of reset password */}
        {stage === "reset" && (
          <section className='auth-form'>
            <div className='pass-reset'>Reset Your Password</div>
            <p className='pass-text'>
              Please enter your new password that you can remember easily and
              proceed
            </p>
            <div className='input-container'>
              <label>Enter Password</label>
              <input
                type='text'
                value={email}
                placeholder='Your Email'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='input-container'>
              <label>Confirm Password</label>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className='input-container'>
              <button > Reset Password </button>
            </div>
          </section>
        )}
        {/* end of reset password */}
      </div>
    </section>
  );
};

export default ForgotPassword;
