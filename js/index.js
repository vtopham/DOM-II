// Your code goes here



const headerImg = document.querySelector(".intro img");
const mainTextContent = document.querySelectorAll(".text-content");
const destinationHeaders = document.querySelectorAll(".destination h4");


// mouseover & mouseleave replaces text with random text
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

//scroll randomly changes some colors
const arrColors = ["red", "orange", "yellow", "green", "blue", "purple"];

for (let i = 0; i < destinationHeaders.length; i++) {
    window.addEventListener("scroll", (event) => {
        destinationHeaders[i].style.color = arrColors[Math.round(Math.random() * (arrColors.length - 1))];
});
}


// keydown

let headerIntro = document.querySelector(".intro p");

document.addEventListener("keydown",(event) => {
    headerIntro.textContent += `${event.code}`;
});

// wheel

// drag / drop

// load

// focus

// resize

// scroll

// select

// dblclick