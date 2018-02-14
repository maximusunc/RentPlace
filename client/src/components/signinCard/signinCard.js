import React, { Component } from "react";
import "./signinCard.css";

class SigninCard extends Component {
    state = {};

    render() {
        return (
            <div className="card small">
                <div className="card-content">
                    <h3>Sign In</h3>
                
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="icon_prefix" type="email" className="validate" />
                                    <label htmlFor="icon_prefix">E-mail</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">security</i>
                                    <input id="icon_telephone" type="password" className="validate" />
                                    <label htmlFor="icon_telephone">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default SigninCard;