import "./Auth.scss";
import Hero from "./../../asserts/images/hero.jpg";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <section className="login-container">
      <div className="left">
        <img className="hero-img" src={Hero} alt="hero" />
      </div>
      <div className="right">
        <h1 className="primary-heading">Jobs Market.AI</h1>

        {/* login component */}

        <section className="auth-form">
          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              value={email}
              placeholder="Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="forgot">
            <div className="wrong-pass">wrong password</div>
            <Link
              style={{
                fontWeight:800,
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
              }}
              to="/forgot-password"
            >
              <div className="forgot-pass">Forgot Password?</div>
            </Link>
          </div>
          <div className="input-container">
            <button onClick={login}> Login </button>
          </div>
        </section>

        {/* end of login component */}

        {/* end of reset password */}
      </div>
    </section>
  );
};

export default Auth;
