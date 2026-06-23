/**
 * A11Y.JS - Acessibilidade e Navegação por Teclado
 */
import { $, $$ } from './utils.js';

export function initKeyboardNavigation() {
  const navLinks = $$('.nav-link');
  
  navLinks.forEach((link, index) => {
    link.addEventListener('keydown', (e) => {
      let nextIndex;
      
      // Navegação com setas
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (index + 1) % navLinks.length;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (index - 1 + navLinks.length) % navLinks.length;
      } 
      // Pular para o primeiro/último item
      else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = navLinks.length - 1;
      }
      
      // Move o foco
      if (nextIndex !== undefined) {
        navLinks[nextIndex].focus();
      }
    });
  });
}