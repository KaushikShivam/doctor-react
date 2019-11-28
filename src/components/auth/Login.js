import React, { useState } from 'react';

const Login = () => {
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formInfo;

  const handleChange = e =>
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('success');
  };

  return (
    <div className="Register">
      <div className="container content">
        <h2>Login with Email</h2>
        <form onSubmit={e => handleSubmit(e)}>
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
          <input type="submit" value="Login" className="book-btn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
