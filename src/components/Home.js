import React, { Component } from 'react';
import axios from 'axios';
import Registration from './auth/Registration';
import Login from './auth/Login';

class Home extends Component {
  handleSuccessfulAuth = data => {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  };

  handleLogout = () => {
    axios
      .delete('http://localhost:3001/logout', {
        withCredentials: true
      })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Home = {this.props.loggedInStatus}</h1>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <button onClick={this.handleLogout}>Log out</button>
      </div>
    );
  }
}

export default Home;
