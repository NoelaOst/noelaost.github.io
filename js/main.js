const mainNav = document.querySelector(".main-nav");
const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const navListLink = document.querySelectorAll(".nav-list-link");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
    hamburger.classList.toggle("active");
});

navListLink.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active");
        hamburger.classList.remove("active");
    });
});