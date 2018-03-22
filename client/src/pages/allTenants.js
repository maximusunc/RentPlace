import React, { Component } from "react";
import Container from "../components/container";
import API from "../utils/API";
import Tenant from "../components/allTenants";

class AllTenants extends Component {
    state = {
        tenants: []
    };

    componentDidMount() {
        this.getTenants();
    };

    // Gets all tenants who are unassigned to a property
    getTenants = () => {
        API.getUnassignedTenants()
            .then(res => {
                this.setState({tenants: res.data})
            })
            .catch(err => console.log(err));
    };

    // Assigns the selected tenant to that property
    // That property will then show up on that tenant's user page
    handleTenantSelect = (tenant) => {
        const { history } = this.props;
        const id = localStorage.getItem("propertyId");
        API.assignTenant(id, {$set: {_tenant: tenant}})
            .then(res => {
                API.updateUser(tenant, {$set: {assigned: true}})
                    .then(res => {
                        alert("Tenant added");
                        history.push("/home");
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <div className="card">
                    <h4>Assign a tenant to your property:</h4>

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
                        <h5>There are no available tenants to assign.</h5>
                    )}

                </div>
            </Container>
        );
    };
};

export default AllTenants;