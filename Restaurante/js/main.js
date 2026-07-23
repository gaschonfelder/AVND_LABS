/* ============================================================================
   GULA-GULA — main.js
   Site renderizado inteiramente a partir dos dados abaixo. Edite este topo
   do arquivo para trocar textos, preços, fotos, contatos etc.

   PLACEHOLDERS QUE PRECISAM SER SUBSTITUÍDOS ANTES DE PUBLICAR:
   1. WHATSAPP_NUMBER        -> número real, formato internacional (DDI+DDD+número, só dígitos)
   2. RESTAURANT.phoneDisplay -> telefone formatado para exibição
   3. RESTAURANT.address      -> endereço real do restaurante
   4. RESTAURANT.instagramUrl e RESTAURANT.facebookUrl -> links reais das redes sociais
   5. index.html -> src do <iframe> do Google Maps (procure o comentário no footer)
   6. Todas as imagens em /images/ (hero-1..4, prato-1..8, ambiente-1..2, equipe-1..2,
      logo) são placeholders em SVG. Substitua pelos arquivos reais mantendo os
      mesmos nomes (ou ajuste o caminho "src" nos objetos abaixo se mudar a extensão).
   7. ABOUT_PARAGRAPHS -> texto institucional real sobre a casa
   8. TESTIMONIALS -> depoimentos reais de clientes
   9. MENU_ITEMS -> pratos, descrições e preços reais do cardápio
   10. OPENING_HOURS -> horário de funcionamento real
   ============================================================================ */

const WHATSAPP_NUMBER = '5515999999999'; // TODO: substituir pelo número real (ex: 55 15 99999-9999 -> "5515999999999")

const RESTAURANT = {
  name: 'Gula-Gula',
  phoneDisplay: '(15) 99999-9999', // TODO: telefone real
  address: 'Rua Exemplo, 123 – Centro, Sorocaba/SP – CEP 18000-000', // TODO: endereço real
  instagramUrl: 'https://instagram.com/', // TODO: link real do Instagram
  facebookUrl: 'https://facebook.com/', // TODO: link real do Facebook
};

const HERO_SLIDES = [
  {
    src: 'images/hero-1.webp',
    alt: 'Ambiente interno aconchegante do restaurante Gula-Gula',
  },
  { src: 'images/hero-2.webp', alt: 'Pratos especiais servidos no Gula-Gula' },
  {
    src: 'images/hero-3.webp',
    alt: 'Salão do restaurante Gula-Gula em Sorocaba',
  },
  { src: 'images/hero-4.webp', alt: 'Bar e adega do Gula-Gula' },
];

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Risoto de Funghi',
    description:
      'Arbóreo cremoso com mix de cogumelos frescos e toque de trufa.',
    price: 'R$ 68,00',
    image: 'images/prato-1.webp',
    alt: 'Risoto de funghi com cogumelos',
  },
  {
    id: 2,
    name: 'Filé ao Molho Madeira',
    description: 'Medalhão grelhado no ponto, molho madeira e purê rústico.',
    price: 'R$ 79,00',
    image: 'images/prato-2.webp',
    alt: 'Filé ao molho madeira com purê',
  },
  {
    id: 3,
    name: 'Camarão na Moranga',
    description: 'Camarões salteados em creme especial, servidos na moranga.',
    price: 'R$ 89,00',
    image: 'images/prato-3.webp',
    alt: 'Camarão na moranga',
  },
  {
    id: 4,
    name: 'Massa Fresca ao Sugo',
    description:
      'Talharim artesanal, molho de tomate italiano e manjericão fresco.',
    price: 'R$ 54,00',
    image: 'images/prato-4.webp',
    alt: 'Massa fresca ao molho sugo',
  },
  {
    id: 5,
    name: 'Salmão Grelhado',
    description:
      'Filé de salmão grelhado, legumes salteados e molho de maracujá.',
    price: 'R$ 82,00',
    image: 'images/prato-5.webp',
    alt: 'Salmão grelhado com legumes',
  },
  {
    id: 6,
    name: 'Bruschetta da Casa',
    description:
      'Pão italiano tostado, tomate confit, manjericão e queijo coalho.',
    price: 'R$ 32,00',
    image: 'images/prato-6.webp',
    alt: 'Bruschetta da casa',
  },
  {
    id: 7,
    name: 'Picanha na Brasa',
    description: 'Corte nobre grelhado no ponto, farofa crocante e vinagrete.',
    price: 'R$ 96,00',
    image: 'images/prato-7.webp',
    alt: 'Picanha na brasa',
  },
  {
    id: 8,
    name: 'Petit Gâteau',
    description:
      'Bolo quente de chocolate com recheio cremoso e sorvete de creme.',
    price: 'R$ 28,00',
    image: 'images/prato-8.webp',
    alt: 'Petit gâteau com sorvete',
  },
];

const ABOUT_PARAGRAPHS = [
  'O Gula-Gula nasceu do desejo de trazer para Sorocaba uma cozinha que une técnica apurada e o afeto da comida caseira. Cada prato do nosso cardápio carrega histórias de família e ingredientes escolhidos a dedo em produtores da região.',
  'Nosso salão foi pensado para ser um convite ao encontro: mesas próximas, iluminação quente e aquele barulho gostoso de gente feliz jantando bem. Seja em uma noite a dois ou em um almoço em família, o Gula-Gula é feito para ser lembrado.',
  'Acreditamos que restaurante bom é aquele em que o cliente entra como visita e sai como amigo. É por isso que cuidamos de cada detalhe, do tempero ao atendimento, para que sua experiência seja sempre completa.',
];

const ABOUT_IMAGES = [
  {
    src: 'images/ambiente-1.webp',
    alt: 'Ambiente interno do restaurante Gula-Gula',
  },
  { src: 'images/ambiente-2.webp', alt: 'Área externa e varanda do Gula-Gula' },
  { src: 'images/equipe-1.webp', alt: 'Equipe da cozinha do Gula-Gula' },
  { src: 'images/equipe-2.webp', alt: 'Equipe de salão do Gula-Gula' },
];

const TESTIMONIALS = [
  {
    name: 'Mariana Silva',
    text: 'Lugar incrível! O risoto de funghi é de outro mundo e o atendimento foi impecável do início ao fim.',
    rating: 5,
  },
  {
    name: 'Carlos Eduardo',
    text: 'Ambiente aconchegante e comida de altíssimo nível. Já virou point fixo para os jantares em família.',
    rating: 5,
  },
  {
    name: 'Fernanda Alves',
    text: 'A picanha na brasa é sensacional e o petit gâteau fecha a noite com chave de ouro. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Rodrigo Nunes',
    text: 'Fui surpreendido pelo cuidado no atendimento e pela qualidade dos pratos. Voltarei com certeza.',
    rating: 4,
  },
];

const OPENING_HOURS = [
  { day: 'Segunda-feira', hours: 'Fechado' },
  { day: 'Terça a Sexta', hours: '11h30 – 15h / 18h30 – 23h' },
  { day: 'Sábado', hours: '11h30 – 23h' },
  { day: 'Domingo', hours: '11h30 – 17h' },
];

/* ============================================================================
   WhatsApp — link único usado em todos os botões do site
   ============================================================================ */
function buildWhatsAppLink(message) {
  const text =
    message || `Olá! Gostaria de mais informações sobre o ${RESTAURANT.name}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function applyWhatsAppLinks() {
  document.querySelectorAll('[data-wa-btn]').forEach((el) => {
    el.setAttribute(
      'href',
      buildWhatsAppLink(el.getAttribute('data-wa-message')),
    );
  });
}

/* ============================================================================
   Header: sticky blur + menu hambúrguer/drawer
   ============================================================================ */
function initHeader() {
  const header = document.getElementById('site-header');
  const toggleScrolled = () =>
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  toggleScrolled();
  window.addEventListener('scroll', toggleScrolled, { passive: true });

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const navList = document.getElementById('nav-list');
  const overlay = document.getElementById('nav-overlay');

  const openNav = () => {
    nav.classList.add('is-open');
    overlay.classList.add('is-visible');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Fechar menu');
  };
  const closeNav = () => {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menu');
  };

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open');
    isOpen ? closeNav() : openNav();
  });
  overlay.addEventListener('click', closeNav);
  navList
    .querySelectorAll('a')
    .forEach((link) => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

/* ============================================================================
   Scroll suave com offset do header sticky
   ============================================================================ */
function initSmoothScroll() {
  const header = document.getElementById('site-header');
  document
    .querySelectorAll('a[href^="#"]:not([data-wa-btn])')
    .forEach((link) => {
      link.addEventListener('click', (e) => {
        const hash = link.getAttribute('href');
        const target = hash.length > 1 ? document.querySelector(hash) : null;
        if (!target) return;
        e.preventDefault();
        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          header.offsetHeight -
          10;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
}

/* ============================================================================
   Hero — carrossel de imagens de fundo com fade e dots
   ============================================================================ */
function initHeroCarousel() {
  const slidesWrap = document.getElementById('hero-slides');
  const dotsWrap = document.getElementById('hero-dots');
  const hero = document.getElementById('hero');

  slidesWrap.innerHTML = HERO_SLIDES.map(
    (slide, i) => `
    <div class="hero__slide${i === 0 ? ' is-active' : ''}" style="background-image:url('${slide.src}')" role="img" aria-label="${slide.alt}"></div>
  `,
  ).join('');

  dotsWrap.innerHTML = HERO_SLIDES.map(
    (_, i) => `
    <button class="hero__dot${i === 0 ? ' is-active' : ''}" role="tab" aria-label="Ver imagem ${i + 1}" aria-selected="${i === 0}" data-index="${i}"></button>
  `,
  ).join('');

  const slideEls = Array.from(slidesWrap.querySelectorAll('.hero__slide'));
  const dotEls = Array.from(dotsWrap.querySelectorAll('.hero__dot'));
  let current = 0;
  let timer = null;

  function show(index) {
    slideEls[current].classList.remove('is-active');
    dotEls[current].classList.remove('is-active');
    dotEls[current].setAttribute('aria-selected', 'false');
    current = (index + HERO_SLIDES.length) % HERO_SLIDES.length;
    slideEls[current].classList.add('is-active');
    dotEls[current].classList.add('is-active');
    dotEls[current].setAttribute('aria-selected', 'true');
  }

  function start() {
    stop();
    timer = setInterval(() => show(current + 1), 5000);
  }
  function stop() {
    if (timer) clearInterval(timer);
  }

  dotEls.forEach((dot) => {
    dot.addEventListener('click', () => {
      show(Number(dot.dataset.index));
      start();
    });
  });

  hero.addEventListener('mouseenter', stop);
  hero.addEventListener('mouseleave', start);

  start();
}

/* ============================================================================
   Cardápio — slider horizontal com loop infinito + drag/swipe
   ============================================================================ */
function initMenuSlider() {
  const track = document.getElementById('menu-track');
  const viewport = document.getElementById('menu-viewport');
  const btnPrev = document.getElementById('menu-prev');
  const btnNext = document.getElementById('menu-next');

  const total = MENU_ITEMS.length;
  const extended = [...MENU_ITEMS, ...MENU_ITEMS, ...MENU_ITEMS];

  track.innerHTML = extended
    .map(
      (item) => `
    <li class="menu-card">
      <div class="menu-card__img-wrap">
        <img class="menu-card__img" src="${item.image}" alt="${item.alt}" width="600" height="450" loading="lazy" decoding="async">
      </div>
      <div class="menu-card__body">
        <h3 class="menu-card__name">${item.name}</h3>
        <p class="menu-card__desc">${item.description}</p>
        <p class="menu-card__price">${item.price}</p>
      </div>
    </li>
  `,
    )
    .join('');

  let cardWidth = 0;
  let currentIndex = total; // começa no início da cópia do meio
  let isAnimating = false;
  let isDragging = false;
  let dragStartX = 0;
  let dragBaseTranslate = 0;

  function measure() {
    const firstCard = track.children[0];
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    cardWidth = firstCard.getBoundingClientRect().width + gap;
  }

  function setTransform(x, animate) {
    track.classList.toggle('is-animating', animate);
    track.style.transform = `translateX(${x}px)`;
  }

  function goTo(index, animate = true) {
    currentIndex = index;
    isAnimating = animate;
    setTransform(-currentIndex * cardWidth, animate);
  }

  function next() {
    if (isAnimating) return;
    goTo(currentIndex + 1);
  }
  function prev() {
    if (isAnimating) return;
    goTo(currentIndex - 1);
  }

  track.addEventListener('transitionend', () => {
    isAnimating = false;
    if (currentIndex >= total * 2) {
      goTo(currentIndex - total, false);
    } else if (currentIndex < total) {
      goTo(currentIndex + total, false);
    }
  });

  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);

  // Drag / swipe
  function dragStart(clientX) {
    isDragging = true;
    isAnimating = false;
    dragStartX = clientX;
    dragBaseTranslate = -currentIndex * cardWidth;
    track.classList.add('is-dragging');
    track.classList.remove('is-animating');
  }
  function dragMove(clientX) {
    if (!isDragging) return;
    const delta = clientX - dragStartX;
    track.style.transform = `translateX(${dragBaseTranslate + delta}px)`;
  }
  function dragEnd(clientX) {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('is-dragging');
    const delta = clientX - dragStartX;
    const moved = Math.round(-delta / cardWidth);
    if (moved === 0) {
      // Sem deslocamento real (clique/toque simples): não usa transição,
      // pois um transform sem mudança de valor nunca dispara 'transitionend'
      // e deixaria isAnimating travado em true, bloqueando as setas.
      setTransform(-currentIndex * cardWidth, false);
      return;
    }
    goTo(currentIndex + moved);
  }

  track.addEventListener('pointerdown', (e) => {
    track.setPointerCapture(e.pointerId);
    dragStart(e.clientX);
  });
  track.addEventListener('pointermove', (e) => dragMove(e.clientX));
  track.addEventListener('pointerup', (e) => dragEnd(e.clientX));
  track.addEventListener('pointercancel', (e) => dragEnd(e.clientX));

  window.addEventListener('resize', () => {
    measure();
    goTo(currentIndex, false);
  });

  measure();
  goTo(total, false);
  // pequeno atraso para garantir layout estável antes da primeira medição
  requestAnimationFrame(() => {
    measure();
    goTo(total, false);
  });

  viewport.addEventListener('mouseenter', () => {}); // reservado para futura pausa de autoplay, se adicionado
}

/* ============================================================================
   Sobre — texto + galeria com lightbox
   ============================================================================ */
function initAbout() {
  const textWrap = document.getElementById('about-text');
  textWrap.innerHTML = ABOUT_PARAGRAPHS.map((p) => `<p>${p}</p>`).join('');

  const gallery = document.getElementById('about-gallery');
  gallery.innerHTML = ABOUT_IMAGES.map(
    (img, i) => `
    <figure class="about__gallery-item">
      <button class="about__gallery-btn" data-full="${img.src}" data-alt="${img.alt}" aria-label="Ampliar imagem: ${img.alt}">
        <img src="${img.src}" alt="${img.alt}" width="800" height="600" loading="lazy" decoding="async">
      </button>
    </figure>
  `,
  ).join('');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  gallery.querySelectorAll('.about__gallery-btn').forEach((btn) => {
    btn.addEventListener('click', () =>
      openLightbox(btn.dataset.full, btn.dataset.alt),
    );
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
}

/* ============================================================================
   Depoimentos — rotação automática com dots e pausa ao interagir
   ============================================================================ */
function initTestimonials() {
  const track = document.getElementById('testimonials-track');
  const dotsWrap = document.getElementById('testimonials-dots');
  const container = document.getElementById('testimonials');

  track.innerHTML = TESTIMONIALS.map(
    (t, i) => `
    <div class="testimonial${i === 0 ? ' is-active' : ''}">
      <div class="testimonial__stars" aria-label="${t.rating} de 5 estrelas">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <p class="testimonial__text">“${t.text}”</p>
      <p class="testimonial__name">${t.name}</p>
    </div>
  `,
  ).join('');

  dotsWrap.innerHTML = TESTIMONIALS.map(
    (_, i) => `
    <button class="testimonials__dot${i === 0 ? ' is-active' : ''}" aria-label="Ver depoimento ${i + 1}" data-index="${i}"></button>
  `,
  ).join('');

  const items = Array.from(track.querySelectorAll('.testimonial'));
  const dots = Array.from(dotsWrap.querySelectorAll('.testimonials__dot'));
  let current = 0;
  let timer = null;

  function show(index) {
    items[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
    items[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  function start() {
    stop();
    timer = setInterval(() => show(current + 1), 4500);
  }
  function stop() {
    if (timer) clearInterval(timer);
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      show(Number(dot.dataset.index));
      start();
    });
  });

  container.addEventListener('mouseenter', stop);
  container.addEventListener('mouseleave', start);
  container.addEventListener('touchstart', stop, { passive: true });
  container.addEventListener('touchend', start);

  start();
}

/* ============================================================================
   Footer — horário, contato, redes sociais e copyright
   ============================================================================ */
function initFooter() {
  document.getElementById('footer-address').textContent = RESTAURANT.address;
  document.getElementById('footer-phone').innerHTML =
    `Telefone: <a href="tel:+${WHATSAPP_NUMBER}">${RESTAURANT.phoneDisplay}</a>`;

  document.getElementById('footer-hours').innerHTML = OPENING_HOURS.map(
    (item) => `
    <li><span>${item.day}</span><span>${item.hours}</span></li>
  `,
  ).join('');

  document.getElementById('footer-social').innerHTML = `
    <a href="${RESTAURANT.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram do ${RESTAURANT.name}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.1 4.1 0 0 1-.98 1.51 4.1 4.1 0 0 1-1.51.98c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.1 4.1 0 0 1-1.51-.98 4.1 4.1 0 0 1-.98-1.51c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.46-.16 1.26-.35 2.43-.4C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.82.34-.46.18-.78.39-1.13.73-.34.35-.55.67-.73 1.13-.14.34-.3.86-.34 1.82-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04.96.2 1.48.34 1.82.18.46.39.78.73 1.13.35.34.67.55 1.13.73.34.14.86.3 1.82.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.82-.34.46-.18.78-.39 1.13-.73.34-.35.55-.67.73-1.13.14-.34.3-.86.34-1.82.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.82a3 3 0 0 0-.73-1.13 3 3 0 0 0-1.13-.73c-.34-.14-.86-.3-1.82-.34-1.23-.06-1.58-.07-4.73-.07zm0 4.86a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28zm0 8.47a3.33 3.33 0 1 0 0-6.66 3.33 3.33 0 0 0 0 6.66zm6.54-8.68a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
    </a>
    <a href="${RESTAURANT.facebookUrl}" target="_blank" rel="noopener" aria-label="Facebook do ${RESTAURANT.name}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-8.1h2.72l.4-3.16h-3.12V7.75c0-.92.26-1.54 1.57-1.54h1.68V3.4c-.29-.04-1.28-.13-2.44-.13-2.42 0-4.07 1.48-4.07 4.19v2.34H7.5v3.16h2.74V21h3.26z"/></svg>
    </a>
  `;

  document.getElementById('footer-copy').textContent =
    `© ${new Date().getFullYear()} ${RESTAURANT.name}. Todos os direitos reservados.`;
}

/* ============================================================================
   Bootstrap
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroCarousel();
  initMenuSlider();
  initAbout();
  initTestimonials();
  initFooter();
  applyWhatsAppLinks();
  initSmoothScroll();
});
