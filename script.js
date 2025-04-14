document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll('.dot');
  const sections = document.querySelectorAll('section');

  // Dot click scroll
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetId = dot.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer to highlight dot on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentSectionId = entry.target.id;

        dots.forEach(dot => {
          dot.classList.remove('active');
          if (dot.getAttribute('data-target') === currentSectionId) {
            dot.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.6 // Adjust based on when the section should be considered "active"
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
