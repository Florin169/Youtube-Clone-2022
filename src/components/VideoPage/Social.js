import React from "react";

const Social = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <span className="text-2xl">{icon}</span>
      <h1>{text}</h1>
    </div>
  );
};

export default Social;
