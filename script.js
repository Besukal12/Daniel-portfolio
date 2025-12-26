// aos Animation
AOS.init({
    duration: 1000,  
    easing: 'ease-in-out',
    once: false,   
    mirror: false  
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

const cont = document.getElementById("cont")
const child1 = document.getElementById("child1")
const child2 = document.getElementById("child2")

cont.addEventListener("mouseenter", () => {
    child1.classList.remove('rotate')
    child2.classList.remove('rotate')
})

cont.addEventListener("mouseleave", () => {
    child1.classList.add('rotate')
    child2.classList.add('rotate')
})
