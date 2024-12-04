document.addEventListener('DOMContentLoaded', () => {
  // Animate rotating text in hero section using Animate.css classes
  const rotatingTextAdjectives = document.querySelectorAll('.rotatingText-adjective');
  rotatingTextAdjectives.forEach((word, index) => {
    word.classList.add('animate__animated', 'animate__fadeInUp');
    word.style.animationDelay = `${index * 1.5}s`;
  });

  // Project Card Animation on Scroll
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
      anime({
        targets: card,
        translateY: -10,
        duration: 500,
        easing: 'easeOutQuad',
      });
    });
    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        translateY: 0,
        duration: 500,
        easing: 'easeOutQuad',
      });
    });
  });
});
