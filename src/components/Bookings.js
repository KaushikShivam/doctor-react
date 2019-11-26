import React, { Component } from 'react';
import BookingItem from './BookingItem';

class Bookings extends Component {
  render() {
    return (
      <div className="Bookings container">
        <BookingItem />
        <BookingItem />
        <BookingItem />
        <BookingItem />
        <BookingItem />
      </div>
    );
  }
}

export default Bookings;
