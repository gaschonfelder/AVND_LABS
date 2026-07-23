/* =========================================================================
   PLACEHOLDERS A SUBSTITUIR ANTES DE PUBLICAR O SITE
   =========================================================================
   1. WHATSAPP_NUMBER          -> número real no formato internacional (só dígitos)
   2. CLINIC.name               -> nome da clínica
   3. CLINIC.tagline            -> frase de efeito curta
   4. CLINIC.description        -> descrição curta usada no footer/meta description
   5. CLINIC.logoAlt            -> texto alternativo do logo (images/logo.png)
   6. PROFESSIONAL.name         -> nome da profissional responsável
   7. PROFESSIONAL.role         -> especialidade (ex.: "Biomédica Esteta")
   8. PROFESSIONAL.registry     -> registro profissional (ex.: "CRBM 12345")
   9. CONTACT.address           -> endereço completo
   10. CONTACT.phone            -> telefone fixo/celular formatado para exibição
   11. CONTACT.email            -> e-mail de contato
   12. CONTACT.mapsEmbedSrc     -> src do iframe do Google Maps (substituir o placeholder comentado no HTML)
   13. CONTACT.socials          -> links reais de Instagram/Facebook
   14. HOURS                    -> horário de funcionamento real, por dia
   15. TREATMENTS               -> lista real de tratamentos (nome, descrição, benefícios, imagem)
   16. ABOUT.paragraphs          -> texto institucional real (história, valores, diferenciais)
   17. ABOUT.differentials       -> diferenciais reais da clínica
   18. TESTIMONIALS             -> depoimentos reais de clientes (nome, foto, nota, texto, tratamento)
   19. images/                  -> substituir todos os arquivos placeholder em /images pelas fotos reais
       (hero.jpg, logo.png, about-1.jpg..about-4.jpg, treatment-*.jpg, avatar-1..5.jpg)
   20. TICKER_ITEMS              -> frases da faixa animada (números, garantias, diferenciais)
   21. HERO.image / HERO.imageAlt -> foto principal do hero (também usada no <meta og:image>)
   22. index.html <title>/<meta name="description">/<meta property="og:*"> -> devem ser
       atualizados manualmente para bater com CLINIC/HERO/PROFESSIONAL abaixo: crawlers de
       redes sociais (WhatsApp, Facebook, Twitter) lêem o HTML estático e não executam JS,
       então esses valores não podem ser 100% centralizados sem um passo de build/SSR.
   ========================================================================= */

(function () {
  "use strict";

  /* ============================ DADOS EDITÁVEIS ============================ */

  // Número de WhatsApp único usado em todo o site (formato internacional, só dígitos)
  const WHATSAPP_NUMBER = "5511999999999";

  const CLINIC = {
    name: "Clínica Essence",
    tagline: "Beleza natural, cuidado de verdade.",
    description:
      "Clínica de estética e saúde dedicada a cuidar da sua beleza com atendimento personalizado, tecnologia de ponta e muito carinho.",
    logoAlt: "Clínica Essence - Estética e Bem-estar",
  };

  const HERO = {
    image: "images/Dra (1).png",
    imageAlt: "Ambiente acolhedor da clínica durante um atendimento",
  };

  const PROFESSIONAL = {
    name: "Dra. Camila Andrade",
    role: "Biomédica Esteta",
    registry: "CRBM 1 12345-SP",
  };

  const CONTACT = {
    address: "Rua das Flores, 123 - Jardim Paulista, São Paulo - SP, 01234-567",
    phone: "(11) 99999-9999",
    email: "contato@clinicaessence.com.br",
    // Placeholder: substitua pelo link de incorporação real do Google Maps
    mapsEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!5e0!3m2!1spt-BR!2sbr!4v0",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  };

  const TICKER_ITEMS = [
    "Avaliação Gratuita",
    "+1.200 Clientes Satisfeitas",
    "Resultados Comprovados",
    "Depilação a Laser",
    "Tecnologia Premium",
    "Atendimento Personalizado",
  ];

  const HOURS = [
    { day: "Segunda-feira", time: "09:00 - 19:00" },
    { day: "Terça-feira", time: "09:00 - 19:00" },
    { day: "Quarta-feira", time: "09:00 - 19:00" },
    { day: "Quinta-feira", time: "09:00 - 19:00" },
    { day: "Sexta-feira", time: "09:00 - 19:00" },
    { day: "Sábado", time: "09:00 - 13:00" },
    { day: "Domingo", time: "Fechado" },
  ];

  const TREATMENTS = [
    {
      id: "limpeza-de-pele",
      order: 1,
      name: "Limpeza de Pele Profunda",
      description:
        "Higienização completa que remove impurezas e revitaliza a pele do rosto.",
      benefits: [
        "Remove cravos e impurezas",
        "Melhora a textura da pele",
        "Estimula a renovação celular",
      ],
      image: "images/treatment-limpeza-de-pele.jpg",
    },
    {
      id: "peeling-facial",
      order: 2,
      name: "Peeling Facial",
      description:
        "Renovação da pele através da esfoliação controlada, reduzindo manchas e linhas finas.",
      benefits: [
        "Uniformiza o tom da pele",
        "Reduz manchas e cicatrizes",
        "Estimula colágeno",
      ],
      image: "images/treatment-peeling-facial.jpg",
    },
    {
      id: "massagem-modeladora",
      order: 3,
      name: "Massagem Modeladora",
      description:
        "Técnica manual que ajuda a modelar o corpo e reduzir medidas de forma natural.",
      benefits: [
        "Reduz medidas",
        "Melhora a circulação",
        "Alivia tensões musculares",
      ],
      image: "images/treatment-massagem-modeladora.jpg",
    },
    {
      id: "drenagem-linfatica",
      order: 4,
      name: "Drenagem Linfática",
      description:
        "Massagem terapêutica que estimula o sistema linfático e reduz o inchaço.",
      benefits: [
        "Reduz retenção de líquidos",
        "Desintoxica o organismo",
        "Melhora o bem-estar geral",
      ],
      image: "images/treatment-drenagem-linfatica.jpg",
    },
    {
      id: "botox",
      order: 5,
      name: "Toxina Botulínica",
      description:
        "Tratamento que suaviza linhas de expressão e previne rugas de forma segura.",
      benefits: [
        "Suaviza rugas de expressão",
        "Resultado natural",
        "Procedimento rápido",
      ],
      image: "images/treatment-botox.jpg",
    },
    {
      id: "preenchimento-labial",
      order: 6,
      name: "Preenchimento Labial",
      description:
        "Harmonização dos lábios com ácido hialurônico para um resultado natural.",
      benefits: [
        "Realça o contorno labial",
        "Resultado imediato",
        "Produto reabsorvível e seguro",
      ],
      image: "images/treatment-preenchimento-labial.jpg",
    },
  ];

  const ABOUT = {
    paragraphs: [
      "Há mais de 10 anos, a Clínica Essence nasceu do desejo de oferecer um espaço acolhedor onde estética e bem-estar caminham juntos. Acreditamos que cuidar da beleza é também cuidar da autoestima e da saúde emocional de cada pessoa que passa por aqui.",
      "Nossa equipe é formada por profissionais qualificados e em constante atualização, unindo técnicas comprovadas cientificamente a um atendimento humano e individualizado, respeitando o tempo e as necessidades de cada cliente.",
      "Investimos em tecnologia de ponta e em um ambiente confortável e seguro, para que cada visita à Essence seja também um momento de pausa, autocuidado e renovação.",
    ],
    gallery: [
      { order: 1, src: "images/about-1.jpg", alt: "Recepção acolhedora da clínica" },
      { order: 2, src: "images/about-2.jpg", alt: "Sala de atendimento equipada" },
      { order: 3, src: "images/about-3.jpg", alt: "Equipe da clínica sorrindo" },
      { order: 4, src: "images/about-4.jpg", alt: "Ambiente de espera confortável" },
    ],
    differentials: [
      {
        order: 1,
        icon: "sparkle",
        title: "Atendimento Personalizado",
        text: "Cada plano de cuidado é pensado para as necessidades únicas de cada cliente.",
      },
      {
        order: 2,
        icon: "shield",
        title: "Segurança em Primeiro Lugar",
        text: "Protocolos rigorosos de higiene e procedimentos certificados.",
      },
      {
        order: 3,
        icon: "device",
        title: "Tecnologia de Ponta",
        text: "Equipamentos modernos para resultados eficazes e seguros.",
      },
      {
        order: 4,
        icon: "heart",
        title: "Conforto e Bem-estar",
        text: "Um ambiente pensado para o seu relaxamento do início ao fim.",
      },
    ],
  };

  const TESTIMONIALS = [
    {
      order: 1,
      name: "Fernanda Lima",
      avatar: "images/avatar-1.jpg",
      rating: 5,
      text: "Atendimento incrível! Me senti muito bem cuidada em todas as sessões. Recomendo de olhos fechados.",
      treatmentId: "limpeza-de-pele",
    },
    {
      order: 2,
      name: "Juliana Costa",
      avatar: "images/avatar-2.jpg",
      rating: 5,
      text: "Profissionais super atenciosas e resultado visível já nas primeiras sessões. Virei cliente fiel!",
      treatmentId: "massagem-modeladora",
    },
    {
      order: 3,
      name: "Patrícia Souza",
      avatar: "images/avatar-3.jpg",
      rating: 5,
      text: "Ambiente maravilhoso, super limpo e aconchegante. A drenagem linfática mudou minha rotina de bem-estar.",
      treatmentId: "drenagem-linfatica",
    },
    {
      order: 4,
      name: "Renata Alves",
      avatar: "images/avatar-4.jpg",
      rating: 4,
      text: "Fiz o preenchimento labial e o resultado ficou super natural, exatamente como eu queria.",
      treatmentId: "preenchimento-labial",
    },
    {
      order: 5,
      name: "Beatriz Martins",
      avatar: "images/avatar-5.jpg",
      rating: 5,
      text: "Equipe muito qualificada e atenciosa. Sempre explicam tudo com calma antes de cada procedimento.",
      treatmentId: "botox",
    },
  ];

  /* ============================ HELPERS ============================ */

  function buildWhatsappLink(message) {
    const base = "https://wa.me/" + WHATSAPP_NUMBER;
    return message ? base + "?text=" + encodeURIComponent(message) : base;
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ============================ ÍCONES SVG INLINE ============================ */

  const ICONS = {
    whatsapp:
      '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false"><path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.697 4.61 1.902 6.484L4 29l7.71-1.86A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm0 21.818c-1.99 0-3.845-.583-5.404-1.587l-.388-.242-4.573 1.103 1.14-4.463-.253-.406A9.77 9.77 0 0 1 5.182 15c0-5.964 4.855-10.818 10.819-10.818S26.818 9.036 26.818 15 21.965 24.818 16.001 24.818Zm5.978-8.144c-.327-.164-1.936-.955-2.236-1.064-.3-.109-.518-.164-.736.164-.218.327-.845 1.064-1.036 1.282-.191.218-.382.245-.709.082-.327-.164-1.38-.508-2.63-1.62-.972-.867-1.629-1.938-1.82-2.265-.191-.327-.02-.504.144-.667.148-.147.327-.382.49-.573.164-.191.218-.327.327-.545.109-.218.055-.41-.027-.573-.082-.164-.736-1.774-1.009-2.43-.266-.64-.536-.553-.736-.563l-.627-.011c-.218 0-.573.082-.873.41-.3.327-1.145 1.118-1.145 2.728 0 1.61 1.173 3.164 1.336 3.382.164.218 2.31 3.527 5.597 4.945.782.338 1.393.54 1.869.691.785.25 1.5.215 2.065.13.63-.094 1.936-.792 2.209-1.556.273-.764.273-1.418.191-1.555-.082-.137-.3-.219-.627-.383Z"/></svg>',
    star: '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85L10 1.5z"/></svg>',
    sparkle:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" focusable="false"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" stroke-linecap="round"/></svg>',
    shield:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" focusable="false"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke-linejoin="round"/></svg>',
    device:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" focusable="false"><rect x="4" y="3" width="16" height="13" rx="2"/><path d="M9 21h6M12 16v5" stroke-linecap="round"/></svg>',
    heart:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" focusable="false"><path d="M12 20s-7-4.35-9.5-8.5C.9 8.2 2.6 4.5 6.2 4.5c2 0 3.4 1.1 4 2.2.6-1.1 2-2.2 4-2.2 3.6 0 5.3 3.7 3.7 7C19 15.65 12 20 12 20z" stroke-linejoin="round"/></svg>',
  };

  /* ============================ WHATSAPP LINKS GLOBAIS ============================ */

  function wireWhatsappLinks() {
    document.querySelectorAll("[data-whatsapp]").forEach((node) => {
      const message = node.getAttribute("data-whatsapp-message") || "";
      node.setAttribute("href", buildWhatsappLink(message));
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
    });
  }

  function injectWhatsappIcons() {
    document.querySelectorAll("[data-icon-whatsapp]").forEach((node) => {
      node.innerHTML = ICONS.whatsapp;
    });
  }

  /* ============================ RENDER: HEADER / GERAL ============================ */

  function renderClinicInfo() {
    document.title = `${CLINIC.name} | ${CLINIC.tagline}`;
    document.querySelectorAll("[data-hero-image]").forEach((n) => {
      n.setAttribute("src", HERO.image);
      n.setAttribute("alt", HERO.imageAlt);
    });
    document.querySelectorAll("[data-clinic-name]").forEach((n) => (n.textContent = CLINIC.name));
    document.querySelectorAll("[data-clinic-tagline]").forEach((n) => (n.textContent = CLINIC.tagline));
    document.querySelectorAll("[data-clinic-description]").forEach(
      (n) => (n.textContent = CLINIC.description)
    );
    document.querySelectorAll("[data-professional-name]").forEach(
      (n) => (n.textContent = PROFESSIONAL.name)
    );
    document.querySelectorAll("[data-professional-role]").forEach(
      (n) => (n.textContent = PROFESSIONAL.role)
    );
    document.querySelectorAll("[data-professional-registry]").forEach(
      (n) => (n.textContent = PROFESSIONAL.registry)
    );
    document.querySelectorAll("[data-clinic-logo-alt]").forEach((n) =>
      n.setAttribute("alt", CLINIC.logoAlt)
    );
  }

  /* ============================ RENDER: FAIXA DE DESTAQUES (TICKER) ============================ */

  function renderTicker() {
    const track1 = document.getElementById("ticker-track-1");
    const track2 = document.getElementById("ticker-track-2");
    if (!track1 || !track2) return;

    const itemsHtml = TICKER_ITEMS.map(
      (item) =>
        `<span class="ticker-item">${escapeHtml(item)}</span><span class="ticker-sep">✦</span>`
    ).join("");

    track1.innerHTML = itemsHtml;
    track2.innerHTML = itemsHtml;
  }

  /* ============================ RENDER: TRATAMENTOS ============================ */

  function renderTreatments() {
    const grid = document.getElementById("treatments-grid");
    if (!grid) return;

    const sorted = [...TREATMENTS].sort((a, b) => a.order - b.order);
    sorted.forEach((t) => {
      const card = el("article", "card treatment-card fade-in");
      card.id = `treatment-${t.id}`;
      card.innerHTML = `
        <div class="treatment-card__media">
          <img src="${t.image}" alt="${escapeHtml(t.name)}" width="400" height="280" loading="lazy" />
        </div>
        <div class="treatment-card__body">
          <h3 class="treatment-card__title">${escapeHtml(t.name)}</h3>
          <p class="treatment-card__desc">${escapeHtml(t.description)}</p>
          <ul class="treatment-card__benefits">
            ${t.benefits.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
          </ul>
          <a class="btn btn--outline btn--block"
             data-whatsapp
             data-whatsapp-message="Olá! Gostaria de agendar uma avaliação para o tratamento de ${t.name}."
             href="#">
            Agendar avaliação
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  /* ============================ RENDER: SOBRE ============================ */

  function renderAbout() {
    const textWrap = document.getElementById("about-text");
    if (textWrap) {
      textWrap.innerHTML = ABOUT.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
    }

    const gallery = document.getElementById("about-gallery");
    if (gallery) {
      const sortedGallery = [...ABOUT.gallery].sort((a, b) => a.order - b.order);
      sortedGallery.forEach((img) => {
        const figure = el("div", "about-gallery__item fade-in");
        figure.innerHTML = `<img src="${img.src}" alt="${escapeHtml(
          img.alt
        )}" width="300" height="300" loading="lazy" />`;
        gallery.appendChild(figure);
      });
    }

    const diffWrap = document.getElementById("about-differentials");
    if (diffWrap) {
      const sortedDifferentials = [...ABOUT.differentials].sort((a, b) => a.order - b.order);
      sortedDifferentials.forEach((d) => {
        const item = el("div", "differential fade-in");
        item.innerHTML = `
          <span class="differential__icon">${ICONS[d.icon] || ""}</span>
          <h3 class="differential__title">${escapeHtml(d.title)}</h3>
          <p class="differential__text">${escapeHtml(d.text)}</p>
        `;
        diffWrap.appendChild(item);
      });
    }
  }

  /* ============================ RENDER: DEPOIMENTOS (CARROSSEL) ============================ */

  function renderTestimonials() {
    const track = document.getElementById("testimonials-track");
    const dotsWrap = document.getElementById("testimonials-dots");
    if (!track || !dotsWrap) return;

    const sorted = [...TESTIMONIALS].sort((a, b) => a.order - b.order);

    sorted.forEach((t, i) => {
      const relatedTreatment = TREATMENTS.find((tr) => tr.id === t.treatmentId);
      const treatmentName = relatedTreatment ? relatedTreatment.name : "";

      const slide = el("div", "testimonial-slide");
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "slide");
      slide.setAttribute("aria-label", `Depoimento ${i + 1} de ${sorted.length}`);
      const stars = Array.from({ length: 5 })
        .map((_, idx) => `<span class="star${idx < t.rating ? " star--filled" : ""}">${ICONS.star}</span>`)
        .join("");
      slide.innerHTML = `
        <div class="testimonial-card">
          <img class="testimonial-card__avatar" src="${t.avatar}" alt="Foto de ${escapeHtml(
        t.name
      )}" width="64" height="64" loading="lazy" />
          <div class="testimonial-card__stars" aria-label="Avaliação: ${t.rating} de 5 estrelas">${stars}</div>
          <p class="testimonial-card__text">&ldquo;${escapeHtml(t.text)}&rdquo;</p>
          <p class="testimonial-card__name">${escapeHtml(t.name)}</p>
          <p class="testimonial-card__treatment">${escapeHtml(treatmentName)}</p>
        </div>
      `;
      track.appendChild(slide);

      const dot = el("button", "testimonials-dot");
      dot.type = "button";
      dot.setAttribute("aria-label", `Ir para depoimento ${i + 1}`);
      dot.dataset.index = String(i);
      dotsWrap.appendChild(dot);
    });

    initCarousel(track, dotsWrap, sorted.length);
  }

  function initCarousel(track, dotsWrap, count) {
    let index = 0;
    let timer = null;
    const intervalMs = 4500;
    const dots = Array.from(dotsWrap.children);

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
    }

    function goTo(i) {
      index = (i + count) % count;
      update();
    }

    function next() {
      goTo(index + 1);
    }

    function start() {
      stop();
      timer = window.setInterval(next, intervalMs);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        goTo(Number(dot.dataset.index));
        start();
      });
    });

    const wrapper = track.closest(".testimonials-carousel");
    if (wrapper) {
      wrapper.addEventListener("mouseenter", stop);
      wrapper.addEventListener("mouseleave", start);
      wrapper.addEventListener("focusin", stop);
      wrapper.addEventListener("focusout", start);
      wrapper.addEventListener(
        "touchstart",
        () => {
          stop();
        },
        { passive: true }
      );
      wrapper.addEventListener(
        "touchend",
        () => {
          start();
        },
        { passive: true }
      );
    }

    update();
    start();
  }

  /* ============================ RENDER: CONTATO ============================ */

  function renderContact() {
    document.querySelectorAll("[data-contact-address]").forEach(
      (n) => (n.textContent = CONTACT.address)
    );
    document.querySelectorAll("[data-contact-phone]").forEach((n) => {
      n.textContent = CONTACT.phone;
    });
    document.querySelectorAll("[data-contact-email]").forEach((n) => {
      n.textContent = CONTACT.email;
      if (n.tagName === "A") n.setAttribute("href", "mailto:" + CONTACT.email);
    });
    document.querySelectorAll("[data-maps-embed]").forEach((iframe) => {
      iframe.setAttribute("src", CONTACT.mapsEmbedSrc);
    });
    document.querySelectorAll("[data-social-instagram]").forEach((n) =>
      n.setAttribute("href", CONTACT.socials.instagram)
    );
    document.querySelectorAll("[data-social-facebook]").forEach((n) =>
      n.setAttribute("href", CONTACT.socials.facebook)
    );

    document.querySelectorAll("#footer-hours-list").forEach((hoursWrap) => {
      HOURS.forEach((h) => {
        const row = el("li", "hours-row");
        row.innerHTML = `<span>${escapeHtml(h.day)}</span><span>${escapeHtml(h.time)}</span>`;
        hoursWrap.appendChild(row);
      });
    });

    const select = document.getElementById("form-treatment");
    if (select) {
      const sortedTreatments = [...TREATMENTS].sort((a, b) => a.order - b.order);
      sortedTreatments.forEach((t) => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = t.name;
        select.appendChild(opt);
      });
    }
  }

  /* ============================ FORMULÁRIO DE CONTATO -> WHATSAPP ============================ */

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = form.elements["name"].value.trim();
      const phone = form.elements["phone"].value.trim();
      const email = form.elements["email"].value.trim();
      const treatmentId = form.elements["treatment"].value;
      const message = form.elements["message"].value.trim();

      let hasError = false;
      const errors = {
        name: "",
        phone: "",
        email: "",
        treatment: "",
      };

      if (!name) {
        errors.name = "Por favor, informe seu nome.";
        hasError = true;
      }
      if (!phone || phone.replace(/\D/g, "").length < 10) {
        errors.phone = "Informe um telefone válido com DDD.";
        hasError = true;
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Informe um e-mail válido.";
        hasError = true;
      }
      if (!treatmentId) {
        errors.treatment = "Selecione um tratamento de interesse.";
        hasError = true;
      }

      Object.keys(errors).forEach((key) => {
        const errorNode = form.querySelector(`[data-error-for="${key}"]`);
        const inputNode = form.elements[key];
        if (errorNode) errorNode.textContent = errors[key];
        if (inputNode) inputNode.setAttribute("aria-invalid", errors[key] ? "true" : "false");
      });

      if (hasError) {
        const firstErrorKey = Object.keys(errors).find((k) => errors[k]);
        if (firstErrorKey) form.elements[firstErrorKey].focus();
        return;
      }

      const selectedTreatment = TREATMENTS.find((t) => t.id === treatmentId);
      const treatmentName = selectedTreatment ? selectedTreatment.name : treatmentId;

      const lines = [
        "Olá! Gostaria de agendar um atendimento.",
        `Nome: ${name}`,
        `Telefone: ${phone}`,
        `E-mail: ${email}`,
        `Tratamento de interesse: ${treatmentName}`,
      ];
      if (message) lines.push(`Mensagem: ${message}`);

      window.open(buildWhatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
      form.reset();
    });
  }

  /* ============================ HEADER: SCROLL + MENU MOBILE ============================ */

  function initHeaderScroll() {
    const header = document.getElementById("site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("menu-close");
    const drawer = document.getElementById("mobile-drawer");
    const overlay = document.getElementById("mobile-drawer-overlay");
    if (!toggle || !drawer || !overlay) return;

    function openDrawer() {
      drawer.classList.add("is-open");
      overlay.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll");
      const firstLink = drawer.querySelector("a, button");
      if (firstLink) firstLink.focus();
    }

    function closeDrawer() {
      drawer.classList.remove("is-open");
      overlay.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
      toggle.focus();
    }

    toggle.addEventListener("click", () => {
      const isOpen = drawer.classList.contains("is-open");
      if (isOpen) closeDrawer();
      else openDrawer();
    });

    overlay.addEventListener("click", closeDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) {
        closeDrawer();
      }
    });
  }

  /* ============================ FADE-IN AO ROLAR ============================ */

  function initFadeInObserver() {
    const targets = document.querySelectorAll(".fade-in");
    if (!("IntersectionObserver" in window) || targets.length === 0) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
  }

  /* ============================ FOOTER: ANO DINÂMICO ============================ */

  function renderFooterYear() {
    document.querySelectorAll("[data-current-year]").forEach((n) => {
      n.textContent = String(new Date().getFullYear());
    });
  }

  /* ============================ INIT ============================ */

  function init() {
    injectWhatsappIcons();
    renderClinicInfo();
    renderTicker();
    renderTreatments();
    renderAbout();
    renderTestimonials();
    renderContact();
    renderFooterYear();
    wireWhatsappLinks();
    initContactForm();
    initHeaderScroll();
    initMobileMenu();
    initFadeInObserver();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
