import React from 'react';

const Register = () => {
  return (
    <div className="Register">
      <div className="container content">
        <h2>Create Account</h2>
        <form>
          <div className="form-field">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password_confirmation">Confirm your password</label>
            <input
              type="password"
              name="password_confirmation"
              placeholder="Enter your password again"
              required
            />
          </div>
          <button className="book-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
