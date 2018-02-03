import React, { Component } from "react";
import Container from "../components/container";

class Splash extends Component {
    state = {

    };

    render() {
        return (
            <Container>
                <img src="../../public/images/rentplace.png" className="titleimg" alt="rentplace" width="280px" height="280px" />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card small">
                                <h4>Welcome to RentPlace!</h4>
                                <p>We offer a cutting-edge property management platform for tenants, landlords, and owners</p>
                                <a className="waves-effect waves-teal btn-large" href="signin.html"><i className="material-icons left">home</i>Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <a href="http://www.facebook.com" target="blank">
                                <img src="images/facebook.png" className="footimg" alt="Facebook" /></a>
                                <img src="images/github.png" className="footimg" alt="github" />
                                <img src="images/twitter.png" className="footimg" alt="twitter" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2018 MaMaJ Productions
                        </div>
                    </div>
                </footer>
            </Container>
        );
    };
}

export default Splash;