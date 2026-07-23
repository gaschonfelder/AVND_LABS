const WHATSAPP_NUMBER = '5511999999999';

const services = [
  {
    title: 'Recuperação de Rodas',
    desc: 'Desempeno e remoção de amassados, devolvendo o alinhamento original da roda.',
  },
  {
    title: 'Pintura e Restauração',
    desc: 'Pintura e restauração de rodas de liga leve com acabamento de fábrica.',
  },
  {
    title: 'Balanceamento e Alinhamento',
    desc: 'Rodagem suave e segura, sem vibrações ou desgaste irregular do pneu.',
  },
  {
    title: 'Troca de Pneus',
    desc: 'Pneus novos das principais marcas, com montagem e calibragem incluídas.',
  },
];

const testimonials = [
  {
    name: 'Jean Carlos',
    service: '',
    rating: 5,
    text: 'Bom atendimento e honestidade com o serviço.',
  },
  {
    name: 'Andre Torres',
    service: 'Desempeno de roda',
    rating: 5,
    text: 'O meu problema só foi sanado por ele, levei em outra oficina para desempeno da roda, voltou a mesma coisa. Meu mecânico indicou eles, levei lá e a roda ficou zero.',
  },
  {
    name: 'Jefferson Vitalino',
    service: 'Recuperação de rodas e troca de pneus',
    rating: 5,
    text: 'Ótimo atendimento e preço justo. Recuperei as rodas e troquei os pneus, pessoal não fica inventando, indico!',
  },
  {
    name: 'Ricardo Martins',
    service: 'Reforma de rodas',
    rating: 5,
    text: 'Top demais. As rodas novas, de novo. Reforma nota 10... atendimento nota 10!!!',
  },
  {
    name: 'José Lucas Da Silva',
    service: 'Instalação de rodas',
    rating: 5,
    text: 'Levei as 17 do meu Palio para instalar, serviço de qualidade e rápido, ficou muito top, recomendo a Foguinho Rodas!!!',
  },
];

const BRANDS = [
  'Chevrolet',
  'Volkswagen',
  'Fiat',
  'Ford',
  'Toyota',
  'Honda',
  'Hyundai',
  'Renault',
  'Nissan',
  'Jeep',
  'Peugeot',
  'Citroën',
];

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderBrands() {
  const srList = document.getElementById('brands-sr-list');
  const track = document.getElementById('brands-ticker-track');
  if (!srList || !track) return;

  srList.innerHTML = BRANDS.map((b) => `<li>${escapeHtml(b)}</li>`).join('');

  const itemsHtml = BRANDS.map(
    (b) => `<div class="brand-chip">${escapeHtml(b)}</div>`,
  ).join('');
  // Duplicado dentro da MESMA track: a animação desloca -50% da largura total
  // (que já contém as duas cópias), fechando o loop sem salto.
  track.innerHTML = itemsHtml + itemsHtml;
}

function waLink(title) {
  const text = encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento para: ' + title,
  );
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text;
}

function renderServices() {
  const grid = document.getElementById('services-grid');
  grid.innerHTML = services
    .map(
      (s) => `
    <div class="service-card">
      <div class="service-icon"></div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a class="service-link" href="${waLink(s.title)}" target="_blank" rel="noopener">Solicitar orçamento →</a>
    </div>
  `,
    )
    .join('');
}

/* MENU MOBILE */
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const closeBtn = document.getElementById('close-menu');
  const menu = document.getElementById('mobile-menu');

  const open = () => menu.classList.add('open');
  const close = () => menu.classList.remove('open');

  hamburger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
}

/* SLIDER ANTES / DEPOIS */
function setupSlider() {
  const slider = document.getElementById('slider');
  const before = document.getElementById('slider-before');
  const handle = document.getElementById('slider-handle');
  let dragging = false;

  const update = (clientX) => {
    const rect = slider.getBoundingClientRect();
    const pct = Math.min(
      100,
      Math.max(0, ((clientX - rect.left) / rect.width) * 100),
    );
    before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = pct + '%';
  };

  slider.addEventListener('pointerdown', (e) => {
    dragging = true;
    slider.setPointerCapture(e.pointerId);
    update(e.clientX);
  });
  slider.addEventListener('pointermove', (e) => {
    if (dragging) update(e.clientX);
  });
  slider.addEventListener('pointerup', () => {
    dragging = false;
  });
  slider.addEventListener('pointercancel', () => {
    dragging = false;
  });
}

const STAR_PATH =
  'M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-4-6.3 4 1.7-7L2 9.5l7.1-.6z';

function starsHtml(rating) {
  return [0, 1, 2, 3, 4]
    .map(
      (i) =>
        `<svg viewBox="0 0 24 24" class="star${i < rating ? ' star-filled' : ''}"><path d="${STAR_PATH}"/></svg>`,
    )
    .join('');
}

// -webkit-line-clamp sizes the box to fit the clamp, so scrollHeight === clientHeight
// on the element itself even when text is cut. Measure an unclamped clone instead.
function isTextClamped(el) {
  const clone = el.cloneNode(true);
  clone.style.cssText = `position:absolute; visibility:hidden; height:auto; left:-9999px;
    top:0; width:${el.clientWidth}px; -webkit-line-clamp:unset; display:block; overflow:visible;`;
  document.body.appendChild(clone);
  const naturalHeight = clone.scrollHeight;
  document.body.removeChild(clone);
  return naturalHeight > el.clientHeight + 1;
}

/* CARROSSEL DE DEPOIMENTOS */
function setupTestimonials() {
  const starsEl = document.getElementById('testimonial-stars');
  const textEl = document.getElementById('testimonial-text');
  const textWrapEl = document.getElementById('testimonial-text-wrap');
  const nameEl = document.getElementById('testimonial-name');
  const serviceEl = document.getElementById('testimonial-service');
  const dotsEl = document.getElementById('testimonial-dots');
  const readMoreBtn = document.getElementById('testimonial-readmore');

  const modal = document.getElementById('testimonial-modal');
  const modalBackdrop = document.getElementById('testimonial-modal-backdrop');
  const modalClose = document.getElementById('testimonial-modal-close');
  const modalStars = document.getElementById('modal-stars');
  const modalText = document.getElementById('modal-text');
  const modalName = document.getElementById('modal-name');
  const modalService = document.getElementById('modal-service');

  let index = 0;
  let interval;

  function render() {
    const t = testimonials[index];
    starsEl.innerHTML = starsHtml(t.rating);
    textEl.textContent = `"${t.text}"`;
    nameEl.textContent = t.name;
    serviceEl.textContent = t.service;

    const clamped = isTextClamped(textEl);
    readMoreBtn.hidden = !clamped;
    textWrapEl.classList.toggle('is-clamped', clamped);

    dotsEl.innerHTML = testimonials
      .map(
        (_, i) =>
          `<button data-index="${i}" style="background:${i === index ? '#f6b900' : '#3a352a'}"></button>`,
      )
      .join('');

    dotsEl.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        index = Number(btn.dataset.index);
        render();
        resetInterval();
      });
    });
  }

  function next() {
    index = (index + 1) % testimonials.length;
    render();
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(next, 5500);
  }

  function openModal() {
    const t = testimonials[index];
    modalStars.innerHTML = starsHtml(t.rating);
    modalText.textContent = `"${t.text}"`;
    modalName.textContent = t.name;
    modalService.textContent = t.service;
    modal.hidden = false;
    clearInterval(interval);
  }

  function closeModal() {
    modal.hidden = true;
    resetInterval();
  }

  readMoreBtn.addEventListener('click', openModal);
  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  render();
  resetInterval();
}

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderBrands();
  setupMobileMenu();
  setupSlider();
  setupTestimonials();
});
