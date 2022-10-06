import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <h4 className={styles.footer__title}>
        WeatherView app
      </h4>

      <p>
        Performer is
        <a
          href='https://bit.ly/3CbRw25'
          target={`${'_'}blank`}
          className={styles.footer__link}
        >IK-web</a>
      </p>
    </div>
  );
};

export default Footer;
