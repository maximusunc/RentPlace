import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = () =>
    <div className="card small">
        <div className="card-content">
            <h4>Welcome to RentPlace!</h4>
            <h4>We offer a cutting-edge property management platform for tenants, landlords, and owners</h4>
        </div>
        <div className="card-action">
            <Link className="waves-effect waves-teal btn-large" to="/signin"><i className="material-icons left">home</i>Sign In</Link>
        </div>
    </div>;

export default Card;