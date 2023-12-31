import React from 'react';

// import './WeatherTableItems.css';
import styles from './WeatherTableItems.module.css'
import Card from '../../Ui/Card/Card';

const WeatherTableItems = (props) => {
  // console.log(props);
  return (
    <Card className={styles.table}>
      <table className='table'>
        <thead id='2' className='table-dark'>
          <tr>
            <th scope='col'>Tarih</th>
            <th scope='col'>Hava Durumu</th>
            <th scope='col'>Durum</th>
            <th scope='col'>Sıcaklık</th>
          </tr>
        </thead>
        {props.weatherItemData.map((data) => (
          <tbody key={Math.random().toString()}>
            <tr>
              <td className='noBorder'>{data.date}</td>
              <td className='noBorder'>{data.day.condition.text}</td>
              <td className='noBorder'>
                <img
                  src={data.day.condition.icon}
                  alt='Weather data by WeatherAPI.com'
                ></img>
              </td>
              <td className='noBorder'>{data.day.avgtemp_c}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </Card>
  );
};

export default WeatherTableItems;
