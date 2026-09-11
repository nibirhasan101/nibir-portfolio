// ===== TYPING EFFECT =====

const text = "A Professional Web Developer";
const typingText = document.querySelector(".hero h2");

let index = 0;

function typeEffect() {

    if (index < text.length) {

        typingText.textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);

    }
}


// Clear original text before starting

typingText.textContent = "";

typeEffect();



// ===== SCROLL REVEAL ANIMATION =====

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach((section) => {

    observer.observe(section);

});



// ===== CONTACT BUTTON =====

const messageButton = document.querySelector(".contact-box button");

messageButton.addEventListener("click", function () {

    const email = "nibirhasa898@gmail.com";

    window.location.href =
        "mailto:" + email +
        "?subject=Portfolio Contact" +
        "&body=Hello Nibir, I visited your portfolio website.";

});



// ===== CURRENT YEAR =====

const footer = document.querySelector("footer p:last-child");

const currentYear = new Date().getFullYear();

footer.textContent =
    "© " + currentYear + " Nibir. All Rights Reserved.";


    // =========================================
// MOBILE HAMBURGER MENU
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Open / Close menu

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
