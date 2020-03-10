//select all the boxes

const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");

const allBlocks = [redBlock, blueBlock, greenBlock, pinkBlock, grayBlock];


allBlocks.forEach((item) => {
    item.textContent = "\ud83d\ude80"
    item.style.fontSize =  "100px"
    item.style.background = "none";
})

//make a block go to the stop of the stack 

function climbToTop (event) {
    let blockHolder = document.querySelector(".blocks");
    blockHolder.prepend(event.target);
}


//make things move to the right
//on mousedown, start an animation, on mouseup, stop the animation

// let position = 0;

function rightOnHold (event) {
    let position = 0;
    var id = setInterval(increment, 100);

    function increment(){
            position = position - 0 + 10;
            event.target.style.left = position + "px";
    }   

    increment();

    event.target.addEventListener("mouseup", (event) => {
        clearInterval(id);
        position = 0;
        event.target.style.left = position + "px";
    });

    event.target.addEventListener("mouseout", (event) => {
        clearInterval(id); //if you don't do this you'll have problems
        position = 0;
        event.target.style.left = position + "px";
    });
}








//put into event listeners

for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].style.position = "relative";
    allBlocks[i].addEventListener("click", climbToTop);
    allBlocks[i].addEventListener("mousedown",rightOnHold);
}







