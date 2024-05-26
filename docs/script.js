// Smooth scrolling function
function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Event listeners for smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.scroll-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-target');
      const instance = link.getAttribute('data-instance') || 0;
      scrollToElement(target, instance);
    });
  });
});
