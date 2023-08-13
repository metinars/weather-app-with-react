import React from 'react';

import WeatherTableItems from '../../components/WeatherTableItems';
import styles from './WeatherTable.module.css';

const WeatherTable = (props) => {
  return (
    <div className={`${styles['weather-table']}`}>
      <div className={styles.container}>
        <ul className={styles.nav} id='tab0'>
          <li className={`${styles['nav-item']}`}>
            <button
              className={`${styles['nav-link active']}`}
              id='button-tab0'
              type='button'
            >
              3 Günlük
            </button>
          </li>
          {/* <li className='nav-item'>
            <button className='nav-link' id='button-tab1'>
              Saatlik
            </button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' id='button-tab2'>
              14 Günlük
            </button>
          </li> */}
        </ul>
        <div className={`${styles['tab-content']}`} id='tabContent0'>
          <div className={`${styles['weather-items fade active']}`} id='home0'>
            <WeatherTableItems weatherItemData={props.weatherData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherTable;
