
function scrollToElement(targetSelector) {
  const targetElement = document.querySelector(targetSelector);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('scroll-link')) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    scrollToElement(target);
  }
});