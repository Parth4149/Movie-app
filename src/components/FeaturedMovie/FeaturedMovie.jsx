import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css';

const FeaturedMovie = ({ movie }) => {
  if (!movie) return null;
  // console.log('Movie', movie.backdrop_path);
  return (
    <Box component={Link} to={`/movie/${movie.id}`} className="featuredCard__container">
      <Card className="card">
        <CardMedia
          className="card__media"
          // media="picture"
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie.title}
          title={movie.title}
        />
        <Box padding="20px">
          <CardContent className="card__content">
            <Typography variant="h5" gutterBottom>{movie.title}</Typography>
            <Typography variant="body2" gutterBottom>{movie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default FeaturedMovie;
