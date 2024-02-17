function Square({ value, onSquareClick, highlight }) {
    const style = highlight ? { backgroundColor: "#ff0" } : null;
    return <button className="square" onClick={onSquareClick} style={style}>
            {value}
          </button>;
  }

export default Square;