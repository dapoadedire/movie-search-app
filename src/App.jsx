import "./App.css";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:movie_id" element={<MovieDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
