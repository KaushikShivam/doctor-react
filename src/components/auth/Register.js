/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';


const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const { 
    name,
    email,
    password,
    password_confirmation,
  } = formInfo;

  const handleChange = (e) =>
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== password_confirmation) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ ...formInfo });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Register">
      <div className="container content">
        <h2>Create Account</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-field">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={e => handleChange(e)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => handleChange(e)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => handleChange(e)}
              minLength="6"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password_confirmation">Confirm your password</label>
            <input
              type="password"
              name="password_confirmation"
              placeholder="Enter your password again"
              value={password_confirmation}
              onChange={e => handleChange(e)}
              minLength="6"
              required
            />
          </div>
          <input className="book-btn" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
