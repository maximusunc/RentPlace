import React, { Component } from "react";
import Container from "../components/container";
import NewAccCard from "../components/newAccCard";
import API from "../utils/API";


const defaultState = {
    selected: "Tenant",
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    password: "",
    authState: ""
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
        event.preventDefault();
        API.userSignUp({
            name: this.state.name,
            role: this.state.selected,
            email: this.state.email,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
            password: this.state.password
        }).then(res => {
            alert("Successfully added. Now please sign in from the main page.");
            window.location = "/";
        }
        ).catch(err =>
            alert("Something went wrong. Please make sure you filled out each field and are using a unique email.")
        );
    };

    render() {
        return (
            <Container>
                <NewAccCard 
                    name={this.state.name}
                    selected={this.state.selected}
                    address1={this.state.address1}
                    address2={this.state.address2}
                    city={this.state.city}
                    state={this.state.state}
                    zip={this.state.zip}
                    phone={this.state.phone}
                    email={this.state.email}
                    password={this.state.password}
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                />
            </Container>
        );
    };
};

export default NewAccount;