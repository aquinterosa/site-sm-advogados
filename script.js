// Mobile menu toggle and scroll effects
const btnMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(btnMenu && navLinks) {
    btnMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active'); // Close menu on mobile
    });
});