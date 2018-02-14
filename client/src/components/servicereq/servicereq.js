import React from "react";
import Container from "../container";

const ServiceReq = (props) =>
    <Container>
        <ul>
            <li>Property: {props.property}</li>
            <li>Subject: {props.subject}</li>
            <li>Description: {props.description}</li>
            <li>Notes: {props.notes}</li>
            <li>Date Entered: {props.date}</li>
        </ul>
        <button onClick={props.handleDelete} className="waves-effect waves-teal btn-medium"><i className="material-icons left">delete</i>
            Delete
        </button>
    </Container>;

export default ServiceReq;