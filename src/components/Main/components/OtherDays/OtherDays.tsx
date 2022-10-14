import React from 'react';
import DayFilter from './components/DayFilter/DayFilter';
import DayList from './components/DayList/DayList';
import styles from './OtherDays.module.scss';

const OtherDays: React.FC = () => {
  return (
    <div className={styles.otherDays}>
      <DayFilter />
      <DayList />
    </div>
  );
};

export default OtherDays;
