import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../redux/actions/auth';

import leftArrow from '../../assets/images/left-arrow.png';

const Navbar = ({
  backBtn,
  title,
  bg,
  isAuthenticated,
  logout,
  history,
}) => {
  const handleClick = () => {
    logout();
    history.push('/landing');
  };
  return (
    <div
      className="Navbar d-flex justify-content-between"
      style={{ background: bg }}
    >
      <div className="d-flex">
        {backBtn && (
          <Link className="ml-0" to={backBtn}>
            <img className="left-icon" src={leftArrow} alt="Left icon" />
          </Link>
        )}
        <h2 className="title mb-0">{title}</h2>
      </div>
      {isAuthenticated && (
        <div className="d-flex">
          <Link to="/bookings">My Bookings</Link>
          <button type="submit" onClick={handleClick}>Logout</button>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  backBtn: PropTypes.string,
  title: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
