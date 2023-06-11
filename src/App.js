import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Parwati076/react-weather-app/upload/main">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="">
          Parwati Ahirwar
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="">
          Copy @2023
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
