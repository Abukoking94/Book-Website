import React from "react";

import { Route, Routes, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route Path="/" element={<Home />} />
          <Route Path="/contact" element={<Contact />} />
          <Route Path="/about" element={<About />} />
          <Route Path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
