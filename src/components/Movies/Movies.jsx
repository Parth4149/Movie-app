import { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography, LinearProgress, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../index';

const Movies = () => {
  const { data, error, isFetching, isLoading } = useGetMoviesQuery();
  // console.log(data);
  if (isFetching) { // for loading
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }
  if (error) return 'An error has occurred.';
  // if (isLoading) {
  //   return (
  //     <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
  //       <LinearProgress color="secondary" />
  //       <LinearProgress color="success" />
  //     </Stack>
  //   );
  // }
  return (
    <div>
      {(data) && <MovieList movies={data.results} />}
    </div>
  );
};

export default Movies;
