import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";
import PropertyList from "../components/propertyList";
import Property from "../components/property";



class Myproperties extends Component {

    componentDidMount() {
        this.getproperties();
    };

    state = {
        properties: []
    }

    getproperties = () => {
        API.getPropertyByLandlord(this.props.id)
            .then(res => 
            {
                this.setState({
                properties: res.data
            })})
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                    <div>
                        <PropertyList>
                            {this.state.properties.map(property => {
                                return (
                                <Property           
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
                                );
                            })}
                        </PropertyList>
                    </div>
            </Container>
        );
    };
};

export default Myproperties;