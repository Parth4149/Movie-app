import { Typography, Box } from '@mui/material';
import styles from './styles';

import { Movie } from '..';

const RatedCards = ({ title, data}) => {
  console.log('Rated cards');
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Favorites</Typography>
      <Box display="flex" flexWrap="wrap" sx={styles.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
