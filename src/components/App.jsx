import { CssBaseline } from '@mui/material';
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
    <div style={styles.root}>
      <CssBaseline />
      <NavBar theme={theme} />

      <main style={styles.content}>
        {/* <Button variant="contained" sx={styles.hero}>Hello World</Button> */}
        <div style={styles.toolbar}>
          <Routes>
            <Route path="/" element={<Movies theme={theme} />} />
            <Route path="/approved" element={<Movies theme={theme} />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
