import React from "react"
import Home from "./pages/home/home";
import Daily from "./pages/Daily/dailytrainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./pages/signup/signup"
import { differenceInCalendarISOYears } from "date-fns";


const App = () =>
<Router>
  <div>
    <Switch>
<<<<<<< HEAD
      <Route exact path="/" component={Signup} />
=======
      <Route exact path="/" component={Daily} />
>>>>>>> 86cfdcc1439920e0b9c69b0293931cbb16efa765
      {/* <Route exact path="/" component={Signup}/> */}
      <Route exact path="/signup" component={Signup} />

    </Switch>
  </div>
</Router>;


export default App;