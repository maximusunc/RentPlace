import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./newAccCard.css";
import API from "../../utils/API";

const defaultState = {
    selected: "tenant",
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
};

class NewAccCard extends Component {
    state = {
        defaultState
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        API.createUser({
            name: this.state.name,
            role: this.state.selected,
            email: this.state.email,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone
        })
            .then(res => console.log("Success"))
            .catch(err => console.log(err));
    };


    render() {
        return(
            <div className="card">
                <div className="card-title">
                    <h4>Your info:</h4>
                </div>
                <div className="card-content">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="col s12">
                                    <input name="selected" value="landlord" onChange={this.handleInputChange} type="radio" id="landlord" checked={this.state.selected==="landlord"} />
                                    <label htmlFor="landlord">Landlord</label>
                                
                                    <input name="selected" value="tenant" onChange={this.handleInputChange} type="radio" id="tenant" checked={this.state.selected==="tenant"} />
                                    <label htmlFor="tenant">Tenant</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input name="name" value={this.state.name} onChange={this.handleInputChange} id="full_name" type="text" className="validate" />
                                    <label htmlFor="full_name">Full Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input name="phone" value={this.state.phone} onChange={this.handleInputChange} id="phone" type="text" className="validate" />
                                    <label htmlFor="phone">Phone #</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="address1" value={this.state.address1} onChange={this.handleInputChange} id="address1" type="text" className="validate" />
                                    <label htmlFor="address1">Address 1</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="address2" value={this.state.address2} onChange={this.handleInputChange} id="address2" type="text" className="validate" />
                                    <label htmlFor="address2">Address 2</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input name="city" value={this.state.city} onChange={this.handleInputChange} id="city" type="text" className="validate" />
                                    <label htmlFor="city">City</label>
                                </div>
                                <div className="input-field col s4">
                                    <input name="state" value={this.state.state} onChange={this.handleInputChange} id="state" type="text" className="validate" />
                                    <label htmlFor="state">State</label>
                                </div>
                                <div className="input-field col s4">
                                    <input name="zip" value={this.state.zip} onChange={this.handleInputChange} id="zip" type="text" className="validate" />
                                    <label htmlFor="zip">Zip Code</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <div className="card-action">
                    <Link className="waves-effect waves-teal btn-large" to="/"><i className="material-icons left">home</i>Home</Link>
                    <button className="waves-effect waves-teal btn-large" onClick={this.handleFormSubmit}><i className="material-icons left">add</i>Create</button>
                </div>
            </div>
        );
    };
};

export default NewAccCard;