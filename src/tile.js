export default class Tile {
    constructor(board, pos) {
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

        // this.tileDiv.ondragstart = function (event) { 
            // sets position to be used later 
            // console.log(pos)
            // event.dataTransfer.setData("pos", pos);
        // };

        // this.tileDiv.ondragover = function (event) { 
        //     event.preventDefault()
        //     // console.log(event.originalEvent) 
        //     this.classList.add("wall")
        //     this.setAttribute("draggable", true)
        // };

        // this.tileDiv.ondrop = function (event) { 
        //     board.swap(
        //     event.dataTransfer.getData("pos")
        //     .split(",")
        //     .map(el => parseInt(el))
        //     , pos);
        // };

        // this.tileDiv.onmousedown = function (event){
        //     // this.classList.add("wall")
        //     // this.setAttribute("draggable", true)
        //     // this.type = "wall"
            
        // }

        // this.tileDiv.onpointerdown = function (){
        //     console.log(this.classList.contains("wall"), pos, this)
        //     this.classList.add("wall")
        //     this.setAttribute("draggable", true)
        // }

        // this.tileDiv.oncontextmenu = function (e){
        //     e.preventDefault()
        //     this.classList.add("wall")
        //     this.setAttribute("draggable", true)
        //     // this.type = "wall"
        // }

        let grid = document.getElementById("grid");
        grid.appendChild(this.tileDiv);
        this.clickListeners();
    }

    clickListeners(){

        const handleClick = event => {
            console.log(this)
            if (this.type === "normal"){
                this.tileDiv.classList.add("wall")
                this.tileDiv.setAttribute("draggable", true)
                this.type = "wall"
                
            } else if (this.type === "wall"){
                this.tileDiv.classList.remove("wall")
                this.tileDiv.setAttribute("draggable", true)
                this.type = "normal"
            }
        }

        const handleDragStart = event => {
            event.dataTransfer.setData("pos", this.pos);
            this.board.draggedTile = this
            // console.log(this.board)
            // console.log(this.board.draggedTile)
        }

        const handleDragEnter = event => {
            console.log(this.board.draggedTile)
            if (this.board.draggedTile.type === "wall"){
                this.tileDiv.classList.remove("normal")
                this.tileDiv.classList.add("wall")
                this.tileDiv.setAttribute("draggable", true)
            } else if (this.board.draggedTile.type === "normal"){
                this.tileDiv.classList.remove("wall")
                this.tileDiv.classList.add("noraml")
                this.tileDiv.setAttribute("draggable", true)
            }
        }

        const handleDragOver = event => {
            event.preventDefault()
            if (this.type === "normal"){
                // this.tileDiv.classList.remove("normal")
                // this.tileDiv.classList.add("wall")
                // this.tileDiv.setAttribute("draggable", true)
            }
        }

        const handleDrop = event => {
            this.board.swap(
            event.dataTransfer.getData("pos")
            .split(",")
            .map(el => parseInt(el))
            , this.pos);
        }

        // const handleDragEnter = e => {
        //     e.preventDefault();

        //     if (board.algorithmStarted) return;
        //     // Prevent making new walls while dragging root or tile nodes
        //     if (["root", "target"].includes(board.draggedTileType)) return;
        //     board.root.reset();

        //     let tilePos = e.target.id.split("-");
        //     let x = tilePos[0];
        //     let y = tilePos[1];
        //     let tile = board.grid[x][y];

        //     if (e.shiftKey && this.board.selectedAlgorithm === "dijkstra") {
        //         if (tile.node.type === "weight") {
        //             tile.tileEle.classList.remove("wall");
        //             tile.tileEle.classList.remove("weight");
        //             tile.node.type = null;
        //             tile.node.weight = Infinity;
        //             return;
        //         } else if (tile.node.type === "wall" || tile.node.type == null) {
        //             tile.tileEle.classList.remove("wall");
        //             tile.tileEle.classList.add("weight");
        //             tile.node.type = "weight";
        //             return;
        //         }
        //     }

        //     if (tile.node.type === "wall") {
        //         tile.tileEle.classList.remove("wall");
        //         tile.tileEle.classList.remove("weight");
        //         tile.node.type = null;
        //         tile.node.weight = Infinity;
        //     } else if (tile.node.type === null || tile.node.type === "weight") {
        //         tile.tileEle.classList.remove("weight");
        //         tile.tileEle.classList.add("wall");
        //         tile.node.type = "wall";
        //         tile.node.weight = Infinity;
        //     }
        // }
        this.tileDiv.addEventListener("mousedown", handleClick)
        this.tileDiv.addEventListener("dragstart", handleDragStart)
        this.tileDiv.addEventListener("dragenter", handleDragEnter)
        this.tileDiv.addEventListener("dragover", handleDragOver)
        this.tileDiv.addEventListener("drop", handleDrop)

        // this.tileDiv.addEventListener("dragenter", handleDragEnter)


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