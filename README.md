# Eduardo Moritz — Portfólio

Landing page estática, responsiva e sem dependências. Exatamente três espaços para projetos.

## Publicar gratuitamente

1. Crie um repositório **público** chamado `edumoritz.github.io` na conta `edumoritz`.
2. Extraia o ZIP e envie o conteúdo desta pasta para a raiz do repositório. Inclua `.github/workflows/pages.yml` se publicar pelo Git. Não envie apenas o ZIP.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main` (ou `master`) e pasta `/ (root)`. Salve. Esse método não depende do workflow.
4. Alternativamente, selecione **GitHub Actions** em Settings → Pages e execute o workflow incluído na aba Actions.
5. Aguarde a publicação em `https://edumoritz.github.io/`.

Se usar o repositório `eduardomoritz`, o endereço padrão será `https://edumoritz.github.io/eduardomoritz/`. Todos os caminhos de assets são relativos e funcionam nos dois casos.

## Editar projetos

Abra `projects.js` e edite os três objetos: `title`, `description`, `category`, `image`, `demoUrl` e `repoUrl`. Imagens devem ser colocadas em `assets/`. Links vazios não aparecem. Mantenha `repoUrl` vazio para projetos de código privado; `demoUrl` pode apontar para uma aplicação pública mesmo quando o código é privado.

## Outros ajustes

- Apresentação, experiência e contato: `index.html`.
- Cores e layout: `styles.css`.
- Foto: `assets/eduardo.jpg`.
- Currículo: `assets/curriculo-eduardo-moritz.pdf`. O PDF fornecido é incluído e ficará público após a publicação; revise seus dados de contato antes de divulgar.

Para visualizar, abra `index.html` no navegador ou execute `python3 -m http.server 8000` nesta pasta e acesse localhost:8000.

O botão Copiar e-mail funciona em HTTPS ou localhost; no arquivo local, caso o navegador bloqueie o acesso à área de transferência, a página orienta copiar manualmente.
