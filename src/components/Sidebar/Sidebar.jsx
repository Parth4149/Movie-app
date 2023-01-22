import { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'; // action creators

import styles from './styles';

import genreIcons from '../../assets/genres'; // OR  ../../assets/genres/index

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = () => {
  const theme = createTheme();

  const { data, isFetching } = useGetGenresQuery();

  const dispatch = useDispatch();

  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory); // read data from the store
  // console.log(genreIdOrCategoryName);
  return (
    <>
      <Link to="/" style={styles.imageLink}>
        <img
          style={styles.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link to="/" key={value} style={styles.links}>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                <img
                  style={styles.genreImages}
                  src={genreIcons[label.toLowerCase()]}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
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
            <Link to="/" key={id} style={styles.links}>
              <ListItem onClick={() => dispatch(selectGenreOrCategory(id))}>
                <ListItemIcon>
                  <img
                    style={styles.genreImages}
                    src={genreIcons[name.toLowerCase()]}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
