import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = () =>
    <div className="card small">
        <div className="card-content">
            <h4>Welcome to RentPlace!</h4>
            <h4>We offer a cutting-edge property management platform for tenants, landlords, and owners</h4>
        </div>
        <div className="card-action">
            <Link className="waves-effect waves-teal btn-large" to="/signin"><i className="material-icons left">lock_open</i>Sign In</Link>
            <Link className="waves-effect waves-teal btn-large" to="/signin"><i className="material-icons left">add</i>Create an Acount</Link>
        </div>
    </div>;

export default Card;

// import React from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import { Link } from "react-router-dom";
// import "./homecard.css";

// const HomeCard = () => (
//   <Card>
//     <CardHeader
//       title="URL Avatar"
//       subtitle="Subtitle"
//       avatar="images/jsa-128.jpg"
//     />
//     <CardMedia
//       overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
//     >
//       <img src="images/nature-600-337.jpg" alt="" />
//     </CardMedia>
//     <CardTitle title="Welcome to RentPlace!" subtitle="" />
//     <CardText>
//         We offer a cutting-edge property management platform for tenants, landlords, and owners
//     </CardText>
//     <CardActions>
//         <Link className="waves-effect waves-teal btn-large" to="/signin"><i className="material-icons left">home</i>Sign In</Link>
//     </CardActions>
//   </Card>
// );

// export default HomeCard;