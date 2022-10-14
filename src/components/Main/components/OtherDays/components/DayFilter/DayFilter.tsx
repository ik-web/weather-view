import React from 'react';
import { TButton } from '../../../../../../react-app-env';
import styles from './DayFilter.module.scss';

const DayFilter: React.FC = () => {
  const buttons: TButton[] = [
    {
      id: 1,
      name: 'Week'
    },
    {
      id: 2,
      name: '10 days'
    },
    {
      id: 3,
      name: 'Month'
    },
  ];

  return (
    <div className={styles.filter}>
      {buttons.map(button => (
        <button
          className={styles.filter__btn + ' ' + styles.filter__btn_active}
          key={button.id}
        >
          {button.name}
        </button>
      ))}

      <button className={`${styles.filter__btn} ${styles.filter__btn_cancel}`}>
        Cancel
      </button>
    </div>
  );
};

export default DayFilter;
