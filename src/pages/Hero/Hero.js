import React, { useState } from "react";
import "./Hero.scss";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "./../Dashboard/Dashboard";
import JobListing from "../Jobs/JobListing";
import Message from "../Message/Message";
import Notification from "../Notification/Notification";
import Requirement from "../Requirements/Requirement";
import Submission from "../Submission/Submission";
import Candidate from "./../Candidates/Candidates";
import Email from "./../Email/Email";
import ConfigureEmail from "./../Email/ConfigureEmail";
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "./../../components/Profile/Profile";

const Hero = () => {
  const [view, setView] = useState("dashboard");

  return (
    <div style={{ height: "100%", backgroundColor: "#2186F2" }}>
      <Sidebar setView={setView} />
      <section className='hero-container'>
        <div></div>
        <div className='hero-right'>
          <Navbar setView={setView} view={view} />
          <div className='view-holder'>
            {view === "dashboard" && <Dashboard />}
            {view === "job listings" && <JobListing />}
            {view === "requirements" && <Requirement />}
            {view === "candidates" && <Candidate />}
            {view === "notifications" && <Notification />}
            {view === "submissions" && <Submission />}
            {view === "messages" && <Message />}
            {view === "email" && <Email />}
            {view === "configureEmail" && <ConfigureEmail />}
            {view === "profile" && <Profile />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
