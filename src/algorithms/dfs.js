import animate from "../animate";

const depthFirstSearch = (tile) => {
    let stack = [tile];

    while (stack.length > 0) {
        let currentTile = stack.shift();
        // console.log(currentTile.pos)
        // debugger
        if (currentTile.type === "end") {

            // console.log("END FOUND!")
            // console.log(currentTile.searched)
            animate(currentTile.searched)
            return currentTile.searched;
        } 

        for (let tile of currentTile.neighbors){
            if (tile.visited) continue;
            tile.visited = true;
            tile.searched = currentTile.searched.slice(0);
            tile.searched.push(tile.pos);
            stack.unshift(tile);
        }
        // stack.unshift(...currentTile.neighbors.filter(tile => !tile.visited));
    }

    console.log("END NOT FOUND!")
}

export default depthFirstSearch;