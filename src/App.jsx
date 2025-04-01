import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div className="main-content">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
