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
  this.box = new Box();
}

//Business Logic for Box
function Box () {
  this.coordinate = [],
  this.marked = false
}

Box.prototype.createCoordinate = function() {
 for (var i = 0; i < 3; i++){
   for(var j = 0; j < 3; j++){
     this.coordinate.push([i, j]);
   }
 }
}
//User Interface Logic
