let nav = document.getElementById("header-nav");
let button = document.getElementById("header-button");
let navTop = nav.offsetTop;

document.addEventListener("scroll", () => {
    if (window.scrollY >= navTop) {
        nav.classList.add("active-header");
        nav.firstElementChild.classList.add("container");
        button.classList.remove("d-none");
    } else {
        nav.classList.remove("active-header");
        nav.firstElementChild.classList.remove("container");
        button.classList.add("d-none");

    }
});
let sliderButton = document.querySelectorAll(".slider-button button span");
let sliderClick = document.querySelector(".slider-button").children;
let carusel = document.querySelector(".carusel-img");
let widthImg = document.querySelector(".carusel-img img");
let count = 0;

function ButtonCount() {
    if (count > 0) {
        sliderButton[count - 1].innerHTML = "";
    }
    if (count >= carusel.children.length) {
        count = 0
    }
    carusel.style.transform = `translate(${-count * widthImg.clientWidth}px)`;
    sliderButton[count].innerHTML = count + 1;
    count++;
}

setInterval(() => {
    ButtonCount();
}, 2500);