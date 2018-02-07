import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/home";
import Signin from "./pages/signin";
import NewAccount from "./pages/newAccount";
import UserPage from "./pages/userPage";
import ServiceReq from "./pages/servicereq";
import Properties from "./pages/properties";
import NoMatch from "./pages/noMatch";
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
          <Route exact path="/signup" component={NewAccount} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/servicereq" component={ServiceReq} />
          <Route exact path="/properties" component={Properties} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>;

export default App;
