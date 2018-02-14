import React, { Component } from "react";
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
        phone: "",
        id:""
    };

    logOut = () => {
        this.props.auth.logout();
    };

    componentDidMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                if (err) {
                    console.log(err);
                } else {
                    this.getUser(profile.name);
                };
            });
        } else {
            this.getUser(userProfile.name);
        };
    };

    getUser = (email) => {
        API.getUser(email)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    role: res.data.role,
                    email: res.data.email,
                    address1: res.data.address1,
                    address2: res.data.address2,
                    city: res.data.city,
                    state: res.data.state,
                    zip: res.data.zip,
                    phone: res.data.phone,
                    id: res.data._id
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
            <button id="logout" className="waves-effect waves-teal btn-large" onClick={this.logOut}><i className="material-icons left">lock</i>Log Off</button>
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
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
                                    id={this.state.id}
                                />
                            </div>
                        ) : this.state.role === "Tenant" ? (
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
                                    id={this.state.id}
                                />
                            </div>
                        ) : (
                            <div>
                                <h4>Loading...</h4>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default UserPage;