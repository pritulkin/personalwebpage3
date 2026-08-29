// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
  // Hero section immediate animation
  const heroElements = document.querySelectorAll('.hero-copy > *');
  heroElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 200 + (index * 100));
  });

  // Profile card animation
  const profileCard = document.querySelector('.profile-card');
  if (profileCard) {
    profileCard.style.opacity = '0';
    profileCard.style.transform = 'scale(0.9)';
    profileCard.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    setTimeout(() => {
      profileCard.style.opacity = '1';
      profileCard.style.transform = 'scale(1)';
    }, 600);
  }

  // Skills grid staggered animation
  const skillItems = document.querySelectorAll('.skill-item');
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, Math.random() * 300); // Random delay for staggered effect
        
        skillsObserver.unobserve(element);
      }
    });
  }, { threshold: 0.1 });

  skillItems.forEach(item => skillsObserver.observe(item));

  // Project cards staggered animation
  const projectCards = document.querySelectorAll('.project-card');
  const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 150); // Staggered delay
        
        projectsObserver.unobserve(element);
      }
    });
  }, { threshold: 0.1 });

  projectCards.forEach(card => projectsObserver.observe(card));

  // Section content animation
  const sectionContent = document.querySelectorAll('.two-column > div, .footer-content > div');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 100);
        
        sectionObserver.unobserve(element);
      }
    });
  }, { threshold: 0.1 });

  sectionContent.forEach(content => sectionObserver.observe(content));

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header background change on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(11, 16, 32, 0.9)';
    } else {
      header.style.background = 'rgba(11, 16, 32, 0.65)';
    }
  });
});