// Toggle functionality for portfolio sections
document.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('.portfolio-toggle');
  
  toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  // Wata.gif background effect on hover for interactive elements
  const interactiveElements = document.querySelectorAll('.nav-link, .profile-frame, .about-box, .skill-category, .portfolio-toggle');
  const wataBackground = document.getElementById('wataBackground');

  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      if (wataBackground) {
        wataBackground.classList.add('active');
      }
    });

    element.addEventListener('mouseleave', function() {
      if (wataBackground) {
        wataBackground.classList.remove('active');
      }
    });
  });

  // Smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
});
