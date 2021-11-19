(function (){
    class Board {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.playing = false;
            this.game_over = false;
            this.bars = [];
        }
    }

    Board.prototype = {
        get elements(){
            var elements = this.bars;
            elements.push(ball);
            return elements;
        }
    }
})();

(function (){
    class BoardView {
        constructor(canvas, board){
            this.canvas = canvas;
            this.canvas.width = board.width;
            this.canvas.height = board.height;
            this.board = board;
            this.ctx = canvas.getContext("2d");
        }
    }
})();

window.addEventListener("load", main);

function main(){
    var board = new Board(800, 400);
    var canvas = document.getElementById('canvas');
    var BoardView = new BoardView(canvas, board);
}