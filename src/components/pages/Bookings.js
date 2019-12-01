import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAppointments } from '../../redux/actions/appointment';

import Navbar from '../layout/Navbar';
import BookingItem from '../BookingItem';

const Bookings = ({ bookings, getAppointments }) => {
  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="Bookings">
      <Navbar bg="#e0fdf7" title="Your Bookings" backBtn="/" />
      <div className="container">
        {bookings.map(booking => (
          <BookingItem key={booking.id} {...booking.attributes} />
        ))}
      </div>
    </div>
  );
};

Bookings.propTypes = {
  bookings: PropTypes.array,
  getAppointments: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bookings: state.appointment.appointments,
});

export default connect(mapStateToProps, { getAppointments })(Bookings);
