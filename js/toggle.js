/**
 * Controle de expansão/colapso da sidebar
 */
import { $ } from './utils.js';

export function initSidebarToggle() {
  const sidebar = $('#sidebar');
  const toggleBtn = $('#sidebarToggle');
  const icon = toggleBtn.querySelector('i');

  // Verifica estado salvo ou define padrão (expandido em desktop)
  const isExpanded = window.innerWidth > 768;
  
  if (isExpanded) {
    sidebar.classList.add('expanded');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  toggleBtn.addEventListener('click', () => {
    const isNowExpanded = sidebar.classList.toggle('expanded');
    
    // Atualiza ARIA para acessibilidade
    toggleBtn.setAttribute('aria-expanded', isNowExpanded);
    
    // Salva preferência do usuário
    localStorage.setItem('sidebarExpanded', isNowExpanded);
  });

  // Restaura estado ao recarregar a página
  const savedState = localStorage.getItem('sidebarExpanded');
  if (savedState !== null) {
    const shouldBeExpanded = savedState === 'true';
    sidebar.classList.toggle('expanded', shouldBeExpanded);
    toggleBtn.setAttribute('aria-expanded', shouldBeExpanded);
  }
}