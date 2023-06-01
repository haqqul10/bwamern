import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/properties/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
    </div>
  );
}

export default App;
