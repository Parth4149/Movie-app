import { Grid } from '@mui/material';
import styles from './styles';
import { Movie } from '../index';

const MovieList = ({ movies }) => {
  console.log('MovieList');

  return (
    <Grid container sx={styles.moviesContainer}>
      {(movies) && (
        movies.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))
      )}
    </Grid>
  );
};

export default MovieList;
