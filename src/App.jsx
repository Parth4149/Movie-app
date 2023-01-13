import './App.css';
import { CssBaseline } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => (
  <div>
    <CssBaseline />
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/movies" element={<h2>Movies</h2>} />
        <Route path="/movies/:id" element={<h2>Movie Information</h2>} />
        <Route path="/actors/:id" element={<h2>Actors</h2>} />
        <Route path="/profile/:id" element={<h2>Profile</h2>} />
      </Routes>
    </main>
  </div>
);

export default App;
