import React from 'react';

import './LocationName.css';

const LocationName = (props) => {
  return (
    <div className='location-name'>
      <div className='container'>
        <h2>{props.cityName}</h2>
      </div>
    </div>
  );
};

export default LocationName;
