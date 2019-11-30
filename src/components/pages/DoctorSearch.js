import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../../assets/images/logo.png';
import Navbar from '../layout/Navbar';

import { setFilter } from '../../redux/actions/doctor';

const DoctorSearch = ({ categories, setFilter, history }) => {
  const [search, setSearch] = useState('');

  const handleFilter = (id = null) => {
    let filterObj = {};
    if (search != '') {
      filterObj.name = search;
    }
    if (id != 'All' && id) {
      filterObj.category = id;
    }
    setFilter(filterObj);
    history.push('/doctors');
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleFilter();
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleClick = ({ target: { id } }) => {
    handleFilter(id);
  };

  return (
    <div className="DoctorSearch">
      <Navbar title="Search Doctors" bg="#e0fdf7" />
      <div className="container">
        <div className="search">
          <form onSubmit={e => handleSubmit(e)}>
            <input
              type="search"
              name="search"
              id="search"
              value={search}
              onChange={e => handleChange(e)}
              placeholder="Search for Doctors, specialists etc"
            />
          </form>
        </div>
        <div>
          <img className="logo" src={logo} alt="company logo" />
          <h1>Search Doctors</h1>
          <p>
            Search by directly typing the doctors name. You can also search by
            clicking one of the categories listed below.
          </p>
          <div className="container">
            <div className="categories row">
              {categories.map(category => (
                <div key={category} className="col-6 col-md-4 mb-4">
                  <button
                    id={category}
                    onClick={e => handleClick(e)}
                    className="category-btn"
                  >
                    {category}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

DoctorSearch.propTypes = {
  setFilter: PropTypes.func.isRequired
};

export default connect(null, { setFilter })(DoctorSearch);
