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
        let grid = document.getElementById("grid");
        grid.appendChild(this.tileDiv);
    }
}