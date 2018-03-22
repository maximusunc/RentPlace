import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./tenant.css";

// Renders if user is a tenant
class Tenant extends Component {
    state = {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        leaseStart: "",
        leaseEnd: "",
        rentAmt: "",
        id: "",
        landlord: "",
        email: ""
    };

    componentDidMount() {
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
                    rentAmt: res.data.rentAmt,
                    id: res.data._id,
                    landlord: res.data._landlord.name,
                    email: res.data._landlord.email
                });
                // Sets propertyId in local storage to property assigned this tenant
                localStorage.setItem("propertyId", res.data._id);
            })
            .catch(err => console.log(err));
    };

    // Converts date string from DB into legible date
    convertDate = (date) => {
        var newDate = new Date(date);
        var month = newDate.getMonth() + 1;
        var day = newDate.getDate();
        var year = newDate.getFullYear();
        return month + "/" + day + "/" + year;
    };

    render() {
        return (
            <div>
                <h3>Welcome, {this.props.name}</h3>
                <ul className="personalInfo">
                    <li>Email: {this.props.email}</li>
                    <li>Address1: {this.props.address1}</li>
                    <li>Address2: {this.props.address2}</li>
                    <li>City: {this.props.city}</li>
                    <li>State: {this.props.state}</li>
                    <li>Zip: {this.props.zip}</li>
                    <li>Phone #: {this.props.phone}</li>
                </ul>

                <Link to={{pathname: "/editUser"}}>
                    <button className="waves-effect waves-teal btn-medium"><i className="material-icons left">edit</i>Edit Profile</button>
                </Link>
        
                <h3>Property Info:</h3>

                {/* Renders data if assigned a property, if not notify tenant that landlord hasn't add them */}
                {this.state.address1 ? (
                    <ul id="propertyInfo">
                        <li>Landlord: {this.state.landlord}</li>
                        <li>Contact: {this.state.email}</li>
                        <li>Address1: {this.state.address1}</li>
                        <li>Address2: {this.state.address2}</li>
                        <li>City: {this.state.city}</li>
                        <li>State: {this.state.state}</li>
                        <li>Zip: {this.state.zip}</li>
                        <li>Lease Start Date: {this.convertDate(this.state.leaseStart)}</li>
                        <li>Lease End Date: {this.convertDate(this.state.leaseEnd)}</li>
                        <li>Rent Amount: {this.state.rentAmt}</li>
                    </ul>
                ) : (
                    <h5>Your landlord needs to add you to a property</h5>
                )}
                
                {/* Only renders if a property has been assigned this tenant */}
                {this.state.address1 ? (
                    <div className="card-action">
                        <Link to={{pathname: "/servicereq"}}>
                            <button className="waves-effect waves-teal btn-large"><i className="material-icons left">add</i>
                                Create a Service Reqeust
                            </button>
                        </Link>

                        <Link to={{ pathname: "/myservicereqs"}}>
                            <button className="waves-effect waves-teal btn-large"><i className="material-icons left">add</i>
                                View Service Reqeusts
                            </button>
                        </Link>
                    </div>
                ) : (
                    null
                )}
                
            </div>
        );
    };
};
    

export default Tenant;