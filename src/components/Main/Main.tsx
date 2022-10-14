import React from 'react';
import CurrentDay from './components/CurrentDay/CurrentDay';
import CurrentDayInfo from './components/CurrentDayInfo/CurrentDayInfo';
import OtherDays from './components/OtherDays/OtherDays';
import styles from './Main.module.scss';

interface Props {
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Main: React.FC<Props> = ({ setIsPopup }) => {
  return (
    <div className='container'>
      <main className={styles.main}>
        <div className={styles.main__topBlock}>
          <CurrentDay />
          <CurrentDayInfo />
        </div>

        <div className={styles.main__bottomBlock}>
          <OtherDays  setIsPopup={setIsPopup} />
        </div>
      </main>
    </div>
  );
};

export default Main;
