import React, { Component } from 'react';
import Registration from './auth/Registration';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home = {this.props.loggedInStatus}</h1>
        <Registration />
      </div>
    );
  }
}

export default Home;
