import React from 'react';
import sunIcon from '../svg/sun.svg';
import cloudIcon from '../svg/cloud.svg';
import rainIcon from '../svg/rain.svg';
import snowIcon from '../svg/snow.svg';
import stormIcon from '../svg/storm.svg';
import fogIcon from '../svg/fog.svg';
import styles from './WeatherIcons.module.scss';

interface Props {
  id: string,
}

export const WeatherIcons = ({ id }: Props) => {
  switch (id) {
    case 'Sunny':
      return (
        <img
          src={sunIcon}
          alt='Sunny icon'
          className={styles.weather__icon}
        />
      );

    case 'Cloudy':
      return (
        <img
          src={cloudIcon}
          alt='Cloudy icon'
          className={styles.weather__icon}
        />
      );

    case 'Rain':
      return (
        <img
          src={rainIcon}
          alt='Rain icon'
          className={styles.weather__icon}
        />
      );

    case 'Snow':
      return (
        <img
          src={snowIcon}
          alt='Snow icon'
          className={styles.weather__icon}
        />
      );
    
    case 'Storm':
      return (
        <img
          src={stormIcon}
          alt='Storm icon'
          className={styles.weather__icon}
        />
      );

    case 'Fog':
      return (
        <img
          src={fogIcon}
          alt='Fog icon'
          className={styles.weather__icon}
        />
      );

    default:
      return null;
  }
};
