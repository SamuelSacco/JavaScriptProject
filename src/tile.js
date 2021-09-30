export default class Tile {
    constructor(board, pos, type) {
        this.board = board;
        this.pos = pos;
        // this.parent = null;
        // this.children = [];
        this.neighbors = [];
        this.searched = [];
        this.visited = false;
        this.tileDiv = document.createElement("div");
        this.tileDiv.id = `${pos[0]}-${pos[1]}`;
        this.tileDiv.classList.add('tile');
        this.tileDiv.ondragstart = function (event) { 
            event.dataTransfer.setData("pos", pos); 
        };
        this.tileDiv.ondragover = function (event) { 
            event.preventDefault() 
        };
        this.tileDiv.ondrop = function (event) { 
            event.preventDefault(), 
            board
            .swap(event.dataTransfer.getData("pos")
            .split(",")
            .map(el => parseInt(el)), pos); 
        };

        let grid = document.getElementById("grid");
        grid.appendChild(this.tileDiv);
    }

    // _drag(event) {
    //     console.log(event);
    //     event.dataTransfer.setData("pos", pos);
    //     console.log(event.dataTransfer.getData("pos"))
    // }

    // _dragOver(event) {
    //     event.preventDefault()
    // }

    // _drop(event) {
    //     console.log(event);
    //     event.preventDefault();
    //     console.log(event.dataTransfer.getData("pos"));
    //     board.swap(event.dataTransfer.getData("pos").split(",").map(el => parseInt(el)), this.pos);
    // }
}