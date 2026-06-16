/**
 * Arquivo principal que inicializa todos os módulos
 */
import { initSidebarToggle } from './toggle.js';
import { initThemeSwitcher } from './theme.js';
import { $$ } from './utils.js';

// Inicializa funcionalidades quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  initSidebarToggle();
  initThemeSwitcher();
  initActiveLinks();
});

/**
 * Gerencia o estado "ativo" dos links de navegação
 */
function initActiveLinks() {
  const navLinks = $$('.nav-link:not(.nav-link--danger)');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Remove a classe active de todos
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Adiciona ao clicado
      link.classList.add('active');
      
      // Em mobile, fecha a sidebar após o clique
      if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('mobile-open');
      }
    });
  });
}