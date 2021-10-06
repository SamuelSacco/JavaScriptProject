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

        this.tileDiv.ondragstart = function (event) { 
            // sets position to be used later 
            event.dataTransfer.setData("pos", pos); 
        };

        this.tileDiv.ondragover = function (event) { 
            // prevents tile from "flying" back
            event.preventDefault() 
            // this.classList.add("wall")
            // this.type = "wall"


        };

        this.tileDiv.ondrop = function (event) { 
            // event.preventDefault(), 
            board.swap(
            event.dataTransfer.getData("pos")
            .split(",")
            .map(el => parseInt(el))
            , pos);
            
        };

        // this.tileDiv.onmousedown = function (event){
        //     // this.classList.add("wall")
        //     // this.setAttribute("draggable", true)
        //     // this.type = "wall"
            
        // }

        this.tileDiv.onclick = function (){
            console.log(this.classList.contains("wall"), pos, this)
            this.classList.add("wall")
            this.setAttribute("draggable", true)
        }

        // this.tileDiv.oncontextmenu = function (e){
        //     e.preventDefault()
        //     this.classList.add("wall")
        //     this.setAttribute("draggable", true)
        //     // this.type = "wall"
        // }

        let grid = document.getElementById("grid");
        grid.appendChild(this.tileDiv);
    }

    _rightclick(){
        console.log("gesghs")
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