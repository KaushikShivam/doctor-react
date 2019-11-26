import React from 'react';
import like from '../assets/images/like.png';
import share from '../assets/images/share.png';

const Doctor = () => {
  return (
    <div className="Doctor">
      <div>
        <div className="Doctor-img">
          <img
            src="https://www.w3schools.com/w3images/avatar6.png"
            alt="Avatar"
          />
        </div>
        <div className="Doctor-content">
          <div className="Doctor-info">
            <h4>Dr. John Doe</h4>
            <p>General Physician</p>
            <p>MD-General medicine, lorem ipsum</p>
            <div>
              <p>$200</p>
              <p>14 yrs of experience</p>
              <p>
                <img src={like} alt="likes" />
                <span>126</span>
              </p>
            </div>
            <button type="submit">VIEW PROFILE</button>
          </div>
          <div>
            <img src={share} alt="share icon" />
          </div>
        </div>
        <div>
          <button type="submit">Call</button>
          <button type="submit">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
