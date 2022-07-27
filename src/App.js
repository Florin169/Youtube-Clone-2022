import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import VideoPage from "./pages/VideoPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </div>
  );
};

export default App;
