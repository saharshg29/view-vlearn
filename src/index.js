import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
 // eslint-disable-next-line
import $ from "jquery";
 // eslint-disable-next-line
import Popper from "popper.js";
import { BrowserRouter as Browser } from "react-router-dom";


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Browser>
    <App />
    </Browser>
  </React.StrictMode>
);
