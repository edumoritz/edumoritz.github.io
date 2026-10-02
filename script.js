(() => {
  const validUrl = value => { try { return ['https:', 'http:'].includes(new URL(value).protocol); } catch { return false; } };
  const list = document.getElementById('project-list');
  (window.PORTFOLIO_PROJECTS || []).slice(0, 3).forEach((project, index) => {
    const card = document.createElement('article'); card.className = 'project-card';
    const visual = document.createElement('div'); visual.className = 'project-visual';
    if (project.image) { const img = document.createElement('img'); img.className = 'project-image'; img.src = project.image; img.alt = project.title; img.loading = 'lazy'; visual.append(img); }
    else { const number = document.createElement('span'); number.className = 'project-number'; number.textContent = String(index + 1).padStart(2, '0'); number.setAttribute('aria-hidden', 'true'); visual.append(number); }
    const body = document.createElement('div'); body.className = 'project-body';
    const category = document.createElement('span'); category.className = 'project-meta'; category.textContent = project.category;
    const title = document.createElement('h3'); title.textContent = project.title;
    const description = document.createElement('p'); description.textContent = project.description;
    const footer = document.createElement('div'); footer.className = 'project-footer';
    [['demoUrl', 'Ver demonstração'], ['repoUrl', 'Ver código']].forEach(([key, label]) => {
      if (!validUrl(project[key])) return;
      const link = document.createElement('a'); link.href = project[key]; link.textContent = label; link.target = '_blank'; link.rel = 'noopener noreferrer'; footer.append(link);
    });
    if (!footer.children.length) { const status = document.createElement('span'); status.textContent = 'Apresentação em breve'; footer.append(status); }
    body.append(category, title, description, footer); card.append(visual, body); list.append(card);
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('copy-email').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try { await navigator.clipboard.writeText('eduardomoritz89@gmail.com'); status.textContent = 'E-mail copiado.'; }
    catch { status.textContent = 'Copie o endereço acima ou clique para abrir seu e-mail.'; }
  });
})();
