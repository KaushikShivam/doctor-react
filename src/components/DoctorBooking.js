import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import leftWhite from '../assets/images/leftWhite.png';

class DoctorBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      selectedDate: null
    };
  }
  handleDateSelect = date => {
    this.setState({ selectedDate: date });
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
      </div>
    );
  }
}

export default DoctorBooking;
