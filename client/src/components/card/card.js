import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import Auth from '../../auth/auth.js';

const auth = new Auth();

class Card extends Component {

    handleClick = (event) => {
        event.preventDefault();

        auth.login();
    };
    
    render() {
        return (
            <div className="card small">
                <div className="card-content">
                    <h4>Welcome to RentPlace!</h4>
                    <h4>We offer a cutting-edge property management platform for tenants, landlords, and owners</h4>
                </div>
                <div className="card-action">
                    <Link className="waves-effect waves-teal btn-large" to="/signin"><i className="material-icons left">lock_open</i>Sign In</Link>
                    <button className="waves-effect waves-teal btn-large" onClick={this.handleClick}><i className="material-icons left">add</i>Create an Acount</button>
                </div>
            </div>
        );
    };
};
    

export default Card;