import React, { useState } from "react";
import "./App.css";
import Board from "./Components/Board";
import ScoreBoard from "./Components/ScoreBoard";
import ResetBoard from './Components/ResetBoard';
import Footer from './Components/Footer';
function App() {
  const WIN_COND = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const handleBoxClick = (boardIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boardIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setXPlaying(!xPlaying);
  };
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_COND.length; i++) {
      const [x, y, z] = WIN_COND[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <>
    <div className="tic">
      Tic Tac Toe
    </div>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetBoard resetBoard={resetBoard} />
      <Footer />
    </>
  );
}

export default App;
