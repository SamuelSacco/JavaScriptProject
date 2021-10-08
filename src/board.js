import Tile from "./tile";

export default class Board {
    constructor() {
        this.grid = []; // div
        this.start;
        this.target;
        this.draggedTileType = null;
        this.setTiles();
    }

    setTiles() {
        for (let i = 0; i < 27; i++) {
            this.grid.push([]);
            
            for (let j = 0; j < 50; j++) {
                if (i === 12 && j === 9) {
                    
                    let start = new Tile(this, [i, j]);
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
                }
                else if (
                    (i === 9 && j === 8) ||
                    (i === 9 && j === 9) ||
                    (i === 9 && j === 10) ||
                    (i === 15 && j === 8) ||
                    (i === 15 && j === 9) ||
                    (i === 15 && j === 10) ||
                    (i === 9 && j === 39) ||
                    (i === 9 && j === 40) ||
                    (i === 9 && j === 41) ||
                    (i === 15 && j === 39) ||
                    (i === 15 && j === 40) ||
                    (i === 15 && j === 41)
                ) {
                    let wall = new Tile(this, [i, j]);
                    wall.tileDiv.classList.add("wall")
                    wall.tileDiv.setAttribute("draggable", "true")
                    wall.type = "wall"
                    this.grid[i].push(wall);

                } else {
                    let tile = new Tile(this, [i, j]);
                    tile.type = "normal"
                    this.grid[i].push(tile);
                    tile.tileDiv.setAttribute("draggable", "true") 
                    // console.log("SEARCHED", tile.searched, "TYPE", tile.type, "CHILDREN", tile.children, tile.pos)
                }
            }
        }
        this.addNeighbors()
        // this.addNeighbors()

        // console.log(this.grid[0][0])
    }
    
    tile(pos){
        const row = pos[0]
        const col = pos[1]

        return this.grid[row][col]
    }

    // setTile(tile, pos){
    //     const row = pos[0]
    //     const col = pos[1]

    //     this.grid[row][col] = tile
    //     console.log(this.grid[row][col])
    // }

    validMove(pos) {
        const row = pos[0];
        const col = pos[1];
        const validRow = row >= 0 && row < 27;
        const validCol = col >= 0 && col < 50;
        return validRow && validCol 
        // && this.tile([row, col]).type !== "wall";
        // && !this.tile([row, col]).tileDiv.classList.contains("wall")
        // console.log(this.tile([12, 9]).tileDiv.classList.contains("wall"))

    }

    addNeighbors(){
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

    clear() {
        for (let i = 0; i < 27; i++) {
            for (let j = 0; j < 50; j++) {
                const currentTile = this.grid[i][j]
                const cls = ["visited", "correct", "wall"];
                currentTile.visited = false;
                currentTile.tileDiv.classList.remove(...cls);
            }
        }
    }

    // swap(firstPos, secondPos) {
    //     // console.log(firstPos)
    //     // console.log(secondPos)

    //     let temp = this.tile(firstPos)
    //     let temp2 = this.tile(secondPos)
    //     // console.log(temp, temp2)
        
        
    //     console.log("CLASSLIST", temp.tileDiv.classList)
        
    //     if (temp.tileDiv.classList.contains("start")) {
    //         console.log(true)
    //         temp.tileDiv.classList.remove("start")
    //         temp.tileDiv.setAttribute("draggable", false)
    //         temp.type = "normal"
    //         temp2.tileDiv.classList.add("start")
    //         temp2.tileDiv.setAttribute("draggable", true)
    //         temp2.type = "start"
    //         this.setTile(temp, secondPos)
    //         this.setTile(temp2, firstPos)
    //     }

    //     // let tempDivClass = temp.tileDiv.classList
    //     // let tempDiv2Class  = temp2.tileDiv.classList
    //     // temp2.tileDiv.classList = tempDivClass
    //     // temp2.tileDiv.classList = tempDiv2Class
    // }

    swap(firstPos, secondPos) {

        if (this.tile(firstPos).tileDiv.classList.contains("start")){
            this.tile(firstPos).tileDiv.classList.remove("start")
            this.tile(firstPos).tileDiv.classList.add("normal")
            this.tile(firstPos).type = "normal"
            // this.tile(firstPos).tileDiv.setAttribute("draggable", false)
    
            this.tile(secondPos).tileDiv.classList.add("start")
            this.tile(secondPos).type = "start"
            this.tile(secondPos).tileDiv.classList.remove("normal")
            this.tile(secondPos).tileDiv.setAttribute("draggable", true)
        }

        if (this.tile(firstPos).tileDiv.classList.contains("end")) {
            this.tile(firstPos).tileDiv.classList.remove("end")
            // this.tile(firstPos).tileDiv.setAttribute("draggable", false)
            this.tile(firstPos).type = "normal"

            this.tile(secondPos).tileDiv.classList.add("end")
            this.tile(secondPos).type = "end"
            this.tile(secondPos).tileDiv.setAttribute("draggable", true)

        }

        // let temp = this.tile(firstPos)
        // let temp2 = this.tile(secondPos)
        // console.log(temp, temp.tileDiv)
        // if (temp.tileDiv.classList.contains("start")){
        //     this.tile(firstPos).type = "normal"
        //     this.tile(firstPos).tileDiv.classList.remove("start")

        // }
        // this.setTile(temp, secondPos)
        // this.setTile(temp2, firstPos)
        // let firstClassList = temp.tileDiv.classList
        // let secondClassList = temp2.tileDiv.classList
        
        // console.log(firstClassList, secondClassList)
        // temp.tileDiv.classList = secondClassList
        // temp2.tileDiv.classList = firstClassList
        // console.log(firstPos, temp, secondPos, temp2)

        // temp2.tileDiv.classList = temp.tileDiv.classList
        // temp.type = "normal"
        // temp.tileDiv.classList = temp2.tileDiv.classList
        // temp2.type = "start"

        // if (temp.tileDiv.classList.contains("start")) {
        //     temp.tileDiv.classList.remove("start")
        //     // temp.tileDiv.setAttribute("draggable", false)
        //     temp.type = "normal"
        //     temp2.tileDiv.classList.add("start")
        //     temp2.tileDiv.setAttribute("draggable", true)
        //     temp2.type = "start"
        //     this.setTile(temp, secondPos)
        //     this.setTile(temp2, firstPos)
        // }
    }
}

