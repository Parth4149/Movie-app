import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import App from "./components/App";
import store from "./app/store";

import ToggleColorMode from "./utils/ToggleColorMode";
// https://redux-toolkit.js.org/tutorials/quick-start#what-youve-learned

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToggleColorMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorMode>
  </Provider>
);
