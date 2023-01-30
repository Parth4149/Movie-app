import { Grid } from '@mui/material';
import { Movie } from '../index';

import './style.css';

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const startFrom = excludeFirst ? 1 : 0;
  // console.log('MovieList', startFrom);
  return (
    <Grid container className="movies__container">
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
