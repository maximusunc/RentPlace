import React, { Component } from "react";
import Container from "../components/container";
import UserUpdateForm from "../components/userUpdateForm";
import API from "../utils/API";

const defaultState = {
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
};

class EditUser extends Component {
    state = {
        defaultState
    };

    componentDidMount() {
        API.editUser(localStorage.getItem("userId"))
            .then(res => {
                this.setState({
                    name: res.data.name,
                    address1: res.data.address1,
                    address2: res.data.address2,
                    city: res.data.city,
                    state: res.data.state,
                    zip: res.data.zip,
                    phone: res.data.phone
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        var id = localStorage.getItem("userId");
        API.updateUser(id, {
            name: this.state.name,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
        }).then(res => {
            alert("Successfully updated.");
            window.location = "/";
        }
        ).catch(err =>
            alert("Something went wrong.")
        );
    };

    render() {
        return (
            <Container>
                <UserUpdateForm 
                    name={this.state.name}
                    address1={this.state.address1}
                    address2={this.state.address2}
                    city={this.state.city}
                    state={this.state.state}
                    zip={this.state.zip}
                    phone={this.state.phone}
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                />
            </Container>
        );
    };
};

export default EditUser;