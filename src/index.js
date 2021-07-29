import "./index.scss";
import Board from "./board";
import depthFirstSearch from "./algorithms/dfs"
import recursiveDFS from "./algorithms/recursive_dfs";
import dijkstras from "./algorithms/dijkstras";
document.addEventListener("DOMContentLoaded", () => {
    let board = new Board();
    
    // TESTING
    window.board = board;
    window.depthFirstSearch = depthFirstSearch;
    window.recursiveDFS = recursiveDFS;
    window.dijkstras = dijkstras;
})