/* Mobile Navigation js */
/* handles hamburger menu toggle functionality for responsive navbar */

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.nb-navbar-toggle');
  const navbarNav = document.querySelector('.nb-navbar-nav');
  
  if (toggleButton && navbarNav) {
    //toggle mobile menu when hamburger button is clicked
    toggleButton.addEventListener('click', function() {
      navbarNav.classList.toggle('active');
      toggleButton.classList.toggle('active');
      
      const isExpanded = navbarNav.classList.contains('active');
      toggleButton.setAttribute('aria-expanded', isExpanded);
    });
    
    //close mobile menu when a nav link is clicked
    const navLinks = navbarNav.querySelectorAll('.nb-navbar-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navbarNav.classList.remove('active');
        toggleButton.classList.remove('active');
        toggleButton.setAttribute('aria-expanded', 'false');
      });
    });

    //close mobile menu when clicking outside of it
    document.addEventListener('click', function(event) {
      if (!toggleButton.contains(event.target) && !navbarNav.contains(event.target)) {
        navbarNav.classList.remove('active');
        toggleButton.classList.remove('active');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
