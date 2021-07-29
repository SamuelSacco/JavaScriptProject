import animateSearch from "../animate";
import animate2 from "../animate";

const _recursiveDFS = (tile) => {
    // console.log(tile.pos)
    tile.visited = true // set that we've searched here already
    if (tile.type == "end") {
        // debugger
        return [[tile], [tile], true]; // at the end so just return path to self
    }

    let searchPath = [tile]
    let foundSolution;
    let childSearchPath;
    let correctPath;
    
    for (let neighbor of tile.neighbors) {
        if (neighbor.visited) continue;
        [childSearchPath, correctPath, foundSolution] = _recursiveDFS(neighbor) // get path from child
        searchPath = searchPath.concat(childSearchPath)
        if (foundSolution) {
            // debugger
            correctPath.unshift(tile);
            return [searchPath, correctPath, true] // we've found path so just return
        }
        searchPath.push(tile) // add the tile when we're back here and keep searching
    }
    // debugger
    return [searchPath, [], false]; // return the entire paths
}

const recursiveDFS = (tile) => {
    let searchPath;
    let foundSolution;
    let correctPath;

    [searchPath, correctPath, foundSolution] = _recursiveDFS(tile);
    animateSearch(searchPath, correctPath);
    return searchPath;
}

export default recursiveDFS;