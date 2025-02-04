import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAlix from "./pages/HomeAlix";
import Projet from "./pages/Projet";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dev" element={<HomeAlix />} />
        <Route path="/dev/projet/:id" element={<Projet />} />
        <Route path="/dev/*" element={<HomeAlix />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
