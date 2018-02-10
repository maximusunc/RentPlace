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
    authState: ""
};

class NewAccount extends Component {
    state = {
        defaultState
    };

    getUrlParameter = () => {
        var url_string = window.location.href
        var url = new URL(url_string);
        var state = url.searchParams.get("state");
        this.setState({authState: state});
    };

    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile: profile });
            });
        } else {
            this.setState({ profile: userProfile });
        };
    };

    componentDidMount() {
        this.getUrlParameter();
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        API.createUser({
            name: this.state.name,
            role: this.state.selected,
            email: this.state.profile.name,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone
        })
            .then(res => window.location = "https://rentplace.auth0.com/continue?state=" + this.state.authState)
            .catch(err => alert("Sorry, all fields are required."));
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
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                />
            </Container>
        );
    };
};

export default NewAccount;