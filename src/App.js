import React from "react";
import Navigation from "./Navigation"
import About from "./About"
import Rooms from "./Rooms"
import Bookings from './Bookings'
import OneRoom from "./OneRoom"
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from "react-bootstrap";
import "./App.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee , faParking, faWineGlass , faDumbbell , faWifi , faSwimmingPool , faBroom } from "@fortawesome/free-solid-svg-icons";

var data;

var yoData = [
  {
    id:1,
    imgsrc:"https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
    title:"Double Bed",
    body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, necessitatibus.",
    cat:"ex"
  },
  {
    id:2,
    imgsrc:"https://images.unsplash.com/photo-1576675784201-0e142b423952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
    title:"Single Bed",
    body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, necessitatibus.",
    cat:"nor"
  },
  {
    id:3,
    imgsrc:"https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    title:"Duelux Bed",
    body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, necessitatibus.",
    cat:"ex"
  },
  {
    id:4,
    imgsrc:"https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    title:"Couple Bed",
    body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, necessitatibus.",
    cat:"ex"
  },
  {
    id:5,
    imgsrc:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    title:"Duelux Bed 2",
    body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, necessitatibus.",
    cat:"nor"
  },
  {
    id:6,
    imgsrc:"https://images.unsplash.com/photo-1590490360836-2e3b067c082b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    title:"Single Bed 2",
    body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, necessitatibus.",
    cat:"nor"
  },
  {
    id:7,
    imgsrc:"https://images.unsplash.com/photo-1508253578933-20b529302151?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=915&q=80",
    title:"Double Bed 2",
    body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, necessitatibus.",
    cat:"nor"
  },
  {
    id:8,
    imgsrc:"https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    title:"Small Double Bed",
    body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, necessitatibus.",
    cat:"nor"
  }
];


if(localStorage.getItem("data") == null || localStorage.getItem("data") !==  JSON.stringify(yoData)) {
  data = yoData;

  localStorage.setItem("data" , JSON.stringify(data));

}else{
  data = JSON.parse(localStorage.getItem("data"));
}


const buttonStyle = {
  background:'#0275d8',
  color:"white",
  border:"none"
}
 

function App(){  
  return(
    <Router> 
      <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/rooms" exact component={()=><Rooms props={data}/>} />
            <Route path="/rooms/:roomid" component={OneRoom} />
            <Route path="/bookings" component={()=><Bookings props={data}/>}/> 
          </Switch>
          <Footer />
      </div>
    </Router>

  );
}



const Home = ()=> (  
      <div>
        {/* starter-page */}
        <div className="starter-page">
          <div className="landing-title">
            <h3>Welcome to Hotel Booking App</h3>
          </div>          
        </div>
        {/* features */}
        <div className="hotel-features container">
          <h2 className="text-center mt-5 mb-5">Our Amenities</h2>
          <div className="feature-icons d-flex flex-row justify-content-center align-items-center flex-wrap">
            <div className="icon-with-title d-flex flex-column align-items-center mt-3 mb-3 ml-4 mr-4">
              <FontAwesomeIcon icon={faParking} size="2x" />
              Parking
            </div>
            <div className="icon-with-title d-flex flex-column align-items-center mt-3 mb-3 ml-4 mr-4">
              <FontAwesomeIcon icon={faCoffee} size="2x" />
              Breakfast
            </div>
            <div className="icon-with-title d-flex flex-column align-items-center mt-3 mb-3 ml-4 mr-4">
              <FontAwesomeIcon icon={faWineGlass} size="2x" />
              Bar or Lounge
            </div>
            <div className="icon-with-title d-flex flex-column align-items-center mt-3 mb-3 ml-4 mr-4">
              <FontAwesomeIcon icon={faDumbbell} size="2x" />
              Fitness Center
            </div>
            <div className="icon-with-title d-flex flex-column align-items-center mt-3 mb-3 ml-4 mr-4">
              <FontAwesomeIcon icon={faWifi} size="2x" />
              Wifi
            </div>
            <div className="icon-with-title d-flex flex-column align-items-center mt-3 mb-3 ml-4 mr-4">
              <FontAwesomeIcon icon={faSwimmingPool} size="2x" />
              Swimming Pool
            </div>
            <div className="icon-with-title d-flex flex-column align-items-center mt-3 mb-3 ml-4 mr-4">
              <FontAwesomeIcon icon={faBroom} size="2x" />
              Room Purification
            </div>
          </div>
        </div>
        {/* exclusive-rooms */}
        <div className="exclusive-rooms-section container">
          <h2 className="text-center mt-5 mb-5">Our Exclusive Rooms</h2>
          <div className="exclusive-rooms">
           {data.map(card =>(            
              card.cat === "ex" && 
               <Card key={card.id} className="card-grid-ex">
                    <Card.Img src={card.imgsrc}/>
                    <Card.Title>
                        <h4 className="text-center mt-3">{card.title}</h4>
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
        {/* newsletter */}
          <div className="newsletter container bg-dark pt-4 pb-4 pl-4 pr-4 mb-4 text-white">
          <h2 className="text-center">Subscribe</h2>
            <form action="" className="form">
              <div className="form-group d-flex justify-content-center">         
                <input type="text" id="full-name" className="form-control w-75" placeholder="Name"/>
              </div>
              <div className="form-group d-flex justify-content-center">    
                <input type="password" id="password" className="form-control w-75" placeholder="Email"/>
              </div>
              <div className="form-group d-flex justify-content-center">    
              <input type="submit" style={buttonStyle} className="form-control w-auto" value="Subscribe"/>              </div>                
            </form>
          </div>
      </div>
);

export default App