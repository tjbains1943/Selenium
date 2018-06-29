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
      <Route exact path="/" component={Home} />
<<<<<<< HEAD
      {/* <Route exact path="/" component={Signup}/> */}
=======
      <Route exact path="/signup" component={Signup} />

>>>>>>> 7bbbdb68e70b821630c7013d678be9f2a01b8774
    </Switch>
  </div>
</Router>;


export default App;