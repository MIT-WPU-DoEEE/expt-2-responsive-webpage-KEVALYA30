// Smooth Scrolling with Fade-in Animation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Apply fade-in effect when section appears
        section.classList.add("fade-in");
        setTimeout(() => {
            section.classList.remove("fade-in");
        }, 1000);
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "#000000";
        nav.style.boxShadow = "0px 4px 10px rgba(255, 255, 255, 0.1)";
    } else {
        nav.style.background = "rgba(0, 0, 0, 0.7)";
        nav.style.boxShadow = "none";
    }
});

// Typewriter Effect for Hero Section
const typeText = document.querySelector(".hero p");
const words = ["AI & ML Enthusiast", "Web Developer", "Researcher"];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < words[wordIndex].length) {
        typeText.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typeText.innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

// Button Click Animation
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 300);
    });
});

// Fade-in Effect on Page Load
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
    });

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
                section.style.transition = "all 1s ease-in-out";
            }
        });
    }

    revealSections();
    window.addEventListener("scroll", revealSections);
});
