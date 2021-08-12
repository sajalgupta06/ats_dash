import "./Auth.scss";
import Hero from "./../../asserts/images/hero.jpg";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState("login");

  const history = useHistory();

  // login
  const login = async () => {
    try {
      const response = await axios({
        url: "http://localhost:8000/api/dash/login",
        method: "POST",
        data: {
          email,
          password,
        },
      });
      console.log(response.data.data);
      const { token, user } = response.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
      if (token) {
        history.push("/overview");
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  // handelForgotPassword
  const handelForgotPassword = async () => {
    try {
      const response = await axios({
        url: "http://localhost:8000/api/dash/forgotPassword",
        method: "POST",
        data: {
          email,
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

        {/* login component */}
        {stage === "login" && (
          <section className='auth-form'>
            <div className='input-container'>
              <label>Email</label>
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
              <label>Password</label>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className='forgot'>
              <div className='wrong-pass'>wrong password</div>
              <div onClick={() => setStage("email")} className='forgot-pass'>
                Forgot Password?
              </div>
            </div>
            <div className='input-container'>
              <button onClick={login}> Login </button>
            </div>
          </section>
        )}
        {/* end of login component */}

        {/* start of forgot password */}
        {stage === "email" && (
          <section className='auth-form'>
            <div className='pass-reset'>Password Reset</div>
            <p className='pass-text'>
              We will send you a password reset link on your Email. Once Done,
              Please login again with new password.
            </p>
            <div className='input-container'>
              <label>Email Address</label>
              <input
                type='text'
                //   value={email}
                placeholder='Your Email'
                onChange={(e) => {
                  // setEmail(e.target.value);
                }}
              />
            </div>

            <div className='input-container'>
              <button onClick={handelForgotPassword}> Send Link </button>
            </div>
          </section>
        )}
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
              <button onClick={login}> Reset Password </button>
            </div>
          </section>
        )}
        {/* end of reset password */}
      </div>
    </section>
  );
};

export default Auth;
