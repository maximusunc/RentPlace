import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";
import TenantList from "../components/tenantList";
import Tenant from "../components/allTenants";



class AllTenants extends Component {

    state = {
        tenants: []
    };

    componentDidMount() {
        this.getTenants();
    };

    getTenants = () => {
        API.getUnassignedTenants()
            .then(res => {
                this.setState({tenants: res.data})
            })
            .catch(err => console.log(err));
    };

    handleTenantSelect = (tenant) => {
        const id = this.props.location.id;
        API.assignTenant(id, {$set: {_tenant: tenant}})
            .then(res => {
                API.updateTenant(tenant, {$set: {assigned: true}})
                    .then(res => {
                        alert("Tenant added");
                        window.location = "/home";
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                    <div>
                        <TenantList>
                            {this.state.tenants.length ? (
                                this.state.tenants.map(tenant => (
                                    <Tenant
                                        name={tenant.name}
                                        email={tenant.email}
                                        handleClick={() => this.handleTenantSelect(tenant._id)}
                                        key={tenant._id}
                                    />
                                ))
                            ) : (
                                <h4>All tenants have been assigned</h4>
                            )}
                        </TenantList>
                    </div>
            </Container>
        );
    };
};

export default AllTenants;