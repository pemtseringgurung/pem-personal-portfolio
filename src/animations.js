// Intersection Observer to trigger animations when elements scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const experienceItems = document.querySelectorAll('#experience li');
  const projectItems = document.querySelectorAll('#projects li');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  [...experienceItems, ...projectItems].forEach(item => {
    item.classList.add('animate-on-scroll');
    observer.observe(item);
  });
  
  // Add pulse animation to header on load
  const header = document.querySelector('header');
  if (header) {
    setTimeout(() => {
      header.classList.add('animated');
    }, 500);
  }
}); 