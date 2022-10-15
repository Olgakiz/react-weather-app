import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Kharkiv" />
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-source coded
      </a>{" "}
      by Olga
    </div>
    </div>
  );}