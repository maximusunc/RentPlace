import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";
import ServiceReqList from "../components/serviceReqList";
import ServiceReq from "../components/servicereq";

class Myservicereq extends Component {

    componentDidMount() {
        this.getservicereq();
        console.log(this.state)
    };

    state = {
        servicereq: []
    };

    getservicereq = () => {
        API.getServiceReqByLandlord("5a79f7ccda985e42f7aa53b2")
            .then(res => 
            {
                this.setState({
                servicereq: res.data
            })})
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