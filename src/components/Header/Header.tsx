import Select from 'react-select';
import { ThemeStyle } from '../../context/AppContext';
import { useTheme } from '../../hooks/useTheme';
import { HeaderIcons } from '../../img/icons/header/HeaderIcons';
import styles from './Header.module.scss';

const Header = () => {
  const {theme, changeTheme} = useTheme();
  
  const toggleTheme = () => {
    const newTheme = theme === ThemeStyle.LIGHT ? ThemeStyle.DARK : ThemeStyle.LIGHT;
    changeTheme(newTheme);
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
      backgroundColor: theme === ThemeStyle.DARK ? '#102036' : '#fff',
      border: '1px solid #919191',
      borderRadius: '10px',
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color:  theme === ThemeStyle.DARK ? '#d8d8d8' : '#d8d8d8',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === ThemeStyle.DARK ? '#d8d8d8' : '#375885',
    }),
    menu: (styles: any) => ({
      ...styles,
      color: theme === ThemeStyle.DARK ? '#d8d8d8' : '#375885',
      backgroundColor: theme === ThemeStyle.DARK ? '#102036' : '#5da0ff', 
    }),
    option: (styles: any) => ({
      ...styles,
      backgroundColor: theme === ThemeStyle.DARK ? '#102036' : '#5da0ff', 
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
