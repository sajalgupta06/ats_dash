import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { Route, Switch,useHistory } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Auth from "./pages/Auth/Auth";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Candidates from "./pages/Candidates/Candidates";
import Dashboard from "./pages/Dashboard/Dashboard";
import ConfigureEmail from "./pages/Email/ConfigureEmail";
import Email from "./pages/Email/Email";
// import Hero from "./pages/Hero/Hero";
import JobListing from "./pages/Jobs/JobListing";
import Message from "./pages/Message/Message";
import Notification from "./pages/Notification/Notification";
import Requirement from "./pages/Requirements/Requirement";
import Joined from "./pages/Submission/Joined";
import Submissions from "./pages/Submission/Submission";
import Me from "./pages/Me/Me";
import "./pages/Hero/Hero.scss";
import Reports from "./pages/Reports/Reports";

import reducer from "./reducer/reducer";
import axios from "axios";


export const MyContext = createContext()

const iState = {
  heading:"Dashboard",
  credits:"",
  
}




export function App() {

 const history = useHistory()
 const credits = useContext(MyContext)
    const token = localStorage.getItem("token")
    if(!token){
      history.push('/')
      
      
    }
    try {
      const response = axios({
        // url: `http://localhost:8000/api/dash/user`,
        url: `https://job-market-node.codedeployment.tk/api/dash/user`,
        method: "GET",
  
        headers: { Authorization: `Bearer ${token}` },
      }).then(data=>{
        if(data){

          console.log(data.data.data);
          if (data.data.status === "success") {
            console.log("Successfullt LoggedIn");
            localStorage.setItem("credits",data.data.data.credits)
        }
      }
      });
  
      
    
   
    } catch (error) {
      console.log(error)
    }

   
    
  
  
  const [data,dispatch] = useReducer(reducer,iState)
  
  const [heading , setHeading] = useState("Dashboard")
    
  return (
    <MyContext.Provider value={{heading:data,credits:data,changeHeading:dispatch,setCredits:dispatch}}>
    <div className="App">

      <Switch>
        <Route exact path="/" component={Auth} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <Route exact path="/reset-password" component={ResetPassword} />
        <div style={{ height: "100%", backgroundColor: "#2186F2" }}>
          <Sidebar setHeading={setHeading} />
          <section className="hero-container">
            <div></div>
            <div className="hero-right">
              <Navbar heading={heading} />
              <div className="view-holder">
                <Route exact path="/dashboard" render={()=><Dashboard/>} />
                <Route exact path="/job-listing" component={JobListing} />
                <Route exact path="/requirements" component={Requirement} />
                <Route exact path="/candidates" component={Candidates} />
                <Route exact path="/submissions" component={Submissions} />
                <Route exact path="/notifications" component={Notification} />
                <Route exact path="/message" component={Message} />
                <Route
                  exact
                  path="/configureEmail"
                  component={ConfigureEmail}
                />
                <Route exact path="/email" component={Email} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/me" component={Me} />
                <Route exact path="/reports" component={Reports} />

              </div>
            </div>
          </section>
        </div>
      </Switch>
    </div>
    </MyContext.Provider>
  );
}




