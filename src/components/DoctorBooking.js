import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import like from '../assets/images/like.png';

import 'react-infinite-calendar/styles.css';
import leftWhite from '../assets/images/leftWhite.png';

class DoctorBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      selectedDate: null,
      time: null
    };
  }
  handleDateSelect = date => {
    this.setState({ selectedDate: date });
  };

  handleTimeChange = time => {
    this.setState({ time });
  };

  render() {
    const { today } = this.state;
    return (
      <div className="DoctorBooking">
        <div className="DoctorBooking-nav">
          <img src={leftWhite} alt="Left arrow" />
          <h2>Make a Booking</h2>
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
        <div className="time">
          <p>Select a Time:</p>
          <TimePicker
            showSecond={false}
            defaultValue={moment()
              .hour(0)
              .minute(0)}
            className="time-picker"
            onChange={this.handleTimeChange}
            format={'h:mm a'}
            use12Hours
            inputReadOnly
          />
        </div>
        <div className="detail">
          <Link className="book-btn">Book Appointment</Link>
          <h5 className="title">Dr John Doe</h5>
          <p className="category">General Physician</p>
          <p className="address">HSR Layout, Bangalore</p>
          <div className="d-flex exp">
            <p>$200</p>
            <p>14 yrs of experience</p>
            <p>
              <img src={like} alt="likes" />
              <span>126</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorBooking;
