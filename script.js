/**
 * ==============================================================================
 * SAMAR TAIBANI - PORTFOLIO INTERACTIVITY SCRIPT
 * Vanilla JavaScript (ES6+) - Fully responsive, interactive & lightweight
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================================
   * 1. GOOGLE APPS SCRIPT / CONTACT FORM CONFIGURATION
   * ============================================================================
   * To connect this contact form to Google Sheets:
   * 1. Create a Google Sheet & open Extensions > Apps Script.
   * 2. Paste the Apps Script code provided in the project README.md.
   * 3. Deploy as a Web App (Access: Anyone).
   * 4. Paste the Web App URL in the constant below:
   */
  const GOOGLE_SHEETS_SCRIPT_URL = ''; // Leave empty for interactive demo mode, or paste your Web App URL

  /* ============================================================================
   * 2. PROJECT DETAILS DATA (For Quick View Modal & Previews)
   * ============================================================================ */
  const projectsData = {
    'blackberry-pet-shop': {
      title: 'BlackBerry Pet Shop',
      category: 'PHP / MySQL & Full Stack',
      image: 'assets/images/blackberry-pet-shop.jpg',
      description: 'BlackBerry Pet Shop is an end-to-end e-commerce and pet care management portal designed to streamline pet adoptions, food purchases, and healthcare supplies. The application implements complete session-based customer authentication, shopping cart workflows, and an administrative control panel for product catalog updates.',
      features: [
        'Secure user registration and session-based login authentication in PHP',
        'Dynamic pet food and accessories catalog with category and price filters',
        'Persistent cart management and checkout calculation workflow',
        'Relational MySQL database schema with foreign keys and order records',
        'Responsive customer interface tested for tablets and smartphones'
      ],
      technologies: ['PHP 8', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'XAMPP/Apache'],
      demoUrl: 'https://github.com/samartaibani',
      repoUrl: 'https://github.com/samartaibani'
    },
    'tour-and-travel': {
      title: 'Tour and Travel Website',
      category: 'HTML / CSS & JavaScript',
      image: 'assets/images/tour-and-travel.jpg',
      description: 'A modern, responsive travel portal designed for tourists and vacation planners. Users can explore curated international and domestic itineraries, review scenic destination galleries, compare flight/hotel packages, and submit customized travel booking requests.',
      features: [
        'Interactive destination gallery with smooth modal image previews',
        'Dynamic trip planner and booking calendar widget',
        'Client-side filter for filtering tours by budget, duration, and popularity',
        'Mobile-first responsive layout with fluid grid layouts and transitions',
        'Custom client-side inquiry form with instant validation'
      ],
      technologies: ['HTML5', 'CSS3 (Flexbox & Grid)', 'JavaScript (ES6)', 'Font Awesome'],
      demoUrl: 'https://github.com/samartaibani',
      repoUrl: 'https://github.com/samartaibani'
    },
    'event-booking': {
      title: 'Event Booking System',
      category: 'PHP / MySQL & JavaScript',
      image: 'assets/images/event-booking-system.jpg',
      description: 'An interactive venue and ticket reservation application designed for concerts, tech conferences, and cultural festivals. The application features an interactive seating grid with real-time seat status, automated pricing calculation, and ticket receipt generation.',
      features: [
        'Interactive SVG/DOM seating chart with live seat selection logic',
        'Dynamic event schedule calendar with AJAX-driven details loading',
        'Tiered pricing tiers (General, VIP, Early Bird) with instant subtotal calculations',
        'MySQL transactional storage preventing double bookings on identical seats',
        'Downloadable reservation confirmation badge and summary receipt'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript (AJAX)', 'CSS3', 'Bootstrap'],
      demoUrl: 'https://github.com/samartaibani',
      repoUrl: 'https://github.com/samartaibani'
    },
    'student-management': {
      title: 'Student Management Portal',
      category: 'JavaScript & Academic UI',
      image: 'assets/images/student-management.jpg',
      description: 'An academic dashboard system created to help educators and students track grades, attendance records, and course enrollment. Built with modular client-side JavaScript and persistent storage for streamlined record keeping.',
      features: [
        'Full CRUD operations (Create, Read, Update, Delete) for student records',
        'Real-time search filtering across names, roll numbers, and academic statuses',
        'Visual attendance and GPA performance indicator bars',
        'Data persistence using browser LocalStorage for offline-first testing',
        'Clean tabular layout with responsive card stacking for mobile devices'
      ],
      technologies: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'LocalStorage API', 'Chart.js'],
      demoUrl: 'https://github.com/samartaibani',
      repoUrl: 'https://github.com/samartaibani'
    }
  };

  /* ============================================================================
   * 3. TYPEWRITER EFFECT FOR HERO DESIGNATION
   * ============================================================================ */
  const typewriterElement = document.getElementById('typewriter');
  const designations = [
    'Full Stack Web Developer',
    'Frontend Developer',
    'PHP Developer'
  ];

  let designationIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 110;
  let erasingDelay = 60;
  let newTextDelay = 1800; // Delay between full designations

  function typeWriter() {
    if (!typewriterElement) return;

    const currentText = designations[designationIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = erasingDelay;
    } else {
      typewriterElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 110;
    }

    if (!isDeleting && charIndex === currentText.length) {
      // Completed typing designation, pause before erasing
      typingDelay = newTextDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      designationIndex = (designationIndex + 1) % designations.length;
      typingDelay = 400;
    }

    setTimeout(typeWriter, typingDelay);
  }

  // Start typewriter if reduced motion is not forced
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (typewriterElement) typewriterElement.textContent = designations[0];
  } else {
    setTimeout(typeWriter, 500);
  }

  /* ============================================================================
   * 4. STICKY NAVBAR & SCROLLSPY (ACTIVE NAV LINK HIGHLIGHT)
   * ============================================================================ */
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  function handleScroll() {
    const scrollY = window.pageYOffset;

    // Sticky nav elevation
    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scrollspy active link detection
    let currentSectionId = '';
    const scrollPosition = scrollY + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });

      drawerLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  /* ============================================================================
   * 5. MOBILE HAMBURGER MENU & DRAWER
   * ============================================================================ */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  function openDrawer() {
    hamburgerBtn?.classList.add('active');
    hamburgerBtn?.setAttribute('aria-expanded', 'true');
    mobileDrawer?.classList.add('active');
    mobileDrawer?.setAttribute('aria-hidden', 'false');
    mobileOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    hamburgerBtn?.classList.remove('active');
    hamburgerBtn?.setAttribute('aria-expanded', 'false');
    mobileDrawer?.classList.remove('active');
    mobileDrawer?.setAttribute('aria-hidden', 'true');
    mobileOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburgerBtn?.addEventListener('click', () => {
    if (mobileDrawer?.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerCloseBtn?.addEventListener('click', closeDrawer);
  mobileOverlay?.addEventListener('click', closeDrawer);

  // Close drawer on clicking internal link
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer?.classList.contains('active')) closeDrawer();
      if (projectModal?.classList.contains('active')) closeModal();
    }
  });

  /* ============================================================================
   * 6. THEME TOGGLE (LIGHT / DARK MODE)
   * ============================================================================ */
  const themeToggle = document.getElementById('themeToggle');
  const rootElement = document.documentElement;

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem('samar-portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    rootElement.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersDark) {
    rootElement.setAttribute('data-theme', 'dark');
  } else {
    rootElement.setAttribute('data-theme', 'light');
  }

  themeToggle?.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('samar-portfolio-theme', newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
  });

  /* ============================================================================
   * 7. SCROLL REVEAL & ANIMATED SKILL BARS (INTERSECTION OBSERVER)
   * ============================================================================ */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Animate skill bars when in view
  const progressBars = document.querySelectorAll('.progress-bar');
  const skillsSection = document.getElementById('skills');

  if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent') || '0';
            bar.style.width = `${percent}%`;
          });
        }
      });
    }, { threshold: 0.2 });

    skillsObserver.observe(skillsSection);
  }

  /* ============================================================================
   * 8. PROJECT CATEGORY FILTER
   * ============================================================================ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  /* ============================================================================
   * 9. PROJECT QUICK VIEW & LIVE DEMO MODAL
   * ============================================================================ */
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !modalBody || !projectModal) return;

    modalBody.innerHTML = `
      <img src="${data.image}" alt="${data.title} Preview" class="modal-image">
      <div class="modal-content-inner">
        <span class="modal-project-cat">${data.category}</span>
        <h3 class="modal-project-title">${data.title}</h3>
        <p class="modal-project-desc">${data.description}</p>
        
        <h4 class="modal-features-title"><i class="fa-solid fa-list-check"></i> Key Highlights & Architecture</h4>
        <ul class="modal-features-list">
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <div class="project-tech-tags" style="margin-bottom: 1.75rem;">
          ${data.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>

        <div class="modal-actions">
          <a href="${data.demoUrl}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Project Repo
          </a>
          <button class="btn btn-outline" id="modalDismissBtn">
            <i class="fa-solid fa-xmark"></i> Close Window
          </button>
        </div>
      </div>
    `;

    document.getElementById('modalDismissBtn')?.addEventListener('click', closeModal);

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    projectModal?.classList.remove('active');
    projectModal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalCloseBtn?.addEventListener('click', closeModal);
  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) closeModal();
  });

  // Attach quick view & demo buttons
  document.querySelectorAll('.btn-quickview, .btn-demo').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      if (projectId) openProjectModal(projectId);
    });
  });

  /* ============================================================================
   * 10. CONTACT FORM VALIDATION & SUBMISSION
   * ============================================================================ */
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const submitBtn = document.getElementById('submitBtn');

  // Input validators
  function validateName() {
    const errorEl = document.getElementById('nameError');
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add('error');
      nameInput.classList.remove('success');
      if (errorEl) errorEl.textContent = 'Please enter your full name (minimum 2 characters).';
      return false;
    }
    nameInput.classList.remove('error');
    nameInput.classList.add('success');
    if (errorEl) errorEl.textContent = '';
    return true;
  }

  function validateEmail() {
    const errorEl = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('error');
      emailInput.classList.remove('success');
      if (errorEl) errorEl.textContent = 'Please enter a valid email address (e.g. name@domain.com).';
      return false;
    }
    emailInput.classList.remove('error');
    emailInput.classList.add('success');
    if (errorEl) errorEl.textContent = '';
    return true;
  }

  function validateSubject() {
    const errorEl = document.getElementById('subjectError');
    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      subjectInput.classList.add('error');
      subjectInput.classList.remove('success');
      if (errorEl) errorEl.textContent = 'Please enter a subject (minimum 3 characters).';
      return false;
    }
    subjectInput.classList.remove('error');
    subjectInput.classList.add('success');
    if (errorEl) errorEl.textContent = '';
    return true;
  }

  function validateMessage() {
    const errorEl = document.getElementById('messageError');
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add('error');
      messageInput.classList.remove('success');
      if (errorEl) errorEl.textContent = 'Please enter a message of at least 10 characters.';
      return false;
    }
    messageInput.classList.remove('error');
    messageInput.classList.add('success');
    if (errorEl) errorEl.textContent = '';
    return true;
  }

  // Real-time blur validation
  nameInput?.addEventListener('blur', validateName);
  emailInput?.addEventListener('blur', validateEmail);
  subjectInput?.addEventListener('blur', validateSubject);
  messageInput?.addEventListener('blur', validateMessage);

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      showToast('Please fix the errors in the form before sending.', 'error');
      return;
    }

    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
      timestamp: new Date().toISOString()
    };

    // UI Loading state
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    submitBtn.disabled = true;
    btnText?.classList.add('hidden');
    btnLoading?.classList.remove('hidden');

    try {
      if (GOOGLE_SHEETS_SCRIPT_URL && GOOGLE_SHEETS_SCRIPT_URL.trim() !== '') {
        // Send actual POST request to Google Apps Script Web App
        const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Google Apps Script Web App redirect handling
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        showToast('Message sent successfully! It has been recorded to Google Sheets.', 'success');
        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
          inp.classList.remove('success', 'error');
        });
      } else {
        // Interactive Demo Mode (Simulate network latency with real user feedback)
        await new Promise(resolve => setTimeout(resolve, 900));

        showToast(
          `Thank you, ${formData.name}! Your message is valid. (Demo Mode: To save messages in Google Sheets, add your Apps Script URL to script.js - see README.md)`,
          'success'
        );

        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
          inp.classList.remove('success', 'error');
        });
      }
    } catch (error) {
      console.error('Contact Form Submission Error:', error);
      showToast('Failed to send message. Please reach out directly to samartaibani.dev@example.com', 'error');
    } finally {
      submitBtn.disabled = false;
      btnText?.classList.remove('hidden');
      btnLoading?.classList.add('hidden');
    }
  });

  /* ============================================================================
   * 11. TOAST NOTIFICATION SYSTEM
   * ============================================================================ */
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-solid fa-circle-info';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check';
    if (type === 'error') iconClass = 'fa-solid fa-circle-exclamation';

    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 20);

    // Auto remove after 5.5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 5500);
  }

  /* ============================================================================
   * 12. BACK TO TOP BUTTON
   * ============================================================================ */
  const backToTopBtn = document.getElementById('backToTopBtn');
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  /* ============================================================================
   * 13. DYNAMIC CURRENT YEAR FOR FOOTER
   * ============================================================================ */
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

});
