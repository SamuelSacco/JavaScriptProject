import "./index.scss";
import Board from "./board";
import depthFirstSearch from "./algorithms/dfs"
import recursiveDFS from "./algorithms/recursive_dfs";
import dijkstras from "./algorithms/dijkstras";
// import {stopAnimation} from "./animate";

document.addEventListener("DOMContentLoaded", () => {
    let board = new Board();
    
    window.board = board;
    window.depthFirstSearch = depthFirstSearch;
    window.recursiveDFS = recursiveDFS;
    window.dijkstras = dijkstras;
    // window.stopAnimation = stopAnimation;

    const modal = document.getElementById("modal");
    const exitButton = document.getElementsByClassName("x-out");
    exitButton[0].addEventListener("click", closeModal);

    const nextButton = document.getElementsByClassName("next-button")[0];
    nextButton.addEventListener("click", nextModal);

    const prevButton = document.getElementsByClassName("prev-button")[0];
    prevButton.addEventListener("click", prevModal);

    // const currentModal = document.getElementsByClassName("modal-number")[0];
    let currentModal = 1;
    const moveDemo = document.getElementsByClassName("move-demo")[0];
    const wallDemo = document.getElementsByClassName("wall-demo")[0];
    const dropDemo = document.getElementsByClassName("drop-demo")[0];
    const searchDemo = document.getElementsByClassName("search-demo")[0];
    const demoTitle = document.getElementsByClassName("demo-title")[0];
    const demoDesc = document.getElementsByClassName("demo-desc")[0];

    function closeModal() {
        modal.style.display = "none"
    }

    function nextModal() {
        currentModal ++
        refreshModal()
    }

    function prevModal() {
        currentModal --
        refreshModal()
    }

    function refreshModal() {
        switch (currentModal) {
            case 1:
                demoTitle.innerHTML = "Getting Started"
                demoDesc.innerHTML = "Place the start and end squares anywhere on the grid"
                moveDemo.style.display = "block"
                prevButton.style.display = "none"
                wallDemo.style.display = "none"
                dropDemo.style.display = "none"
                searchDemo.style.display = "none"

                break;
            case 2:
                demoTitle.innerHTML = "Walls 101"
                demoDesc.innerHTML = "Paint and erase walls by clicking and dragging your mouse"
                prevButton.style.display = "block"
                wallDemo.style.display = "block"
                nextButton.style.display = "block"
                moveDemo.style.display = "none"
                dropDemo.style.display = "none"
                searchDemo.style.display = "none"

                break;
            case 3:
                demoTitle.innerHTML = "Choose your character"
                demoDesc.innerHTML = "Choose an algorithm and watch how it goes through your maze!"
                dropDemo.style.display = "block"
                searchDemo.style.display = "block"
                nextButton.style.display = "none"
                wallDemo.style.display = "none"

                break;
        }
    }

    refreshModal()
})