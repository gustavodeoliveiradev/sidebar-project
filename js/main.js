/**
 * Arquivo principal que inicializa todos os módulos
 */
import { initSidebarToggle } from './toggle.js';
import { initThemeSwitcher } from './theme.js';
import { $, $$ } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  initSidebarToggle();
  initThemeSwitcher();
  initActiveLinks();
  initMobileMenu();
});

function initActiveLinks() {
  const navLinks = $$('.nav-link:not(.nav-link--danger)');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

/**
 * NOVO: Lógica do Menu Mobile (Drawer + Overlay)
 */
function initMobileMenu() {
  const mobileToggle = $('#mobileToggle');
  const sidebar = $('#sidebar');
  const overlay = $('#overlay');
  const navLinks = $$('.nav-link');

  function openMenu() {
    sidebar.classList.add('mobile-open');
    overlay.classList.add('active');
    document.body.classList.add('menu-open'); // NOVO: bloqueia scroll
  }

  function closeMenu() {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open'); // NOVO: libera scroll
  }

  // Abre ao clicar no hamburger
  mobileToggle.addEventListener('click', openMenu);

  // Fecha ao clicar no overlay
  overlay.addEventListener('click', closeMenu);

  // Fecha ao clicar em um link de navegação
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // Fecha ao apertar a tecla ESC (Acessibilidade)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
      closeMenu();
    }
  });
}