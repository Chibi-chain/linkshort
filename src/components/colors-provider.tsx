import React, { createContext, useContext } from 'react';

export const colors = {
   primary: '#FA4A0C',
   white100: '#F2F2F2',
   white200: '#F5F5F8',
   white300: '#FFFFFF',
   gray: '#BABABA',
   lightGray: '#ededed',
   black: '#000000',
};

export const DEFAULT = {
   baseSpace: 4,
   colors,
};

export const ThemeContext = createContext(DEFAULT);
export const ThemeProvider: React.FC<any> = ({ children }) => {
   return (
      <ThemeContext.Provider value={DEFAULT}>{children}</ThemeContext.Provider>
   );
};
export const useTheme = () => useContext(ThemeContext);