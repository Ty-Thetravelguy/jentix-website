// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open');
    });

    navLinks.addEventListener('click', event => {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('nav-open');
        }
    });
}

// Smooth scroll with small offset for sticky header
const header = document.querySelector('.site-header');

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight - 8;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Simple fake contact form handler
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (contactForm && formNote) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        formNote.textContent = 'Thank you. This demo form has captured your details locally. Connect it to your backend or email service to handle real submissions.';
        formNote.style.color = '#a5b4fc';

        contactForm.reset();
    });
}
