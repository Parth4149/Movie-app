import { createTheme } from '@mui/material/styles';
// import { styled } from '@mui/material/styles';
const theme = createTheme();

const styles = {
  movie: {
    padding: '10px',
  },
  title: {
    color: theme.palette.text.primary ,
    textOverflow: 'ellipsis',
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
  // links: {
  //   textAlign: 'center',
  //   fontWeight: 'bolder',
  //   [theme.breakpoints.up('xs')]: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //   },
  //   ':hover': {
  //     cursor: 'pointer',
  //     textDecoration: 'none',
  //     boxShadow: '0px 0px 0px 14px gray',
  //   },
  // },
  // image: {
  //   borderRadius: '20px',
  //   height: '300px',
  //   marginBottom: '10px',
  //   '&:hover': {
  //     transform: 'scale(1.05)',
  //   },
  // },
};

export default styles;
