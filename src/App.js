import { Route, Switch } from "react-router-dom";
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
import './pages/Hero/Hero.scss'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Auth} />
        <div style={{ height: "100%", backgroundColor: "#2186F2" }}>
          <Sidebar />
          <section className="hero-container">
            <div></div>
            <div className="hero-right">
              <Navbar />
              <div className="view-holder">
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/job-listing" component={JobListing} />
                <Route exact path="/requirements" component={Requirement} />
                <Route exact path="/candidates" component={Candidates} />
                <Route exact path="/submissions" component={Submissions} />
                <Route exact path="/notifications" component={Notification} />
                <Route exact path="/message" component={Message} />
                <Route exact path="/configureEmail" component={ConfigureEmail } />
                <Route exact path="/email" component={Email } />
                <Route exact path="/profile" component={Profile } />
                <Route exact path="/me" component={Me} />

                <Route
                  exact
                  path="/forgot-password"
                  component={ForgotPassword}
                />
                <Route exact path="/reset-password" component={ResetPassword} />
              </div>
            </div>
          </section>
        </div>
      </Switch>
    </div>
  );
}

export default App;
