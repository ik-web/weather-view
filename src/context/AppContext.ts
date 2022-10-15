import { createContext } from "react";


interface Props {
  isPopup: boolean,
  setIsPopup: () => void,
  
  theme: ThemeStyle,
  changeTheme: (theme: ThemeStyle) => void
}

export enum ThemeStyle {
  LIGHT = 'light',
  DARK = 'dark',
}

export const AppContext = createContext<Props>({
  isPopup: false,
  setIsPopup: () => {},

  theme: ThemeStyle.LIGHT,
  changeTheme: () => {},
});
