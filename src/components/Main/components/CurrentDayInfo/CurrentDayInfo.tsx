import React from 'react';
import CurrentDayInfoItem from './components/CurrentDayInfoItem';
import styles from './CurrentDayInfo.module.scss';

export interface InfoItem {
    icon: string,
    title: string,
    value: string
}

const CurrentDayInfo: React.FC = () => {
  const items: InfoItem[] = [
    { 
      icon: 'temp',
      title: 'Temperature',
      value: '20° - it feels like 17°'
    },
    { 
      icon: 'press',
      title: 'Pressure',
      value: 'Normal is 765 mm of mercury column'
    },
    { 
      icon: 'precipitation',
      title: 'Precipitation',
      value: 'No precipitation'
    },
    { 
      icon: 'wind',
      title: 'Wind',
      value: '3 m/s south-west - light wind'
    },
  ];

  return (
    <section className={styles.currentDayInfo}>
      <div className={styles.currentDayInfo__items}>
        {items.map(item => (
          <CurrentDayInfoItem item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default CurrentDayInfo;
