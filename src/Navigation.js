import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import logo from "./logo.png"

function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">                    
        <Link to="/" className="navbar-brand">
            <img src={logo} alt="" width="60px"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                Home 
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">
                About
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/rooms" className="nav-link">
                Rooms
                </Link>
            </li>
            </ul>
            <Link to='/bookings'>
                <button className="btn btn-primary">Book Now</button>
            </Link>            
        </div>
        </nav>
    );
}

export default Navigation