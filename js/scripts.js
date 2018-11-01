//Business Logic for game
function Game () {
  this.playerX = new Player("x"),
  this.player0 = new Player("0"),
  this.currentPlayer = null,
  this.board = new Board()
}

//Business Logic for Player
function Player (symbol) {
  this.playerSymbol = symbol;
}
//Busines Logic for Board
function Board () {
  this.boxes = [ [0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2] ];
}

// Board.prototype.createBoxes = function() {
//   // for(var i = 0; i < 9; i ++){
//   //
//   // }
//   // var boxes = { [0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0] [2,1], [2,2] };
//   // this.boxes.push(boxes);
// }
//Business Logic for Box
//User Interface Logic
