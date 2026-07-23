// ==========================================================================
// Config — edite aqui
// ==========================================================================

const WHATSAPP_NUMBER = 'SEUNUMERO'; // ex: 5515999999999
const WHATSAPP_MESSAGE =
  'Olá! Vi seu portfólio e quero um site pro meu negócio.';

// Projetos pessoais já no ar (seção split-screen)
const projectsData = [
  {
    id: 'presentim',
    tag: 'Produto próprio',
    title: 'Presentim',
    description:
      'Presentes virtuais com fotos, lembranças e declarações — uma retrospectiva animada pra quem quer presentear diferente.',
    image: 'images/presentim-screenshot.png', // PLACEHOLDER — troque por images/presentim-screenshot.jpg quando tiver o arquivo real
    link: 'https://www.presentim.com.br/', // TODO: link do Presentim no ar
  },
  {
    id: 'varzea',
    tag: 'Produto próprio',
    title: 'Várzea',
    description:
      'Tabelas, classificação, jogos e resultados dos campeonatos amadores de futebol de várzea de Sorocaba.',
    image: 'images/varzea-screenshot.png', // PLACEHOLDER — troque por images/varzea-screenshot.jpg quando tiver o arquivo real
    link: 'https://www.varzeasorocaba.com.br/', // TODO: link do Várzea no ar
  },
];

// Modelos/mockups prontos pra adaptar (seção grid de cards)
// Campos opcionais por item:
//   strongOverlay: true  -> usa gradiente mais escuro (card--overlay-strong), pra screenshot com área clara atrás do texto
//   bgPosition: 'center 20%' -> troca o enquadramento do recorte (background-position) daquele card
const mocksData = [
  {
    category: 'Restaurante',
    heading: 'Cardápio digital com pedido direto no WhatsApp',
    image: 'images/restaurante_mock.png', // PLACEHOLDER — troque por screenshot-restaurante.jpg quando tiver o arquivo real
    link: 'Restaurante/index.html', // TODO: link do mock de restaurante
  },
  {
    category: 'Clínica',
    heading: 'Agendamento online e vitrine de serviços de saúde e estética',
    image: 'images/mock_clinica.png',
    link: 'Clinica/index.html',
    strongOverlay: true, // foto da profissional deixava a área do texto clara demais
  },
  {
    category: 'Contabilidade',
    heading: 'Apresentação institucional que passa confiança e gera contato',
    image: 'images/fog_mock.png', // PLACEHOLDER — troque por screenshot-contabilidade.jpg quando tiver o arquivo real
    link: 'Foguinho/index.html', // TODO: link do mock de contabilidade
    strongOverlay: true, // aro do carro deixava a área do texto clara demais
  },
  {
    category: 'Oficina Mecânica',
    heading:
      'Orçamento e agendamento rápido pra quem precisa consertar o carro',
    image: 'images/mock_mecanica.png', // PLACEHOLDER — troque por screenshot-mecanica.jpg quando tiver o arquivo real
    link: 'Mecanica/index.html',
  },
];

// ==========================================================================
// Render
// ==========================================================================

function buildWhatsappLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

function renderSplitScreen() {
  const container = document.getElementById('split-screen');
  container.innerHTML = projectsData
    .map(
      (project) => `
    <article class="split-panel split-panel--${project.id}">
      <div class="split-panel__bg" style="background-image: url('${project.image}')"></div>
      <div class="split-panel__overlay"></div>
      <div class="split-panel__content">
        <span class="split-panel__tag">${project.tag}</span>
        <h3 class="split-panel__title">${project.title}</h3>
        <p class="split-panel__desc">${project.description}</p>
        <a class="split-panel__link" href="${project.link}" target="_blank" rel="noopener">Ver projeto →</a>
      </div>
    </article>
  `,
    )
    .join('');
}

function renderMocks() {
  const container = document.getElementById('mocks-grid');
  container.innerHTML = mocksData
    .map((mock) => {
      const cardClass = mock.strongOverlay
        ? 'card card--overlay-strong'
        : 'card';
      const bgPosition = mock.bgPosition
        ? ` background-position: ${mock.bgPosition};`
        : '';
      return `
    <a class="${cardClass}" href="${mock.link}" target="_blank" rel="noopener">
      <div class="card__background" style="background-image: url('${mock.image}');${bgPosition}"></div>
      <div class="card__content">
        <p class="card__category">${mock.category}</p>
        <h3 class="card__heading">${mock.heading}</h3>
      </div>
    </a>
  `;
    })
    .join('');
}

function wireWhatsappLinks() {
  const link = buildWhatsappLink();
  document.getElementById('hero-whatsapp').href = link;
  document.getElementById('footer-whatsapp').href = link;
}

// Destaca o link do nav correspondente à seção visível no momento.
function wireScrollSpy() {
  const navLinks = Array.from(document.querySelectorAll('.nav__link'));
  const linkedSections = navLinks
    .map((link) => ({
      link,
      section: document.querySelector(link.getAttribute('href')),
    }))
    .filter((entry) => entry.section);

  if (!linkedSections.length) return;

  const setActiveLink = (sectionId) => {
    linkedSections.forEach(({ link, section }) => {
      const isActive = section.id === sectionId;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    },
    {
      // Faixa de detecção fina logo abaixo do nav fixo, pra marcar como
      // ativa a seção que domina o topo da viewport no momento.
      rootMargin: '-65px 0px -60% 0px',
      threshold: 0,
    },
  );

  linkedSections.forEach(({ section }) => observer.observe(section));
}

// Accordion: hover/foco em uma metade expande ela e encolhe a outra.
// Desativado abaixo de 861px, onde as metades ficam empilhadas (ver CSS).
function wireSplitScreenAccordion() {
  const panels = Array.from(
    document.querySelectorAll('#split-screen .split-panel'),
  );
  if (panels.length < 2) return;

  const accordionQuery = window.matchMedia('(min-width: 861px)');

  const expand = (target) => {
    if (!accordionQuery.matches) return;
    panels.forEach((panel) => {
      const isTarget = panel === target;
      panel.classList.toggle('is-expanded', isTarget);
      panel.classList.toggle('is-collapsed', !isTarget);
    });
  };

  const reset = () => {
    panels.forEach((panel) => {
      panel.classList.remove('is-expanded', 'is-collapsed');
    });
  };

  panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => expand(panel));
    panel.addEventListener('mouseleave', reset);
    panel.addEventListener('focusin', () => expand(panel));
    panel.addEventListener('focusout', (event) => {
      if (!panel.contains(event.relatedTarget)) reset();
    });
  });

  accordionQuery.addEventListener('change', reset);
}

document.addEventListener('DOMContentLoaded', () => {
  renderSplitScreen();
  renderMocks();
  wireWhatsappLinks();
  wireSplitScreenAccordion();
  wireScrollSpy();
  document.getElementById('year').textContent = new Date().getFullYear();
});
