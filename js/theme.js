/**
 * Controle de troca de temas com persistência
 */
import { $, storage } from './utils.js';

const THEMES = ['dark-neon', 'cyberpunk', 'sunset-pastel', 'forest-minimal', 'ocean-deep'];

export function initThemeSwitcher() {
  const themeBtn = $('#themeToggle');
  const icon = themeBtn.querySelector('i');
  
  // Recupera tema salvo ou usa o padrão
  let currentTheme = storage.get('currentTheme', 'dark-neon');
  applyTheme(currentTheme);

  themeBtn.addEventListener('click', () => {
    // Encontra o próximo tema no array
    const currentIndex = THEMES.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    currentTheme = THEMES[nextIndex];
    
    applyTheme(currentTheme);
    storage.set('currentTheme', currentTheme);
  });
}

function applyTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  
  // Atualiza o ícone do botão (Lua para dark, Sol para claros)
  const icon = document.querySelector('#themeToggle i');
  const lightThemes = ['sunset-pastel', 'forest-minimal'];
  
  if (lightThemes.includes(themeName)) {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}