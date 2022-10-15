import { ThemeStyle } from "../context/ThemeContext";

export const changeCssVars = (theme: ThemeStyle) => {
  const root = document.querySelector(':root') as HTMLElement;
    
  const rootVars = [
    'color',
    'color-component-bg',
    'color-content-bg',
    'color-header-bg',
    'color-main-title',
    'color-footer-bg',
    'footer-link-hover',
    'color-btn-bg',
    'color-btn-bg-active',
    'color-btn',
    'color-btn-active',
    'color-day-bg',
    'color-popup-btn-bg',
    'color-popup-btn-active-bg',
    'color-popup-cross-active',
    'shadow'
  ];

  rootVars.forEach(rootVar => {
    root.style.setProperty(
      `--${rootVar}-default`,
      `var(--${rootVar}-${theme})`
    );
  });
};
