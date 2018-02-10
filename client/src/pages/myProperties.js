import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";
import Property from "../components/property";



class Myproperties extends Component {

    componentDidMount() {
        this.getproperties();
    };

    state = {
        properties: []
    }

    getproperties = () => {
        API.getPropertyByLandlord("5a7f0a42d2f11c1a429ce547")
            .then(res => 
                this.setState({
                    // properties: res.data
                    _landlord: res.data._landlord,
                    _tenant: res.data._tenant,
                    address1: res.data.address1,
                    address2: res.data.address2,
                    city: res.data.city,
                    state: res.data.state,
                    zip: res.data.zip,
                    leaseStart: res.data.leaseStart,
                    leaseEnd: res.data.leaseEnd,
                    rentAmt: res.data.rentAmt,
                    id: res.data.id 
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                    <div>
                        { 
                            this.state.properties.map( property => (
                            <Property
                                _landlord={property._landlord}
                                _tenant={property._tenant}
                                address1={property.address1}
                                address2={property.address2}
                                city={property.city}
                                state={property.state}
                                zip={property.zip}
                                leaseStart={property.leaseStart}
                                leaseEnd={property.leaseEnd}
                                rentAmt={property.rentAmt}
                                id={property.id}
                            />
                        ))}
                    </div>
            </Container>
        );
    };
};

export default Myproperties;