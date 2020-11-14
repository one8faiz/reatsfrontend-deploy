import {
  red
} from '@material-ui/core/colors';
import {
  createMuiTheme
} from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7F23E2',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'white',
    },
  },
});

export default theme;