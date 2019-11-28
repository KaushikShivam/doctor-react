import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginErrors: ''
    };
  }

  handleSubmit = e => {
    const { email, password } = this.state;
    axios
      .post(
        'http://localhost:3001/sessions',
        {
          user: {
            email,
            password
          }
        },
        {
          withCredentials: true
        }
      )
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
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
    const { email, password } = this.state;
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

          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
