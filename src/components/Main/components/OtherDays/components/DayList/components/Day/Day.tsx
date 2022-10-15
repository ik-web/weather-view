import React from 'react';
import { usePopup } from '../../../../../../../../hooks/usePopup';
import { WeatherIcons } from '../../../../../../../../img/icons/weather/WeatherIcons';
import { TDay } from '../../../../../../../../react-app-env';
import styles from './Day.module.scss';

interface Props {
  day: TDay,
}

const Day: React.FC<Props> = ({ day }) => {
  const { setIsPopup } = usePopup();

  const toggleState = () => {
    setIsPopup();
  }

  return (
    <section
      className={styles.day}
      onClick={toggleState}
    >
      <h2 className={styles.day__name}>
        {day.name}
      </h2>

      <div className={styles.day__date}>
        {day.dayDate}
      </div>

      <div className={styles.day__icon}>
        <WeatherIcons id={day.info} />
      </div>

      <div className={styles.day__tempDay}>
        {day.tempDay}
      </div>

      <div className={styles.day__tempNight}>
        {day.tempNight}
      </div>

      <div className={styles.day__info}>
        {day.info}
      </div>
    </section>
  );
};

export default Day;
