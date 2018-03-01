import React, { Component } from "react";
import Container from "./components/container";
import Card from "./components/card";

class Splash extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <Container>
                    <div className="row">
                        <div className="col s12 m12">
                            <Card />
                        </div>
                    </div>
                </Container>
            </div>
        );
    };
}

export default Splash;