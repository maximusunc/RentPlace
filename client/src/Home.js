import React, { Component } from 'react';
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
        {
          isAuthenticated() &&
          <div className="container column">
            <UserPage 
              auth={this.props.auth}
            />
          </div>
        }
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