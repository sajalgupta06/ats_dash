import "./Auth.scss";
import Hero from "./../../asserts/images/hero.jpg";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { MyContext } from "../../App";
import { URL } from "../../config";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  
const data = useContext(MyContext)

  const history = useHistory();

  // login
  const login = async () => {
    try {
      const response = await axios({
        url: `${URL}/api/dash/login`,
        method: "POST",
        data: {
          email,
          password,
        },
      });
      // console.log(response.data.data);

   
      console.log(response);
    
      const { token, user } = response.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      // localStorage.getItem("user1", JSON.parse(user));
      localStorage.getItem("user");
      // localStorage.getItem("user1");
      if (token) {

        history.push("/dashboard");
        // localStorage.setItem("credits",JSON.parse(user.credits))
        data.setCredits({type:"SET_CREDITS",payload:user.credits})
        localStorage.setItem("credits",user.credits)
      }else{

        history.push("/");
      }
    } catch (err) {
     setError(err.response.data.message)
    // setError(err. )
  
    console.log(err.response.data.message)
  
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
            <label>User ID</label>
            <input
              type="text"
              value={email}
              placeholder="User ID"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={`input-container${error===""?'':" error-div"}`}>
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

            {
               (

                <div className="wrong-pass">{error}</div> 
              )
            }
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
          </div>
            <button onClick={login}> Login </button>
        </section>

        {/* end of login component */}

        {/* end of reset password */}
      </div>
    </section>
  );
};

export default Auth;
