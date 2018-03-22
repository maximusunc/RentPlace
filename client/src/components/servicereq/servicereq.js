import React from "react";
import Container from "../container";
import "./servicereq.css";

const ServiceReq = (props) =>
    <Container>
        <div className="servicereq">
            <ul>
                <li>Property: {props.property}</li>
                <li>Subject: {props.subject}</li>
                <li>Description: {props.description}</li>
                <li>Notes: {props.notes}</li>
                <li>Date Entered: {props.date}</li>
            </ul>
            <button onClick={props.handleDelete} className="waves-effect waves-teal btn-medium delete"><i className="material-icons left">delete</i>
                Delete
            </button>
        </div>
    </Container>;

export default ServiceReq;