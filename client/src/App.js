import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/home";
import Signin from "./pages/signin";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/signin" component={Signin} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
