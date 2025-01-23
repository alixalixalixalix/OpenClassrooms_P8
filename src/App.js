import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAlix from "./pages/HomeAlix";
import Projet from "./pages/Projet";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeAlix />} />
        <Route path="/projet/:id" element={<Projet />} />
        <Route path="/*" element={<HomeAlix />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
