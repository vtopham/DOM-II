// Your code goes here

// mouseover & mouseleave replaces text with random text 1, 2
const topNavLinks = document.querySelectorAll(".main-navigation a");

for (let i = 0; i < topNavLinks.length; i++) {
    topNavLinks[i].addEventListener("mouseover", (event) => {
        topNavLinks[i].textContent = "pick me!";
    });
}

const arrLinkNames = ["Home", "About Us", "Blog", "Contact", "NSA Secrets", "Cat Pics", "Summon Demon", "Billy Mayes, Here!", "Mom's Spaghetti", "Test Answers", "Spooky Skeletons", "You're Cancelled"];

for (let i = 0; i < topNavLinks.length; i++) {
    topNavLinks[i].addEventListener("mouseleave", (event) => {
        topNavLinks[i].textContent = arrLinkNames[Math.round(Math.random() * (arrLinkNames.length - 1))];
    });
}

//scroll randomly changes some colors 3
const arrColors = ["red", "orange", "yellow", "green", "blue", "purple"];

const destinationHeaders = document.querySelectorAll(".destination h4");

for (let i = 0; i < destinationHeaders.length; i++) {
    window.addEventListener("scroll", (event) => {
        destinationHeaders[i].style.color = arrColors[Math.round(Math.random() * (arrColors.length - 1))];
});
}


// keydown adds to the intro paragraph 4
let headerIntro = document.querySelector(".intro p");

document.addEventListener("keydown",(event) => {
    headerIntro.textContent += `${event.code}`;
});


// dblclick makes the image smaller 5
let allImages = document.querySelectorAll("img");

for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("dblclick", (event) => {
        allImages[i].style.width = "50%";
    });
}

//resize 6
window.addEventListener("resize", (event) => {
    alert("Are you sure you want to resize?");
});


//lots of clicks!

//button does something
const destinationBtn = document.querySelectorAll(".destination .btn");

for (let i = 0; i < destinationBtn.length; i++) { //7
    destinationBtn[i].addEventListener("click", (event) => {
        destinationBtn[i].style.border = "3px solid red";
        event.stopPropagation();
    });
}

//container does something but not when the button is pressed
const destinationContainer = document.querySelectorAll(".destination");

for (let i = 0; i < destinationContainer.length; i++) { // 8
    destinationContainer[i].addEventListener("click", function (event) {
        this.style.backgroundColor = "lightgray";
    })
}

//anything h2 turns pink when clicked

const allH2 = document.querySelectorAll("h2");

for (let i = 0; i < allH2.length; i++) { //9
    allH2[i].addEventListener("click", function (event) {
        this.style.color = "pink";
    });
}

//anything p gets small when clicked

const allP = document.querySelectorAll("p");

for (let i = 0; i < allP.length; i++) { //10
    allP[i].addEventListener("click", function (event) {
        this.style.fontSize = ".1rem";
    });
}


//kill default for a tag

const allA = document.querySelectorAll("a");

for (let i = 0; i < allA.length; i++) {
    allA[i].addEventListener("click", (event) => {
        event.preventDefault();
    });
}
