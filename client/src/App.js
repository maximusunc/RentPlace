import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Splash} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
