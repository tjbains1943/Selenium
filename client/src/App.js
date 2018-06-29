import React, { Component } from "react"
import Home from "./pages/home/home";
import Daily from "./pages/Daily/dailytrainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./pages/signup/signup"
import { differenceInCalendarISOYears } from "date-fns";


const App = () =>
<Router>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/" component={Signup}/> */}
    </Switch>
  </div>
</Router>;


export default App;