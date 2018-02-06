import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Splash from "./pages/home";
import Signin from "./pages/signin";
import NewAccount from "./pages/newAccount";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import Auth from './auth/auth';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const App = () =>
  <MuiThemeProvider>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/signin" component={Signin} />
          {/* <Route exact path="/signup" component={NewAccount} /> */}
          <Route exact path="/signup" render={(props) => {
            handleAuthentication(props)
            return <NewAccount {...props} />
          }}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  </MuiThemeProvider>;

export default App;
