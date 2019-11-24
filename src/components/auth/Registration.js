import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      registrationErrors: ''
    };
  }

  handleSubmit = e => {
    const { email, password, password_confirmation } = this.state;
    axios
      .post(
        'http://localhost:3001/registrations',
        {
          user: {
            email,
            password,
            password_confirmation
          }
        },
        {
          withCredentials: true
        }
      )
      .then(response => {
        console.log('responseeee', response);
      })
      .catch(error => {
        console.log('errorrr', error);
      });
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, password, password_confirmation } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <input
            type='password'
            name='password_confirmation'
            id='password_confirmation'
            value={password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type='submit'>Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;
