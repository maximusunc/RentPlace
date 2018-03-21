import React, { Component } from "react";
import "./landlord.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Landlord extends Component {
    state = {
        properties: [],
        propertyIDs: []
    };

    // on mount, get properties by landlord ID, map through the array and set state
    componentDidMount() {
        this.getProperties(this.props.id);
    };

    // Get all properties and set their ids in local storage
    getProperties = (landlordId) => {
        API.getPropertyByLandlord(landlordId)
        .then(res => {
            const propertyIDs = [];
            res.data.map(property => propertyIDs.push(property._id));
            this.setState({properties: res.data, propertyIDs: propertyIDs});
            localStorage.setItem("propertyId", propertyIDs);
        })
        .catch(err => console.log(err));
    }

    // whenever landlord goes to one of their property pages, update local storage to just that property
    handleEdit = (propertyId) => {
        localStorage.setItem("propertyId", propertyId);
    };

    // render results to page
    render() {
        return (
            <div>
                {/* Personal Info */}
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

                {/* Option to update personal info */}
                <Link to={{pathname: "/editUser"}}>
                    <button className="waves-effect waves-teal btn-medium"><i className="material-icons left">edit</i>Edit Profile</button>
                </Link>
        
                <h3>Properties:</h3>

                <ul>
                {/* display depending on if property has no tenant assigned */}
                {this.state.properties.length ? (
                    this.state.properties.map(property => {
                        if (!property._tenant) {
                            return <li key={property._id}>
                                <Link to={{pathname: "/editProperty"}}>
                                    <button className="waves-effect waves-teal btn-medium" onClick={() => this.handleEdit(property._id)}><i className="material-icons left">edit</i>
                                        Edit
                                    </button>
                                </Link>

                                {property.address1}:  <Link to={{pathname: "/allTenants" }} onClick={() => this.handleEdit(property._id)}>Assign a tenant</Link>
                            </li>
                        } else {
                            return <li key={property._id}>
                                <Link to={{pathname: "/editProperty"}}>
                                    <button className="waves-effect waves-teal btn-medium" onClick={() => this.handleEdit(property._id)}><i className="material-icons left">edit</i>
                                        Edit
                                    </button>
                                </Link>

                                {property.address1}:  {property._tenant.name}

                            </li>
                        }
                    })
                ) : (
                    <h5>You don't have any properties yet.</h5>
                )}
                </ul>

                <div className="card-action">
        
                    {/* Link to add property page */}
                    <Link to={{pathname: "/properties"}} className="button">
                    <button className="waves-effect waves-teal btn-large"><i className="material-icons left">add</i>
                        Add a property
                    </button>
                    </Link>
            
                    {/* Link to all service requests for all owned properties */}
                    <Link to={{pathname: "/myservicereqs"}} className="button">
                    <button className="waves-effect waves-teal btn-large"><i className="material-icons left">visibility</i>
                        View Service Reqeusts
                    </button>
                    </Link>

                    {/* Working on lease upload */}
                    {/* <button id="lease" className="waves-effect waves-teal btn-large"><i className="material-icons left">add</i>
                        <form action="api/lease/" encType="multipart/form-data" method="post" >
                            <input id="file" type="file" name="lease" accept=".pdf" />
                            <label htmlFor="lease">Lease</label>
                            <input type="submit" name="Submit" value="Upload" />
                        </form>
                    </button> */}

                </div>
                
            </div>
        );
    };
};
    

export default Landlord;