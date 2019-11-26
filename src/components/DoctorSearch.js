import React, { Component } from 'react';

class DoctorSearch extends Component {
  render() {
    return (
      <div className="DoctorSearch">
        <div className="DoctorSearch-nav">
          <h2 className="title">Doctors</h2>
        </div>
        <div className="search">
          <input type="search" name="search" id="search" placeholder="Search for Doctors, specialists etc" />
        </div>
      </div>
    );
  }
}

export default DoctorSearch;
