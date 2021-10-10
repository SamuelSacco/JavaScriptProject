let timeOut;

function animateCorrectPath(correctPath, idx = 0){
    
    if (idx === correctPath.length) {
        return;
    }

    timeOut = setTimeout(() => {
        const div = correctPath[idx].tileDiv;
        div.classList.add("correct");

        animateCorrectPath(correctPath, ++idx);
    }, 10)
}

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

export function stopAnimation(){
    clearTimeout(timeOut)
}
