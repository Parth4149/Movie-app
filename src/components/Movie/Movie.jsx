import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './styles';

const Movie = ({ movie, i }) => {
  console.log('Movie');
  return (
    <Grid sx={styles.movie} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Typography sx={styles.title} variant="h5">{movie.title}</Typography>
    </Grid>
  );
};

export default Movie;
