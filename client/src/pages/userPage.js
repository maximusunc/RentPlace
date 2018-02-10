import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";
import Tenant from "../components/tenant";
import Landlord from "../components/landlord";

class UserPage extends Component {
    state = {
        name: "",
        role: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
    };

    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile: profile });
                this.getUser();
            });
        } else {
            this.setState({ profile: userProfile });
        };
    };

    // componentDidMount() {
    //     this.getUser();
    // }

    getUser = () => {
        const { profile } = this.state;
        console.log(profile.name);
        API.getUser("max@max.com")
            .then(res => this.setState({
                name: res.data.name,
                role: res.data.role,
                email: res.data.email,
                address1: res.data.address1,
                address2: res.data.address2,
                city: res.data.city,
                state: res.data.state,
                zip: res.data.zip,
                phone: res.data.phone
            }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                {this.state.role === "Landlord" ? (
                    <div>
                        <Landlord 
                            name= {this.state.name}
                            email={this.state.email}
                            address1={this.state.address1}
                            address2={this.state.address2}
                            city={this.state.city}
                            state={this.state.state}
                            zip={this.state.zip}
                            phone={this.state.phone}
                        />
                    </div>
                ) : (
                    <div>
                        <Tenant 
                            name= {this.state.name}
                            email={this.state.email}
                            address1={this.state.address1}
                            address2={this.state.address2}
                            city={this.state.city}
                            state={this.state.state}
                            zip={this.state.zip}
                            phone={this.state.phone}
                        />
                    </div>
                )}
            </Container>
        );
    };
};

export default UserPage;