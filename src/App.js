import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";

function App() {
  return (
    <div className="App bg-white">
      <header className="App-header container bg-danger text-light">
        <h3 className = 'display-3 '>PomPom Time Manager</h3>
      </header>
      <div className="container">
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
