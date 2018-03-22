import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";
import ServiceReq from "../components/servicereq";

class Myservicereq extends Component {
    state = {
        servicereq: []
    };

    componentDidMount() {
        // Calls the getservicereq function and passes in an array of property ids in local storage
        this.getservicereq(localStorage.getItem("propertyId").split(","));
    };

    getservicereq = (properties) => {
        API.getServiceReqByProperty(properties)
            .then(res => 
            {
                this.setState({ servicereq: res.data });
            })
            .catch(err => console.log(err));
    };

    handleComplete = (id) => {
        API.deleteServiceReq(id)
            .then(res => {
                alert("Service request completed!");
                window.location = "/home";
            })
            .catch(err => alert("Something went wrong"));
    };

    // Converts date string from DB into legible date
    convertDate = (date) => {
        var newDate = new Date(date);
        var month = newDate.getMonth() + 1;
        var day = newDate.getDate();
        var year = newDate.getFullYear();
        // var hour = newDate.getHours();
        // var minute = newDate.getMinutes();
        return month + "/" + day + "/" + year;
    };

    render() {
        return (
            <Container>
                <div className="card">
                    <h4><i className="material-icons small">build</i>  Open Service Requests</h4>
                    
                    {/* Shows each service request open, if there are none then displays bottom message */}
                    {this.state.servicereq.length ? (
                        this.state.servicereq.map( servicereq => {
                            return (
                                <ServiceReq   
                                    key={servicereq._id}
                                    property={servicereq._property.address1}      
                                    subject={servicereq.subject}
                                    description={servicereq.description}
                                    notes={servicereq.notes}
                                    date={this.convertDate(servicereq.date)}
                                    handleComplete={() => this.handleComplete(servicereq._id)}
                                />
                            );
                        })  
                    ) : (
                        <h5>You don't have any open service requests.</h5>
                    )}
                    
                </div>
            </Container>
        );
    };
};

export default Myservicereq;