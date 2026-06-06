document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. PERFORMANCE-TUNED SCROLL DECORATOR
  // ==========================================================================
  const navbar = document.querySelector('.navbar-custom');
  let passiveSupported = false;

  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
      get: function() { passiveSupported = true; }
    }));
  } catch(err) {}

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, passiveSupported ? { passive: true } : false);

  // ==========================================================================
  // 2. HARDWARE-ACCELERATED ELEMENT REVEAL SYSTEMS
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); // Unobserve to free engine threads
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for legacy architecture environments
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // ==========================================================================
  // 3. FLUID ACTIVE LINKS TRACKING (Spy Configuration)
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-custom .nav-link[href^="#"]');

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(section => sectionObserver.observe(section));
  }

  // ==========================================================================
  // 4. PRECISION LINEAR INTERPOLATED QUANTUM COUNTER
  // ==========================================================================
  const animateCount = (el, target, duration = 2000) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease-out cubic calculation mapping 
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * target);
      
      el.textContent = currentValue.toLocaleString();
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString();
      }
    };
    window.requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          if (!isNaN(target)) {
            animateCount(el, target);
            counterObserver.unobserve(el);
          }
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
  }

  // ==========================================================================
  // 5. ASYNCHRONOUS FORM EMULATION WITH FEEDBACK LOOP
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = this.querySelector('.btn-submit');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'TRANSMITTING VIA SECURE NODE...';
      submitBtn.style.pointerEvents = 'none';
      submitBtn.style.opacity = '0.7';

      // Simulating a modern REST pipeline processing environment
      setTimeout(() => {
        submitBtn.textContent = 'DIALOGUE INITIATED SUCCESSFUL ✓';
        submitBtn.style.background = 'var(--clr-accent)';
        submitBtn.style.color = 'var(--clr-dark)';
        
        this.reset();

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          submitBtn.style.pointerEvents = 'auto';
          submitBtn.style.opacity = '1';
        }, 4000);
      }, 1800);
    });
  }

  // ==========================================================================
  // 6. COHESIVE INTERFACE DE-BOUNCED LINK SCROLLING
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const hash = this.getAttribute('href');
      const target = document.querySelector(hash);
      
      if (target && hash !== '#') {
        e.preventDefault();
        
        const headerOffset = navbar.offsetHeight || 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Smart Adaptive Collapse Closure for Mobile viewports
        const navbarCollapse = document.querySelector('.navbar-collapse.show');
        if (navbarCollapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });
});