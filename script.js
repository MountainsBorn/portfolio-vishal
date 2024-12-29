// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 300);
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// Typed.js initialization
new Typed('.typed', {
    strings: ['Web Developer', 'UI/UX Designer', 'Full Stack Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
});

// Navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// Project filters
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from('.hero .subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5
});

gsap.from('.hero .title', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.8
});

gsap.from('.hero .description', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.1
});

gsap.from('.hero .cta-buttons', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.4
});

// Scroll animations
gsap.utils.toArray('.skill-item').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8
    });
});

gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('.submit-btn');
    
    // Change button state
    submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    try {
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Success state
        submitBtn.innerHTML = 'Sent Successfully <i class="fas fa-check"></i>';
        submitBtn.style.background = 'var(--success-color)';
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            submitBtn.style.background = 'var(--primary-color)';
            submitBtn.disabled = false;
        }, 3000);
    } catch (error) {
        // Error state
        submitBtn.innerHTML = 'Error Sending <i class="fas fa-times"></i>';
        submitBtn.style.background = 'var(--error-color)';
        
        setTimeout(() => {
            submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            submitBtn.style.background = 'var(--primary-color)';
            submitBtn.disabled = false;
        }, 3000);
    }
});