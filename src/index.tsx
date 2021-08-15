import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import ClientApp from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ClientApp />
  </React.StrictMode>,
  document.getElementById("root")
);
