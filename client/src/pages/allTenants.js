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
        const { history } = this.props;
        const id = this.props.location.id;
        API.assignTenant(id, {$set: {_tenant: tenant}})
            .then(res => {
                API.updateTenant(tenant, {$set: {assigned: true}})
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
                                <h5>There are no available tenants to assign.</h5>
                            )}
                        </TenantList>
                    </div>
            </Container>
        );
    };
};

export default AllTenants;