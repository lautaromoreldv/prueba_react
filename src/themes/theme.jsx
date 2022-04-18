import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Lato',
      'san-serif'
    ].join(','),
    body1:{
      fontFamily: 'Lato',
    }, 
    body2:{
      fontFamily: 'Lato'
    },
    p:{
      fontFamily: 'Lato'
    }
  },
  palette: {
    primary: {
      main: '#97B9A0',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f27573',
      contrastText: '#fff'
    }
  },
});



theme = responsiveFontSizes(theme);

export default theme;
