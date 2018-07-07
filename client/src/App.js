import React from "react"
import Home from "./pages/home/home";
import Daily from "./pages/Daily/dailytrainer";
import Profile from "./pages/profile/profile";
import Selftrainer from "./pages/selftrainer/selftrainer";
import VIP from "./pages/vip/vip";
import Diet from "./pages/diet/diet";
import Food from "./pages/food/food";
import Supps from "./pages/supps/supps";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./pages/signup/signup"
import Admin from "./pages/admin/admin";
import AdminView from "./pages/adminView/adminView";
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
      <Route exact path="/vip" component={VIP} />
      <Route exact path="/diet" component={Diet} />
      <Route exact path="/food" component={Food} />
      <Route exact path="/supps" component={Supps} />


      <Route exact path="/admin" component={Admin} />
      <Route exact path="/adminView" component={AdminView} />

    </Switch>
    </Router>
  </div>


export default App;