import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import 'rc-time-picker/assets/index.css';
import 'react-infinite-calendar/styles.css';
import like from '../../assets/images/like.png';

import Navbar from '../layout/Navbar';

class DoctorBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      selectedDate: new Date(),
      time: moment()
        .hour(0)
        .minute(0)
    };
  }
  handleDateSelect = date => {
    this.setState({ selectedDate: date });
  };

  handleTimeChange = time => {
    this.setState({ time });
  };

  render() {
    const { today, time, selectedDate } = this.state;
    const { doctor } = this.props.location.state;
    return (
      <div className="DoctorBooking">
        <Navbar
          bg="#266a61"
          title="Confirm Timing"
          backBtn={`/doctors/${doctor.id}`}
        />
        <div className="container">
          <div className="time mt-5">
            <p>Select Time & Date:</p>
            <TimePicker
              showSecond={false}
              defaultValue={time}
              className="time-picker"
              onChange={this.handleTimeChange}
              format={'h:mm a'}
              use12Hours
              inputReadOnly
            />
          </div>
          <InfiniteCalendar
            theme={{
              selectionColor: '#47b7a7',
              textColor: {
                default: '#333',
                active: '#FFF'
              },
              weekdayColor: '#266a61',
              headerColor: '#47b7a7',
              floatingNav: {
                background: '#266a61',
                color: '#FFF',
                chevron: '#FFF'
              }
            }}
            width={'100%'}
            height={300}
            selected={today}
            disabledDays={[0, 6]}
            onSelect={this.handleDateSelect}
          />

          <div className="detail">
            <Link
              to={{
                pathname: `/doctors/${doctor.id}/book/confirm`,
                state: { doctor, time, selectedDate }
              }}
              onClick={this.handleSubmit}
              className="book-btn"
            >
              Book Appointment
            </Link>
            <h5 className="title">Dr {doctor.name}</h5>
            <p className="category">{doctor.category}</p>
            <p className="address">{doctor.address}</p>
            <div className="d-flex exp">
              <p>${doctor.fee}</p>
              <p>{doctor.exp} yrs of experience</p>
              <p>
                <img src={like} alt="likes" />
                <span>{doctor.likes}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorBooking;
