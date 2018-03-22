import React from 'react';
import { Route, Router, Switch, Link } from 'react-router-dom';
import Auth from './auth/auth';
import history from './history';
import Home from './Home';
import Callback from './Callback';
import NewAccount from "./pages/newAccount";
import ServiceReq from "./pages/servicereq";
import Properties from "./pages/properties";
import MyServiceReqs from "./pages/myServiceReqs";
import AllTenants from "./pages/allTenants";
import EditProperty from "./pages/editProperty";
import EditUser from "./pages/editUser";
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
      <Link to="/home"><button id="home" className="waves-effect waves-teal btn-large"><i className="material-icons left">home</i>Home</button></Link>
        <Header />
        <div className="content">
          <Switch>
              <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
              <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
              <Route path="/callback" render={(props) => {
                  handleAuthentication(props);
                  return <Callback {...props} />
              }}/>
              <Route exact path="/signup" render={(props) => <NewAccount auth={auth} {...props} />} />
              <Route exact path="/servicereq" render={(props) => <ServiceReq auth={auth} {...props} />} />
              <Route exact path="/properties" render={(props) => <Properties auth={auth} {...props} />} />
              <Route exact path="/myservicereqs" render={(props) => <MyServiceReqs auth={auth} {...props} />} />
              <Route exact path="/alltenants" render={(props) => <AllTenants auth={auth} {...props} />} />
              <Route exact path="/editProperty" render={(props) => <EditProperty auth={auth} {...props} />} />
              <Route exact path="/editUser" render={(props) => <EditUser auth={auth} {...props} />} />
              <Route render={(props) => <NoMatch auth={auth} {...props} />} />
          </Switch>
        </div>
        <Footer />
    </div>
  </Router>
);

export default Routes;