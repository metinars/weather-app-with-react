import React from 'react';

import WeatherTableItems from '../components/WeatherTableItems';
import './WeatherTable.css';

const WeatherTable = (props) => {
  return (
    <div className='weather-table'>
      <div className='container'>
        <ul className='nav' id='tab0'>
          <li className='nav-item'>
            <button className='nav-link active' id='button-tab0' type='button'>
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
        <div className='tab-content' id='tabContent0'>
          <div className='weather-items fade active' id='home0'>
            <WeatherTableItems weatherItemData={props.weatherData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherTable;
