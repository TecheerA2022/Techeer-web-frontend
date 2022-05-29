import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Member from "./pages/Member";
import Board from "./pages/Board";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <NaviBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/member" element={<Member />} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
