import React from 'react';
import { Link } from 'react-router-dom';
import like from '../assets/images/like.png';
import share from '../assets/images/share.png';

const BookingItem = () => {
  return (
    <div className="BookingItem">
      <div className="d-flex">
        <div className="BookingItem-img">
          <img
            src="https://www.w3schools.com/w3images/avatar6.png"
            alt="Avatar"
          />
        </div>
        <div className="BookingItem-info d-flex justify-content-between w-100">
          <div>
            <h4 className="BookingItem-title">Dr. John Doe</h4>
            <p className="BookingItem-category">General Physician</p>
            <p className="BookingItem-description">
              MD-General medicine, lorem ipsum
            </p>
            <div className="BookingItem-exp d-flex">
              <p>$200</p>
              <p>14 yrs of experience</p>
              <p>
                <img src={like} alt="likes" />
                <span>126</span>
              </p>
            </div>
            <Link to="/doctors/2" className="d-flex justify-content-center">
              VIEW PROFILE
            </Link>
          </div>
          <div>
            <img src={share} alt="share icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingItem;
