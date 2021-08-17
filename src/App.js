import { Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Hero from "./pages/Hero/Hero";
// import './pages/Hero/Hero.scss'

function App() {
  return (
    <div className='App'>
 
      <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/overview' component={Hero} />
        <Route exact path='/forgot-password' component={ForgotPassword} />
        <Route exact path='/reset-password' component={ResetPassword} />
      </Switch>
      </div>
     
  );
}

export default App;
