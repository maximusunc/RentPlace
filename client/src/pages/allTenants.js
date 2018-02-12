import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";
import TenantList from "../components/tenantList";
import Tenant from "../components/allTenants";



class AllTenants extends Component {

    componentDidMount() {
        this.gettenants();
    };

    state = {
        tenants: []
    }

    gettenants = () => {
        API.getAllTenants()
            .then(res => 
            {
                this.setState({
                tenants: res.data
            })})
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                    <div>
                        <TenantList>
                            {this.state.tenants.map(tenant => {
                            return (
                            <Tenant           
                                _id={tenant._id}
                                name={tenant.name}
                                email={tenant.email}
                            />
                            );
                        })}
                        </TenantList>
                    </div>
            </Container>
        );
    };
};

export default AllTenants;