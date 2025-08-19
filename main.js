'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const closeBtn = document.getElementById('close-btn');

  hamburger.addEventListener('click', () => {
    hamburgerMenu.style.display = 'flex';
    closeBtn.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    hamburgerMenu.style.display = 'none';
    closeBtn.style.display = 'none';
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      hamburgerMenu.style.display = 'none';
      closeBtn.style.display = 'none';
    }
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
  });
});