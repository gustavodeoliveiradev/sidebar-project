<div align="center">

# ⚡ Nexus Sidebar

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Uma sidebar modular, acessível e com design glassmorphism premium.**

[🚀 Ver Demo](https://gustavodeoliveiradev.github.io/sidebar-project/) · [📂 Reportar Bug](https://github.com/gustavodeoliveiradev/sidebar-project/issues) · [💡 Sugerir Feature](https://github.com/gustavodeoliveiradev/sidebar-project/issues)

</div>

---

## 📸 Preview

<div align="center">
  <img src="/img/img-1.png" alt="Preview da Sidebar" width="100%">
  <img src="/img/img-2.png" alt="Preview da Sidebar" width="100%">
  <img src="/img/img-3.png" alt="Preview da Sidebar" width="100%">
  <img src="/img/img-4.png" alt="Preview da Sidebar" width="100%">
  <img src="/img/img-5.png" alt="Preview da Sidebar" width="100%">
</div>

---

## ✨ Features

- 🎨 **5 Temas Dinâmicos**: Dark Neon, Cyberpunk, Sunset Pastel, Forest Minimal e Ocean Deep
- 🪟 **Glassmorphism Premium**: Efeito de vidro fosco com `backdrop-filter`
- 📱 **100% Responsivo**: Drawer mobile com overlay e bloqueio de scroll
- ⌨️ **Acessibilidade Total**: Navegação por teclado (Tab, Setas, Home, End, ESC)
- 💾 **Persistência Local**: Tema e estado da sidebar salvos no `localStorage`
- 🎯 **Micro-interações**: Tooltips, ripple effect, pulse animations e transições suaves
- 🏗️ **Arquitetura Modular**: CSS e JS separados por responsabilidade
- 🔊 **ARIA Labels**: Compatível com leitores de tela

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| HTML5 Semântico | Estrutura acessível com `<aside>`, `<nav>`, `<main>` |
| CSS3 Moderno | Variables, Grid, Flexbox, `clamp()`, `backdrop-filter` |
| JavaScript ES6+ | Módulos (import/export), DOM, localStorage |
| Font Awesome 6 | Ícones vetoriais escaláveis |
| Google Fonts (Inter) | Tipografia moderna e legível |

---

## 📁 Estrutura do Projeto

```
sidebar-project/
├── index.html          # Estrutura semântica
├── README.md           # Documentação
├── .gitignore          # Arquivos ignorados pelo Git
├── img/
│   ├── img-1        # Dark Neon demo
│   ├── img-2        # Cyberpunk demo
│   ├── img-3        # Sunset Pastel demo
│   ├── img-4        # Forest Minimal demo
│   └── img-5        # Ocean Deep demo
├── css/
│   ├── base.css        # Reset, variáveis globais, acessibilidade
│   ├── layout.css      # Estrutura da sidebar e responsividade
│   ├── components.css  # Componentes visuais (links, badges, tooltips)
│   └── themes.css      # Sistema de 5 temas com CSS Variables
└── js/
    ├── main.js         # Orquestrador principal
    ├── toggle.js       # Lógica de expandir/colapsar
    ├── theme.js        # Troca cíclica de temas
    ├── mobile.js       # Menu mobile (drawer + overlay)
    ├── a11y.js         # Navegação por teclado
    └── utils.js        # Helpers (localStorage, query selectors)
```

---

## 🚀 Instalação e Uso

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- **Importante**: Use um servidor local (ES Modules não funcionam via `file://`)

### Opção 1: Live Server (VS Code)
1. Instale a extensão **Live Server** no VS Code
2. Abra o `index.html`
3. Clique com o botão direito → **"Open with Live Server"**

### Opção 2: Terminal
```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve

# Com PHP
php -S localhost:8000
```
Acesse `http://localhost:8000` no navegador.

---

## 🎨 Temas Disponíveis

| Tema | Cor Principal | Vibe |
|------|---------------|------|
| 🌑 Dark Neon | `#00eeff` | Futurista, tech |
| 🌸 Cyberpunk | `#ff1493` | Retrô-futurista |
| 🌅 Sunset Pastel | `#ffb7c5` | Suave, elegante |
| 🌲 Forest Minimal | `#90ee90` | Natural, clean |
| 🌊 Ocean Deep | `#00bfff` | Profundo, sereno |

---

## ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Navegar entre elementos focáveis |
| `Enter` / `Espaço` | Ativar link/botão focado |
| `⬇️` | Próximo item do menu |
| `⬆️` | Item anterior do menu |
| `Home` | Ir para o primeiro item |
| `End` | Ir para o último item |
| `ESC` | Fechar menu mobile |

---

## 📅 Desenvolvimento (7 Dias, 7 Commits)

Este projeto foi construído seguindo a metodologia de 1 commit por dia:

| Dia | Foco | Commit |
|-----|------|--------|
| 1 | Estrutura HTML semântica | `feat: setup inicial com HTML semântico e estrutura de pastas` |
| 2 | CSS Variables + temas | `style: adiciona CSS variables e tema dark neon` |
| 3 | Layout + componentes | `style: adiciona layout da sidebar com glassmorphism e componentes visuais` |
| 4 | JavaScript modular | `feat: adiciona lógica modular de toggle, troca de temas e estado ativo com localStorage` |
| 5 | Responsividade mobile | `feat: implementa menu mobile responsivo com drawer, overlay e bloqueio de scroll` |
| 6 | Acessibilidade (A11y) | `feat: implementa acessibilidade (navegação por teclado, focus-visible, aria-current) e polish visual` |
| 7 | README + Deploy | `docs: finaliza projeto e configura GitHub Pages` |

---

## 🌐 Deploy

Este projeto está hospedado no **GitHub Pages**:

👉 **[Ver ao vivo](https://gustavodeoliveiradev.github.io/sidebar-project)**

### Como fazer seu próprio deploy:
1. Crie um repositório no GitHub
2. Envie os arquivos: `git push origin main`
3. Vá em **Settings → Pages**
4. Em "Source", selecione a branch `main` e pasta `/` (root)
5. Clique em **Save** e aguarde 1-2 minutos

Seu site estará em: `https://gustavodeoliveiradev.github.io/sidebar-project`

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
- Abrir uma issue para reportar bugs
- Fazer um fork e enviar um pull request
- Sugerir novos temas ou features

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<div align="center">

Feito com 💙 por [Gustavo Oliveira](https://github.com/gustavodeoliveiradev)

⭐ Se esse projeto te ajudou, deixa uma star no repositório!

</div>
