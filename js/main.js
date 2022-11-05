const mainNav = document.querySelector(".main-nav");
const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const navListLink = document.querySelectorAll(".nav-list-link");
const toTopBtn = document.querySelector(".to-top-btn");
const body = document.querySelector("body");

// navigation
hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
    hamburger.classList.toggle("active");
    body.classList.toggle("active");

});

navListLink.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active");
        hamburger.classList.remove("active");
        body.classList.remove("active");
        
    });
});
// ¨scroll to top button 
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTopBtn.classList.add("active");

    } else { toTopBtn.classList.remove("active")
};
});
