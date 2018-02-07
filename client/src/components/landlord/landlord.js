import React from "react";
import Container from "../container";
import { Link } from "react-router-dom";

const Landlord = (props) =>
    <Container>
        <h1>Hello, {props.name}</h1>
        <p>I am a landlord</p>

        <ul>
            <li>Email: {props.email}</li>
            <li>Address1: {props.address1}</li>
            <li>Address2: {props.address2}</li>
            <li>City: {props.city}</li>
            <li>State: {props.state}</li>
            <li>Zip: {props.zip}</li>
            <li>Phone #: {props.phone}</li>
        </ul>

        <h3>Properties:</h3>
        <ul>
            
        </ul>

        <Link to="/servicereq">View Service Reqeusts</Link>
    </Container>;

export default Landlord;