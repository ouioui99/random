import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/Router";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme/theme";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapsApiKey = process.env.React_APP_GOOGLE_MAP_API;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoadScript googleMapsApiKey={GoogleMapsApiKey}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </React.StrictMode>
  </LoadScript>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
