import Tile from "./tile";

export default class Board {
    constructor() {
        this.grid = []; // div
        this.start;
        this.target;
        this.setTiles();
    }

    setTiles() {
        for (let i = 0; i < 27; i++) {
            this.grid.push([]);
            
            for (let j = 0; j < 50; j++) {
                if (i === 12 && j === 9) {
                    
                    let start = new Tile(this, [i, j], "start");
                    start.tileDiv.classList.add("start")
                    start.tileDiv.setAttribute("draggable", "true")
                    start.type = "start"
                    this.grid[i].push(start);
                    
                    // console.log("SEARCHED", start.searched, "TYPE", start.type, "CHILDREN", start.children)
                } else if (i === 12 && j === 40) {
                    
                    let end = new Tile(this, [i, j], "end");
                    end.tileDiv.classList.add("end")
                    end.tileDiv.setAttribute("draggable", "true")
                    end.type = "end"
                    this.grid[i].push(end);
                    // console.log("SEARCHED", end.searched, "TYPE", end.type, "CHILDREN", end.children)
                    
                } else {
                    let tile = new Tile(this, [i, j], null);
                    tile.type = "normal"
                    this.grid[i].push(tile);
                    
                    // console.log("SEARCHED", tile.searched, "TYPE", tile.type, "CHILDREN", tile.children, tile.pos)
                }
            }
        }
        this.addNeighbors2()
        // this.addNeighbors()

        // console.log(this.grid[0][0])
    }
    
    tile(pos){
        const row = pos[0]
        const col = pos[1]
        return this.grid[row][col]
    }

    linkTiles(firstTile, secondTile) {
        if (firstTile.neighbors.includes(secondTile) || secondTile.neighbors.includes(firstTile)) return
        firstTile.neighbors.push(secondTile)
        secondTile.neighbors.push(firstTile)
    }
    
    addNeighbors() {
        for (let i = 0; i < 27; i++) {
            for (let j = 0; j < 50; j++) {
                const currentTile = this.grid[i][j]

                if (i > 0) {
                    const aboveNode = this.grid[i - 1][j]
                    this.linkTiles(currentTile, aboveNode)
                }
                if (j > 0) {
                    const leftNode = this.grid[i][j - 1]
                    this.linkTiles(currentTile, leftNode)
                }
            }
        }
    }

    validMove(pos) {
        const row = pos[0];
        const col = pos[1];
        const validRow = row >= 0 && row < 27;
        const validCol = col >= 0 && col < 50;
        return validRow && validCol;
    }

    addNeighbors2(){
        let change_row = 0;
        let change_col = 0;
        let new_row = 0;
        let new_col = 0;
        let right = [0, 1];
        let left = [0, -1];
        let up = [-1, 0];
        let down = [1, 0];
        let dirs = [up, right, down, left];

        for (let row = 0; row < 27; row++) {
            for (let col = 0; col < 50; col++) {

                for (let idx in dirs) {
                    let change = dirs[idx];
                    change_row = change[0];
                    change_col = change[1];
                    new_row = row + change_row;
                    new_col = col + change_col;
                    
                    if (!this.validMove([new_row, new_col])) continue;
                    let neighbor_tile = this.tile([new_row, new_col]);
                    this.tile([row, col]).neighbors.push(neighbor_tile);
                }
            }
        }
    }
}

