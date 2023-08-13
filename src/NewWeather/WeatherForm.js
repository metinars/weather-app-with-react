import React, { useState } from 'react';

import styles from './WeatherForm.module.css';
import LocationName from '../components/LocationName';
import WeatherTable from '../Ui/WeatherTable';

const WeatherForm = (props) => {
  const url = 'https://api.weatherapi.com/v1';
  const fileForecastFormat = '/forecast.json';
  // const fileCurrentFormat = '/current.json';
  // const fileTimeZoneFormat = '/timezone.json';
  // const fileSearchFormat = '/search.json';
  const apiKey = '1de06f08943d497b85720411231201';

  // const weather = JSON.parse(localStorage.getItem('weather-data'));

  const [enteredCity, setEnteredCity] = useState('');
  const [responseWeatherData, setResponseWeatherData] = useState('');
  const [responseWeatherLocationData, setResponseWeatherLocationData] =
    useState('');
  const [isData, setIsData] = useState(false);

  const sendHttpRequest = (
    weatherUrl,
    fileFormat,
    weatherApiKey,
    requestCity
  ) => {
    const responseData = `${weatherUrl + fileFormat}?key=${weatherApiKey}
    &q=${requestCity}&days=14&aqi=no&alerts=no&lang=tr`;

    return fetch(responseData)
      .then((response) => {
        if (response.status >= 200 && response.status <= 300) {
          return response.json();
        } else {
          return response.json().then((errData) => {
            console.log(errData);
            throw new Error('Something went wrong - server-side.');
          });
        }
      })
      .catch((error) => {
        console.log(error);
        throw new Error('Something went wrong!');
      });
  };

  async function fetchWeather(fileFormat, userEnteredCity) {
    try {
      const weatherResponseData = await sendHttpRequest(
        url,
        fileFormat,
        apiKey,
        userEnteredCity
      );
      setResponseWeatherData(weatherResponseData.forecast.forecastday);
      setResponseWeatherLocationData(
        weatherResponseData.location.name +
          ' ' +
          weatherResponseData.location.country.toUpperCase()
      );
      // console.log(responseWeatherLocationData);
      setIsData(true);
      return weatherResponseData;
    } catch (error) {
      setIsData(false);
      alert(error.message);
    }
  }

  const cityTitleChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetchWeather(fileForecastFormat, enteredCity);
  };

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.container}>
          <form
            onSubmit={submitHandler}
            className={`${styles['find-location']}`}
          >
            <input
              type='text'
              id='tags'
              value={enteredCity}
              onChange={cityTitleChangeHandler}
              placeholder='Konumunuzu bulun..'
              // autocomplete='off'
              required
            ></input>
            <input
              type='submit'
              // onClick={weatherDataChangeHandler}
              id='city'
              value={'Ara'}
            ></input>
          </form>
        </div>
      </div>
      <LocationName cityName={responseWeatherLocationData} />
      {isData ? <WeatherTable weatherData={responseWeatherData} /> : ''}
    </div>
  );
};

export default WeatherForm;
