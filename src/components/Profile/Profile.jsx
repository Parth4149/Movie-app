import { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth'; // (state) => state.user;

const Profile = () => {
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();

    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">My Profile</Typography>
        <Button onClick={logout} color="inherit">
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {favoriteMovies.length
        ? <Typography variant="h5">Add favorites or watch-list some movies to see them here! </Typography>
        : (
          <Box>
            Favorites Movies
          </Box>
        )}
    </Box>
  );
};

export default Profile;
