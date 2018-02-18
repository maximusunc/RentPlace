import React, { Component } from "react";
import Container from "../components/container";
import { Link } from "react-router-dom";
import "../components/card/card.css";

class Splash extends Component {

    login = () => {
        this.props.auth.login();
    };

    render() {
        return (
            <div>
                <Container>
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card medium">
                                <div className="card-content">
                                    <h4>Welcome to RentPlace!</h4>
                                    <h5>We offer a cutting-edge property management platform for tenants, landlords, and owners</h5>
                                </div>
                                <div className="card-action">
                                    <button className="waves-effect waves-teal btn-large button" onClick={this.login}><i className="material-icons left">lock_open</i>Sign In</button>
                                    <Link className="waves-effect waves-blue btn-large button" to="/signup"><i className="material-icons left">add</i>Create an Acount</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    };
}

export default Splash;