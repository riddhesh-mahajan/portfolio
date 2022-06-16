import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import palette from './palette';
import shadows, { customShadows } from './shadows';
import shape from './shape';
import typography from './typography';
import * as React from 'react';


ThemeConfig.propTypes = {
  children: PropTypes.node
};

export const ThemeContext = React.createContext();

export default function ThemeConfig({ children }) {
  const [isLight, setIsLight] = React.useState(true)

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
      shape,
      typography,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: customShadows.light
    }),
    [isLight]
  );

  const theme = createTheme(themeOptions);

  // theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeContext.Provider value={{ isLight, setIsLight }}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
