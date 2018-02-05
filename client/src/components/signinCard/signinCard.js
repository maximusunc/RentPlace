import React, { Component } from "react";
import "./signinCard.css";
import { Link } from "react-router-dom";

class SigninCard extends Component {
    state = {

    };

    render() {
        return (
            <div className="card small">
                <div className="card-content">
                    <h3>Sign In/Register</h3>
                
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="icon_prefix" type="email" className="validate" />
                                    <label for="icon_prefix">E-mail</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">security</i>
                                    <input id="icon_telephone" type="password" className="validate" />
                                    <label for="icon_telephone">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-action">
                    <Link className="waves-effect waves-teal btn-large" to="/"><i className="material-icons left">home</i>Home</Link>
                </div>
            </div>
        );
    };
};

export default SigninCard;