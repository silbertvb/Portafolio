// contact-form.js
// Envía el formulario de contacto a Formspree vía fetch (AJAX) para mostrar
// un mensaje de éxito/error sin sacar al visitante del portafolio.
(() => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');
  const submitBtn = form.querySelector('.btn-enviar');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    submitBtn.disabled = true;
    status.textContent = 'Enviando...';
    status.className = 'form-status form-status--pending';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = '¡Mensaje enviado! Te responderé lo antes posible.';
        status.className = 'form-status form-status--success';
        form.reset();
      } else {
        status.textContent = 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por correo.';
        status.className = 'form-status form-status--error';
      }
    } catch (error) {
      status.textContent = 'Error de conexión. Inténtalo de nuevo o escríbeme directamente por correo.';
      status.className = 'form-status form-status--error';
    } finally {
      submitBtn.disabled = false;
    }
  });
})();

// Botón "copiar email al portapapeles" (fallback cuando mailto: no abre nada
// porque el visitante no tiene un cliente de correo por defecto configurado)
(() => {
  document.querySelectorAll('.btn-copy[data-copy]').forEach((btn) => {
    const defaultLabel = btn.textContent;
    const defaultTooltip = btn.dataset.tooltip;
    let resetTimer = null;

    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        btn.textContent = '✓';
        btn.classList.add('btn-copy--done');
        btn.setAttribute('aria-label', 'Email copiado');
        btn.dataset.tooltip = '¡Copiado!';
      } catch (error) {
        btn.textContent = '✗';
      }

      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        btn.textContent = defaultLabel;
        btn.classList.remove('btn-copy--done');
        btn.setAttribute('aria-label', 'Copiar email al portapapeles');
        btn.dataset.tooltip = defaultTooltip;
      }, 1500);
    });
  });
})();
