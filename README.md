# João Pedro Sandoval Veras — Portfólio

Site pessoal / portfólio, construído como uma SPA em React com roteamento próprio (sem `react-router`), navegação por URL (`/`, `/notas`, `/notas/:slug`, `/projetos/:slug`) e uma command palette (`Ctrl/Cmd + K`).

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Conteúdo do site (perfil, projetos, experiência, notas) centralizado em `src/content/`

## Rodando localmente

```bash
npm install
npm run dev
```

Outros scripts disponíveis:

```bash
npm run build     # build de produção em /dist
npm run preview   # serve o build de produção localmente
npm run lint       # roda o ESLint
npm run format     # formata o código com oxfmt
```

## Estrutura

```
src/
  components/   # componentes de UI, layout e seções da home
  content/      # dados do site (perfil, projetos, experiência, notas) — fonte única de conteúdo
  pages/        # páginas roteadas (home, notas, detalhe de nota, detalhe de projeto)
  types/        # tipagem de navegação (Page, pathToPage, pageToPath)
```

Para atualizar o conteúdo do site (novo projeto, nova nota técnica, dados de contato), edite os arquivos em `src/content/` — nenhum componente precisa ser tocado.

## Formulário de contato

O formulário envia as mensagens via [Formspree](https://formspree.io/). Para ativá-lo:

1. Crie uma conta gratuita em [formspree.io](https://formspree.io/) e crie um formulário.
2. Copie o ID do formulário gerado.
3. Substitua `SEU_FORM_ID` em `src/components/ui/ContactForm.tsx` pelo ID copiado.

## Deploy

O projeto é uma SPA com roteamento via `history.pushState`, então o host precisa redirecionar qualquer rota para `index.html`:

- **Vercel**: já configurado em `vercel.json`.
- **Netlify**: já configurado em `public/_redirects`.

Se usar outro host, configure um rewrite equivalente para evitar 404 em URLs como `/notas/algum-slug` acessadas diretamente.

## SEO

Meta tags (Open Graph, Twitter Card, descrição) e dados estruturados (`schema.org/Person`) estão em `index.html`. Ao trocar de domínio, atualize as URLs em `<link rel="canonical">` e nas tags `og:url` / `og:image` / `twitter:image`.
