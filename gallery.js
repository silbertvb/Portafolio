// gallery.js
// Lightbox sencillo para mostrar capturas de proyectos como alternativa
// cuando una demo en vivo no está disponible. Los datos de cada galería
// se definen inline en index.html en PROJECT_GALLERIES.
(() => {
  const overlay = document.getElementById('galleryOverlay');
  if (!overlay) return;

  const box = overlay.querySelector('.gallery-box');
  const imagesContainer = overlay.querySelector('.gallery-images');
  const closeBtn = overlay.querySelector('.gallery-close');
  let lastFocused = null;

  function openGallery(galleryId) {
    const items = window.PROJECT_GALLERIES && window.PROJECT_GALLERIES[galleryId];
    if (!items || !items.length) return;

    imagesContainer.innerHTML = '';
    items.forEach((item) => {
      const figure = document.createElement('figure');
      figure.className = 'gallery-item';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || '';

      const figcaption = document.createElement('figcaption');
      figcaption.textContent = item.caption || '';

      figure.appendChild(img);
      figure.appendChild(figcaption);
      imagesContainer.appendChild(figure);
    });

    lastFocused = document.activeElement;
    overlay.hidden = false;
    closeBtn.focus();
    document.addEventListener('keydown', onKeydown);
  }

  function closeGallery() {
    overlay.hidden = true;
    imagesContainer.innerHTML = '';
    document.removeEventListener('keydown', onKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onKeydown(event) {
    if (event.key === 'Escape') closeGallery();
  }

  document.querySelectorAll('[data-gallery]').forEach((trigger) => {
    trigger.addEventListener('click', () => openGallery(trigger.dataset.gallery));
  });

  closeBtn.addEventListener('click', closeGallery);

  overlay.addEventListener('click', (event) => {
    if (!box.contains(event.target)) closeGallery();
  });
})();
