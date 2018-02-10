import React from "react";
import Container from "../container";
import { Link } from "react-router-dom";

const Property = (props) =>
    <Container>
        <ul>
            <li>_landlord= {props._landlord}</li>
            <li>_tenant= {props._tenant}</li>
            <li>address1 = {props.address1}</li>
            <li>address2= {props.address2}</li>
            <li>city= {props.city}</li>
            <li>state= {props.state}</li>
            <li>zip= {props.zip}</li>
            <li>leaseStart= {props.leaseStart}</li>
            <li>leaseEnd= {props.leaseEnd}</li>
            <li>rentAmt= {props.rentAmt}</li>
            <li>id= {props.id}</li> 
        </ul>
    </Container>;

export default Property;