import React from "react";
import Container from "../container";

const Tenant = (props) =>
    <Container>
        <h5>Name:  {props.name}</h5>
        <h6>Email: {props.email}</h6>
        <button onClick={props.handleClick} className="waves-effect waves-teal btn-medium"><i className="material-icons left">add</i>
            Add tenant to property
        </button>
    </Container>;

export default Tenant;