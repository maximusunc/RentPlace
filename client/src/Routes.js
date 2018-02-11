import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './Home';
import Callback from './Callback';
import Auth from './auth/auth';
import history from './history';
// import Signin from "./pages/signin";
import NewAccount from "./pages/newAccount";
// import UserPage from "./pages/userPage";
import ServiceReq from "./pages/servicereq";
import Properties from "./pages/properties";
import NoMatch from "./pages/noMatch";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
        <Header />
        <Switch>
            <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
            }}/>
            {/* <Route exact path="/signin" render={(props) => <Signin auth={auth} {...props} />} /> */}
            <Route exact path="/signup" render={(props) => <NewAccount auth={auth} {...props} />} />
            {/* <Route exact path="/user" render={(props) => <UserPage auth={auth} {...props} />} /> */}
            <Route exact path="/servicereq" render={(props) => <ServiceReq auth={auth} {...props} />} />
            <Route exact path="/properties" render={(props) => <Properties auth={auth} {...props} />} />
            <Route render={(props) => <NoMatch auth={auth} {...props} />} />
        </Switch>
        <Footer />
    </div>
  </Router>
);

export default Routes;