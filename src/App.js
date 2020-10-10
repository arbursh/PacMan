import React, { useState } from "react";

import Header from "./components/Header";
import Board from "./components/Board";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Header score={score} />
      <Board setScore={setScore} /> //4:02
    </div>
  );
}

export default App;
