import { createTheme } from '@mui/material/styles';

const theme = createTheme();
// console.log(theme.palette.mode);
const drawerWidth = 240;
const styles = {
  toolbar: {
    width: 'auto',
    height: '70px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px', // ml
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    '@media(minWidth: 600px)': { // [theme.breakpoints.up('sm')]
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    ':hover': {
      color: 'white !important',
      TextDecoder: 'none',
    },
  },
  hero: {
    width: '300px',
    marginTop: '50px',
    backgroundColor: theme.palette.warning.dark,
  },
};
export default styles;
