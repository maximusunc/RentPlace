import React from "react";
import Container from "../container";

const Tenant = (props) =>
    <Container>
        <ul>
            <li>ID:  {props._id}</li>
            <li>Name:  {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
    </Container>;

export default Tenant;