import React from 'react';
import DayFilter from './components/DayFilter/DayFilter';
import DayList from './components/DayList/DayList';
import styles from './OtherDays.module.scss';

interface Props {
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const OtherDays: React.FC<Props> = ({ setIsPopup }) => {
  return (
    <div className={styles.otherDays}>
      <DayFilter />
      <DayList  setIsPopup={setIsPopup} />
    </div>
  );
};

export default OtherDays;
