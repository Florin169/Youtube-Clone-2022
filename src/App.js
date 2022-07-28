import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/features/videosSlice";
import NavMobile from "./components/Navbar/NavMobile";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userCred) => {
      dispatch(getUser(userCred));
    });
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <NavMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
      </Routes>
    </div>
  );
};

export default App;
