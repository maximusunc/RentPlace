import React from "react";
import "./card.css";

const Card = () =>
    <div className="card small">
        <div className="card-content">
            <h4>Welcome to RentPlace!</h4>
            <h4>We offer a cutting-edge property management platform for tenants, landlords, and owners</h4>
        </div>
        <div className="card-action">
            <a className="waves-effect waves-teal btn-large" href="signin.html"><i className="material-icons left">home</i>Sign In</a>
        </div>
    </div>;

export default Card;