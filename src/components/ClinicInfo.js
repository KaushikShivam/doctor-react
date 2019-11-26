import React from 'react';

const ClinicInfo = () => {
  return (
    <div className="DoctorDetail-clinic container">
      <p className="phone">+91-9711112922 | +91-9911976976</p>
      <p className="address">
        20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        molestias hic, quod earum eius sapiente laudantium voluptas, adipisci,
        est quisquam deleniti!, New Delhi, India
      </p>
      <div className="map">
        <h3>Address on Map:</h3>
        <img
          src="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png"
          alt="map"
        />
      </div>
    </div>
  );
};

export default ClinicInfo;
