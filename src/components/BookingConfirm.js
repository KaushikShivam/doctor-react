import React, { Component } from 'react';
import success from '../assets/images/success.png';
import leftArrow from '../assets/images/left-arrow.png';

class BookingConfirm extends Component {
  render() {
    return (
      <div className="BookingConfirm">
        <div className="BookingConfirm-nav d-flex">
          <img className="left-icon" src={leftArrow} alt="Left icon" />
          <h2 className="title">Booking Confirmed</h2>
        </div>
        <div className="container BookingConfirm-info">
          <img src={success} alt="Success image" />
          <h5>Appointment Confirmed</h5>
          <p className="detail">
            Your Appointment with Dr. John Doe on 4th December, 2019 at 11:30 PM
            is confirmed
          </p>
          <p className="time">Time left before appointment</p>
          <p className="time-left">2 Days 4 Hours</p>
          <button className="book-btn">View Bookings</button>
        </div>
      </div>
    );
  }
}

export default BookingConfirm;
