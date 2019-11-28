import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="Landing-overlay Landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center Landing-content">
                <h1 className="display-2 mb-4">Doctorly</h1>
                <p className="h4">
                  Search for the Best doctors in your area and Book Appointment
                </p>
                <div className="mt-5">
                  <a href="register.html" className="mr-4 btn btn-full">
                    Sign Up
                  </a>
                  <a href="login.html" className="btn btn-border">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
