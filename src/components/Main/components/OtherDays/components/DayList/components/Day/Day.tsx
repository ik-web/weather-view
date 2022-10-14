import React from 'react';
import { scrollBlock } from '../../../../../../../../functions/block-page-scroll';
import { WeatherIcons } from '../../../../../../../../img/icons/weather/WeatherIcons';
import { TDay } from '../../../../../../../../react-app-env';
import styles from './Day.module.scss';

interface Props {
  day: TDay,
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Day: React.FC<Props> = ({ day, setIsPopup }) => {

  return (
    <section
      className={styles.day}
      onClick={() => {
        setIsPopup(true);
        scrollBlock();
      }}
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
