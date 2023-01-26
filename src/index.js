import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Provider } from 'react-redux';

import App from './components/App';
import store from './app/store';
// https://redux-toolkit.js.org/tutorials/quick-start#what-youve-learned
export const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </ThemeProvider>,
  </Provider>,
);
