import React, { Component } from 'react';
import BookingItem from './BookingItem';

import leftWhite from '../assets/images/leftWhite.png';

class Bookings extends Component {
  render() {
    return (
      <div className="Bookings">
        <div className="Bookings-nav">
          <img src={leftWhite} alt="Left arrow" />
          <h2>Your Bookings</h2>
        </div>
        <div className="container">
          <BookingItem />
          <BookingItem />
          <BookingItem />
          <BookingItem />
          <BookingItem />
        </div>
      </div>
    );
  }
}

export default Bookings;
