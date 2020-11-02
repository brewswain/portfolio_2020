import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./theme.scss";
import "./media-queries/1650px.scss";
import "./media-queries/1360px.scss";
import "./media-queries/1050px.scss";
import "./media-queries/450px.scss";
import "./media-queries/320px.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
