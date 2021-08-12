import React, { useState } from "react";
import axios from "axios";

const DashSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
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
        <div className='forgot-pass'>Forgot Password?</div>
      </div>
      <div className='input-container'>
        <button onClick={login}> Login </button>
      </div>
    </section>
  );
};

export default DashSignin;
