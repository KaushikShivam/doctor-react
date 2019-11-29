import React, { Component } from 'react';
import Navbar from '../layout/Navbar';

class AdminPanel extends Component {
  render() {
    return (
      <div className="AdminPanel">
        <Navbar title="Admin Panel" bg="#e0fdf7" backBtn="/" />

        <form className="container">
          <div className="form-field">
            <label htmlFor="name">Doctor's name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Enter doctor's name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="category">Category</label>
            <input
              type="category"
              name="category"
              id="category"
              placeholder="Enter doctor's category"
            />
          </div>

          <div className="form-field">
            <label htmlFor="description">Description</label>
            <input
              type="description"
              name="description"
              id="description"
              placeholder="Enter doctor's description"
            />
          </div>

          <div className="form-field">
            <label htmlFor="fee">Doctor's Fee</label>
            <input
              type="fee"
              name="fee"
              id="fee"
              placeholder="Enter doctor's fee"
            />
          </div>

          <div className="form-field">
            <label htmlFor="exp">Doctor's Experience</label>
            <input
              type="exp"
              name="exp"
              id="exp"
              placeholder="Enter doctor's experience"
            />
          </div>

          <div className="form-field">
            <label htmlFor="likes">Doctor's Likes</label>
            <input
              type="likes"
              name="likes"
              id="likes"
              placeholder="Enter doctor's Likes"
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Doctor's Phone no.</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Enter doctor's phone"
            />
          </div>

          <div className="form-field">
            <label htmlFor="address">Doctor's Address</label>
            <input
              type="address"
              name="address"
              id="address"
              placeholder="Enter doctor's Address"
            />
          </div>

          <button className="book-btn">Add Doctor</button>
        </form>
      </div>
    );
  }
}

export default AdminPanel;
