import React, { useState } from "react";
import "./App.style.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./App/Page/Game/Game";
import Login from "./App/Page/Login/Login";
import { Score } from "./App/Page/Score/Score";

export const GameContext = React.createContext("");

function App() {
  const [name, setName] = useState("");
  const [result, setResult] = useState(0);

  return (
    <BrowserRouter>
      <GameContext.Provider value={{ name, setName, result, setResult }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/game" element={<Game />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </GameContext.Provider>
    </BrowserRouter>
  );
}
export default App;
