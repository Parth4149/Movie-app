import { Grid } from '@mui/material';
import { Movie } from '../index';

import './style.css';

const MovieList = ({ movies, numberOfMovies }) => {
  console.log('MovieList');

  return (
    <Grid container className="movies__container">
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
