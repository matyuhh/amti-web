import { createTheme } from '@mui/material/styles';

import InterBoldTTF from './fonts/Inter-Bold.ttf';
import InterTTF from './fonts/Inter-Regular.ttf';
import InterMediumTTF from './fonts/Inter-Medium.ttf';
import colors from './colors';

const theme = createTheme({
  palette: {
    mode: 'light',
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
      secondary: colors.white,
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: '43.60px',
    },
    h2: {
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '36.75px',
    },
    h3: {
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '27px',
      letterSpacing: 0.15,
    },
    h4: {
      fontWeight: 400,
      fontSize: '21px',
      lineHeight: '27px',
      letterSpacing: 0.15,
    },
    h5: {
      fontWeight: 400,
      fontSize: '21px',
      lineHeight: '27px',
    },
    h6: {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '19px',
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          boxSizing: 'border-box',
          height: '45px',
          minHeight: '45px',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '45px',
          height: '45px',
          '@media (min-width: 600px)': {
            minHeight: '45px',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          width: '100%',
          minWidth: 320,
          bgcolor: 'background.paper',
          padding: '0px 32px',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          padding: '8px 0px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          minWidth: '320px',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          padding: '8px 0px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'text.primary',
        },
      },
    },
  },
});

export default theme;
