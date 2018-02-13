import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";
import ServiceReqList from "../components/serviceReqList";
import ServiceReq from "../components/servicereq";

class Myservicereq extends Component {

    componentDidMount() {
        const properties = [];
        this.props.location.id.map(property => properties.push(property._id));
        this.getservicereq(properties);
    };

    state = {
        servicereq: []
    };

    getservicereq = (properties) => {
        API.getServiceReqByProperty(properties)
            .then(res => 
            {
                this.setState({ servicereq: res.data });
                console.log(this.state.servicereq);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                    <div>
                        <ServiceReqList>
                            {this.state.servicereq.map( servicereq => {
                            return (
                            <ServiceReq   
                                key={servicereq._id}
                                property={servicereq._property.address1}      
                                subject={servicereq.subject}
                                description={servicereq.description}
                                notes={servicereq.notes}
                                completed={servicereq.completed}
                                date={servicereq.date}
                            />
                            );
                        })}
                        </ServiceReqList>
                    </div>
            </Container>
        );
    };
};

export default Myservicereq;