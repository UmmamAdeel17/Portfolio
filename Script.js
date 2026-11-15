// const menuToggle = document.querySelector(".menu-toggle");
// const navLinks = document.querySelector(".nav-links");

// if (menuToggle && navLinks) {
//     menuToggle.addEventListener("click", () => {
//         navLinks.classList.toggle("active");

//         const icon = menuToggle.querySelector("i");

//         if (navLinks.classList.contains("active")) {
//             icon.classList.replace("fa-bars", "fa-xmark");
//         } else {
//             icon.classList.replace("fa-xmark", "fa-bars");
//         }
//     });
// }

// document.querySelectorAll(".nav-links a").forEach(link => {
//     link.addEventListener("click", () => {
//         navLinks.classList.remove("active");

//         const icon = menuToggle?.querySelector("i");

//         if (icon) {
//             icon.classList.replace("fa-xmark", "fa-bars");
//         }
//     });
// });


// const revealElements = document.querySelectorAll(
//     ".section-heading, .about-content, .skill-card, .service-card, .project-card, .timeline-item, .testimonial-card, .contact-content"
// );

// const revealObserver = new IntersectionObserver(
//     (entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("show");
//             }
//         });
//     },
//     {
//         threshold:
//         5
//     }
// );

// revealElements.forEach((element) => {
//     element.classList.add("reveal");
//     revealObserver.observe(element);
// });


// const skillCards = document.querySelectorAll(".skill-card");

// skillCards.forEach((card, index) => {
//     card.style.transitionDelay = `${index * 0.08}s`;
// });


// const serviceCards = document.querySelectorAll(".service-card");

// serviceCards.forEach((card, index) => {
//     card.style.transitionDelay = `${index * 0.08}s`;
// });


// const projectCards = document.querySelectorAll(".project-card");

// projectCards.forEach((card, index) => {
//     card.style.transitionDelay = `${index * 0.1}s`;
// });


// const hero = document.querySelector(".hero");
// const heroImage = document.querySelector(".hero-image");
// const decorationOne = document.querySelector(".decoration-one");
// const decorationTwo = document.querySelector(".decoration-two");

// if (hero && window.innerWidth > 768) {

//     hero.addEventListener("mousemove", (event) => {

//         const rect = hero.getBoundingClientRect();

//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;

//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;

//         const moveX = (x - centerX) / 35;
//         const moveY = (y - centerY) / 35;

//         if (heroImage) {
//             heroImage.style.transform =
//                 `translate(${moveX}px, ${moveY}px)`;
//         }

//         if (decorationOne) {
//             decorationOne.style.transform =
//                 `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`;
//         }

//         if (decorationTwo) {
//             decorationTwo.style.transform =
//                 `translate(${moveX * 2}px, ${moveY * 2}px)`;
//         }
//     });

//     hero.addEventListener("mouseleave", () => {

//         if (heroImage) {
//             heroImage.style.transform = "translate(0, 0)";
//         }

//         if (decorationOne) {
//             decorationOne.style.transform = "translate(0, 0)";
//         }

//         if (decorationTwo) {
//             decorationTwo.style.transform = "translate(0, 0)";
//         }
//     });
// }


// const counters = document.querySelectorAll(".stat-box h4");

// const counterObserver = new IntersectionObserver(
//     (entries, observer) => {

//         entries.forEach((entry) => {

//             if (!entry.isIntersecting) return;

//             const counter = entry.target;
//             const originalText = counter.innerText;
//             const number = parseInt(originalText);

//             if (isNaN(number)) return;

//             let current = 0;
//             const suffix = originalText.replace(number, "");

//             const updateCounter = () => {

//                 const increment = Math.max(1, Math.ceil(number / 40));

//                 current += increment;

//                 if (current >= number) {
//                     counter.innerText = number + suffix;
//                     return;
//                 }

//                 counter.innerText = current + suffix;

//                 requestAnimationFrame(updateCounter);
//             };

//             updateCounter();

//             observer.unobserve(counter);
//         });

//     },
//     {
//         threshold: 0.8
//     }
// );

// counters.forEach((counter) => {
//     counterObserver.observe(counter);
// });


// const sections = document.querySelectorAll("section");
// const navItems = document.querySelectorAll(".nav-links a");

// window.addEventListener("scroll", () => {

//     let currentSection = "";

//     sections.forEach((section) => {

//         const sectionTop = section.offsetTop - 180;
//         const sectionBottom =
//             sectionTop + section.offsetHeight;

//         if (
//             window.scrollY >= sectionTop &&
//             window.scrollY < sectionBottom
//         ) {
//             currentSection = section.id;
//         }
//     });

//     navItems.forEach((link) => {

//         link.classList.remove("active");

//         if (
//             link.getAttribute("href") ===
//             `#${currentSection}`
//         ) {
//             link.classList.add("active");
//         }
//     });
// });


// window.addEventListener("scroll", () => {

//     const header = document.querySelector(".header");

//     if (window.scrollY > 80) {
//         header.classList.add("scrolled");
//     } else {
//         header.classList.remove("scrolled");
//     }
// });


// const contactForm = document.querySelector(".contact-form");

// if (contactForm) {

//     contactForm.addEventListener("submit", (event) => {

//         event.preventDefault();

//         alert("Thank you! Your message has been received.");

//         contactForm.reset();
//     });
// }