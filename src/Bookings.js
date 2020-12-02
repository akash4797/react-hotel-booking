import React , {useState} from "react";
import Datepicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css"


function Bookings(data){

    const [arrivaSelectedDate , arrivalSetSelectedDate] = useState(new Date());
    const [checkoutSelectedDate , checkoutSetSelectedDate] = useState(new Date());
    const newData = Object.entries(data)[0][1];
    const buttonStyle = {
        background:'#0275d8',
        color:"white"
    }

   
    return(
        <div className="container">
            <form >
                <h1 className="text-center mb-5 mt-5">Booking</h1>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">First Name</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="First Name"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Last Name</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name"></input>
                    </div>
                </div>  
                <div className="form-row">
                    <div className="form-group col-md-6 d-flex flex-column">
                        <label htmlFor="inputEmail4">Arrival Date</label>
                        <Datepicker className="form-control" id="inputEmail4" selected={arrivaSelectedDate} onChange={date => arrivalSetSelectedDate(date)} dateFormat="dd/MM/yyyy" minDate={new Date()} />
                    </div>
                    <div className="form-group col-md-6 d-flex flex-column">
                        <label htmlFor="inputEmail4">Checkout Date</label>
                        <Datepicker className="form-control" id="inputEmail4" selected={checkoutSelectedDate} onChange={date => checkoutSetSelectedDate(date)} dateFormat="dd/MM/yyyy" minDate={arrivalSetSelectedDate} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Select Room</label>
                        <select className="form-control" name="" id="">
                            {newData.map(option => (
                                <option value={option.title} data-url={option.imgsrc} key={option.id}>{option.title}</option>
                            ))}                            
                        </select>
                    </div>
                    <div className="form-group col-md-6 d-flex flex-column justify-content-center">
                        
                    </div>
                    <div className="form-group col-md-6 d-flex flex-column justify-content-center">
                        <input type="submit" style={buttonStyle} className="form-control" value="Book"/>
                    </div>
                </div>               
            </form>
        </div>

    );
}

export default Bookings