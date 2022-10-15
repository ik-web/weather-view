import { createContext } from "react";


interface Props {
  theme: ThemeStyle,
  changeTheme: (theme: ThemeStyle) => void
}

export enum ThemeStyle {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = createContext<Props>({
  theme: ThemeStyle.LIGHT,
  changeTheme: () => {},
});
