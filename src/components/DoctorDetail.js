import React, { Component } from 'react';
import leftWhite from '../assets/images/leftWhite.png';
import email from '../assets/images/email.png';
import callAnswer from '../assets/images/call-answer.png';

class DoctorDetail extends Component {
  render() {
    return (
      <div className="DoctorDetail">
        <div className="detail-card">
          <div className="DoctorDetail-nav">
            <img src={leftWhite} alt="left arrow" />
            <p className="location">Bangalore</p>
          </div>
          <div className="DoctorDetail-info">
            <h4>Dr. John Doe</h4>
            <div>
              <img src={callAnswer} alt="Call Answer" />
              <img
                src="https://www.w3schools.com/w3images/avatar6.png"
                alt="Avatar"
              />
              <img src={email} alt="email" />
            </div>
            <p>General Physician</p>
            <div className="d-flex">
              <p>$200</p>
              <p>14 yrs of experience</p>
              <p>
                <img src={like} alt="likes" />
                <span>126</span>
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorDetail;
