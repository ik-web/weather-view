import React from 'react';
import styles from './DayList.module.scss';
import Day from './components/Day/Day';
import { days } from '../../../../../../store/store';
import { TDay } from '../../../../../../react-app-env';

interface Props {
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const DayList: React.FC<Props> = ({ setIsPopup }) => {
  const daysOfList: TDay[] = days;

  return (
    <div className={styles.list}>
      {daysOfList.map(day => (
        <Day
          key={day.id}
          day={day}
          setIsPopup={setIsPopup}
        />
      ))}
    </div>
  );
};

export default DayList;
