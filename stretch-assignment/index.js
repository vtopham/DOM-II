//select all the boxes

const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");

const allBlocks = [redBlock, blueBlock, greenBlock, pinkBlock, grayBlock];



//make a block go to the stop of the stack 

function climbToTop (event) {
    let blockHolder = document.querySelector(".blocks");
    blockHolder.prepend(event.target);
}


//make things move to the right
//on mousedown, start an animation, on mouseup, stop the animation

let position = 0;

function rightOnHold (event) {
    
    var id = setInterval(increment, 100);

    function increment(){
            position = position - 0 + 10;
            event.target.style.left = position + "px";
    }   

    increment();

    event.target.addEventListener("mouseup", (event) => {
        clearInterval(id);
    });
}

// function stopOnRelease (event) {
//     clearInterval(id);
//     console.log(id);
// }






//put into event listeners

for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].style.position = "relative";
    allBlocks[i].addEventListener("click", climbToTop);
    allBlocks[i].addEventListener("mousedown",rightOnHold);
}







