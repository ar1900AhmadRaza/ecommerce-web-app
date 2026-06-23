// product.js - Updated for your new design

const filterButtons = document.querySelectorAll('.categories_link');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Update active class
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        productCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// More Info Toggle
document.querySelectorAll('.more-info-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const desc = btn.nextElementSibling;
        const isHidden = desc.style.display === 'none' || !desc.style.display;
        desc.style.display = isHidden ? 'block' : 'none';
        btn.textContent = isHidden ? 'Less Info' : 'More Info';
    });
});

// Fade in on load
window.addEventListener('load', () => {
    document.querySelectorAll('.product-card').forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});