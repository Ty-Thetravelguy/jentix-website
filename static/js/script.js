// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

// Shrink header logo on scroll
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll with offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.site-header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            nav.classList.remove('nav-open');
        }
    });
});

// EmailJS form handling
emailjs.init('OlYiaTtacsyZJBGuy');

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const note = document.getElementById('form-note');

    btn.disabled = true;
    btn.textContent = 'Sending...';
    note.textContent = '';

    emailjs.sendForm('service_f71as1r', 'template_xdidmsf', this)
        .then(() => {
            note.textContent = 'Thanks! We will be in touch soon.';
            note.style.color = 'var(--success)';
            this.reset();
        })
        .catch((error) => {
            note.textContent = 'Something went wrong. Please try again or email us directly.';
            note.style.color = 'var(--danger)';
            console.error('EmailJS error:', error);
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = 'Send message';
        });
});
