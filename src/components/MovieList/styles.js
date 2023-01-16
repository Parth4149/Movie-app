import { createTheme } from '@mui/material/styles';
// import { theme } from '../../index';
const theme = createTheme();
// console.log(theme);
const styles = {
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
};

export default styles;
