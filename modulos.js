function cargarHeader(selector) {
  const el = document.querySelector(selector);
  el.innerHTML = `<h1>Mi Sitio Web</h1>`;
}

function cargarNav(selector) {
  const el = document.querySelector(selector);
  el.innerHTML = `
    <a href="index.html">Inicio</a>
    <a href="pagina2.html">Página 2</a>
    <a href="pagina3.html">Página 3</a>
  `;
}

function cargarFooter(selector) {
  const el = document.querySelector(selector);
  el.innerHTML = `<p>© 2026 - Tarea López</p>`;
}