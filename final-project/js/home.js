import 'animate.css';

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

function showHide() {
  var x = document.getElementById("projects");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}