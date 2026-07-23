// ==========================================================================
// Fundo de partículas 3D do Hero — alterna entre 3 formas a cada volta
// completa: navegador (</>), globo (continentes reais) e átomo. Tudo
// desenhado em vetor (canvas), sem imagens embutidas.
//
// Cor das partículas em rgb (sem alpha) — usa o acento teal do site.
// Troque só esse valor se quiser outra cor (ex: '127, 90, 240' pra roxo).
const PARTICLE_COLOR = '45, 216, 197';

const EARTH_POINTS_URL = 'data/earth-points.json';

function initHeroParticles() {
  const hero = document.getElementById('hero');
  const canvas = document.getElementById('hero-particles');
  if (!hero || !canvas) return;

  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 640px)').matches;

  const fLen = 320;
  const zMax = fLen - 2;
  const baseTurnSpeed = (2 * Math.PI) / 2400;
  const speedMultiplier = 3;

  let width = 0;
  let height = 0;
  let projCenterX = 0;
  let projCenterY = 0;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    projCenterX = width / 2;
    projCenterY = height / 2;
  }

  // ---- amostra um desenho vetorial num canvas invisível e extrai pontos ----
  function pointsFromDrawing(drawFn, step) {
    const off = document.createElement('canvas');
    off.width = width;
    off.height = height;
    const offCtx = off.getContext('2d');
    drawFn(offCtx, off.width / 2, off.height / 2);

    const imgData = offCtx.getImageData(0, 0, off.width, off.height).data;
    const points = [];
    for (let y = 0; y < off.height; y += step) {
      for (let x = 0; x < off.width; x += step) {
        const alpha = imgData[(y * off.width + x) * 4 + 3];
        if (alpha > 128) {
          points.push({
            x: x - off.width / 2,
            y: y - off.height / 2,
            z: (Math.random() - 0.5) * 60,
          });
        }
      }
    }
    return points;
  }

  // ---- forma 1: janela de navegador com </> ----
  function drawBrowser(offCtx, cx, cy) {
    const boxW = Math.min(420, width * 0.6);
    const boxH = boxW * (280 / 420);
    const left = cx - boxW / 2;
    const top = cy - boxH / 2;
    const radius = 20;
    const barH = boxH * 0.2;

    offCtx.strokeStyle = '#fff';
    offCtx.fillStyle = '#fff';
    offCtx.lineWidth = 14;
    offCtx.lineJoin = 'round';

    offCtx.beginPath();
    offCtx.moveTo(left + radius, top);
    offCtx.arcTo(left + boxW, top, left + boxW, top + boxH, radius);
    offCtx.arcTo(left + boxW, top + boxH, left, top + boxH, radius);
    offCtx.arcTo(left, top + boxH, left, top, radius);
    offCtx.arcTo(left, top, left + boxW, top, radius);
    offCtx.closePath();
    offCtx.stroke();

    const barY = top + barH;
    offCtx.beginPath();
    offCtx.moveTo(left, barY);
    offCtx.lineTo(left + boxW, barY);
    offCtx.stroke();

    const dotY = top + barH / 2;
    [0, 1, 2].forEach((i) => {
      offCtx.beginPath();
      offCtx.arc(left + 34 + i * 32, dotY, 8, 0, Math.PI * 2);
      offCtx.fill();
    });

    offCtx.font = `bold ${Math.round(boxH * 0.32)}px system-ui, sans-serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText('</>', cx, barY + (boxH - barH) / 2 + 6);
  }

  // ---- forma 3: átomo, desenhado em vetor (núcleo + 3 órbitas inclinadas) ----
  function drawAtom(offCtx, cx, cy) {
    offCtx.strokeStyle = '#fff';
    offCtx.fillStyle = '#fff';
    offCtx.lineWidth = 10;

    const orbitX = Math.min(170, width * 0.24);
    const orbitY = orbitX * (62 / 170);

    [-0.6, 0, 0.6].forEach((rotation) => {
      offCtx.beginPath();
      offCtx.ellipse(cx, cy, orbitX, orbitY, rotation, 0, Math.PI * 2);
      offCtx.stroke();
    });

    offCtx.beginPath();
    offCtx.arc(cx, cy, 26, 0, Math.PI * 2);
    offCtx.fill();
  }

  function padTo(arr, len) {
    if (!arr.length) return Array.from({ length: len }, () => ({ x: 0, y: 0, z: 0 }));
    return Array.from({ length: len }, (_, i) => arr[i % arr.length]);
  }

  function sample(arr, everyNth) {
    if (everyNth <= 1) return arr;
    return arr.filter((_, i) => i % everyNth === 0);
  }

  async function loadEarthPoints() {
    const response = await fetch(EARTH_POINTS_URL);
    const raw = await response.json();
    return raw.map(([x, y, z]) => ({ x, y, z }));
  }

  let particles = [];
  let paddedSets = [];
  let shapeIndex = 0;
  let totalAngle = 0;
  let lastLap = 0;
  let rafId = null;
  let running = false;

  function applyShape(index) {
    for (let i = 0; i < particles.length; i++) {
      const t = paddedSets[index][i];
      particles[i].tx = t.x;
      particles[i].ty = t.y;
      particles[i].tz = t.z;
    }
  }

  function renderStatic() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      const m = fLen / (fLen - p.z);
      const projX = p.x * m + projCenterX;
      const projY = p.y * m + projCenterY;
      ctx.beginPath();
      ctx.arc(projX, projY, Math.max(0.6, m * 1.4), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${PARTICLE_COLOR}, 0.6)`;
      ctx.fill();
    }
  }

  function frame() {
    if (!running) return;

    const turnSpeed = baseTurnSpeed * speedMultiplier;
    totalAngle += turnSpeed;
    const lap = Math.floor(totalAngle / (2 * Math.PI));
    if (lap !== lastLap) {
      lastLap = lap;
      shapeIndex = (shapeIndex + 1) % paddedSets.length;
      applyShape(shapeIndex);
    }

    const turnAngle = totalAngle % (2 * Math.PI);
    const sinAngle = Math.sin(turnAngle);
    const cosAngle = Math.cos(turnAngle);

    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += (p.tx - p.x) * p.ease;
      p.y += (p.ty - p.y) * p.ease;
      p.z += (p.tz - p.z) * p.ease;

      const rotX = cosAngle * p.x + sinAngle * p.z;
      const rotZ = -sinAngle * p.x + cosAngle * p.z;
      if (rotZ > zMax) continue;

      const m = fLen / (fLen - rotZ);
      const projX = rotX * m + projCenterX;
      const projY = p.y * m + projCenterY;
      const depthAlpha = Math.max(0.1, Math.min(0.75, 0.75 - rotZ / 350));

      ctx.beginPath();
      ctx.arc(projX, projY, Math.max(0.6, m * 1.3), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${depthAlpha})`;
      ctx.fill();
    }

    rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (running || prefersReducedMotion) return;
    running = true;
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  async function setup() {
    resize();

    const step = isMobile ? 6 : 3;
    const targetBrowser = pointsFromDrawing(drawBrowser, step);
    const targetAtom = pointsFromDrawing(drawAtom, step);

    let earthPoints;
    try {
      earthPoints = await loadEarthPoints();
    } catch (err) {
      earthPoints = targetBrowser; // fallback silencioso se o fetch falhar (ex: aberto via file://)
    }
    const targetGlobe = sample(earthPoints, isMobile ? 4 : 1).map((p) => ({
      x: (p.x / 170) * Math.min(160, width * 0.22),
      y: (p.y / 170) * Math.min(160, width * 0.22),
      z: p.z,
    }));

    const maxLen = Math.max(targetBrowser.length, targetAtom.length, targetGlobe.length);
    paddedSets = [padTo(targetBrowser, maxLen), padTo(targetGlobe, maxLen), padTo(targetAtom, maxLen)];

    particles = Array.from({ length: maxLen }, (_, i) => {
      const t = paddedSets[0][i];
      return {
        x: (Math.random() - 0.5) * width * 1.4,
        y: (Math.random() - 0.5) * height * 1.4,
        z: (Math.random() - 0.5) * 400,
        tx: t.x,
        ty: t.y,
        tz: t.z,
        ease: 0.03 + Math.random() * 0.03,
      };
    });

    if (prefersReducedMotion) {
      // Forma estática (navegador), sem rotação nem migração de partículas.
      particles.forEach((p) => {
        p.x = p.tx;
        p.y = p.ty;
        p.z = p.tz;
      });
      renderStatic();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) start();
          else stop();
        });
      },
      { threshold: 0.01 }
    );
    observer.observe(hero);
  }

  window.addEventListener('resize', resize);

  setup();
}

document.addEventListener('DOMContentLoaded', initHeroParticles);
