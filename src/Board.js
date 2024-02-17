
import Square from './Square';
import calculateWinner from './calculateWinner';
function Board({xIsNext, squares, onPlay}) {
    
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if(squares.includes(null)) {
      status = "Next player: " + (xIsNext ? "X" : "O");
    } else {
      status = "Game Over, tie";
    }
  
    function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      onPlay(nextSquares);
    }
      let board = [];
      let size = 3;
      for(let row=0;row<size;row++){
        let r = [];
        for(let i=0;i<size;i++){
          const index = i * size + row;
          //const isWinningSquare = winningLine?.includes(index);
          r.push(<Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)}/>);
        }
        board.push(<div className="board-row">
          {r}
          </div>);
      }
    
    return (
      <>
      <div className="status">
        {status}
      </div>
        
        {board}
      </>
    );
  
  }
export default Board;