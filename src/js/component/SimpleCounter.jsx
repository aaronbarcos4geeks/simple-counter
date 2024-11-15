import React from "react";

const SimpleCounter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, "0").split("");
  return (
    <div className="d-flex justify-content-center bg-dark text-white py-4">
      <div className="px-2">
        <i className="fas fa-clock"></i>
      </div>
      {digits.map((digit, index) => (
        <div key={index} className="px-2 bg-secondary rounded mx-1">
          <h2 className="mb-0">{digit}</h2>
        </div>
      ))}
    </div>
  );
};

export default SimpleCounter;
