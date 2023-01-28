import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const styles = {
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
    width: '100%',
  },
  image: {
    maxWidth: '240px',
    width: '70%',
  },
  sidebar__links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  bigText: {
    color: 'primary',
    fontSize: 30,
  },
};
export default styles;
