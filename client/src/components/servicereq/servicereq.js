import React from "react";
import Container from "../container";
import "./servicereq.css";

// Rendered for every open service request
const ServiceReq = (props) =>
    <Container>
        <div className="servicereq">
            <ul id="request">
                <li>Property: {props.property}</li>
                <li>Subject: {props.subject}</li>
                <li>Description: {props.description}</li>
                <li>Notes: {props.notes}</li>
                <li>Date Entered: {props.date}</li>
            </ul>
            <button onClick={props.handleComplete} className="waves-effect waves-teal btn-medium complete"><i className="material-icons left">check</i>
                Complete
            </button>
        </div>
    </Container>;

export default ServiceReq;