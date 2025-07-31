import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/public/Home";
import Game from "./components/routes/public/Game";

import "./display/style/style.scss";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Doug's Arcade</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:title" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
