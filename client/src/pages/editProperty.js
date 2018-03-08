import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/container";

class EditProperties extends Component {
    state = {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        leaseStart: "",
        leaseEnd: "",
        rentAmt: "",
        tenant: "",
        tenantId: ""
    };

    componentDidMount() {
        API.getPropertyById(localStorage.getItem("propertyId"))
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
                });
                if (res.data._tenant) {
                    this.setState({
                        tenant: res.data._tenant.name,
                        tenantId: res.data._tenant._id
                    });
                };
            })
            .catch(err => console.log(err));
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleFormSubmit = (event) => {
        const { history } = this.props;
        event.preventDefault();
        API.updatePropertyById(this.props.location.id, {
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
                alert("Property updated.");
                history.push("/home");
            })
            .catch(err => alert("Something went wrong. Please try again."));
    };

    handleRemove = (event) => {
        const { history } = this.props;
        event.preventDefault();
        API.updateTenant(this.state.tenantId, {assigned: ""})
            .then(res => {
                API.updatePropertyById(this.props.location.id, {$unset: {_tenant: ""}})
                .then(res => {
                    alert("Tenant removed.");
                    history.push("/home");
                })  
            })
            .catch(err => alert("Something went wrong. Please try again."));
    };

    convertDate = (date) => {
        var newDate = new Date(date);
        var month = newDate.getMonth() + 1;
        var day = newDate.getDate();
        var year = newDate.getFullYear();
        return month + "/" + day + "/" + year;
    };

    render() {
        return (
            <Container>
                <div className="card">
                    <div className="card-title">
                        <h4>Edit Property</h4>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label htmlFor="address1" className="active">Address 1</label>
                                        <input name="address1" value={this.state.address1 || ""} onChange={this.handleInputChange} id="address1" type="text" className="validate" />
                                        
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="address2" value={this.state.address2 || ""} onChange={this.handleInputChange} id="address2" type="text" className="validate" />
                                        <label htmlFor="address2" className="active">Address 2</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s4">
                                        <input name="city" value={this.state.city || ""} onChange={this.handleInputChange} id="city" type="text" className="validate" />
                                        <label htmlFor="city" className="active">City</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input name="state" value={this.state.state || ""} onChange={this.handleInputChange} id="state" type="text" className="validate" />
                                        <label htmlFor="state" className="active">State</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input name="zip" value={this.state.zip || ""} onChange={this.handleInputChange} id="zip" type="text" className="validate" />
                                        <label htmlFor="zip" className="active">Zip Code</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s4">
                                        <input name="leaseStart" value={this.convertDate(this.state.leaseStart) || ""} onChange={this.handleInputChange} id="leaseStart" type="text" className="validate" />
                                        <label htmlFor="leaseStart" className="active">Lease Start Date</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input name="leaseEnd" value={this.convertDate(this.state.leaseEnd) || ""} onChange={this.handleInputChange} id="leaseEnd" type="text" className="validate" />
                                        <label htmlFor="leaseEnd" className="active">Lease End Date</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input name="rentAmt" value={this.state.rentAmt || ""} onChange={this.handleInputChange} id="rentAmt" type="text" className="validate" />
                                        <label htmlFor="rentAmt" className="active">Rent Amount</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    <div className="card-action">
                        {/* submits the updated form */}
                        <button className="waves-effect waves-teal btn-large" onClick={this.handleFormSubmit}><i className="material-icons left">save</i>Save</button>
                        {/* If there's a tenant assigned, give the option to unassign */}
                        {this.state.tenant ? (
                            <button className="waves-effect waves-teal btn-large" onClick={this.handleRemove}><i className="material-icons left">delete</i>Remove {this.state.tenant}</button>
                        ) : (
                            null
                        )}
                    </div>
                </div>
            </Container>
        );
    };
};

export default EditProperties;