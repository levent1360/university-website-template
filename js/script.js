// ==========================================
// MODERN UNIVERSITY WEBSITE - JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // NAVBAR & TOP-BAR SCROLL EFFECT
    // ==========================================
    const navbar = document.querySelector('.navbar');
    const topBar = document.querySelector('.top-bar');
    const scrollThreshold = 100;

    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;

        // Hide/show both top-bar and navbar together
        if (scrollTop > scrollThreshold) {
            if (topBar) topBar.classList.add('scrolled');
            navbar.classList.add('scrolled');
        } else {
            if (topBar) topBar.classList.remove('scrolled');
            navbar.classList.remove('scrolled');
        }
    });

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================
    // COUNTER ANIMATION FOR STATISTICS
    // ==========================================
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        let count = 0;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count).toLocaleString();
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        updateCount();
    };

    // Intersection Observer for counter animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });

    // ==========================================
    // FADE IN ANIMATION ON SCROLL
    // ==========================================
    const fadeElements = document.querySelectorAll('.fade-in-up');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeObserver.observe(element);
    });

    // ==========================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // CONTACT FORM VALIDATION & SUBMISSION
    // ==========================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation
            if (!name || !email || !subject || !message) {
                showAlert('Lütfen tüm alanları doldurun!', 'danger');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showAlert('Geçerli bir e-posta adresi girin!', 'danger');
                return;
            }

            // Simulate form submission
            showAlert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
            contactForm.reset();
        });
    }

    // ==========================================
    // ALERT HELPER FUNCTION
    // ==========================================
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.role = 'alert';
        alertDiv.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

        const container = contactForm.parentElement;
        container.insertBefore(alertDiv, contactForm);

        // Auto dismiss after 5 seconds
        setTimeout(() => {
            alertDiv.classList.remove('show');
            setTimeout(() => alertDiv.remove(), 150);
        }, 5000);
    }

    // ==========================================
    // FACULTY FILTER (for faculty-members.html)
    // ==========================================
    const facultyFilter = document.getElementById('facultyFilter');

    if (facultyFilter) {
        facultyFilter.addEventListener('change', function () {
            const selectedFaculty = this.value.toLowerCase();
            const profileCards = document.querySelectorAll('.profile-card');

            profileCards.forEach(card => {
                const cardFaculty = card.getAttribute('data-faculty').toLowerCase();

                if (selectedFaculty === 'all' || cardFaculty === selectedFaculty) {
                    card.parentElement.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        });
    }

    // ==========================================
    // NEWS CATEGORY FILTER (for news.html)
    // ==========================================
    const categoryButtons = document.querySelectorAll('.category-btn');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category').toLowerCase();
            const newsCards = document.querySelectorAll('.news-card');

            newsCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category').toLowerCase();

                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.parentElement.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        });
    });

    // ==========================================
    // LAZY LOADING FOR IMAGES
    // ==========================================
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // ==========================================
    // MODAL FUNCTIONALITY (for faculty details)
    // ==========================================
    const facultyCards = document.querySelectorAll('.faculty-card');

    facultyCards.forEach(card => {
        const detailBtn = card.querySelector('.btn-detail');
        if (detailBtn) {
            detailBtn.addEventListener('click', function () {
                const facultyName = card.querySelector('h3').textContent;
                const facultyDescription = card.querySelector('.card-text')?.textContent || 'Detaylı bilgi yakında eklenecektir.';

                // You can customize modal content here
                console.log(`Showing details for: ${facultyName}`);
            });
        }
    });

    // ==========================================
    // BACK TO TOP BUTTON
    // ==========================================
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.opacity = '0';
                setTimeout(() => {
                    if (window.scrollY <= 300) {
                        backToTopBtn.style.display = 'none';
                    }
                }, 300);
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // CAROUSEL AUTO-PLAY CONTROL
    // ==========================================
    const heroCarousel = document.getElementById('heroCarousel');

    if (heroCarousel) {
        // Pause carousel on hover
        heroCarousel.addEventListener('mouseenter', function () {
            const carousel = bootstrap.Carousel.getInstance(heroCarousel);
            if (carousel) {
                carousel.pause();
            }
        });

        // Resume carousel on mouse leave
        heroCarousel.addEventListener('mouseleave', function () {
            const carousel = bootstrap.Carousel.getInstance(heroCarousel);
            if (carousel) {
                carousel.cycle();
            }
        });
    }

    // ==========================================
    // INITIALIZE TOOLTIPS (Bootstrap)
    // ==========================================
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ==========================================
    // INITIALIZE POPOVERS (Bootstrap)
    // ==========================================
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // ==========================================
    // NEWS CARD CLICK HANDLER
    // ==========================================
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Don't trigger if clicking on a button or link
            if (!e.target.closest('a, button')) {
                // Get the first link in the card
                const link = this.querySelector('a[href]');
                if (link) {
                    window.location.href = link.getAttribute('href');
                }
            }
        });
    });

});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// NAVBAR DROPDOWN TOGGLE
// ==========================================
function toggleNavDropdown() {
    const dropdown = document.getElementById('navbarDropdownMenu');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('navbarDropdownMenu');
    const toggleBtn = document.getElementById('navbarDropdown');
    
    if (dropdown && toggleBtn && !toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

// Close dropdown when a link is clicked
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link') && e.target.parentElement.parentElement.id === 'navbarDropdownMenu') {
        document.getElementById('navbarDropdownMenu').classList.remove('show');
    }
});

// ==========================================
// REKTÖR MEGA DROPDOWN (hover)
// ==========================================
(function () {
    const wrapper = document.querySelector('.rektor-menu-wrapper');
    const megaDropdown = document.getElementById('rektorMegaDropdown');
    if (!wrapper || !megaDropdown) return;

    let hideTimeout;

    wrapper.addEventListener('mouseenter', function () {
        clearTimeout(hideTimeout);
        megaDropdown.classList.add('show');
    });

    wrapper.addEventListener('mouseleave', function () {
        hideTimeout = setTimeout(function () {
            megaDropdown.classList.remove('show');
        }, 200);
    });

    // Also handle click for mobile
    const link = document.getElementById('rektorMenuLink');
    if (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            megaDropdown.classList.toggle('show');
        });
    }
})();


