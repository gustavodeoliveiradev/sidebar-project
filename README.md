# ⚡ Nexus Sidebar

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?logo=github&logoColor=white)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)](https://github.com/seu-usuario/nexus-sidebar)

Uma sidebar modular, acessível e personalizável com temas dinâmicos.

> **Status:** 🚧 Em desenvolvimento — [Roadmap de 7 dias](#-roadmap)

---

## ✨ Funcionalidades

| Funcionalidade | Status |
|---|---|
| HTML semântico com ARIA | ✅ Concluído |
| CSS Variables + Glassmorphism | ✅ Concluído |
| Sistema de temas (dark, neon, pastel) | ✅ Concluído |
| Layout da sidebar com glassmorphism | ✅ Concluído |
| Componentes visuais (tooltips, badges, ripple) | ✅ Concluído |
| Toggle expandir/colapsar | 🚧 Em breve (Dia 4) |
| Responsividade mobile | 🚧 Em breve |
| Animações avançadas + micro-interações | 🚧 Em breve |
| Acessibilidade completa (keyboard nav) | 🚧 Em breve |
| Deploy no GitHub Pages | 🚧 Em breve |

---

## 🖼️ Preview

### Tema Dark (Glassmorphism)
> Sidebar com efeito glassmorphism, bordas neon, tooltips no modo colapsado e badge de notificação com animação pulse.

---

## 🗂️ Estrutura do Projeto

```
sidebar-project/
├── index.html          # Estrutura semântica
├── css/
│   ├── base.css        # Reset, variáveis globais, fonts
│   ├── layout.css      # Sidebar, grid, responsive
│   ├── components.css  # Botões, cards, tooltips, badges, ripple
│   └── themes.css      # Temas dark/neon/pastel
├── js/
│   ├── main.js         # Init e event listeners
│   ├── toggle.js       # Lógica de expandir/colapsar
│   ├── theme.js        # Troca de temas
│   └── utils.js        # Funções auxiliares
├── assets/
│   └── icons/          # SVGs personalizados (opcional)
├── README.md
└── .gitignore
```

---

## 🚀 Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sidebar-project.git
   cd sidebar-project
   ```

2. Abra o `index.html` no navegador:
   ```bash
   # Ou use uma extensão como Live Server no VS Code
   ```

---

## 🎨 Sistema de Temas

O projeto utiliza **CSS Variables** para controle dinâmico de cores, permitindo troca instantânea de temas sem recarregar a página.

### Temas disponíveis
| Tema | Descrição | Status |
|---|---|---|
| **Dark** | Fundo escuro com glassmorphism | ✅ Pronto |
| **Neon** | Cores vibrantes com glow | ✅ Pronto |
| **Pastel** | Tons suaves e minimalistas | ✅ Pronto |

### Como customizar

As variáveis CSS estão centralizadas em `css/base.css`. Para criar um novo tema:

```css
/* Adicione uma nova classe no body */
body[data-theme="seu-tema"] {
  --bg-primary: #sua-cor;
  --bg-glass: rgba(255, 255, 255, 0.1);
  --text-primary: #sua-cor-texto;
  --accent: #sua-cor-destaque;
  /* ... e assim por diante */
}
```

---

## 🛠️ Tecnologias

- **HTML5** semântico + ARIA
- **CSS3** com variáveis, Glassmorphism e `backdrop-filter`
- **JavaScript** vanilla (ES6+ módulos)
- **Font Awesome** 6.4.0 para ícones
- **Google Fonts** (Inter)

---

## 🗓️ Roadmap

| Dia | Foco | Commit |
|---|---|---|
| 1 | Estrutura HTML semântica + setup | `feat: setup inicial com HTML semântico e estrutura de pastas` |
| 2 | CSS Variables + sistema de temas + glassmorphism | `style: adiciona CSS variables e tema dark neon` |
| 3 | Layout da sidebar + componentes visuais | `style: adiciona layout da sidebar com glassmorphism e componentes visuais` |
| 4 | JS: toggle sidebar + active state + tooltips | `feat: adiciona toggle manual e estados ativos` |
| 5 | Responsividade + mobile menu | `feat: torna sidebar responsiva para mobile` |
| 6 | Animações avançadas + micro-interações | `style: aprimora animações e feedback visual` |
| 7 | Acessibilidade (ARIA, keyboard nav) | `chore: melhora acessibilidade e navegação por teclado` |
| 8 | Polish + deploy no GitHub Pages | `docs: finaliza projeto e configura GitHub Pages` |

---

## 📝 Licença

MIT © [Gustavo Oliveira](https://github.com/gustavodeoliveiradev)
