import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';

import Navbar from '../layout/Navbar';

class DoctorSearch extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="DoctorSearch">
        <Navbar title="Search Doctors" bg="#e0fdf7" />
        <div className="container">
          <div className="search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for Doctors, specialists etc"
            />
          </div>
          <div>
            <img className="logo" src={logo} alt="company logo" />
            <h1>Search Doctors</h1>
            <p>
              Search by directly typing the doctors name, speciality, symptoms,
              clinics, hospital, etc. You can also search by clicking one of the
              categories listed below
            </p>
            <div className="container">
              <div className="categories row">
                {categories.map(category => (
                  <div className="col-6 col-md-4 mb-4">
                    <button className="category-btn">{category}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DoctorSearch.defaultProps = {
  categories: [
    'All',
    'General Doctor',
    'Mental Health',
    'Skin',
    'Child Care',
    'Women Health',
    'Dentist',
    'ENT',
    'Homeopathy',
    'Ayurveda',
    'Heart'
  ]
};

export default DoctorSearch;
