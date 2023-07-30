import React from 'react';

const WeatherTableItems = (props) => {
  return (
    <table className='table today'>
      <thead className='table-dark'>
        <tr>
          <th scope='col'>Saat</th>
          <th scope='col'>Hava Durumu</th>
          <th scope='col'>Sıcaklık</th>
        </tr>
      </thead>
      <tbody className='table-results'>
        <tr>
          <th scope='row'>{props.weatherItemData[0].day}</th>
          <td>{props.weatherItemData[0].weather}</td>
          <td>
            {props.weatherItemData[0].heat}
            <sup>o</sup>C
          </td>
        </tr>
      </tbody>
      <tbody className='table-results'>
        <tr>
          <th scope='row'> {props.weatherItemData[1].day}</th>
          <td>{props.weatherItemData[1].weather}</td>
          <td>
            {props.weatherItemData[1].heat}
            <sup>o</sup>C
          </td>
        </tr>
      </tbody>
      <tbody className='table-results'>
        <tr>
          <th scope='row'>{props.weatherItemData[2].day}</th>
          <td>{props.weatherItemData[2].weather}</td>
          <td>
            {props.weatherItemData[2].heat}
            <sup>o</sup>C
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherTableItems;
