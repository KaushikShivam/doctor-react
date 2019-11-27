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
          <h5 className="title">Dr John Doe</h5>
          <p className="category">General Physician</p>
          <p className="address">HSR Layout, Bangalore</p>
          <p className="date">4th Dec 2019, 11:30 AM</p>
        </div>
        <form className="container">
          <div className="form-field">
            <label htmlFor="name">Your name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="reason">Reason for visit</label>
            <input
              type="reason"
              name="reason"
              id="reason"
              placeholder="Enter your reason for visit"
            />
          </div>
          <div className="form-field">
            <label htmlFor="patient">Patients name</label>
            <input
              type="patient"
              name="patient"
              id="patient"
              placeholder="Enter patient's name"
            />
          </div>
          <button className="book-btn">Confirm Booking</button>
        </form>
      </div>
    );
  }
}

export default BookingForm;
