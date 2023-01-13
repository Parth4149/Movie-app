import '../App.css';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

// import useStyles from './styles';
import Button from '@mui/material/Button';
// import { Button } from '@mui/material';

import { NavBar, Movies, Actors, Profile, MovieInformation } from './index';

const App = () => {
  // const classes = useStyles();
  const classes = 0;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <Button variant="contained">Hello World</Button>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Routes>
            <Route path="/" element={<h2>Home</h2>} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
