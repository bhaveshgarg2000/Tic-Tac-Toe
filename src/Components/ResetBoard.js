import React from "react";
import "./ResetBoard.css";
const ResetBoard = ({ resetBoard }) => {
  return (
    <button className="reset-btn" onClick={resetBoard}>
      Reset
    </button>
  );
};

export default ResetBoard;
