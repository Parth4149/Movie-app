import { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography, LinearProgress, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { useGetMoviesQuery } from '../../services/TMDB';

import { MovieList, Pagination } from '../index';

const Movies = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory); // read data from the store
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

  const lg = useMediaQuery(theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 16 : 18;
  // console.log('Movies');
  if (isFetching) { // for loading
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results?.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occurred.';

  return (
    <div>
      {data && <MovieList movies={data} numberOfMovies={numberOfMovies} />}
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
};

export default Movies;
