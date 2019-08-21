import { createMuiTheme } from '@material-ui/core';

export default function theme() {
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        main: '#0091da',
        light: '#63cbff',
        dark: '#006fa7',
      },
      secondary: {
        main: '#00338d',
        light: '#0058f3',
        dark: '#00276b',
      },
      error: {
        main: '#bb1f4a',
      },
    },
  });
}
