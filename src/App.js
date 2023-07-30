import React, { useEffect } from 'react';

import NavBar from './Ui/NavBar';
import WeatherForm from './NewWeather/WeatherForm';

import './App.css';

const WEATHER_DATA = [
  {
    Adana: [
      {
        day: 'Pazartesi',
        weather: 'Güneşli',
        heat: '38',
      },
      {
        day: 'Salı',
        weather: 'Yağmurlu',
        heat: '29',
      },
      {
        day: 'Çarşamba',
        weather: 'Bulutlu',
        heat: '26',
      },
    ],
  },

  {
    Adıyaman: [
      {
        day: 'Pazartesi',
        weather: 'Güneşli',
        heat: '38',
      },
      {
        day: 'Salı',
        weather: 'Yağmurlu',
        heat: '29',
      },
      {
        day: 'Çarşamba',
        weather: 'Bulutlu',
        heat: '26',
      },
    ],
  },
  {
    Afyon: [
      {
        day: 'Pazartesi',
        weather: 'Güneşli',
        heat: '38',
      },
      {
        day: 'Salı',
        weather: 'Yağmurlu',
        heat: '29',
      },
      {
        day: 'Çarşamba',
        weather: 'Bulutlu',
        heat: '26',
      },
    ],
  },
  {
    Ağrı: [
      {
        day: 'Pazartesi',
        weather: 'Güneşli',
        heat: '38',
      },
      {
        day: 'Salı',
        weather: 'Yağmurlu',
        heat: '29',
      },
      {
        day: 'Çarşamba',
        weather: 'Bulutlu',
        heat: '26',
      },
    ],
  },
  {
    Amasya: [
      {
        day: 'Pazartesi',
        weather: 'Güneşli',
        heat: '38',
      },
      {
        day: 'Salı',
        weather: 'Yağmurlu',
        heat: '29',
      },
      {
        day: 'Çarşamba',
        weather: 'Bulutlu',
        heat: '26',
      },
    ],
  },
  {
    Ankara: [
      {
        day: 'Pazartesi',
        weather: 'Güneşli',
        heat: '38',
      },
      {
        day: 'Salı',
        weather: 'Yağmurlu',
        heat: '29',
      },
      {
        day: 'Çarşamba',
        weather: 'Bulutlu',
        heat: '26',
      },
    ],
  },
];

function App() {
  useEffect(() => {
    localStorage.setItem('weather-data', JSON.stringify(WEATHER_DATA));
  });
  return (
    <div>
      <NavBar />
      <WeatherForm />
    </div>
  );
}

export default App;
