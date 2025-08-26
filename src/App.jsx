import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home.jsx";
import KoleksiPage from "./pages/Koleksi.jsx";
import GameDetailsPage from "./pages/GameDetailsPage.jsx";
import Akun from "./pages/Akun.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/koleksi" element={<KoleksiPage />} />
            <Route path="/koleksi/:gameId" element={<GameDetailsPage />} />
            <Route path="/akun" element={<Akun />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;