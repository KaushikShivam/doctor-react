import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDoctors } from '../../redux/actions/doctor';

import Doctor from '../Doctor';
import Navbar from '../layout/Navbar';
import filterImg from '../../assets/images/filter.png';
import FilterPop from '../FilterPop';

const DoctorsList = ({ doctors, getDoctors, filter }) => {
  useEffect(() => {
    getDoctors(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const [filterOption, setFilterOpen] = useState(false);

  const handleClick = () => setFilterOpen(!filterOption);

  return (
    <div className="DoctorList">
      <Navbar title="Doctors" bg="#e0fdf7" backBtn="/" />
      <div className="filter">
        <button type="submit" onClick={handleClick}>
          <img src={filterImg} alt="filter button" />
        </button>
      </div>
      <div className="container">
        {filterOption && <FilterPop />}
        <h4 className="result-title">
          {doctors.length === 0
            ? 'There are No doctors for this search'
            : 'Results showing Doctors'}
        </h4>
        <div>
          {doctors.map(doctor => (
            <Doctor key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

DoctorsList.propTypes = {
  doctors: PropTypes.array.isRequired,
  getDoctors: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  doctors: state.doctor.doctors,
  filter: state.doctor.filter,
});

export default connect(mapStateToProps, { getDoctors })(DoctorsList);
