import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/home/Home";
import List from "../src/pages/list/List";
import Hotel from "../src/pages/hotel/Hotel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
