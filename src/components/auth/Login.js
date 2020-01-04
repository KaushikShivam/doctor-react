import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { login } from '../../redux/actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formInfo;

  const handleChange = e => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ ...formInfo });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Register">
      <div className="container content">
        <h2>Login with Email</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-field">
            <label htmlFor="email">Your email</label>
            <input
              id="email"
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
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => handleChange(e)}
              minLength="6"
              required
            />
          </div>
          <input type="submit" value="Login" className="book-btn" />
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
