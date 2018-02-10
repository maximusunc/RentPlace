import React from "react";
import Container from "../container";
import { Link } from "react-router-dom";

const ServiceReqList = (props) =>
    <Container>
        {props.children}
    </Container>;

export default ServiceReqList;