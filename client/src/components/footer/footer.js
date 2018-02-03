import React from "react";
import "./footer.css";

const Footer = () =>
    <footer className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <a href="https://www.facebook.com/grndprxguy1" target="blank" rel="noopener noreferrer"><img src="./images/facebook.png" className="footimg" alt="Facebook" /></a>
                    <a href="https://github.com/maximusunc/RentPlace" target="_blank" rel="noopener noreferrer"><img src="./images/github.png" className="footimg" alt="Github" /></a>
                    <a href="https://rent-place.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./images/twitter.png" className="footimg" alt="Heroku" /></a>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                © 2018 MaMaJ Productions
            </div>
        </div>
    </footer>;

export default Footer;