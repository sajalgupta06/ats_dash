import { Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Hero from "./pages/Hero/Hero";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/overview' component={Hero} />
      </Switch>
    </div>
  );
}

export default App;
