import React from 'react';
import tempIcon from '../svg/temp.svg';
import pressIcon from '../svg/press.svg';
import precipitationIcon from '../svg/precipitation.svg';
import windIcon from '../svg/wind.svg';
import styles from './InfoIcons.module.scss';

interface Props {
  id: string,
}

export const InfoIcons = ({ id }: Props) => {
  switch (id) {
      case 'temp':
      return (
        <img
          src={tempIcon}
          alt='Temperature icon'
          className={styles.info__icon}
        />
      );

    case 'press':
      return (
        <img
          src={pressIcon}
          alt='Pressure icon'
          className={styles.info__icon}
        />
      );

      case 'precipitation':
        return (
          <img
            src={precipitationIcon}
            alt='Precipitation icon'
            className={styles.info__icon}
          />
        );
  
      case 'wind':
        return (
          <img
            src={windIcon}
            alt='Wind icon'
            className={styles.info__icon}
          />
        );

    default:
      return null;
  }
};
