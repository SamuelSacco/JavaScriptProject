import animateSearch from "../animate";
import animate2 from "../animate";

const _recursiveDFS = (tile) => {

    if (tile.type == "end") {

        return [[tile], [tile], true]; // at the end so just return path to self
    }
    tile.visited = true // set that we've searched here already
    
    let searchPath = [tile]
    let foundSolution;
    let childSearchPath;
    let correctPath;
    
    for (let neighbor of tile.neighbors) {
        if (neighbor.visited || neighbor.tileDiv.classList.contains("wall")) continue;
        [childSearchPath, correctPath, foundSolution] = _recursiveDFS(neighbor) // get path from child
        searchPath = searchPath.concat(childSearchPath)
        if (foundSolution) {

            correctPath.unshift(tile);
            return [searchPath, correctPath, true] // we've found path so just return
        }
        searchPath.push(tile) // add the tile when we're back here and keep searching
    }

    return [searchPath, [], false]; // return the entire paths
}

const recursiveDFS = (tile) => {
    let searchPath;
    let foundSolution;
    let correctPath;
    [searchPath, correctPath, foundSolution] = _recursiveDFS(tile);
    if (correctPath.length === 0){
        alert("YOU WIN!.. (clear something and try again)")
        // return;
    }
    animateSearch(searchPath, correctPath);
    return searchPath;
}

export default recursiveDFS;