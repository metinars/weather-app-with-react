import React, { useState } from 'react';

import './WeatherForm.css';
import LocationName from '../components/LocationName';
import WeatherTable from '../Ui/WeatherTable';

const WeatherForm = (props) => {
  const weather = JSON.parse(localStorage.getItem('weather-data'));

  const [enteredCity, setEnteredCity] = useState('');
  const [weatherCityData, setWeatherCityData] = useState(weather);

  const [isDeleting, setIsDeleting] = useState(false);

  const deleteHandler = () => {
    setIsDeleting(true);
  };

  const cityTitleChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const weatherDataChangeHandler = () => {
    weather.forEach((element) => {
      if (element[enteredCity]) {
        setWeatherCityData(element[enteredCity]);

        deleteHandler();
      } else {
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className='hero'>
        <div className='container'>
          <form onSubmit={submitHandler} className='find-location'>
            <input
              type='text'
              id='tags'
              value={enteredCity}
              onChange={cityTitleChangeHandler}
              placeholder='Konumunuzu bulun..'
              required
            ></input>
            <input
              type='submit'
              onClick={weatherDataChangeHandler}
              id='city'
              value={'Ara'}
            ></input>
          </form>
        </div>
      </div>
      <LocationName cityName={enteredCity} />
      {isDeleting ? <WeatherTable weatherData={weatherCityData} /> : ''}
    </div>
  );
};

export default WeatherForm;
