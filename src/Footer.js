import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Link } from "react-router-dom"
import logo from "./logo.png"

function Footer(){
    return(
        <footer>
          <div className="all-links">
            <div className="logo-with-des">
                <img src={logo} alt="" width="60px"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="links-1">
                <h3>Important Links</h3>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link> 
                    <Link to="/rooms">
                        <li>Rooms</li> 
                    </Link>                                                                  
                    <li>Privacy Policy</li>                        
                </ul>
            </div>           
          </div>  
          <div className="copyright">
              <p>© 2020 Copyright: <a href="https://aritfirm.com" target="__blank">AR IT Firm</a> </p>
          </div>
        </footer>
    );
}

export default Footer