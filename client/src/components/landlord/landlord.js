import React, { Component } from "react";
import Container from "../container";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Landlord extends Component {
    state = {
        properties: [],
        propertyIDs: []
    };

    componentDidMount() {
        API.getPropertyByLandlord(this.props.id)
            .then(res => {
                const propertyIDs = [];
                res.data.map(property => propertyIDs.push(property._id));
                this.setState({properties: res.data, propertyIDs: propertyIDs});
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
                </ul>
        
                <h3>Properties:</h3>

                <ul>
                {this.state.properties.length ? (
                    this.state.properties.map(property => {
                        if (!property._tenant) {
                            return <li key={property._id}>{property.address1}:  <Link to={{pathname: "/allTenants", id: property._id }}>Assign a tenant</Link></li>
                        } else {
                            return <li key={property._id}>{property.address1}:  {property._tenant.name}</li>
                        } 
                    })
                ) : (
                    <p>You don't have any properties yet.</p>
                )}
                </ul>
        
                <button className="waves-effect waves-teal btn-large"><i className="material-icons left">add</i>
                    <Link to={{pathname: "/properties", id: this.props.id }}>Add a property</Link>
                </button>
        
                <button className="waves-effect waves-teal btn-large"><i className="material-icons left">add</i>
                    <Link to={{pathname: "/myservicereqs", id: this.state.propertyIDs }}>View Service Reqeusts</Link>
                </button>
                
            </Container>
        );
    };
};
    

export default Landlord;