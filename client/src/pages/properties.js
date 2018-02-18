import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/container";

class Properties extends Component {
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

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleFormSubmit = (event) => {
        const { history } = this.props;
        event.preventDefault();
        API.createProperty({
            _landlord: this.props.location.id,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            leaseStart: this.state.leaseStart,
            leaseEnd: this.state.leaseEnd,
            rentAmt: this.state.rentAmt
        })
            .then(res => {
                alert("Property added.");
                history.push("/home");
            })
            .catch(err => alert("Something went wrong. Please try again."));
    };

    render() {
        return (
            <Container>
                <div className="card">
                    <div className="card-title">
                        <h4>Add a Property</h4>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="address1" value={this.state.address1 || ""} onChange={this.handleInputChange} id="address1" type="text" className="validate" />
                                        <label htmlFor="address1">Address 1</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="address2" value={this.state.address2 || ""} onChange={this.handleInputChange} id="address2" type="text" className="validate" />
                                        <label htmlFor="address2">Address 2</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s4">
                                        <input name="city" value={this.state.city || ""} onChange={this.handleInputChange} id="city" type="text" className="validate" />
                                        <label htmlFor="city">City</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input name="state" value={this.state.state || ""} onChange={this.handleInputChange} id="state" type="text" className="validate" />
                                        <label htmlFor="state">State</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input name="zip" value={this.state.zip || ""} onChange={this.handleInputChange} id="zip" type="text" className="validate" />
                                        <label htmlFor="zip">Zip Code</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s4">
                                        <input name="leaseStart" value={this.state.leaseStart || ""} onChange={this.handleInputChange} id="leaseStart" type="text" className="validate" />
                                        <label htmlFor="leaseStart">Lease Start Date</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input name="leaseEnd" value={this.state.leaseEnd || ""} onChange={this.handleInputChange} id="leaseEnd" type="text" className="validate" />
                                        <label htmlFor="leaseEnd">Lease End Date</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input name="rentAmt" value={this.state.rentAmt || ""} onChange={this.handleInputChange} id="rentAmt" type="text" className="validate" />
                                        <label htmlFor="rentAmt">Rent Amount</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    <div className="card-action">
                        <button className="waves-effect waves-teal btn-large" onClick={this.handleFormSubmit}><i className="material-icons left">save</i>Save</button>
                    </div>
                </div>
            </Container>
        );
    };
};

export default Properties;