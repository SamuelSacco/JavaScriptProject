# Maze Builder
https://samuelsacco.github.io/MazeBuilder/

![2021-10-10 17 00 06](https://user-images.githubusercontent.com/76980320/136849446-548881c3-d921-4fe9-a1d4-788f0f2b065a.gif)

Maze Builder will allow users to create their own unique mazes and watch different algorithms solve them. A cathartic and educational experience, the user can re position the start and end nodes to figure out which algorithm is faster. Paint, search, erase repeat. 

<!-- # Wireframe
<img width="1024" alt="Screen Shot 2021-07-26 at 9 48 21 AM" src="https://user-images.githubusercontent.com/76980320/127000984-8f6bad5d-65b9-4f32-8b74-44e582e984d4.png"> -->

# Functionality and MVP
* Select different algorithms
* "Search" starts the algorithm visualizer
* "Reset" resets everything
* "Clear walls" gets rid of any obstacles
* "Clear path" reverts visited tiles to their default state
* Change start and end tiles to see the difference

# Code Snippets
* recursiveDFS
```js
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
```

* setTimeout allows users to visualize the path the selected algorithm took to find the end tile
* clearTimeout allows users to stop the visualization

# Architecture and Technology
* JavaScript
* HTML
* CSS

# Implemenation and Timeline
* logic for algorithms (Day 1)
* logic for placing start and end nodes (Day 2)
* D3 for visualiztion (Day 3)
* D3 for visualiztion (Day 4)
* Clean up bugs (Day 5)
