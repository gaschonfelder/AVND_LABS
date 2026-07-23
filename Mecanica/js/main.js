/* =========================================================================
   PLACEHOLDERS A SUBSTITUIR ANTES DE PUBLICAR O SITE
   =========================================================================
   1. WHATSAPP_NUMBER            -> número real no formato internacional (só dígitos)
   2. WORKSHOP.name               -> nome da oficina
   3. WORKSHOP.ownerName          -> nome do proprietário/mecânico responsável
   4. WORKSHOP.ownerRole          -> cargo/especialidade do responsável
   5. WORKSHOP.tagline            -> frase de efeito curta do hero
   6. WORKSHOP.description        -> descrição curta usada no footer/meta description
   7. WORKSHOP.foundedYear        -> ano de fundação (usado para calcular "X anos de experiência")
   8. WORKSHOP.logoAlt            -> texto alternativo do logo (images/logo.png)
   9. HERO.image / HERO.imageAlt  -> foto principal do hero (também usada no <meta og:image>)
   10. CONTACT.address            -> endereço completo
   11. CONTACT.phone              -> telefone fixo/celular formatado para exibição
   12. CONTACT.email              -> e-mail de contato
   13. CONTACT.mapsEmbedSrc       -> src do iframe do Google Maps (placeholder comentado no HTML)
   14. CONTACT.socials            -> links reais de Instagram/Facebook
   15. HOURS                      -> horário de funcionamento real, por dia
   16. SERVICES                   -> lista real de serviços (nome, descrição, benefícios, ícone)
   17. PROCESS_STEPS              -> etapas reais do atendimento, se forem diferentes
   18. ABOUT.paragraphs           -> texto institucional real (história, valores, diferenciais)
   19. ABOUT.vehicleTypes         -> tipos de veículo realmente atendidos
   20. ABOUT.gallery              -> fotos reais do ambiente/equipe
   21. DIFFERENTIALS              -> diferenciais reais da oficina
   22. BRANDS                     -> marcas realmente atendidas (nomes/logos são provisórios)
   23. TESTIMONIALS               -> depoimentos reais de clientes (nome, foto, nota, texto, serviço, veículo)
   24. FAQ                        -> perguntas frequentes reais
   25. images/                    -> substituir todos os arquivos placeholder em /images pelas fotos reais
   26. index.html <title>/<meta name="description">/<meta property="og:*">/JSON-LD ->
       devem ser atualizados manualmente para bater com WORKSHOP/HERO/CONTACT abaixo:
       crawlers de redes sociais e buscadores leem o HTML estático e não executam JS
       de forma garantida, então esses valores não podem ser 100% centralizados sem
       um passo de build/SSR.
   ========================================================================= */

(function () {
  "use strict";

  /* ============================ DADOS EDITÁVEIS ============================ */

  // Número de WhatsApp único usado em todo o site (formato internacional, só dígitos)
  const WHATSAPP_NUMBER = "5511988887777";

  const WORKSHOP = {
    name: "Oficina Motor Forte",
    tagline: "Seu veículo em boas mãos.",
    description:
      "Mecânica e elétrica automotiva com qualidade, transparência e agilidade para todos os tipos de veículo.",
    foundedYear: 2011,
    ownerName: "Carlos Mendes",
    ownerRole: "Mecânico Chefe e Proprietário",
    logoAlt: "Oficina Motor Forte - Mecânica e Elétrica Automotiva",
  };

  const HERO = {
    image: "images/hero.jpg",
    imageAlt: "Profissional realizando manutenção em um veículo na oficina",
    badges: [
      { icon: "invoice", text: "Orçamento transparente" },
      { icon: "users", text: "Profissionais qualificados" },
      { icon: "clock", text: "Atendimento rápido" },
      { icon: "shieldCheck", text: "Garantia nos serviços" },
    ],
  };

  const CONTACT = {
    address: "Av. Industrial, 850 - Vila Operária, São Paulo - SP, 04567-000",
    phone: "(11) 4444-5555",
    email: "contato@motorforte.com.br",
    // Deixe em branco para gerar o mapa automaticamente a partir do endereço acima (não
    // precisa de chave de API). Para um resultado mais preciso (pino exato, zoom ideal),
    // cole aqui o link de "Incorporar um mapa" copiado do Google Maps (Compartilhar > Incorporar um mapa).
    mapsEmbedSrc: "",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  };

  const HOURS = [
    { day: "Segunda-feira", time: "08:00 - 18:00" },
    { day: "Terça-feira", time: "08:00 - 18:00" },
    { day: "Quarta-feira", time: "08:00 - 18:00" },
    { day: "Quinta-feira", time: "08:00 - 18:00" },
    { day: "Sexta-feira", time: "08:00 - 18:00" },
    { day: "Sábado", time: "08:00 - 13:00" },
    { day: "Domingo", time: "Fechado" },
  ];

  const SERVICES = [
    {
      id: "mecanica-geral",
      order: 1,
      name: "Mecânica Geral",
      description: "Reparos e manutenção geral do motor e demais sistemas mecânicos do seu veículo.",
      benefits: ["Diagnóstico preciso", "Peças de qualidade", "Equipe experiente"],
      icon: "wrench",
    },
    {
      id: "eletrica-automotiva",
      order: 2,
      name: "Elétrica Automotiva",
      description: "Identificação e reparo de falhas no sistema elétrico do veículo.",
      benefits: ["Testes computadorizados", "Reparo de chicotes e fusíveis", "Solução definitiva"],
      icon: "bolt",
    },
    {
      id: "diagnostico-eletronico",
      order: 3,
      name: "Diagnóstico Eletrônico",
      description: "Leitura e interpretação de códigos de falha com equipamento computadorizado.",
      benefits: ["Identificação rápida da causa", "Relatório claro", "Evita trocas desnecessárias"],
      icon: "gauge",
    },
    {
      id: "troca-oleo-filtros",
      order: 4,
      name: "Troca de Óleo e Filtros",
      description: "Troca de óleo do motor e filtros seguindo as recomendações do fabricante.",
      benefits: ["Óleo de qualidade", "Maior vida útil do motor", "Serviço rápido"],
      icon: "oildrop",
    },
    {
      id: "revisao-preventiva",
      order: 5,
      name: "Revisão Preventiva",
      description: "Checklist completo para identificar problemas antes que se tornem graves.",
      benefits: ["Evita quebras inesperadas", "Mais segurança", "Economia a longo prazo"],
      icon: "checklist",
    },
    {
      id: "manutencao-freios",
      order: 6,
      name: "Manutenção de Freios",
      description: "Verificação e substituição de pastilhas, discos e fluido de freio.",
      benefits: ["Mais segurança na frenagem", "Peças de qualidade", "Teste após o serviço"],
      icon: "discBrake",
    },
    {
      id: "manutencao-suspensao",
      order: 7,
      name: "Manutenção de Suspensão",
      description: "Reparo de amortecedores, molas e componentes da suspensão.",
      benefits: ["Mais conforto na direção", "Maior estabilidade", "Menor desgaste dos pneus"],
      icon: "spring",
    },
    {
      id: "troca-correias",
      order: 8,
      name: "Troca de Correias",
      description: "Substituição de correia dentada, auxiliar e do alternador.",
      benefits: ["Previne quebras do motor", "Peças originais ou equivalentes", "Ajuste correto da tensão"],
      icon: "loop",
    },
    {
      id: "embreagem",
      order: 9,
      name: "Embreagem",
      description: "Diagnóstico e substituição do kit de embreagem quando necessário.",
      benefits: ["Troca completa do kit", "Teste de rodagem", "Garantia no serviço"],
      icon: "clutch",
    },
    {
      id: "sistema-arrefecimento",
      order: 10,
      name: "Sistema de Arrefecimento",
      description: "Reparo de radiador, mangueiras, bomba d'água e válvula termostática.",
      benefits: ["Evita superaquecimento", "Checagem de vazamentos", "Fluido de qualidade"],
      icon: "thermometer",
    },
    {
      id: "bateria-alternador",
      order: 11,
      name: "Bateria e Alternador",
      description: "Teste, manutenção e troca de bateria e alternador.",
      benefits: ["Teste de carga na hora", "Instalação rápida", "Peças com garantia"],
      icon: "battery",
    },
    {
      id: "motor-partida",
      order: 12,
      name: "Motor de Partida",
      description: "Diagnóstico e reparo do motor de arranque do veículo.",
      benefits: ["Identificação precisa da falha", "Reparo ou substituição", "Teste de funcionamento"],
      icon: "ignition",
    },
    {
      id: "injecao-eletronica",
      order: 13,
      name: "Injeção Eletrônica",
      description: "Limpeza e reparo do sistema de injeção eletrônica.",
      benefits: ["Melhora o consumo", "Motor mais estável", "Redução de emissões"],
      icon: "chip",
    },
    {
      id: "alinhamento-balanceamento",
      order: 14,
      name: "Alinhamento e Balanceamento",
      description: "Ajuste da geometria e balanceamento das rodas para uma condução mais segura.",
      benefits: ["Menor desgaste dos pneus", "Direção mais estável", "Equipamento de precisão"],
      icon: "align",
    },
    {
      id: "ar-condicionado",
      order: 15,
      name: "Ar-condicionado Automotivo",
      description: "Manutenção, higienização e recarga de gás do ar-condicionado.",
      benefits: ["Ar mais gelado", "Higienização completa", "Verificação de vazamentos"],
      icon: "snowflake",
    },
    {
      id: "revisao-viagem",
      order: 16,
      name: "Revisão para Viagens",
      description: "Checagem completa antes de longas viagens, para rodar com mais segurança.",
      benefits: ["Checklist específico para viagem", "Prioridade nos itens de segurança", "Tranquilidade na estrada"],
      icon: "suitcase",
    },
    {
      id: "inspecao-geral",
      order: 17,
      name: "Inspeção Geral do Veículo",
      description: "Avaliação completa de todos os sistemas do veículo, ideal antes de comprar ou vender.",
      benefits: ["Relatório detalhado", "Identifica problemas ocultos", "Tranquilidade na negociação"],
      icon: "search",
    },
  ];

  const PROCESS_STEPS = [
    { order: 1, title: "Contato inicial", text: "Você entra em contato pelo WhatsApp, telefone ou formulário e conta o que está acontecendo com o veículo." },
    { order: 2, title: "Avaliação do veículo", text: "Recebemos o carro na oficina e realizamos uma avaliação criteriosa do problema relatado." },
    { order: 3, title: "Diagnóstico técnico", text: "Nossa equipe realiza o diagnóstico, incluindo testes computadorizados quando necessário." },
    { order: 4, title: "Orçamento detalhado", text: "Você recebe um orçamento claro, com peças e serviços descritos, antes de qualquer execução." },
    { order: 5, title: "Aprovação e execução", text: "O serviço só começa depois da sua aprovação. Nenhuma surpresa na hora de pagar." },
    { order: 6, title: "Revisão e entrega", text: "Revisamos todo o trabalho realizado e entregamos o veículo pronto, dentro do prazo combinado." },
  ];

  const ABOUT = {
    paragraphs: [
      "Desde {foundedYear}, a Oficina Motor Forte atende motoristas que buscam um serviço mecânico e elétrico automotivo sério, com diagnóstico preciso e orçamento transparente antes de qualquer execução.",
      "Somos liderados por {ownerName}, {ownerRole_lower}, com uma equipe que se atualiza constantemente para acompanhar as novas tecnologias embarcadas nos veículos nacionais e importados.",
      "Trabalhamos com organização, limpeza e comunicação clara: você entende o problema, aprova o orçamento e acompanha o andamento do serviço do início ao fim.",
    ],
    vehicleTypes: ["Carros de passeio", "SUVs e picapes", "Veículos nacionais", "Veículos importados"],
    gallery: [
      { order: 1, src: "images/about-1.jpg", alt: "Área de manutenção da oficina" },
      { order: 2, src: "images/about-2.jpg", alt: "Equipamento de diagnóstico computadorizado" },
      { order: 3, src: "images/about-3.jpg", alt: "Equipe da oficina" },
      { order: 4, src: "images/about-4.jpg", alt: "Mecânico realizando reparo em um veículo" },
    ],
  };

  const DIFFERENTIALS = [
    { order: 1, icon: "invoice", title: "Orçamento sem Surpresas", text: "Você aprova o valor antes de qualquer serviço ser iniciado." },
    { order: 2, icon: "gauge", title: "Diagnóstico Computadorizado", text: "Equipamento próprio para identificar a causa real do problema." },
    { order: 3, icon: "globe", title: "Nacionais e Importados", text: "Atendemos veículos de diversas marcas e procedências." },
    { order: 4, icon: "gem", title: "Peças de Qualidade", text: "Trabalhamos com peças originais ou de procedência confiável." },
    { order: 5, icon: "shieldCheck", title: "Garantia nos Serviços", text: "Todo serviço realizado sai da oficina com garantia." },
    { order: 6, icon: "users", title: "Equipe Especializada", text: "Profissionais treinados e atualizados constantemente." },
    { order: 7, icon: "calendarCheck", title: "Hora Marcada", text: "Agende seu horário e evite esperas desnecessárias." },
    { order: 8, icon: "truck", title: "Retirada e Entrega", text: "Buscamos e devolvemos seu veículo, conforme disponibilidade." },
    { order: 9, icon: "card", title: "Pagamento Facilitado", text: "Diversas formas de pagamento para facilitar sua vida." },
    { order: 10, icon: "siren", title: "Atendimento Emergencial", text: "Suporte para imprevistos fora do horário comercial, conforme disponibilidade." },
  ];

  const BRANDS = [
    { order: 1, name: "Chevrolet" },
    { order: 2, name: "Volkswagen" },
    { order: 3, name: "Fiat" },
    { order: 4, name: "Ford" },
    { order: 5, name: "Toyota" },
    { order: 6, name: "Honda" },
    { order: 7, name: "Hyundai" },
    { order: 8, name: "Renault" },
    { order: 9, name: "Nissan" },
    { order: 10, name: "Jeep" },
    { order: 11, name: "Peugeot" },
    { order: 12, name: "Citroën" },
  ];

  const TESTIMONIALS = [
    {
      order: 1,
      name: "Roberto Alves",
      avatar: "images/avatar-1.jpg",
      rating: 5,
      text: "Fui muito bem atendido. Explicaram o problema com clareza, enviaram o orçamento antes de iniciar o serviço e entregaram o carro dentro do prazo.",
      serviceId: "diagnostico-eletronico",
      vehicle: "Chevrolet Onix",
    },
    {
      order: 2,
      name: "Marcos Ferreira",
      avatar: "images/avatar-2.jpg",
      rating: 5,
      text: "Levei o carro fazendo um barulho estranho na suspensão e resolveram rápido. Preço justo e sem enrolação.",
      serviceId: "manutencao-suspensao",
      vehicle: "Volkswagen Gol",
    },
    {
      order: 3,
      name: "Juliana Ramos",
      avatar: "images/avatar-3.jpg",
      rating: 4,
      text: "Ótimo atendimento na parte elétrica. Meu carro estava com problema pra ligar e identificaram rapidinho.",
      serviceId: "eletrica-automotiva",
      vehicle: "Fiat Argo",
    },
    {
      order: 4,
      name: "Eduardo Santos",
      avatar: "images/avatar-4.jpg",
      rating: 5,
      text: "Fiz a revisão antes de uma viagem longa e rodei tranquilo o percurso todo. Recomendo o serviço de revisão para viagens.",
      serviceId: "revisao-viagem",
      vehicle: "Toyota Corolla",
    },
    {
      order: 5,
      name: "Patrícia Nogueira",
      avatar: "images/avatar-5.jpg",
      rating: 5,
      text: "Troquei a embreagem e o ar-condicionado no mesmo dia. Atendimento organizado e equipe muito atenciosa.",
      serviceId: "embreagem",
      vehicle: "Hyundai HB20",
    },
  ];

  const FAQ = [
    { order: 1, question: "É necessário agendar o atendimento?", answer: "Recomendamos o agendamento para garantir prioridade no horário, mas também recebemos veículos sem hora marcada, conforme disponibilidade da equipe." },
    { order: 2, question: "A oficina realiza orçamento antes do serviço?", answer: "Sim. Nenhum serviço é iniciado sem a sua aprovação prévia do orçamento detalhado." },
    { order: 3, question: "O diagnóstico é cobrado?", answer: "O valor do diagnóstico varia conforme o tipo de avaliação necessária e é sempre informado antes de ser realizado." },
    { order: 4, question: "Quais formas de pagamento são aceitas?", answer: "Aceitamos dinheiro, PIX, cartão de débito e crédito, com opções de parcelamento." },
    { order: 5, question: "Os serviços possuem garantia?", answer: "Sim, todos os serviços realizados possuem garantia, com prazo informado na nota de serviço." },
    { order: 6, question: "A oficina atende veículos importados?", answer: "Sim, atendemos veículos nacionais e importados." },
    { order: 7, question: "Posso levar minhas próprias peças?", answer: "Em alguns casos sim. Consulte nossa equipe pelo WhatsApp para confirmar a viabilidade e a garantia do serviço nesse caso." },
    { order: 8, question: "Quanto tempo demora uma revisão?", answer: "O prazo varia conforme o tipo de revisão, mas em geral informamos uma previsão logo após a avaliação inicial do veículo." },
    { order: 9, question: "A oficina realiza atendimento emergencial?", answer: "Sim, conforme disponibilidade da equipe. Entre em contato pelo WhatsApp para verificar." },
    { order: 10, question: "É possível enviar fotos ou vídeos do problema pelo WhatsApp?", answer: "Sim, isso ajuda bastante nossa equipe a entender o problema antes mesmo de você trazer o veículo até a oficina." },
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

  function yearsOfExperience() {
    return new Date().getFullYear() - WORKSHOP.foundedYear;
  }

  /* ============================ ÍCONES SVG INLINE ============================ */

  const ICONS = {
    whatsapp:
      '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false"><path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.697 4.61 1.902 6.484L4 29l7.71-1.86A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm0 21.818c-1.99 0-3.845-.583-5.404-1.587l-.388-.242-4.573 1.103 1.14-4.463-.253-.406A9.77 9.77 0 0 1 5.182 15c0-5.964 4.855-10.818 10.819-10.818S26.818 9.036 26.818 15 21.965 24.818 16.001 24.818Zm5.978-8.144c-.327-.164-1.936-.955-2.236-1.064-.3-.109-.518-.164-.736.164-.218.327-.845 1.064-1.036 1.282-.191.218-.382.245-.709.082-.327-.164-1.38-.508-2.63-1.62-.972-.867-1.629-1.938-1.82-2.265-.191-.327-.02-.504.144-.667.148-.147.327-.382.49-.573.164-.191.218-.327.327-.545.109-.218.055-.41-.027-.573-.082-.164-.736-1.774-1.009-2.43-.266-.64-.536-.553-.736-.563l-.627-.011c-.218 0-.573.082-.873.41-.3.327-1.145 1.118-1.145 2.728 0 1.61 1.173 3.164 1.336 3.382.164.218 2.31 3.527 5.597 4.945.782.338 1.393.54 1.869.691.785.25 1.5.215 2.065.13.63-.094 1.936-.792 2.209-1.556.273-.764.273-1.418.191-1.555-.082-.137-.3-.219-.627-.383Z"/></svg>',
    star: '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85L10 1.5z"/></svg>',
    wrench:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 7.5a4.5 4.5 0 0 1-6.13 4.2L7 19.5 4.5 17l7.8-7.87A4.5 4.5 0 0 1 18 4.5c.53 0 1.03.09 1.5.26L16 8l1 1 3.5-3.5c.32.6.5 1.28.5 2z"/></svg>',
    bolt:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
    gauge:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 16a8 8 0 0 1 16 0"/><path d="M12 16 15.5 10.5"/><circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none"/></svg>',
    oildrop:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3s6 7.2 6 11.5A6 6 0 0 1 6 14.5C6 10.2 12 3 12 3z"/></svg>',
    checklist:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h5M8 12h5"/><path d="M8 16.3l1.3 1.3L12 15"/></svg>',
    discBrake:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4"/><path d="M12 6v2M12 16v2M6 12h2M16 12h2"/></svg>',
    spring:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 2v3l6 2-6 2 6 2-6 2 6 2-6 2v3"/></svg>',
    loop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 12a8 8 0 0 1 13.9-5.4"/><path d="M20 12a8 8 0 0 1-13.9 5.4"/><path d="M16 4l2 2.6-3 .6"/><path d="M8 20l-2-2.6 3-.6"/></svg>',
    clutch:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><path d="M12 5v2M12 17v2M5 12h2M17 12h2"/></svg>',
    thermometer:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 14V4a2 2 0 1 0-4 0v10a4 4 0 1 0 4 0z"/><circle cx="10" cy="16" r="1.2" fill="currentColor" stroke="none"/></svg>',
    battery:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="8" width="16" height="9" rx="1.5"/><rect x="19" y="11" width="2" height="3" fill="currentColor" stroke="none"/><path d="M7 8V6M11 8V6"/><path d="M9.5 12 8 14.5h2L8.5 17"/></svg>',
    ignition:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="7" cy="12" r="4"/><path d="M11 12h9M16 12v3M19 12v3"/></svg>',
    chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>',
    align:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
    snowflake:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 2v20M4.5 6l15 12M19.5 6l-15 12"/></svg>',
    suitcase:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>',
    search:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.3-4.3"/></svg>',
    invoice:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    globe:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M4 12h16"/><path d="M12 4a13 13 0 0 1 0 16"/><path d="M12 4a13 13 0 0 0 0 16"/></svg>',
    gem: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 9l4-6h8l4 6-10 12z"/><path d="M4 9h16M9 3l3 6 3-6M8 9l4 12 4-12"/></svg>',
    shieldCheck:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>',
    users:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2c2.6.3 4.5 2.6 4.5 5.3"/></svg>',
    calendarCheck:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M8.5 15l2 2 4-4"/></svg>',
    truck:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="8" width="11" height="9" rx="1"/><path d="M13 11h4l3 3v3h-7z"/><circle cx="6.5" cy="18.5" r="1.6"/><circle cx="16.5" cy="18.5" r="1.6"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M6 15h4"/></svg>',
    siren:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3a5 5 0 0 1 5 5v6H7V8a5 5 0 0 1 5-5z"/><path d="M4 14h16v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M12 3V1"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.3"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 6.5 8 6 8-6"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6.6 3h3l1.4 4.5-2.3 1.6a13 13 0 0 0 6.2 6.2l1.6-2.3L21 14.4v3a2 2 0 0 1-2.2 2C11 19 5 13 4.6 5.2A2 2 0 0 1 6.6 3z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3h2v6h3v-6h2.5l.5-3H12V8.5a1 1 0 0 1 1-1H15V4z"/></svg>',
    chevronDown:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
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

  function renderWorkshopInfo() {
    document.title = `${WORKSHOP.name} | ${WORKSHOP.tagline}`;
    document.querySelectorAll("[data-hero-image]").forEach((n) => {
      n.setAttribute("src", HERO.image);
      n.setAttribute("alt", HERO.imageAlt);
    });
    document.querySelectorAll("[data-workshop-name]").forEach((n) => (n.textContent = WORKSHOP.name));
    document.querySelectorAll("[data-workshop-description]").forEach(
      (n) => (n.textContent = WORKSHOP.description)
    );
    document.querySelectorAll("[data-owner-name]").forEach((n) => (n.textContent = WORKSHOP.ownerName));
    document.querySelectorAll("[data-owner-role]").forEach((n) => (n.textContent = WORKSHOP.ownerRole));
    document.querySelectorAll("[data-workshop-logo-alt]").forEach((n) =>
      n.setAttribute("alt", WORKSHOP.logoAlt)
    );
    document.querySelectorAll("[data-founded-year]").forEach(
      (n) => (n.textContent = String(WORKSHOP.foundedYear))
    );
    document.querySelectorAll("[data-years-experience]").forEach(
      (n) => (n.textContent = String(yearsOfExperience()))
    );
  }

  function renderHeroBadges() {
    const wrap = document.getElementById("hero-badges");
    if (!wrap) return;
    wrap.innerHTML = HERO.badges
      .map(
        (b) => `
        <div class="hero__badge-item">
          ${ICONS[b.icon] || ""}
          <span>${escapeHtml(b.text)}</span>
        </div>
      `
      )
      .join("");
  }

  /* ============================ RENDER: SERVIÇOS ============================ */

  function renderServices() {
    const grid = document.getElementById("services-grid");
    if (!grid) return;

    const sorted = [...SERVICES].sort((a, b) => a.order - b.order);
    sorted.forEach((s) => {
      const card = el("article", "card service-card fade-in");
      card.id = `servico-${s.id}`;
      card.innerHTML = `
        <span class="service-card__icon">${ICONS[s.icon] || ""}</span>
        <h3 class="service-card__title">${escapeHtml(s.name)}</h3>
        <p class="service-card__desc">${escapeHtml(s.description)}</p>
        <ul class="service-card__benefits">
          ${s.benefits.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
        <a class="btn btn--outline btn--block"
           data-whatsapp
           data-whatsapp-message="Olá! Gostaria de solicitar um orçamento para o serviço de ${s.name}."
           href="#">
          Solicitar orçamento
        </a>
      `;
      grid.appendChild(card);
    });
  }

  /* ============================ RENDER: PROCESSO ============================ */

  function renderProcess() {
    const wrap = document.getElementById("process-list");
    if (!wrap) return;
    const sorted = [...PROCESS_STEPS].sort((a, b) => a.order - b.order);
    wrap.innerHTML = sorted
      .map(
        (step) => `
        <div class="process-step fade-in">
          <span class="process-step__number">${step.order}</span>
          <div>
            <h3 class="process-step__title">${escapeHtml(step.title)}</h3>
            <p class="process-step__text">${escapeHtml(step.text)}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  /* ============================ RENDER: SOBRE ============================ */

  function renderAbout() {
    const textWrap = document.getElementById("about-text");
    if (textWrap) {
      const replacements = {
        "{foundedYear}": WORKSHOP.foundedYear,
        "{ownerName}": WORKSHOP.ownerName,
        "{ownerRole_lower}": WORKSHOP.ownerRole.toLowerCase(),
      };
      textWrap.innerHTML = ABOUT.paragraphs
        .map((p) => {
          let text = p;
          Object.keys(replacements).forEach((key) => {
            text = text.split(key).join(replacements[key]);
          });
          return `<p>${escapeHtml(text)}</p>`;
        })
        .join("");
    }

    const vehicleWrap = document.getElementById("about-vehicle-types");
    if (vehicleWrap) {
      vehicleWrap.innerHTML = ABOUT.vehicleTypes
        .map((v) => `<span class="about__vehicle-type">${escapeHtml(v)}</span>`)
        .join("");
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
  }

  /* ============================ RENDER: DIFERENCIAIS ============================ */

  function renderDifferentials() {
    const wrap = document.getElementById("differentials-grid");
    if (!wrap) return;
    const sorted = [...DIFFERENTIALS].sort((a, b) => a.order - b.order);
    sorted.forEach((d) => {
      const item = el("div", "card differential fade-in");
      item.innerHTML = `
        <span class="differential__icon">${ICONS[d.icon] || ""}</span>
        <h3 class="differential__title">${escapeHtml(d.title)}</h3>
        <p class="differential__text">${escapeHtml(d.text)}</p>
      `;
      wrap.appendChild(item);
    });
  }

  /* ============================ RENDER: MARCAS ============================ */

  function renderBrands() {
    const srList = document.getElementById("brands-sr-list");
    const track = document.getElementById("brands-ticker-track");
    if (!srList || !track) return;

    const sorted = [...BRANDS].sort((a, b) => a.order - b.order);

    srList.innerHTML = sorted.map((b) => `<li>${escapeHtml(b.name)}</li>`).join("");

    const itemsHtml = sorted.map((b) => `<div class="brand-chip">${escapeHtml(b.name)}</div>`).join("");
    // Conteúdo duplicado dentro da MESMA track (não em tracks separadas): assim a
    // animação desloca exatamente a largura de uma cópia (-50% da largura total da
    // track, que já contém as duas cópias), fechando o loop sem salto/travada.
    track.innerHTML = itemsHtml + itemsHtml;
  }

  /* ============================ RENDER: DEPOIMENTOS (CARROSSEL) ============================ */

  function renderTestimonials() {
    const track = document.getElementById("testimonials-track");
    const dotsWrap = document.getElementById("testimonials-dots");
    if (!track || !dotsWrap) return;

    const sorted = [...TESTIMONIALS].sort((a, b) => a.order - b.order);

    sorted.forEach((t, i) => {
      const relatedService = SERVICES.find((s) => s.id === t.serviceId);
      const serviceName = relatedService ? relatedService.name : "";
      const meta = [serviceName, t.vehicle].filter(Boolean).join(" · ");

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
          <p class="testimonial-card__meta">${escapeHtml(meta)}</p>
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
      wrapper.addEventListener("touchstart", () => stop(), { passive: true });
      wrapper.addEventListener("touchend", () => start(), { passive: true });
    }

    update();
    start();
  }

  /* ============================ RENDER: CTA (MINI ORÇAMENTO) ============================ */

  function initQuoteForm() {
    const form = document.getElementById("quote-form");
    if (!form) return;
    const successMsg = form.querySelector("[data-quote-success]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const vehicle = form.elements["vehicle"].value.trim();
      const problem = form.elements["problem"].value.trim();

      const lines = ["Olá! Gostaria de solicitar um orçamento."];
      if (vehicle) lines.push(`Veículo: ${vehicle}`);
      if (problem) lines.push(`Problema: ${problem}`);

      window.open(buildWhatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");

      if (successMsg) {
        successMsg.textContent = "Perfeito! Abrimos o WhatsApp com sua solicitação.";
      }
      form.reset();
    });
  }

  /* ============================ RENDER: CONTATO ============================ */

  function renderContact() {
    document.querySelectorAll("[data-contact-address]").forEach(
      (n) => (n.textContent = CONTACT.address)
    );
    document.querySelectorAll("[data-contact-phone]").forEach((n) => {
      n.textContent = CONTACT.phone;
      if (n.tagName === "A") n.setAttribute("href", "tel:" + CONTACT.phone.replace(/\D/g, ""));
    });
    document.querySelectorAll("[data-contact-email]").forEach((n) => {
      n.textContent = CONTACT.email;
      if (n.tagName === "A") n.setAttribute("href", "mailto:" + CONTACT.email);
    });
    document.querySelectorAll("[data-maps-embed]").forEach((iframe) => {
      const autoEmbedSrc = "https://www.google.com/maps?q=" + encodeURIComponent(CONTACT.address) + "&output=embed";
      iframe.setAttribute("src", CONTACT.mapsEmbedSrc || autoEmbedSrc);
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

    document.querySelectorAll("#form-service, #footer-services-list").forEach((node) => {
      const sortedServices = [...SERVICES].sort((a, b) => a.order - b.order);
      if (node.tagName === "SELECT") {
        sortedServices.forEach((s) => {
          const opt = document.createElement("option");
          opt.value = s.id;
          opt.textContent = s.name;
          node.appendChild(opt);
        });
      } else {
        sortedServices.slice(0, 6).forEach((s) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = `#servico-${s.id}`;
          a.textContent = s.name;
          li.appendChild(a);
          node.appendChild(li);
        });
      }
    });
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
      const vehicleBrand = form.elements["vehicleBrand"].value.trim();
      const vehicleModel = form.elements["vehicleModel"].value.trim();
      const vehicleYear = form.elements["vehicleYear"].value.trim();
      const serviceId = form.elements["service"].value;
      const problem = form.elements["problem"].value.trim();
      const bestTime = form.elements["bestTime"].value.trim();

      let hasError = false;
      const errors = { name: "", phone: "", service: "", problem: "" };

      if (!name) {
        errors.name = "Por favor, informe seu nome.";
        hasError = true;
      }
      if (!phone || phone.replace(/\D/g, "").length < 10) {
        errors.phone = "Informe um telefone válido com DDD.";
        hasError = true;
      }
      if (!serviceId) {
        errors.service = "Selecione o serviço de interesse.";
        hasError = true;
      }
      if (!problem) {
        errors.problem = "Descreva rapidamente o problema apresentado.";
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

      const selectedService = SERVICES.find((s) => s.id === serviceId);
      const serviceName = selectedService ? selectedService.name : serviceId;

      const lines = [
        "Olá! Gostaria de solicitar um orçamento.",
        `Nome: ${name}`,
        `Telefone: ${phone}`,
      ];
      if (email) lines.push(`E-mail: ${email}`);
      if (vehicleBrand) lines.push(`Marca do veículo: ${vehicleBrand}`);
      if (vehicleModel) lines.push(`Modelo do veículo: ${vehicleModel}`);
      if (vehicleYear) lines.push(`Ano do veículo: ${vehicleYear}`);
      lines.push(`Serviço de interesse: ${serviceName}`);
      lines.push(`Problema apresentado: ${problem}`);
      if (bestTime) lines.push(`Melhor horário para contato: ${bestTime}`);

      window.open(buildWhatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
      form.reset();
    });
  }

  /* ============================ FAQ (ACORDEÃO) ============================ */

  function renderFaq() {
    const wrap = document.getElementById("faq-list");
    if (!wrap) return;
    const sorted = [...FAQ].sort((a, b) => a.order - b.order);

    sorted.forEach((item, i) => {
      const faqItem = el("div", "faq-item fade-in");
      const panelId = `faq-panel-${i}`;
      faqItem.innerHTML = `
        <h3>
          <button type="button" class="faq-item__question" aria-expanded="false" aria-controls="${panelId}">
            <span>${escapeHtml(item.question)}</span>
            ${ICONS.chevronDown}
          </button>
        </h3>
        <div class="faq-item__panel" id="${panelId}">
          <div class="faq-item__panel-inner">
            <p class="faq-item__answer">${escapeHtml(item.answer)}</p>
          </div>
        </div>
      `;
      wrap.appendChild(faqItem);
    });

    wrap.querySelectorAll(".faq-item__question").forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        const isOpen = item.classList.contains("is-open");
        item.classList.toggle("is-open", !isOpen);
        button.setAttribute("aria-expanded", String(!isOpen));
      });
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
    renderWorkshopInfo();
    renderHeroBadges();
    renderServices();
    renderProcess();
    renderAbout();
    renderDifferentials();
    renderBrands();
    renderTestimonials();
    renderContact();
    renderFaq();
    renderFooterYear();
    wireWhatsappLinks();
    initQuoteForm();
    initContactForm();
    initHeaderScroll();
    initMobileMenu();
    initFadeInObserver();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
