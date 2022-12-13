class Board {
  constructor(size) {
    let arr = new Array(size);
    this.array = [];
    for(let i=0; i<size; i++) {
      this.array.push(arr);
    }
  }
}

class Piece {
  pieceType = "";
}

class PieceX extends Piece {
  constructor () {
    super.pieceType = 'x';
  }
}

class Player {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
    this.isWinner = false;
    this.stats = {};
  }
}

class TicTacToeGame {
  constructor() {
    this.board = null;
    this.boardSize = null;
    this.players = {};
  }

  reset() {
    this.board = null;
    this.boardSize = null;
    this.players = null;
  }

  createBoard(size) {
    this.board = new Board(size);
    this.boardSize = size;
  }

  createPlayer(name, icon) {
    let player = new Player(name, icon);
    this.players[player.name] = player;
  }

  getWinner() {

  }

  move(player, x, y) {
    //set isWinner to true after making a move, if applicable
    if(this.players[player]) {
      let playerIcon = this.players[player.name]?.icon;
      this.board[x][y] = icon;
      isWinner(player, x, y);
    }
  }

  isWinner(player, row, column) {
    //check for row
    let rowMatch = true, columnMatch = true, diagonalMatch = true, reverseDiagonalMatch = true;
    for(let i=column-1; i< this.boardSize; i++) {
      if(player.icon !== this.board[row][i]) {
        rowMatch = false;
        break;
      }
    }
    //check for column
    for (let i = column; i < this.boardSize; i++) {
      if (player.icon !== this.board[i][column]) {
        columnMatch = false;
        break;
      }
    }
    //check for diagonal
    for (let i = row-1, j=column-1; i < this.boardSize; i++) {
      if (player.icon !== this.board[i][column]) {
        columnMatch = false;
        break;
      }
    }
    //check for reverse diagonal

    return result;
  }

}