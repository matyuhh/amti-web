import { createTheme } from '@mui/material/styles';

import InterBoldTTF from './fonts/Inter-Bold.ttf';
import InterTTF from './fonts/Inter-Regular.ttf';
import InterMediumTTF from './fonts/Inter-Medium.ttf';
import colors from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.black,
    },
    secondary: {
      main: colors.white,
    },
    error: {
      main: colors.red,
    },
    background: {
      paper: colors.white,
    },
    text: {
      primary: colors.black,
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '29.05px',
    },
    h2: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '24.2px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '18px',
      letterSpacing: 0.15,
    },
    h4: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '18px',
      letterSpacing: 0.15,
    },
    h5: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
    },
    h6: {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '13px',
    },
    subtitle1: {
      fontSize: '11px',
      fontWeight: 500,
      lineHeight: '13.31px',
      letterSpacing: '0.15px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family:'Inter';
          font-weight: normal;
          font-style: normal;
          src: url(${InterTTF}) format('truetype');
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF';
        }
        @font-face {
          font-family:'Inter';
          font-weight: bold;
          font-style: normal;
          src: url(${InterBoldTTF}) format('truetype');
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF';
        }
        @font-face {
          font-family:'Inter';
          font-weight: 500;
          font-style: normal;
          src: url(${InterMediumTTF}) format('truetype');
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF';
        }
      `,
    },
  },
});

export default theme;
