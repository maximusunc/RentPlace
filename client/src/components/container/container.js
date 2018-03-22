import React from "react";

// Simple Materialize container that forwards its children to other components
const Container = props => 
    <div className="container">
        {props.children}
    </div>;

export default Container;