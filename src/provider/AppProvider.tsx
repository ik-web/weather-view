import { ReactNode, useState } from 'react';
import { AppContext, ThemeStyle } from '../context/AppContext';
import { scrollBlock } from '../functions/block-page-scroll';
import { changeCssVars } from '../model/changeCssVars';
import { storage } from '../model/storage';

interface Props {
  children: ReactNode,
}

export const AppProvider: React.FC<Props> = ({children, ...props}) => {
  const [isPopup, setPopupState] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeStyle>(
    storage.getItem('theme') || ThemeStyle.LIGHT
  );

  const setIsPopup = () => {
    setPopupState(!isPopup);
    scrollBlock();
  };

  const changeTheme = (theme: ThemeStyle) => {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeCssVars(theme);
  };

  return (
    <AppContext.Provider value={{
      isPopup,
      theme,
      setIsPopup,
      changeTheme
      }}
      {...props}
    >
      {children}
    </AppContext.Provider>
  );
};
