import React from "react";
import Container from "../container";

const Property = (props) =>
    <Container>
        <ul>
            <li>Address 1: {props.address1}</li>
            <li>Address 2: {props.address2}</li>
            <li>City: {props.city}</li>
            <li>State: {props.state}</li>
            <li>Zip: {props.zip}</li>
            <li>Lease Start Date: {props.leaseStart}</li>
            <li>Lease End Date:  {props.leaseEnd}</li>
            <li>Monthly Rent: ${props.rentAmt}</li>
        </ul>
    </Container>;

export default Property;