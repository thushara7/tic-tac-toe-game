import React from "react";
import Sqaure from "./Square";

const style = {
  border: "5px solid darkblue",
  borderRadius: "10px",
  width: "500px",
  height: "500px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: " repeat(3, 1fr) / repeat(3, 1fr)"
};
const Board = ({ squares, onClick }) => {
  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Sqaure key={i} value={square} onClick={() => onClick(i)}></Sqaure>
      ))}
    </div>
  );
};

export default Board;
