import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DoctorInfo from './DoctorInfo';
import DoctorFeedback from './DoctorFeedback';

import leftWhite from '../assets/images/leftWhite.png';
import email from '../assets/images/email.png';
import like from '../assets/images/like.png';
import callAnswer from '../assets/images/call-answer.png';

class DoctorDetail extends Component {
  render() {
    return (
      <div className="DoctorDetail">
        <div className="detail-card">
          <div className="DoctorDetail-nav d-flex justify-content-between">
            <Link to="/doctors">
              <img src={leftWhite} alt="left arrow" />
            </Link>
            <p className="location">Bangalore</p>
          </div>
          <div className="DoctorDetail-info">
            <h4 className="title">Dr. John Doe</h4>
            <div className="d-flex justify-content-center align-items-center">
              <img className="cta" src={callAnswer} alt="Call Answer" />
              <img
                className="avatar"
                src="https://www.w3schools.com/w3images/avatar6.png"
                alt="Avatar"
              />
              <img className="cta" src={email} alt="email" />
            </div>
            <p className="category">General Physician</p>
            <div className="d-flex exp">
              <p>$200</p>
              <p>14 yrs of experience</p>
              <p>
                <img src={like} alt="likes" />
                <span>126</span>
              </p>
            </div>
          </div>
        </div>
        {/* tab */}
        {/* content */}
        {/* <DoctorInfo /> */}
        <DoctorFeedback />
      </div>
    );
  }
}

export default DoctorDetail;
