import React from "react";
import Container from "../container";
import { Link } from "react-router-dom";

const Tenant = (props) =>
    <Container>
        <h1>Welcome, {props.name}</h1>
        <p>You are a tenant</p>

        <ul>
            <li>Email: {props.email}</li>
            <li>Address1: {props.address1}</li>
            <li>Address2: {props.address2}</li>
            <li>City: {props.city}</li>
            <li>State: {props.state}</li>
            <li>Zip: {props.zip}</li>
            <li>Phone #: {props.phone}</li>
        </ul>

        <h3>Property Info:</h3>
        <ul>
            <Link to="/properties">Add your property</Link>
        </ul>

        <Link to="/servicereq">Create a Service Reqeust</Link>
    </Container>;

export default Tenant;