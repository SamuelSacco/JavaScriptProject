// export default function animate(array, idx = 0){
//     if (idx === array.length){
//         return;
//     }

//     setTimeout(() => {
//         const step = array[idx];
//         const id = `${step[0]}-${step[1]}`;
//         const div = document.getElementById(id);
//         div.classList.add("visited");

//         animate(array, ++idx)
//     }, 10)
// }
let timeOut;

function animateCorrectPath(correctPath, idx = 0){
    
    if (idx === correctPath.length) {
        return;
    }

    setTimeout(() => {
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
