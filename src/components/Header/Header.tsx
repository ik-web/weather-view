import React, { useState } from 'react';
import styles from './Header.module.scss';
import Select from 'react-select';
import { HeaderIcons } from '../../img/icons/header/HeaderIcons';

const Header: React.FC = () => {
  const [ theme, setTheme ] = useState('light');
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const options = [
    { value: 'kyiv', label: 'Kyiv' },
    { value: 'vyshneve', label: 'Vyshneve' },
    { value: 'boyarka', label: 'Boyarka' }
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      marginLeft: '30px',
      width: '200px',
      backgroundColor: theme === 'dark' ? '#102036' : '#fff',
      border: '1px solid #919191',
      borderRadius: '10px',
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color:  theme === 'dark' ? '#d8d8d8' : '#d8d8d8',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#d8d8d8' : '#375885',
    }),
    menu: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#d8d8d8' : '#375885',
      backgroundColor: theme === 'dark' ? '#102036' : '#5da0ff', 
    }),
    option: (styles: any) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? '#102036' : '#5da0ff', 
    }),
  }

  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header__inner}>
          <div className={styles.header__logo}>
            <HeaderIcons id='header-logo' />
          </div>

          <h1 className={styles.header__title}>
            WeatherView
          </h1>

          <div className={styles.header__themeToggler} onClick={toggleTheme}>
            <HeaderIcons id='theme' />
          </div>

          <div className={styles.header__select}>
            <Select
              options={options}
              styles={colourStyles}
              placeholder='Choose a city...'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
