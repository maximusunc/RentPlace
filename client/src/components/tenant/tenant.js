import React, { Component } from "react";
import Container from "../container";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Tenant extends Component {
    state = {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        leaseStart: "",
        leaseEnd: "",
        rentAmt: ""
    };

    componentDidUpdate() {
        API.getPropertyByTenant(this.props.id)
            .then(res => {
                this.setState({
                address1: res.data.address1,
                address2: res.data.address2,
                city: res.data.city,
                state: res.data.state,
                zip: res.data.zip,
                leaseStart: res.data.leaseStart,
                leaseEnd: res.data.leaseEnd,
                rentAmt: res.data.rentAmt
                })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <h3>Welcome, {this.props.name}</h3>
                <ul>
                    <li>Email: {this.props.email}</li>
                    <li>Address1: {this.props.address1}</li>
                    <li>Address2: {this.props.address2}</li>
                    <li>City: {this.props.city}</li>
                    <li>State: {this.props.state}</li>
                    <li>Zip: {this.props.zip}</li>
                    <li>Phone #: {this.props.phone}</li>
                    <li>ID: {this.props.id}</li>
                </ul>
        
                <h3>Property Info:</h3>

                {this.state.address1 ? (
                    <ul>
                        <li>Address1: {this.state.address1}</li>
                        <li>Address2: {this.state.address2}</li>
                        <li>City: {this.state.city}</li>
                        <li>State: {this.state.state}</li>
                        <li>Zip: {this.state.zip}</li>
                        <li>Lease Start Date: {this.state.leaseStart}</li>
                        <li>Lease End Date: {this.state.leaseEnd}</li>
                        <li>Rent Amount: {this.state.rentAmt}</li>
                    </ul>
                ) : (
                    <button className="waves-effect waves-teal btn-large" onClick={this.logOut}><i className="material-icons left">add</i>
                        <Link to={{pathname: "/properties", id: {id: this.props.id} }}>Add your property</Link>
                    </button>
                )}
                
                <button className="waves-effect waves-teal btn-large" onClick={this.logOut}><i className="material-icons left">add</i>
                    <Link to="/servicereq">Create a Service Reqeust</Link>
                </button>
                
            </Container>
        );
    };
};
    

export default Tenant;