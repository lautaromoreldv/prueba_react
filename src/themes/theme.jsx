import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto'
  },
  palette: {
    primary: {
      main: '#97B9A0',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f27573',
      contrastText: '#fff',
    },
  }
});

export default theme;
