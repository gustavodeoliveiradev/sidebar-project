// js/mobile.js
import { $, $$ } from './utils.js';

export function initMobileMenu() {
  const mobileToggle = $('#mobileToggle');
  const sidebar = $('#sidebar');
  const overlay = $('#overlay');

  function openMenu() {
    sidebar.classList.add('mobile-open');
    overlay.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  mobileToggle.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
      closeMenu();
    }
  });
}