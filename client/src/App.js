import React from "react"
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import SelfTrainer from "./pages/selftrainer/selftrainer";
import VIP from "./pages/vip/vip";
import Diet from "./pages/diet/diet";
import Food from "./pages/food/food";
import Supps from "./pages/supps/supps";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Daily from "./pages/Daily/daily";

import Signup from "./pages/signup/signup"
import Admin from "./pages/admin/admin";
import AdminView from "./pages/adminView/adminView";
import DailyTrainer from "./pages/dailyTrainer/dailyTrainer";
// import { differenceInCalendarISOYears } from "date-fns";


const App = () =>
  <div>
    <Router>
    <Switch>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/daily" component={Daily}/>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/selftrainer" component={SelfTrainer} />
      <Route exact path="/vip" component={VIP} />
      <Route exact path="/diet" component={Diet} />
      <Route exact path="/food" component={Food} />
      <Route exact path="/supps" component={Supps} />

      <Route exact path="/admin" component={Admin} />
      <Route exact path="/adminView" component={AdminView} />
      <Route exact path="/dailyTrainer" component={DailyTrainer} />


    </Switch>
    </Router>
  </div>


export default App;