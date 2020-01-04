import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DoctorInfo from '../DoctorInfo';
import DoctorFeedback from '../DoctorFeedback';
import ClinicInfo from '../ClinicInfo';
import Navbar from '../layout/Navbar';

import email from '../../assets/images/email.png';
import like from '../../assets/images/like.png';
import callAnswer from '../../assets/images/call-answer.png';

import { getSingleDoctor } from '../../redux/actions/doctor';

const DoctorDetail = ({ match, singleDoctor, getSingleDoctor }) => {
  const [tab, setTab] = useState(0);

  const handleClick = (e) => {
    const id = parseInt(e.target.id.split('-')[1]);
    setTab(id);
  };

  const renderTab = ({ phone, address }) => {
    switch (tab) {
      case 0:
        return <DoctorInfo />;
      case 1:
        return <ClinicInfo phone={phone} address={address} />;
      case 2:
        return <DoctorFeedback />;
      default:
        return 0;
    }
  };

  useEffect(() => {
    getSingleDoctor(match.params.id);
  }, []);

  return (
    <div className="DoctorDetail">
      <Navbar bg="#266a61" title="Details" backBtn="/doctors" />
      {singleDoctor && (
        <div>
          <div className="detail-card">
            <div className="DoctorDetail-info">
              <h4 className="title text-white font-weight-bold">
                {`Dr. ${singleDoctor.name}`}
              </h4>
              <div className="d-flex justify-content-center align-items-center">
                <img className="cta" src={callAnswer} alt="Call Answer" />
                <img className="avatar" src={singleDoctor.image} alt="Avatar" />
                <img className="cta" src={email} alt="email" />
              </div>
              <p className="category">{singleDoctor.category}</p>
              <div className="d-flex exp">
                <p>{`$${singleDoctor.fee}`}</p>
                <p>{`${singleDoctor.exp} yrs of experience`}</p>
                <p>
                  <img src={like} alt="likes" />
                  <span>{singleDoctor.likes}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="container d-flex tab-content">
            <button
              type="submit"
              className={`tab flex-grow-1 ${tab === 0 ? 'tab-focus' : ''}`}
              id="tab-0"
              onClick={e => handleClick(e)}
            >
              Doctor Info
            </button>
            <button
              type="submit"
              className={`tab flex-grow-1 ${tab === 1 ? 'tab-focus' : ''}`}
              id="tab-1"
              onClick={e => handleClick(e)}
            >
              Clinic Info
            </button>
            <button
              type="submit"
              className={`tab flex-grow-1 ${tab === 2 ? 'tab-focus' : ''}`}
              id="tab-2"
              onClick={e => handleClick(e)}
            >
              Feedback
            </button>
          </div>
          {renderTab(singleDoctor)}
          <Link
            to={{
              pathname: `/doctors/${singleDoctor.id}/book`,
              state: { doctor: singleDoctor },
            }}
            className="book-btn"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </div>
  );
};

DoctorDetail.propTypes = {
  getSingleDoctor: PropTypes.func.isRequired,
  singleDoctor: PropTypes.object,
};

const mapStateToProps = state => ({
  singleDoctor: state.doctor.singleDoctor,
});

export default connect(mapStateToProps, { getSingleDoctor })(DoctorDetail);
