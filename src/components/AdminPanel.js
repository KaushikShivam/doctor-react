import React, { Component } from 'react';

class AdminPanel extends Component {
  render() {
    return (
      <div className="AdminPanel">
        <div className="AdminPanel-nav d-flex">
          <img className="left-icon" src={leftArrow} alt="Left icon" />
          <h2 className="title">Booking Detail</h2>
        </div>
        <form className="container">
          <div className="form-field">
            <label htmlFor="name">Your name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <button className="book-btn">Confirm Booking</button>
        </form>
      </div>
    );
  }
}

export default AdminPanel;
