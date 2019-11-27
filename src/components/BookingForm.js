import React, { Component } from 'react';
import leftArrow from '../assets/images/left-arrow.png';

class BookingForm extends Component {
  render() {
    return (
      <div className="BookingForm">
        <div className="BookingForm-nav d-flex">
          <img className="left-icon" src={leftArrow} alt="Left icon" />
          <h2 className="title">Booking Detail</h2>
        </div>
      </div>
    );
  }
}

export default BookingForm;
