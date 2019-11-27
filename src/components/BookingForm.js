import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import leftArrow from '../assets/images/left-arrow.png';

class BookingForm extends Component {
  render() {
    return (
      <div className="BookingForm">
        <div className="BookingForm-nav d-flex">
          <img className="left-icon" src={leftArrow} alt="Left icon" />
          <h2 className="title">Booking Detail</h2>
        </div>
        <div className="detail">
          {/* <Link className="book-btn">Book Appointment</Link> */}
          <h5 className="title">Dr John Doe</h5>
          <p className="category">General Physician</p>
          <p className="address">HSR Layout, Bangalore</p>
          <p className="date">4th Dec 2019, 11:30 AM</p>
        </div>
      </div>
    );
  }
}

export default BookingForm;
