// stars.js
(() => {
  const canvas = document.getElementById('stars');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let w, h, dpr;

  // configurar tamaño para pantallas retina
  function resize(){
    dpr = window.devicePixelRatio || 1;
    w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // evita animación si usuario lo prefiere
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (media.matches) {
    canvas.style.display = 'none';
    return;
  }

  // generar estrellas iniciales
  const STARS = [];
  const STAR_COUNT = Math.min(240, Math.floor((window.innerWidth * window.innerHeight) / 3000));

  function rand(min, max){ return Math.random() * (max - min) + min; }

  function createStars(){
    STARS.length = 0;
    for (let i = 0; i < STAR_COUNT; i++){
      STARS.push({
        x: rand(0, w),
        y: rand(0, h),
        r: rand(0.3, 1.3),
        alpha: rand(0.2, 1),
        twinkleSpeed: rand(0.002, 0.01),
        twinklePhase: Math.random() * Math.PI * 2
      });
    }
  }

  // Lista de estrellas fugaces activas
  const comets = [];

  function spawnComet(){
    // spawn desde un borde superior izquierdo hacia la diagonal inferior derecha
    const startX = rand(0, w * 0.4);
    const startY = rand(0, h * 0.3);
    const speed = rand(800, 1600); // px / s
    const angle = rand(18, 35) * (Math.PI / 180); // baja en diagonal
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;

    comets.push({
      x: startX,
      y: startY,
      vx, vy,
      life: 0,
      maxLife: rand(0.6, 1.6),
      length: rand(120, 320),
      alpha: 0.9
    });

    // limita cantidad
    if (comets.length > 5) comets.splice(0, comets.length - 5);
  }

  let last = performance.now();

  function draw(now){
    const dt = (now - last) / 1000; // segundos
    last = now;

    ctx.clearRect(0,0,w,h);

    // pintar estrellas base
    for (let s of STARS){
      s.twinklePhase += s.twinkleSpeed;
      const a = s.alpha * (0.6 + 0.4 * Math.sin(s.twinklePhase));
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // actualizar y pintar cometas (estrellas fugaces)
    for (let i = comets.length -1; i >= 0; i--){
      const c = comets[i];
      c.life += dt;
      c.x += c.vx * dt;
      c.y += c.vy * dt;
      const progress = c.life / c.maxLife;

      // dibuja cola: un gradiente lineal desde transparente a brillante
      const tx = c.x - (c.vx / Math.hypot(c.vx, c.vy)) * c.length;
      const ty = c.y - (c.vy / Math.hypot(c.vx, c.vy)) * c.length;

      ctx.save();
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      const grad = ctx.createLinearGradient(tx, ty, c.x, c.y);
      grad.addColorStop(0, `rgba(255,255,255,${0.0 * (1 - progress)})`);
      grad.addColorStop(0.6, `rgba(255,255,255,${0.08 * (1 - progress)})`);
      grad.addColorStop(1, `rgba(255,255,255,${c.alpha})`);
      ctx.strokeStyle = grad;
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(c.x, c.y);
      ctx.stroke();

      // brillo cabeza
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${c.alpha})`;
      ctx.arc(c.x, c.y, 1.8 + 2 * (1 - progress), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // eliminar si acaba
      if (c.life > c.maxLife || c.x > w + 50 || c.y > h + 50) {
        comets.splice(i,1);
      }
    }

    // aleatoriamente generar una fugaz (probabilidad)
    if (Math.random() < 0.008) spawnComet();

    requestAnimationFrame(draw);
  }

  // inicializar
  function init(){
    resize();
    createStars();
    last = performance.now();
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
    createStars();
  });

  // empezar
  init();
})();