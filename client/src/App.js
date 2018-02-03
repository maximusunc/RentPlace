import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/home";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

export default App;
