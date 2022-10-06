import React from 'react';
import { WeatherIcons } from '../../../../img/icons/weather/WeatherIcons';
import styles from './CurrentDay.module.scss';

const CurrentDay: React.FC = () => {
  return (
    <section className={styles.currentDay}>
      <div className={styles.currentDay__topBlock}>
        <div className={styles.currentDay__temp}>
          9°
        </div>

        <h1 className={styles.currentDay__date}>
          Today
        </h1>

        <div className={styles.currentDay__wetherIcon}>
          <WeatherIcons id='Cloudy' />
        </div>
      </div>

      <div className={styles.currentDay__bottomBlock}>
        <div className={styles.currentDay__time}>
          Time: <span>22:17</span>
        </div>
        
        <div className={styles.currentDay__city}>
          City: <span>Vyshneve</span>
        </div>
      </div>
    </section>
  );
};

export default CurrentDay;
