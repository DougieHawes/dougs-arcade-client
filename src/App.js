import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/public/Home";

import "./display/style/style.scss";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Doug's Arcade</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
