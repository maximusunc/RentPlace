import React, { Component } from "react";
import Container from "../components/container";
import NewAccCard from "../components/newAccCard";

class NewAccount extends Component {
    state = {

    };

    render() {
        return (
            <Container>
                <NewAccCard />
            </Container>
        );
    };
};

export default NewAccount;