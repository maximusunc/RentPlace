import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./card.css";

class Card extends Component {

    login = () => {
        this.props.auth.login();
    };
    
    render() {
        return (
            <div className="card small">
                <div className="card-content">
                    <h4>Welcome to RentPlace!</h4>
                    <h4>We offer a cutting-edge property management platform for tenants, landlords, and owners</h4>
                </div>
                <div className="card-action">
                    <button className="waves-effect waves-teal btn-large" onClick={this.login}><i className="material-icons left">lock_open</i>Sign In</button>
                    <Link className="waves-effect waves-teal btn-large" to="/signup"><i className="material-icons left">add</i>Create an Acount</Link>
                </div>
            </div>
        );
    };
};
    

export default Card;