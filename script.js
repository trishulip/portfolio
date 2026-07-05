/* =========================================
   TYPING ANIMATION
========================================= */

const words = [
  "Computer Science Engineering Student",
  "Web Developer",
  "Java Programmer",
  "Problem Solver",
  "Hackathon Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});

/* =========================================
   VANTA BACKGROUND
========================================= */

VANTA.NET({
    el: "#particles-js",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,

    minHeight: 200,
    minWidth: 200,

    scale: 1,
    scaleMobile: 1,

    color: 0x2563eb,
    backgroundColor: 0x0b0b0b,

    points: 12,
    maxDistance: 22,
    spacing: 18
});

/* =========================================
   ACTIVE NAVBAR
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

/* =========================================
   SCROLL TO TOP BUTTON
========================================= */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#2563eb;
color:white;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

/* =========================================
     VISITOR COUNT
========================================= */

function updateVisitorCount() {
    const el = document.getElementById('visitor-count');
    if (!el) return;

    fetch('https://api.countapi.xyz/hit/trishuli-portfolio/visits')
        .then(res => res.json())
        .then(data => {
            el.textContent = data.value;
        })
        .catch(() => {
            el.textContent = '—';
        });
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);
