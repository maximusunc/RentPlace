import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Splash from './pages/home';
import UserPage from "./pages/userPage";

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <Link to="/home"><button id="home" className="waves-effect waves-teal btn-large"><i className="material-icons left">home</i>Home</button></Link>
        {/* if the user is signed in, show thier info */}
        {
          isAuthenticated() &&
          <div className="container column">
            <UserPage 
              auth={this.props.auth}
            />
          </div>
        }
        {/* if the user isn't signed in, show the splash page */}
        {
          !isAuthenticated() && (
            <div className="container column">
              <Splash 
                auth={this.props.auth}
              />
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;