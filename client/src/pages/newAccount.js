import React, { Component } from "react";
import Container from "../components/container";
import NewAccCard from "../components/newAccCard";
import API from "../utils/API";

const defaultState = {
    selected: "Tenant",
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    password: ""
};

class NewAccount extends Component {
    state = {
        defaultState
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };
    
    handleFormSubmit = (event) => {
        const { history } = this.props;
        event.preventDefault();
        API.createUser({
            name: this.state.name,
            role: this.state.selected,
            email: this.state.email,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone
        })
            .then(res => history.push("/user"))
            .catch(err => alert("Sorry, all fields are required."));
    };

    render() {
        return (
            <Container>
                <NewAccCard 
                    name={this.state.name}
                    selected={this.state.selected}
                    email={this.state.email}
                    address1={this.state.address1}
                    address2={this.state.address2}
                    city={this.state.city}
                    state={this.state.state}
                    zip={this.state.zip}
                    phone={this.state.phone}
                    password={this.state.password}
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                />
            </Container>
        );
    };
};

export default NewAccount;