import React from 'react';

import styles from './LocationName.module.css';

const LocationName = (props) => {
  return (
    <div className={`${styles['location-name']}`}>
      <div className='container'>
        <h2>{props.cityName}</h2>
      </div>
    </div>
  );
};

export default LocationName;
