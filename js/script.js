// ===================================
// Profile Photo Loader
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const profilePhoto = document.getElementById('profilePhoto');
    const profilePlaceholder = document.getElementById('profilePlaceholder');

    if (profilePhoto && profilePlaceholder) {
        profilePhoto.addEventListener('load', function() {
            profilePhoto.classList.add('loaded');
            profilePlaceholder.classList.add('hidden');
        });

        profilePhoto.addEventListener('error', function() {
            profilePhoto.style.display = 'none';
            profilePlaceholder.classList.remove('hidden');
        });

        // Check if image is already cached and loaded
        if (profilePhoto.complete && profilePhoto.naturalHeight !== 0) {
            profilePhoto.classList.add('loaded');
            profilePlaceholder.classList.add('hidden');
        }
    }
});

// ===================================
// Mobile Navigation Toggle
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navMenu.contains(event.target) ||
                                 mobileMenuToggle.contains(event.target);

            if (!isClickInside && navMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ===================================
// Contact Form Validation & Submission
// ===================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear previous errors
        clearErrors();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Validate name
        if (name === '') {
            showError('nameError', 'Name is required');
            isValid = false;
        } else if (name.length < 2) {
            showError('nameError', 'Name must be at least 2 characters');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate subject
        if (subject === '') {
            showError('subjectError', 'Subject is required');
            isValid = false;
        } else if (subject.length < 3) {
            showError('subjectError', 'Subject must be at least 3 characters');
            isValid = false;
        }

        // Validate message
        if (message === '') {
            showError('messageError', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            isValid = false;
        }

        if (isValid) {
            // Form is valid - handle submission
            handleFormSubmission(name, email, subject, message);
        }
    });
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });

    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    if (formSuccess) formSuccess.style.display = 'none';
    if (formError) formError.style.display = 'none';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function handleFormSubmission(name, email, subject, message) {
    // In a real application, you would send this data to a server
    // For now, we'll simulate a successful submission

    // Option 1: Use a service like FormSpree, Netlify Forms, or EmailJS
    // Example with FormSpree (replace with your form endpoint):
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
    })
    .then(response => {
        if (response.ok) {
            showSuccess();
            contactForm.reset();
        } else {
            showFormError();
        }
    })
    .catch(error => {
        showFormError();
    });
    */

    // Option 2: Open email client (temporary solution)
    const mailtoLink = `mailto:tkhuyag@haverford.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Show success message
    showSuccess();

    // Reset form
    contactForm.reset();

    // Optionally open email client
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 1000);
}

function showSuccess() {
    const formSuccess = document.getElementById('formSuccess');
    formSuccess.style.display = 'block';
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showFormError() {
    const formError = document.getElementById('formError');
    formError.style.display = 'block';
    formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================
// CV Download Functionality
// ===================================

function downloadCV() {
    // Check if CV is uploaded in localStorage
    const uploadedCV = localStorage.getItem('uploadedCV');
    const cvFileName = localStorage.getItem('cvFileName') || 'cv.pdf';

    if (uploadedCV) {
        // Download from localStorage
        const link = document.createElement('a');
        link.href = uploadedCV;
        link.download = cvFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        // Fallback to assets/cv.pdf
        const link = document.createElement('a');
        link.href = 'assets/cv.pdf';
        link.download = 'cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Add event listeners to download buttons
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn1 = document.getElementById('downloadCVBtn');
    const downloadBtn2 = document.getElementById('downloadCVBtn2');

    if (downloadBtn1) {
        downloadBtn1.addEventListener('click', downloadCV);
    }

    if (downloadBtn2) {
        downloadBtn2.addEventListener('click', downloadCV);
    }
});

// ===================================
// Add fade-in animation on scroll
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card, .content-block, .cv-entry, .research-area');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
