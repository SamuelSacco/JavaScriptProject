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
## recursiveDFS
The depth-first search algorithm is used to traverse or search data structures such as trees and graphs. I use it to traverse the tiles. Before backtracking, the algorithm starts at the root node and explores as far as possible down each "branch".

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

## animateSearch
Once the recursion completes and the end node is found I utilize CSS classes to show the user the path their algorithm found
```js
export default function animateSearch(searchtiles, correctPath, idx = 0){
    if (idx === searchtiles.length){
        animateCorrectPath(correctPath);
        return;
    }

    timeOut = setTimeout(() => {
        const div = searchtiles[idx].tileDiv;
        div.classList.add("visited");

        animateSearch(searchtiles, correctPath, ++idx);
    }, 10)
}
```
## clearTimeout 
allows users to stop the visualization. For example if the user hits clear search or RESET while the animateSearch function is running this code snippet will stop said animation
```js
export function stopAnimation(){
    clearTimeout(timeOut)
}
```

# Architecture and Technology
* JavaScript
* HTML
* CSS

# Implemenation and Timeline
* logic for algorithms (Day 1)
* logic for placing start and end nodes (Day 2)
* logic for CSS and for visualiztion (Day 3)
* logic for CSS for visualiztion (Day 4)
* logic for "painting" walls (Day 5)
