import { Divider, List, ListItem, Typography, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'; // action creators

import styles from './styles';
import './style.css';

import genreIcons from '../../assets/genres'; // OR  ../../assets/genres/index

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = () => {
  const theme = useTheme();

  const { data, isFetching } = useGetGenresQuery();

  const dispatch = useDispatch();

  const genreImage = {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
  };

  return (
    <>
      <Link to="/" className="imageLink">
        <img
          className="logo_image"
          src={blueLogo}
          // src={theme.palette.mode === 'light' ? blueLogo : redLogo}
          alt="logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link to="/" key={value} style={styles.sidebar__links}>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                <img
                  style={genreImage}
                  src={genreIcons[label.toLowerCase()]}
                  height={30}
                />
              </ListItemIcon>
              {/* <ListItemText primary={label} /> */}
              <Typography color="textPrimary">{label}</Typography>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link to="/" key={id} style={styles.sidebar__links}>
              <ListItem onClick={() => dispatch(selectGenreOrCategory(id))}>
                <ListItemIcon>
                  <img
                    style={genreImage}
                    src={genreIcons[name.toLowerCase()]}
                    height={30}
                  />
                </ListItemIcon>
                <Typography color="textPrimary">{name}</Typography>
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
