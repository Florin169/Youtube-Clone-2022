import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Videos from "../components/Videos/Videos";

const Home = () => {
  return (
    <div className="flex items-start">
      <Sidebar />
      <Videos />
    </div>
  );
};

export default Home;
