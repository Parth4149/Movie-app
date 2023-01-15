// https://stackoverflow.com/questions/69263383/what-is-the-alternative-of-makestyles-for-material-ui-v-5
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
// console.log(theme);
const styles = {
  root: {
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    marginLeft: '240px', // ml
    padding: '2em',
    // padding: '6em 2em 2em',
  },
  toolkit: {
    height: '70px',
  },
  hero: {
    width: '200px',
    marginTop: '50px',
    backgroundColor: theme.palette.warning.main,
  },
  parth: {
    color: 'deeppink',
    backgroundColor: 'lightblue',
  }
};

export default styles;
