
import './App.css';
import Board from './Board';
import { useState } from 'react';

function App(){
  
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [reversi, setReverse] = useState(true);

  function handlePlay(nextSquares, i) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  
  const moves = history.map((squares, move, step) => {
    let description;
    if(move > 0){
      //const row = Math.floor(step.lastMove / 3) + 1;
      //const col = (step.lastMove % 3) + 1;
      //description = `Go to move (${row}, ${col})`;
      description = 'Go to move ' + move;
    }
    else{
      description = 'Go to game start';
    }
    
  
    if(move === currentMove){
      return (
        <li key={move}>
          <div>You are at move {move}.</div>
        </li>
      );
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const rev = () => {
    setReverse(!reversi);
  };

  if(!reversi){
    moves.reverse();
  }

  const reverseButton = <button onClick={() => rev()}>{reversi ? "Sort in Ascending Order" : "Sort in Descending Order"}</button>
  return (
    <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{reverseButton}</ol>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
