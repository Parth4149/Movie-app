import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlinedIcon, Remove, ArrowBack, FavoriteBorderOutlined } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { useGetMovieQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'; // action creators

import styles from './styles';
import './style.css';

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);

  const dispatch = useDispatch();

  const isMovieFavorited = true;
  const isMovieWatchlisted = true;

  const addToFavorites = () => {

  };
  const addToWatchlist = () => {

  };

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center">
        <Link to="/">Something has gone wrong - Go back</Link>
      </Box>
    );
  }
  // console.log(data);
  return (
    <Grid container sx={styles.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>

      <Grid item container direction="column" lg={8}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data.release_date.split('-')[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline} 1
        </Typography>
        <Grid item sx={styles.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography sx={{ ml: '10px' }} variant="subtitle1" gutterBottom>{data.vote_average.toFixed(1)} / 10</Typography>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime}min {data?.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}` : '' }
          </Typography>
        </Grid>

        <Grid item sx={styles.genresContainer}>
          {data?.genres.map((genre) => (
            <Link key={genre.id} to="/" className="links" onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
              <img style={styles.genreImages} src={genreIcons[genre.name.toLowerCase()]} height={30} />
              <Typography color="textPrimary" variant="subtitle1">{genre.name}</Typography>
            </Link>
          ))}
        </Grid>
        <Typography sx={{ mt: '10px' }} variant="h5" gutterBottom>
          Overview
        </Typography>
        <Typography sx={{ mb: '2rem' }}>
          {data?.overview}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>

        <Grid item container spacing={2}>
          {data && data.credits?.cast?.map((character, i) => (
            character.profile_path && (
            <Grid item xs={4} md={2} component={Link} to={`/actors/${character.id}`} sx={{ textDecoration: 'none' }} key={i}>
              <img className="castImage" src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`} alt={character.name} />
              <Typography color="textPrimary">{character?.name}</Typography>
              <Typography color="textSecondary">
                {character.character}
              </Typography>
            </Grid>
            )
          )).slice(0, 6)}
        </Grid>

        <Grid item container sx={{ mt: '2rem' }}>
          <div className="buttonsContainer1">
            <Grid item xs={12} sm={6} className="buttonsContainer" sx={styles.buttonsContainer}>
              <ButtonGroup size="medium" variant="outlined">
                <Button target="_blank" rel="noopener noreferrer" href={data?.homepage} endIcon={<Language />}>Website</Button>
                <Button target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon />}>IMDB</Button>
                <Button onClick={() => {}} href="#" endIcon={<Theaters />}>Trailer</Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} sm={6} className="buttonsContainer">
              <ButtonGroup size="medium" variant="outlined">
                <Button onClick={addToFavorites} endIcon={isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />}>
                  {isMovieFavorited ? 'Unfavorite' : 'Favorite'}
                </Button>
                <Button onClick={addToWatchlist} endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}>
                  Watchlist
                </Button>
                <Button endIcon={<ArrowBack />} sx={{ borderColor: 'primary.main' }}>
                  <Typography component={Link} to="/" color="inherit" variant="subtitle2" sx={{ textDecoration: 'none' }}>
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default MovieInformation;
