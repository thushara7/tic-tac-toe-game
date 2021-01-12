import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";
const styles = {
  width: "200px",
  margin: "20px auto"
};
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumbet] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  console.log("history", history);
  //calculate winner on each render
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // if user clicks on occupied cell or if game is won just return
    if (winner || squares[i]) return;
    //put an X or O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumbet(timeInHistory.length);
    setXIsNext(!xIsNext);
  };
  const jumpTo = step => {
    setStepNumbet(step);
    setXIsNext(step % 2 === 0);
  };
  const renderMoves = () => {
    return history.map((_step, move) => {
      const destination = move ? "Go to Move" + move : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  };
  return (
    <div>
      <Board squares={history[stepNumber]} onClick={handleClick}></Board>
      <div style={styles}>
        {winner ? "Winner" + winner : "Next Player" + (xIsNext ? "X" : "O")}
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
