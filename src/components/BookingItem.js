import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import like from '../assets/images/like.png';
import share from '../assets/images/share.png';

const BookingItem = ({
  patient,
  reason,
  date,
  time,
  doctor,
}) => (
  <div className="BookingItem">
    <div className="d-flex">
      <div className="BookingItem-img">
        <img src={doctor.image} alt="Avatar" />
      </div>
      <div className="BookingItem-info d-flex justify-content-between w-100">
        <div>
          <h4 className="BookingItem-title">{`Dr. ${doctor.name}`}</h4>
          <p className="BookingItem-category">{doctor.category}</p>
          <p className="BookingItem-description">{doctor.description}</p>
          <div className="BookingItem-exp d-flex">
            <p>{`${doctor.fee}`}</p>
            <p>{`${doctor.exp} yrs of experience`}</p>
            <p>
              <img src={like} alt="likes" />
              <span>{doctor.likes}</span>
            </p>
          </div>
          <div className="book-info">
            <h6>Booking Information:</h6>
            <p>
              Date -
              <span>{date}</span>
            </p>
            <p className="book-time">
              Time -
              <span>{time}</span>
            </p>
            <p>
              Patient name -
              <span>{patient}</span>
            </p>
            <p className="book-time">
              Reason to visit -
              <span>{reason}</span>
            </p>
            <Link to={`/doctors/${doctor.id}`}>VIEW PROFILE</Link>
          </div>
        </div>
        <div>
          <img src={share} alt="share icon" />
        </div>
      </div>
    </div>
  </div>
);

BookingItem.propTypes = {
  patient: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  doctor: PropTypes.string.isRequired,
};

export default BookingItem;
