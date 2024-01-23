// main.js
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbarMenu = document.getElementById('navbar-default');
  
    toggleButton.addEventListener('click', () => {
      navbarMenu.classList.toggle('hidden'); // Toggle visibility
    });
  
    // Smooth scroll to section
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  