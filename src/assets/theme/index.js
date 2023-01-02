import { createTheme } from '@mui/material';
import 'src/global.css';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            background: '#888',
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    color: '#000000',
    fontWeight: '400',
    body1: {
      fontSize: '1rem',
      lineHeight: '150%',
      letterSpacing: '0.009375rem',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: '143%',
      letterSpacing: '0.010625rem',
    },
    body3: {
      fontSize: '0.75rem',
      lineHeight: '136%',
      letterSpacing: '0.011875rem',
    },
    body4: {
      fontSize: '0.625rem',
      lineHeight: '129%',
      letterSpacing: '0.01375rem',
    },
    footer: {
      fontSize: '0.5rem',
      lineHeight: '0.625rem',
      letterSpacing: '-1px',
    },
    title1: {
      fontWeight: '500',
      fontSize: '1.5rem',
      lineHeight: '211%',
      letterSpacing: '0.015625rem',
    },
    title2: {
      fontWeight: '500',
      fontSize: '1.25rem',
      lineHeight: '193%',
      letterSpacing: '0.0125rem',
    },
    subtitle1: {
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '175%',
      letterSpacing: '0.009375rem',
    },
    subtitle2: {
      fontSize: '0.875rem',
      lineHeight: '157%',
      letterSpacing: '0.00625rem',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: '166%',
      letterSpacing: '0.025rem',
    },
    overline: {
      fontSize: '0.75rem',
      lineHeight: '266%',
      letterSpacing: '0.0625rem',
      textTransform: 'uppercate',
    },
    h1: {
      fontWeight: '500',
      fontSize: '6rem',
      lineHeight: '116.7%',
      letterSpacing: '-0.09375rem',
    },
    h2: {
      fontWeight: '600',
      fontSize: '3.75rem',
      lineHeight: '120%',
      letterSpacing: '-0.03125rem',
    },
    h3: {
      fontWeight: '600',
      fontSize: '3rem',
      lineHeight: '116.7%',
    },
    h4: {
      fontWeight: '600',
      fontSize: '2rem',
      lineHeight: '123.5%',
      letterSpacing: '0.015625rem',
    },
    h5: {
      fontWeight: '600',
      fontSize: '1.5rem',
      lineHeight: '133.4%',
    },
    h6: {
      fontWeight: '600',
      fontSize: '1.25rem',
      lineHeight: '160%',
      letterSpacing: '0.009375rem',
    },
    h7: {
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '160%',
      letterSpacing: '0.009375rem',
    },
    buttonLarge: {
      fontWeight: '600',
      fontSize: '0.9375rem',
      lineHeight: '150%',
      letterSpacing: '0.009375rem',
    },
    buttonMedium: {
      fontWeight: '600',
      fontSize: '0.875rem',
      lineHeight: '150%',
      letterSpacing: '0.009375rem',
    },
    buttonSmall: {
      fontWeight: '600',
      fontSize: '0.8125rem',
      lineHeight: '150%',
      letterSpacing: '0.009375rem',
    },
    buttonXSmall: {
      fontWeight: '600',
      fontSize: '0.625rem',
      lineHeight: '150%',
      letterSpacing: '0.009375rem',
    },
  },
});
