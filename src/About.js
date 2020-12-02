import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faInstagram , faTwitter , faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"
import "./App.css"

function About(){
    return(
        <div className="container">
            <h1 className="text-center mb-3 mt-3">About</h1>
            <div className="row mb-5 mt-5">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h3>Hotel Booking App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dicta dolorum ratione minima assumenda autem repudiandae reiciendis, perspiciatis esse alias quas nihil veritatis illo fuga! Doloremque optio, voluptatum amet commodi quidem odit expedita facilis, officia, nemo soluta eveniet facere inventore!</p>
                    <div className="d-flex flex-row mb-5">
                        <Link to="#" className="s-link">
                            <FontAwesomeIcon className="mr-2 ml-2" icon={faFacebook} size="2x" />
                        </Link>
                        <Link to="#" className="s-link">
                            <FontAwesomeIcon className="mr-2 ml-2" icon={faInstagram} size="2x" />
                        </Link>
                        <Link to="#" className="s-link">
                            <FontAwesomeIcon className="mr-2 ml-2" icon={faTwitter} size="2x" /> 
                        </Link>
                        <Link to="#" className="s-link">
                            <FontAwesomeIcon className="mr-2 ml-2" icon={faLinkedin} size="2x" />
                        </Link>                    
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="img-fluid" alt=""/>
                </div>
            </div>
        </div>

    );
}

export default About