gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector(".horizontal-scroll-section");
const container = document.querySelector(".scroll-container");

// Horizontal Scroll Animation
gsap.to(container, {
    x: () => -(container.scrollWidth - window.innerWidth), // Move until the right edge meets the screen edge
    ease: "none",
    scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.5,
        end: "+=2000",
        // markers: true // helpful for debugging, remove for production
    }
});
