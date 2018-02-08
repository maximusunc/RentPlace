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

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        API.getUser("5a7b235ccad0e56dc4fd037d")
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