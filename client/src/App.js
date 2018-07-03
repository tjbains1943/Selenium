import React from "react"
import Home from "./pages/home/home";
import Daily from "./pages/Daily/dailytrainer";
import Profile from "./pages/profile/profile";
import Selftrainer from "./pages/selftrainer/selftrainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./pages/signup/signup"
// import { differenceInCalendarISOYears } from "date-fns";


const App = () =>
  <div>
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/daily" component={Daily}/>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/selftrainer" component={Selftrainer} />

    </Switch>
    </Router>
  </div>


export default App;