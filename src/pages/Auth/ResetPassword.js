import "./Auth.scss";
import Hero from "./../../asserts/images/hero.jpg";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ResetPassword = (props) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

const resetPassword=()=>{
    if(password!=confirmPassword)return
   
    console.log("Password Reset")

}

  return (
    <section className='login-container'>
      <div className='left'>
        <img className='hero-img' src={Hero} alt='hero' />
      </div>
      <div className='right'>
        <h1 className='primary-heading'>Jobs Market.AI</h1>

     

        {/* start of reset password */}
       
          <section className='auth-form'>
            <div className='pass-reset'>Reset Your Password</div>
            <p className='pass-text'>
              Please enter your new password that you can remember easily and
              proceed
            </p>
            <div className='input-container'>
              <label>Enter Password</label>
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
              <label>Confirm Password</label>
              <input
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>

            <div className='input-container'>
              <button onClick={resetPassword}> Reset Password </button>
            </div>
          </section>
    
        {/* end of reset password */}
      </div>
    </section>
  );
};

export default ResetPassword;
