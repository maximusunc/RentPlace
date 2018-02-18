import React, { Component } from "react";
import API from "../utils/API";

class ServiceReq extends Component {
    state = {
        subject: "",
        description: "",
        notes: ""
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleFormSubmit = (event) => {
        const { history } = this.props;
        event.preventDefault();
        API.createServiceReq({
            _tenant: this.props.location.id.tenant,
            _property: this.props.location.id.property,
            subject: this.state.subject,
            description: this.state.description,
            notes: this.state.notes
        })
            .then(res => {
                alert("Service Request Successful. Your landlord will be notified.");
                history.push("/home");
            })
            .catch(err => alert("Something went wrong. Please try again."));
    };

    render() {
        return (
            <div className="card">
                <div className="card-title">
                    <h4>Create Service Request</h4>
                </div>
                <div className="card-content">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="subject" value={this.state.subject || ""} onChange={this.handleInputChange} id="subject" type="text" className="validate" />
                                    <label htmlFor="subject">Subject:</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="description" value={this.state.description || ""} onChange={this.handleInputChange} id="description" type="text" className="validate" />
                                    <label htmlFor="description">Description:</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea name="notes" value={this.state.notes || ""} onChange={this.handleInputChange} id="notes" className="materialize-textarea"></textarea>
                                    <label htmlFor="notes">Notes:</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <div className="card-action">
                    <button className="waves-effect waves-teal btn-large" onClick={this.handleFormSubmit}><i className="material-icons left">add</i>Create</button>
                </div>
            </div>
        );
    };

};

export default ServiceReq;