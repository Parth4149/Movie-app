import '../App.css';
import { CssBaseline, Button } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import styles from './styles';
import { NavBar, Movies, Actors, Profile, MovieInformation } from './index';

const theme = createTheme();

const App = () => {
  // const classes = useStyles();
  console.log('App');
  // console.log(JSON.stringify(theme));
  return (
    <div className="root">
      <CssBaseline />
      <NavBar theme={theme} />

      <main style={styles.content}>
        <Button variant="contained" sx={styles.hero}>Hello World</Button>
        <div style={styles.toolbar}>
          <h2 style={styles.parth}>This is Parth</h2>
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
