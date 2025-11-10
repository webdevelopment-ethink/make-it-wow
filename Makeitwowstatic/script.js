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

// Lightbox functionality with separate galleries
const galleries = {
  'letters': [
    { src: 'images/Letters/gallery1.jpg', caption: 'LED Letters Display', type: 'image' },
    { src: 'images/Letters/gallery3.jpg', caption: 'Custom Letters Setup', type: 'image' },
    { src: 'images/Letters/gallery4.jpg', caption: 'Outdoor Letters Display', type: 'image' },
    { src: 'images/Letters/gallery5.jpg', caption: 'Elegant Letters Setup', type: 'image' },
    { src: 'images/Letters/gallery6.jpg', caption: 'Event Letters Setup', type: 'image' },
    { src: 'images/Letters/gallery8.jpg', caption: 'Letters with Balloons', type: 'image' },
    { src: 'images/Letters/hero.jpg', caption: 'LED Letters Display', type: 'image' },
    { src: 'images/videos/b6c5110b-516e-4835-b872-0aecf25c326e.mov', caption: 'LED Letters Video', type: 'video' },
    { src: 'images/videos/c7a6bf98-be6b-4c99-9b95-67bdb0910234.mov', caption: 'LED Letters Video', type: 'video' }
  ],
  'white-numbers': [
    { src: 'images/White Numbers/about.jpg', caption: 'White LED Numbers', type: 'image' },
    { src: 'images/White Numbers/gallery2.jpg', caption: 'White Numbers Display', type: 'image' },
    { src: 'images/White Numbers/gallery7.jpg', caption: 'White Numbers Setup', type: 'image' },
    { src: 'images/White Numbers/gallery9.jpg', caption: 'Modern White Numbers', type: 'image' },
    { src: 'images/White Numbers/image000005.jpg', caption: 'White Numbers Display', type: 'image' }
  ],
  'coloured-numbers': [
    { src: 'images/Coloured Numers/image000001.jpg', caption: 'Colour-Changing Numbers', type: 'image' },
    { src: 'images/Coloured Numers/image000002.jpg', caption: 'Coloured Numbers Display', type: 'image' },
    { src: 'images/Coloured Numers/image000004.JPG', caption: 'Coloured Numbers Setup', type: 'image' },
    { src: 'images/Coloured Numers/image000005 2.JPG', caption: 'Colour Effects Display', type: 'image' },
    { src: 'images/Coloured Numers/image000006.JPG', caption: 'Coloured Numbers Event', type: 'image' },
    { src: 'images/Coloured Numers/image000007.jpeg', caption: 'Coloured Numbers Display', type: 'image' }
  ],
  'neon': [
    { src: 'images/Neon Letters/image000000 2.jpg', caption: 'Custom Neon Sign', type: 'image' },
    { src: 'images/Neon Letters/image000000.jpg', caption: 'Neon Letters Display', type: 'image' },
    { src: 'images/Neon Letters/image000003.jpg', caption: 'Neon Sign Setup', type: 'image' },
    { src: 'images/Neon Letters/image000004.jpg', caption: 'Neon Letters Event', type: 'image' },
    { src: 'images/Neon Letters/image000006.jpg', caption: 'Custom Neon Display', type: 'image' },
    { src: 'images/Neon Letters/image000007.jpg', caption: 'Neon Letters Setup', type: 'image' },
    { src: 'images/Neon Letters/image000008.jpg', caption: 'Neon Sign Event', type: 'image' }
  ]
};

let currentGallery = 'letters';
let currentImageIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');

function openLightbox(gallery, index) {
  currentGallery = gallery;
  currentImageIndex = index;
  updateLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  // Stop any playing videos
  const lightboxContent = document.querySelector('.lightbox-content');
  const video = lightboxContent.querySelector('video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
  
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function nextImage() {
  const galleryImages = galleries[currentGallery];
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateLightbox();
}

function previousImage() {
  const galleryImages = galleries[currentGallery];
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightbox();
}

function updateLightbox() {
  const galleryImages = galleries[currentGallery];
  const media = galleryImages[currentImageIndex];
  
  // Clear previous content
  const lightboxContent = document.querySelector('.lightbox-content');
  const existingMedia = lightboxContent.querySelector('img, video');
  if (existingMedia) {
    existingMedia.remove();
  }
  
  // Create appropriate media element
  if (media.type === 'video') {
    const video = document.createElement('video');
    video.src = media.src;
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    video.style.maxWidth = '100%';
    video.style.maxHeight = '80vh';
    video.style.objectFit = 'contain';
    video.style.borderRadius = '0.5rem';
    video.style.margin = '0 auto';
    video.style.display = 'block';
    lightboxContent.insertBefore(video, lightboxCaption);
  } else {
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.caption;
    img.style.maxWidth = '100%';
    img.style.maxHeight = '80vh';
    img.style.objectFit = 'contain';
    img.style.borderRadius = '0.5rem';
    img.style.margin = '0 auto';
    img.style.display = 'block';
    lightboxContent.insertBefore(img, lightboxCaption);
  }
  
  lightboxCaption.textContent = media.caption;
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

// Contact form handling with Web3Forms
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Validate required fields
    const name = formData.get('name');
    const email = formData.get('email');
    
    if (!name || !email) {
      showFormMessage('Please fill in all required fields.', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        showFormMessage(
          'Thank you for your enquiry! We\'ll get back to you within 24 hours.',
          'success'
        );
        contactForm.reset();
      } else {
        showFormMessage(
          'Oops! Something went wrong. Please try again or call us directly.',
          'error'
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showFormMessage(
        'Network error. Please check your connection and try again.',
        'error'
      );
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
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

// Auto-play videos on hover in gallery
document.addEventListener('DOMContentLoaded', () => {
  const videoItems = document.querySelectorAll('.video-item video');
  
  videoItems.forEach(video => {
    const parent = video.closest('.video-item');
    
    parent.addEventListener('mouseenter', () => {
      video.play().catch(err => console.log('Autoplay prevented:', err));
    });
    
    parent.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});

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

