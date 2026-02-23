document.addEventListener('DOMContentLoaded', () => {
    // Back to top smooth scroll functionality
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Carousel script logic for project page
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track && prevBtn && nextBtn) {
        let currentSlide = 0;
        const slides = Array.from(track.children);
        const slideCount = slides.length;

        const updateCarousel = () => {
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        };

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateCarousel();
        });

        // Keydown support for accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextBtn.click();
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            }
        });
    }

    // Optional: form field dynamic label interaction styling can go here if needed
    // However, CSS handles the styling nicely with normal HTML focus states.
});
