/**
 * Arquivo principal - Orquestrador
 */
import { initSidebarToggle } from './toggle.js';
import { initThemeSwitcher } from './theme.js';
import { initMobileMenu } from './mobile.js'; // ️ ATENÇÃO: Veja a nota abaixo!
import { initKeyboardNavigation } from './a11y.js';
import { $, $$ } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  initSidebarToggle();
  initThemeSwitcher();
  initActiveLinks();
  initMobileMenu();
  initKeyboardNavigation();
});

/**
 * Gerencia o estado "ativo" e o aria-current
 */
function initActiveLinks() {
  const navLinks = $$('.nav-link:not(.nav-link--danger)');
  
  function setActiveLink(targetLink) {
    // Reseta todos
    navLinks.forEach(l => {
      l.classList.remove('active');
      l.removeAttribute('aria-current');
    });
    
    // Ativa o selecionado
    targetLink.classList.add('active');
    targetLink.setAttribute('aria-current', 'page'); // Crucial para leitores de tela
  }

  // Evento de clique
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      setActiveLink(link);
      
      // Fecha menu mobile se estiver aberto
      if (window.innerWidth <= 768) {
        const sidebar = $('#sidebar');
        sidebar.classList.remove('mobile-open');
        $('#overlay').classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  });
  
  // Define o ativo inicial baseado na URL (ex: #home)
  const currentHash = window.location.hash || '#home';
  const initialActive = document.querySelector(`.nav-link[href="${currentHash}"]`);
  if (initialActive) setActiveLink(initialActive);
}