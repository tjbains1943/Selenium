import React from "react"
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./pages/signup/signup"


const App = () =>
<Router>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />

    </Switch>
  </div>
</Router>;


export default App;