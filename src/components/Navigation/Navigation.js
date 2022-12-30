import React from "react";
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Pdf from '../../assets/images/Sucheth_Resume.pdf'

const Navigation = () =>
    <div>
        <nav className="navbar sticky-top navbar-expand-xl navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#menuitems" aria-controls="menuitems" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <a className="navbar-brand ml-lg-5" href="#home"><h2>Sucheth Shivakumar</h2></a>
            <div className="collapse navbar-collapse" id="menuitems">
                <ul className="navbar-nav ml-lg-auto">
                    <a className="nav-item nav-link" href="#about">
                        <h6> ABOUT </h6>
                    </a>
                    <a className="nav-item nav-link" href="#skills">
                        <h6> SKILLS</h6>
                    </a>
                    <a className="nav-item nav-link" href="#profile">
                        <h6> PROFILE</h6>
                    </a>
                    
                    <a className="nav-item nav-link" href={Pdf} target = "_blank" rel="noopener noreferrer">
                        <h6>RESUME</h6>
                    </a>
                    {
                   /* 
                   <a className="nav-item nav-link" href="#project">
                        <h6> PROJECT</h6>
                    </a>
                    
                   <a className="nav-item nav-link" href="#awards">
                        <h6>AWARDS</h6>
                    </a>*/
                    }
                    <a className="nav-item nav-link" href="#contact">
                        <h6> CONTACT</h6>
                    </a>
                </ul>
            </div>
        </nav>
    </div>;


export default Navigation;
    