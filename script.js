// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinksContainer.classList.toggle("active");

});


// Close menu after click (mobile)

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinksContainer.classList.remove("active");

    });

});


// ==========================
// ACTIVE NAVIGATION LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


// ==========================
// REVEAL ANIMATION
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================
// HERO FADE-IN
// ==========================

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(40px)";

    setTimeout(() => {

        heroContent.style.transition = "all 1s ease";

        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";

    }, 200);

});


// ==========================
// ANIMATED COUNTERS
// ==========================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                if (target === 1000) {
                    counter.innerText = "1000+";
                }
                else if (target === 100) {
                    counter.innerText = "100%";
                }
                else if (target === 24) {
                    counter.innerText = "24/7";
                }
                else {
                    counter.innerText = target + "+";
                }

            }

        };

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    const statsSection = document.getElementById("stats");

    const sectionTop = statsSection.offsetTop - 400;

    if (window.scrollY > sectionTop && !counterStarted) {

        startCounters();

        counterStarted = true;

    }

});


// ==========================
// PARALLAX EFFECT ON HERO
// ==========================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY = offset * 0.3 + "px";

});


// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});
/*const sectionsForNavbar = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sectionsForNavbar.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navbar.classList.remove(
        "home",
        "about",
        "domains",
        "stats",
        "testimonials",
        "contact"
    );

    if (currentSection) {
        navbar.classList.add(currentSection);
    }

});*/