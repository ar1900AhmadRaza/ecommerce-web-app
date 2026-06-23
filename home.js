document.addEventListener('DOMContentLoaded', () => {
    let current = 0;
    const slides = document.querySelectorAll('.slide');

    if (slides.length === 0) return; // No slides, exit

    function nextSlide() {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }

    setInterval(nextSlide, 5000);
});
