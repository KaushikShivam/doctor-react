import React, { Component } from 'react';
import Doctor from './Doctor';
import leftArrow from '../assets/images/left-arrow.png';
import downArrow from '../assets/images/sort-down.png';
import filter from '../assets/images/filter.png';

class DoctorsList extends Component {
  render() {
    return (
      <div className="DoctorList">
        <div className="DoctorList-nav d-flex">
          <img className="left-icon" src={leftArrow} alt="Left icon" />
          <h2 className="title">
            General Doctor <img src={downArrow} alt="down Arrow" />
          </h2>
          <p className="location">Bangalore</p>
        </div>
        <div className="filter">
          <button type="submit">
            <img src={filter} alt="filter button" />
          </button>
        </div>
        <div className="container">
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
        </div>
      </div>
    );
  }
}

export default DoctorsList;
