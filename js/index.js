// Your code goes here



const headerImg = document.querySelector(".intro img");
const mainTextContent = document.querySelectorAll(".text-content");
const destinationHeaders = document.querySelectorAll(".destination h4");


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


// wheel

// drag / drop

// load

// focus

// resize

// scroll

// select

