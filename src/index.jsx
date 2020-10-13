import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./constants/mainTheme";
import { BaseStyles } from "./components/ui/BaseStyles/BaseStyles";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/paper-css/paper.min.css";
import "../node_modules/normalize.css/normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <BaseStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
