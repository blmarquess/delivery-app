import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '##036B52',
    },
    secondary: {
      main: '##2FC18C',
    },
    tertiary: {
      main: '#421981',
    },
    quaternary: {
      main: '#056CF9',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 0,
  },
  props: {
    MuiButton: {
      variant: 'contained',
      disableRipple: true,
      color: 'primary',
    },
    MuiTextField: {
      variant: 'outlined',
      InputLabelProps: {
        shrink: true,
      },
    },
    MuiPaper: {
      elevation: 0,
    },
  },
});

export default theme;
