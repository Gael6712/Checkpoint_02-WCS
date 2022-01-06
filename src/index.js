import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GameContextProvider from "./Context/GameContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <Router>
        <App />
      </Router>
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
