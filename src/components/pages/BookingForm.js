import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../layout/Navbar';

const BookingForm = props => {
  const { doctor, date, time } = props.location.state;
  const { user } = props;

  const [formData, setFormData] = useState({
    patient: '',
    reason: ''
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { patient, reason } = formData;

  return (
    <div className="BookingForm">
      <Navbar title="Confirm Booking" bg="#e0fdf7" backBtn={`/doctors`} />
      <div className="detail">
        <h5 className="title">Dr {doctor.name}</h5>
        <p className="category">{doctor.category}</p>
        <p className="address">{doctor.address}</p>
        <p className="date">{`${date} | ${time}`}</p>
      </div>
      <form className="container">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user ? user.name : ''}
            disabled
          />
        </div>
        <div className="form-field">
          <label htmlFor="reason">Reason for visit</label>
          <input
            type="text"
            name="reason"
            id="reason"
            required
            value={reason}
            onChange={e => handleChange(e)}
            placeholder="Enter your reason for visit"
          />
        </div>
        <div className="form-field">
          <label htmlFor="patient">Patients name</label>
          <input
            type="text"
            name="patient"
            id="patient"
            required
            value={patient}
            onChange={e => handleChange(e)}
            placeholder="Enter patient's name"
          />
        </div>
        <button className="book-btn">Confirm Booking</button>
      </form>
    </div>
  );
};

BookingForm.propTypes = {};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(BookingForm);
