import { ReactNode, useState } from 'react';
import { ThemeContext, ThemeStyle } from '../context/ThemeContext';
import { changeCssVars } from '../model/changeCssVars';
import { storage } from '../model/storage';

interface Props {
  children: ReactNode,
}

export const ThemeProvider: React.FC<Props> = ({children, ...props}) => {
  const [theme, setTheme] = useState<ThemeStyle>(
    storage.getItem('theme') || ThemeStyle.LIGHT
  );

  const changeTheme = (theme: ThemeStyle) => {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeCssVars(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
