import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';

class DoctorSearch extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="DoctorSearch">
        <div className="DoctorSearch-nav">
          <h2 className="title">Doctors</h2>
        </div>
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
              clinics, hospital, etc. You can also search by health concerns
              listed below
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
    'General Doctor',
    'Skin & Hair',
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
