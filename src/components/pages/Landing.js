import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
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
              <Link to="/register" className="mr-4 btn btn-full">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-border">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
