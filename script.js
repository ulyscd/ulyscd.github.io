document.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('.portfolio-toggle');
  
  toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  const interactiveElements = document.querySelectorAll('nav a, .profile-frame, .profile-pic, .intro-box, .columns > div, .portfolio-toggle');
  const wataBackground = document.getElementById('wataBackground');

  if (wataBackground) {
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', function() {
        wataBackground.classList.add('active');
      });

      element.addEventListener('mouseleave', function() {
        wataBackground.classList.remove('active');
      });
    });
  }

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
