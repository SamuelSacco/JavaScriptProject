import "./index.scss";
import Board from "./board";
import depthFirstSearch from "./algorithms/dfs"
import recursiveDFS from "./algorithms/recursive_dfs";

document.addEventListener("DOMContentLoaded", () => {
    let board = new Board();
    window.board = board
    window.depthFirstSearch = depthFirstSearch
    window.recursiveDFS = recursiveDFS
})