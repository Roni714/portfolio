const words = [
    "Full Stack Developer",
    "Java Developer",
    "AI Enthusiast",
    "Problem Solver"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

    currentWord = words[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
        currentWord.substring(0, j++);
    } else {
        document.getElementById("typing").textContent =
        currentWord.substring(0, j--);
    }

    if (j === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();

// Scroll Reveal

ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
});

// Hero Section
ScrollReveal().reveal('.home-content', {
    origin: 'left'
});

ScrollReveal().reveal('.home-img', {
    origin: 'right'
});

// About
ScrollReveal().reveal('.about', {
    origin: 'bottom'
});

// Skills
ScrollReveal().reveal('.skill-card', {
    origin: 'bottom',
    interval: 100
});

// Education
ScrollReveal().reveal('.timeline-box', {
    origin: 'left'
});

// Experience
ScrollReveal().reveal('.exp-card', {
    origin: 'right'
});

// Projects
ScrollReveal().reveal('.project-card', {
    origin: 'bottom',
    interval: 150
});

// Certifications
ScrollReveal().reveal('.cert-card', {
    origin: 'bottom',
    interval: 100
});

// Contact
ScrollReveal().reveal('.contact-box', {
    origin: 'bottom',
    interval: 100
});