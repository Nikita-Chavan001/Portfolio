// Smooth Scroll to About Section
function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// Parallax Effect on Scroll (Only for About Section)
window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    document.querySelector(".about-section").style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Theme Toggle Fix
// Function to Initialize Particles.js with Correct Theme Colors
function loadParticles() {
    const isLightMode = document.body.classList.contains("light-mode");

    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 100 },
            "color": { "value": "#ff0077" }, // Keep pink dots
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "move": { "speed": 2 },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": isLightMode ? "#000000" : "#ffffff", // Black in Light Mode, White in Dark Mode
                "opacity": 0.4,
                "width": 1
            }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }
            }
        }
    });
}

// Run Particles.js on Page Load
document.addEventListener("DOMContentLoaded", function () {
    loadParticles(); // Ensures particles load immediately

    // Theme Toggle Functionality
    document.getElementById("themeSwitch").addEventListener("change", function() {
        document.body.classList.toggle("light-mode");
        loadParticles(); // Reload particles when theme changes
    });
});

// Function to Show Sections on Scroll with Slide Animation
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");

    function revealSection() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealSection);
    revealSection(); // Run on load in case already in view
});

// Function to Show Sections on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden-section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});


document.getElementById("toggle-projects").addEventListener("click", function () {
    const moreProjects = document.getElementById("more-projects");

    if (moreProjects.classList.contains("hidden")) {
        moreProjects.classList.remove("hidden");
        this.textContent = "View Less";

        // Smoothly scroll to the expanded section
        setTimeout(() => {
            moreProjects.scrollIntoView({ behavior: "smooth" });
        }, 300);
    } else {
        moreProjects.classList.add("hidden");
        this.textContent = "View More";
    }
});

