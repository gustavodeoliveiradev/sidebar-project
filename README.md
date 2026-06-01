# ⚡ Nexus Sidebar

Uma sidebar modular, acessível e personalizável com temas dinâmicos.

> **Status:** 🚧 Em desenvolvimento — [Roadmap de 7 dias](#-roadmap)

---

## ✨ Funcionalidades Planejadas

| Funcionalidade | Status |
|---|---|
| HTML semântico com ARIA | ✅ Concluído |
| Sistema de temas (dark, neon, pastel) | 🚧 Em breve |
| Toggle expandir/colapsar | 🚧 Em breve |
| Responsividade mobile | 🚧 Em breve |
| Animações e micro-interações | 🚧 Em breve |
| Acessibilidade completa (keyboard nav) | 🚧 Em breve |
| Deploy no GitHub Pages | 🚧 Em breve |

---

## 🗂️ Estrutura do Projeto

```
sidebar-project/
├── index.html          # Estrutura semântica
├── css/
│   ├── base.css        # Reset, variáveis, fonts
│   ├── layout.css      # Sidebar, grid, responsive
│   ├── components.css  # Botões, cards, tooltips
│   └── themes.css      # Temas (dark, neon, pastel)
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
   git clone https://github.com/seu-usuario/nexus-sidebar.git
   cd nexus-sidebar
   ```

2. Abra o `index.html` no navegador:
   ```bash
   # Ou use uma extensão como Live Server no VS Code
   ```

---

## 🛠️ Tecnologias

- **HTML5** semântico + ARIA
- **CSS3** com variáveis e Glassmorphism
- **JavaScript** vanilla (ES6+ módulos)
- **Font Awesome** 6.4.0 para ícones
- **Google Fonts** (Inter)

---

## 🗓️ Roadmap

| Dia | Foco | Commit |
|---|---|---|
| 1 | Estrutura HTML semântica + setup | `feat: setup inicial com HTML semântico e estrutura de pastas` |
| 2 | CSS Variables + sistema de temas + glassmorphism | `style: adiciona CSS variables e tema dark neon` |
| 3 | JS: toggle sidebar + active state + tooltips | `feat: adiciona toggle manual e estados ativos` |
| 4 | Responsividade + mobile menu | `feat: torna sidebar responsiva para mobile` |
| 5 | Animações avançadas + micro-interações | `style: aprimora animações e feedback visual` |
| 6 | Acessibilidade (ARIA, keyboard nav) | `chore: melhora acessibilidade e navegação por teclado` |
| 7 | Polish + deploy no GitHub Pages | `docs: finaliza projeto e configura GitHub Pages` |

---

## 📝 Licença

MIT © [Gustavo Oliveira](https://github.com/gustavodeoliveiradev)
