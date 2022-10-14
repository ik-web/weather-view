import React from 'react';
import styles from './DayList.module.scss';
import Day from './components/Day/Day';
import { days } from '../../../../../../store/store';

export interface TDay {
  id: number,
  name: string,
  dayDate: string,
  tempDay: string,
  tempNight: string,
  info: string
}

const DayList: React.FC = () => {
  const daysOfList: TDay[] = days;

  return (
    <div className={styles.list}>
      {daysOfList.map(day => (
        <Day
          key={day.id}
          day={day}
        />
      ))}
    </div>
  );
};

export default DayList;
