import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";

class UserPage extends Component {
    state = {
        name: "",
        role: ""
    };

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        API.getUser("5a7a670bad045b6b79b8cda6")
            .then(res => this.setState({
                name: res.data.name,
                role: res.data.role
            }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <h1>{this.state.name}</h1>
                <h2>{this.state.role}</h2>
            </Container>
        );
    };
};

export default UserPage;