import React from 'react';
import styles from './Popup.module.scss';
import { InfoItem } from '../../react-app-env';
import { WeatherIcons } from '../../img/icons/weather/WeatherIcons';
import { items } from '../../store/store';
import CurrentDayInfoItem from '../Main/components/CurrentDayInfo/components/CurrentDayInfoItem';
import { usePopup } from '../../hooks/usePopup';

const Popup: React.FC = () => {
  const { setIsPopup } = usePopup();

  const toggleState = () => {
    setIsPopup();
  }
  
  const popapItems: InfoItem[] = items;

  return (
    <div className={styles.popup__overlay}>
      <div className={styles.popup}>
        <button
          className={styles.popup__btn}
          onClick={toggleState}
        ></button>

        <div className={styles.popup__card}>
          <div className={styles.popup__dayInfo}>
            <div className={styles.popup__dayMainWeather}>
              <div className={styles.popup__temp}>
                9°
              </div>

              <div className={styles.popup__img}>
                <WeatherIcons id='Cloudy' />
              </div>
            </div>

            <h1 className={styles.popup__dayName}>
              Today
            </h1>

            <div className={styles.popup__time}>
              Time: <span>22:17</span>
            </div>

            <div className={styles.popup__city}>
              City: <span>Vyshneve</span>
            </div>
          </div>

          <div className={styles.popup__dayMoreInfo}>
            <div>
              {popapItems.map(item => (
                <CurrentDayInfoItem item={item} key={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
