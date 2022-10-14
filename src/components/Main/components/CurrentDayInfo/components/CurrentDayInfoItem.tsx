import React from 'react';
import { InfoIcons } from '../../../../../img/icons/info/InfoIcons';
import { InfoItem } from '../../../../../react-app-env';
import styles from './CurrentDayInfoItem.module.scss';

interface Props {
  item: InfoItem;
}

const CurrentDayInfoItem: React.FC<Props> = ({ item }) => {
  const { icon, title, value } = item;
  return (
    <div className={styles.infoItem}>
      <div className={styles.infoItem__icon}>
        <InfoIcons id={icon} />
      </div>

      <div className={styles.infoItem__title}>
        {title}
      </div>

      <div className={styles.infoItem__value}>
        {value}
      </div>
    </div>
  );
};

export default CurrentDayInfoItem;
