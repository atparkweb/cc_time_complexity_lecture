class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }

  hasBeenVisited(row, col) {
    return !!this.board[row][col];
  }
}

class RobotPaths {
  constructor(size) {
    // initialize all of your options
    this.board = new Board(size);
    this.size = size;
  }

  solve() {
    // Robot starts at (0, 0)
    return this.move(0, 0);
  }

  move(row, col) {
    // Checks if we are at the end
    if (row === this.size - 1 && col === this.size - 1) {
      return 1;
    }

    // Checks if you are off the board or if you have already visited a piece
    if (
      !(row >= 0 && row < this.size && col >= 0 && col < this.size) ||
      this.board.hasBeenVisited(row, col)
    ) {
      return 0;
    }

    // Toggle the piece you are currently on
    this.board.togglePiece(row, col);

    const result =
      this.move(row, col + 1) +
      this.move(row, col - 1) +
      this.move(row + 1, col) +
      this.move(row - 1, col);

    // Return the board to its original state by toggling the piece back to its original state.
    // Why is this necessary?
    // It allows the algorithm to 'backtrack' from this position for subsequent recursive calls.
    this.board.togglePiece(row, col);
    return result;
  }
}

module.exports = { RobotPaths };

const board = [
  [ ],
  [ ],
  [ ],
]