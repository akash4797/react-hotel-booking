import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from "react-bootstrap";
import "./App.css"
import { Link } from "react-router-dom"

function Rooms(data){
    const newData = Object.entries(data)[0][1];

    return(        
        <div className="exclusive-rooms-section container">
            <h1 className="text-center mt-5 mb-5">Our Rooms</h1>
            <div className="exclusive-rooms-roo">
                 {newData.map(card =>(                               
                        <Card key={card.id} className="card-grid">
                                <Card.Img src={card.imgsrc}/>
                                <Card.Title>
                                    <h4 className="text-center">{card.title}</h4>
                                </Card.Title>
                                <Card.Body>
                                {card.body}
                                </Card.Body>
                                <Link to={`/rooms/${card.id}`} className="text-center pb-3">
                                    <Button variant="primary">See More</Button>
                                </Link>
                        </Card>  
                    ))}      
            </div> 
        </div>

    );
}

export default Rooms