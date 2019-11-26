import React from 'react';
import { Link } from 'react-router-dom';
import like from '../assets/images/like.png';
import share from '../assets/images/share.png';

const Doctor = () => {
  return (
    <div className="Doctor">
      <div className="d-flex">
        <div className="Doctor-img">
          <img
            src="https://www.w3schools.com/w3images/avatar6.png"
            alt="Avatar"
          />
        </div>
        <div className="Doctor-info d-flex justify-content-between w-100">
          <div>
            <h4 className="Doctor-title">Dr. John Doe</h4>
            <p className="Doctor-category">General Physician</p>
            <p className="Doctor-description">
              MD-General medicine, lorem ipsum
            </p>
            <div className="Doctor-exp d-flex">
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
      <div className="Doctor-cta d-flex">
        <button className="btn-border flex-grow-1 flex-md-grow-0" type="submit">
          Call
        </button>
        <button className="btn-full flex-grow-1 flex-md-grow-0" type="submit">
          Book
        </button>
      </div>
    </div>
  );
};

export default Doctor;
