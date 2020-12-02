import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap";
import "./App.css"
// import { Link } from "react-router-dom"

function OneRoom({match}){
    var param = parseInt(match.params.roomid)
    var newData = JSON.parse(localStorage.getItem("data"));
    var takenData;   
    newData.map(room =>{        
        if(param === room.id){
            takenData = {
                roomid:room.id,
                imgsrc:room.imgsrc,
                title:room.title,
                body:room.body,
                cat:room.cat
            }
        }
    })

    return(
        <div className="container mt-5 mb-5">
            <div className="dicrip">
                <div className="image">
                    <img src={takenData.imgsrc} alt=""/>
                </div>
                <div className="all-dex">
                    <h2>{takenData.title}</h2>
                    <p>{takenData.body}</p>
                    <p>Category: {takenData.cat === "ex" ? "Exclusive" : "Normal"}</p>
                    <Button varient="primary">Book Now</Button>
                </div>
            </div>
        </div>
    );
}

export default OneRoom