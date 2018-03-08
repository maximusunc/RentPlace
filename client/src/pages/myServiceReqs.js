import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";
import ServiceReqList from "../components/serviceReqList";
import ServiceReq from "../components/servicereq";

class Myservicereq extends Component {
    state = {
        servicereq: []
    };

    componentDidMount() {
        this.getservicereq(localStorage.getItem("propertyId").split(","));
    };

    getservicereq = (properties) => {
        console.log(properties);
        API.getServiceReqByProperty(properties)
            .then(res => 
            {
                this.setState({ servicereq: res.data });
            })
            .catch(err => console.log(err));
    };

    handleDelete = (id) => {
        API.deleteServiceReq(id)
            .then(res => {
                window.location = "/home";
            })
            .catch(err => alert("Something went wrong"));
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
                        <h4><i className="material-icons small">build</i>  Open Service Requests</h4>
                        {this.state.servicereq.length ? (
                            <ServiceReqList>
                                {this.state.servicereq.map( servicereq => {
                                return (
                                <ServiceReq   
                                    key={servicereq._id}
                                    property={servicereq._property.address1}      
                                    subject={servicereq.subject}
                                    description={servicereq.description}
                                    notes={servicereq.notes}
                                    date={this.convertDate(servicereq.date)}
                                    handleDelete={() => this.handleDelete(servicereq._id)}
                                />
                                );
                            })}
                            </ServiceReqList>
                        ) : (
                            <h5>You don't have any open service requests.</h5>
                        )}
                        
                    </div>
            </Container>
        );
    };
};

export default Myservicereq;