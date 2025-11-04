// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Active nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a:not(.btn-primary)');

function highlightNavLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavLink);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Lightbox functionality
const galleryImages = [
  { src: 'images/gallery1.jpg', caption: 'LOVE • Warm White • Brisbane Reception' },
  { src: 'images/gallery2.jpg', caption: 'LED Display • Brisbane Event' },
  { src: 'images/gallery3.jpg', caption: 'Custom Setup • Brisbane Event' },
  { src: 'images/gallery4.jpg', caption: 'LED letters outdoor • Warm Glow' },
  { src: 'images/gallery5.jpg', caption: 'Initials • Wedding Reception' },
  { src: 'images/gallery6.jpg', caption: 'Event Setup • Brisbane' },
  { src: 'images/gallery7.jpg', caption: 'Romantic Setup • Warm White' },
  { src: 'images/gallery8.jpg', caption: 'Letters with Balloons • Brisbane' },
  { src: 'images/gallery9.jpg', caption: 'Modern Style • Cool White' }
];

let currentImageIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');

function openLightbox(index) {
  currentImageIndex = index;
  updateLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateLightbox();
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightbox();
}

function updateLightbox() {
  const image = galleryImages[currentImageIndex];
  lightboxImage.src = image.src;
  lightboxImage.alt = image.caption;
  lightboxCaption.textContent = image.caption;
  lightboxCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') previousImage();
  if (e.key === 'ArrowRight') nextImage();
});

// Close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    if (!data.name || !data.email) {
      showFormMessage('Please fill in all required fields.', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }
    
    // Show success message (in a real implementation, you'd send this to a server)
    console.log('Form submitted:', data);
    
    showFormMessage(
      'Thank you for your enquiry! We\'ll get back to you within 24 hours.',
      'success'
    );
    
    contactForm.reset();
    
    // In a real implementation, you would send the data to your email service
    // Example using FormSubmit.co or EmailJS:
    /*
    try {
      const response = await fetch('YOUR_FORM_ENDPOINT', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        showFormMessage('Thank you! We\'ll get back to you within 24 hours.', 'success');
        contactForm.reset();
      } else {
        showFormMessage('Oops! Something went wrong. Please try again.', 'error');
      }
    } catch (error) {
      showFormMessage('Network error. Please check your connection.', 'error');
    }
    */
  });
}

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
  
  setTimeout(() => {
    formMessage.className = 'form-message';
  }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .package-card, .review-card, .feature-box, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// Removed parallax effect to prevent glitchy scrolling

// Prevent form resubmission on page reload
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

