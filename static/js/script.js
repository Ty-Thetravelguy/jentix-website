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

// EmailJS contact form handler
// TODO: Replace these with your actual EmailJS credentials from https://dashboard.emailjs.com
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');
const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

if (contactForm && formNote && submitBtn) {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);

    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formNote.textContent = '';
        formNote.className = 'form-note';

        // Send email via EmailJS
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
            .then(() => {
                // Success
                formNote.textContent = 'Thank you! Your message has been sent. We\'ll be in touch soon.';
                formNote.classList.add('form-note-success');
                contactForm.reset();
            })
            .catch((error) => {
                // Error
                console.error('EmailJS error:', error);
                formNote.textContent = 'Sorry, something went wrong. Please try again or email us directly.';
                formNote.classList.add('form-note-error');
            })
            .finally(() => {
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send message';
            });
    });
}
