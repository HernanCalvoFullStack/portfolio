/* Birthday: 7/8/1984 (DD/MM/YYYY — August 7) */
const BIRTH_DATE = new Date(1984, 7, 7);

const translations = {
  en: {
    pageTitle: "Hernán Calvo | Semi Senior Full Stack Developer",
    nav: {
      home: "Home",
      experience: "Experience",
      portfolio: "Portfolio",
      looking: "Looking for",
      about: "About",
      contact: "Contact",
    },
    home: {
      badge: "Semi Senior Full Stack Developer",
      hello: "Hello, my name is",
      im: "I'm a",
      bio: "Semi Senior Full Stack Developer with 2+ years of professional experience at Interassist SA. I work with Laravel, React and TypeScript building REST APIs, CRM systems and integrations. Based in Buenos Aires — open to full-time roles.",
      downloadCv: "Download CV",
      contactMe: "Contact me",
      seeWork: "See my work",
      hire: "Hire Me",
    },
    typing: [
      "Semi Senior Full Stack Developer",
      "Laravel · React · TypeScript",
      "CRM & API Specialist",
      "Production-ready systems",
    ],
    skills: {
      title: "My Skills",
    },
    looking: {
      title: "What I'm looking for",
      lead: "I'm looking for a Semi Senior Full Stack role where I can keep owning production systems end to end.",
      i1: "Stack focus: Laravel, React, TypeScript, REST APIs and relational databases.",
      i2: "Modality: full-time — on-site in Buenos Aires, hybrid or remote.",
      i3: "Environment: products in production, clear ownership, and room to keep growing.",
      i4: "I bring experience in CRM platforms, integrations, migrations and database cleanup.",
      cta: "Write to me",
    },
    experience: {
      title: "Experience",
      intro: "Professional work and personal products I've built and shipped.",
      visitSite: "Visit site",
      demoLabel: "Demo video",
      demoHint: "To show the demo, add this file:",
      interassist: {
        role: "Semi Senior Full Stack Developer",
        industry: "Travel Assistance",
        tenure: "2 years",
        summary:
          "I migrated the company's CRM and business Core from Laravel 4.2 + Blade to a modern stack, and I continue evolving the platform toward Laravel 13 with React + TypeScript while acting as de-facto DBA.",
        b1: "Migrated CRM/Core from Laravel 4.2 + Blade to Laravel 11 with React REST API; currently upgrading to Laravel 13 + React + TypeScript.",
        b2: "Database cleanup, relationships, indexing and standards; merged duplicate clients with safe SQL ID remapping so nothing breaks.",
        b3: "Classic CRM modules: clients, companies, travel & vehicle providers, case management with automatic status changes.",
        b4: "Plan quoter, sales issuance, IP access restriction, sector profiles and backend middleware for restricted access.",
        b5: "Integrations: WhatsApp API, Google Wallet (Android) for e-vouchers, API Keys and Swagger docs for external systems.",
        b6: "Agency and public web quoters; carousel images scheduled to publish/expire automatically via Laravel schedule, jobs and queues.",
        b7: "File imports, plans, promotions, pre-purchases and pre-sales flows.",
      },
      hcprode: {
        role: "Founder & Full Stack Developer",
        tenure: "Personal product — live",
        summary:
          "Sports prediction platform built with Laravel 13 and React + TypeScript, with custom tournaments, monetization and Mercado Pago.",
        b1: "Custom tournaments and real-world tournaments where companies play the same event in separate company leagues.",
        b2: "Points engine with special rules and match scoring based on forecast volume.",
        b3: "Mercado Pago integration and monetization packages.",
      },
      cuentas: {
        role: "Android app — expense splitting",
        tenure: "Personal project — not published yet",
        summary:
          "Expense calculator for one or many days, with adults, linked children, exclusions and suggested compensation payments.",
        b1: "Track spending for a single day or multiple days.",
        b2: "Adults and children linked to adults with configurable spend percentage.",
        b3: "Exclude users from specific expenses; final split with suggested compensation if needed.",
      },
    },
    portfolio: {
      title: "Portfolio",
      heading: "Selected practice projects",
      githubNote: "All the code, including backend, is on my",
      githubLink: "GitHub",
      view: "View project",
      watch: "Watch demo",
      projects: {
        demo: {
          title: "Full Stack Demo",
          desc: "Screen recording of a complete full-stack application flow.",
        },
        products: {
          title: "Product Administration",
          desc: "REST API + React frontend for product CRUD management.",
        },
        crypto: {
          title: "Cryptocurrency Quoter",
          desc: "Live crypto prices with currency conversion via external API.",
        },
        expenses: {
          title: "Expense Control",
          desc: "Budget tracking with categories and spending overview.",
        },
        calories: {
          title: "Calorie Counter",
          desc: "Track daily calories from meals and activities.",
        },
        guitar: {
          title: "Guitar Store",
          desc: "E-commerce cart experience for a guitar catalog.",
        },
      },
    },
    about: {
      title: "About Me",
      heading: "I'm Hernán Calvo and",
      role: "Semi Senior Full Stack Developer",
      text: "Semi Senior Full Stack Developer focused on Laravel, React and TypeScript. I also study Data Science at Universidad Siglo 21 and I'm finishing a Mathematics teaching degree. I started programming by building Excel tools for sports tournaments, then moved into web development and production systems.",
      birthday: "Birthday:",
      age: "Age:",
      city: "City:",
      freelance: "Freelance:",
      available: "Available",
      downloadCv: "Download CV",
      hire: "Hire Me",
      education: "Education",
      courses: "Courses",
      present: "Present",
      edu1Title: "Bachelor of Data Science",
      edu1Text:
        "Undergraduate degree at Universidad Siglo 21 — distance modality — 18 subjects approved in 1.5 years.",
      edu2Title: "CSS The Complete Guide — Flexbox, CSS Grid, SASS +20 projects",
      edu2Text:
        "Flexbox, CSS Grid, Custom Properties, SASS, Mixins, Gulp workflows, animations, RWD, transitions and transformations.",
      edu3Title: "Modern JavaScript — Definitive Guide +20 Projects",
      edu3Text:
        "REST APIs with JSON and Fetch, Async/Await, ES6+, OOP with Classes and Prototypes, Promises, Callbacks and a MERN Full Stack project.",
      edu4Title: "Complete Web Development with HTML5, CSS3, JS, PHP and MySQL",
      edu4Text:
        "BEM and module methodologies, modern JavaScript (ES6), PHP with Fetch API, dynamic sites and secure CRUD apps with PHP and MySQL.",
      edu5Title: "React and TypeScript — The Complete Guide +10 Projects",
      edu5Text:
        "Hooks, State, TypeScript, Zod, Zustand, React Query, Next.js, React Router, MERN and PERN full-stack projects.",
      edu6Title: "Node.js Bootcamp — MVC and REST APIs",
      edu6Text:
        "MVC, REST APIs, ORMs, email, authentication, file uploads, EJS, Pug, React, Leaflet maps and more.",
    },
    contact: {
      title: "Contact Me",
      questions: "Have any questions?",
      services: "I'm at your service",
      call: "Call me",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      send: "Send me an email",
      responsive: "I reply quickly to messages",
    },
    footer: {
      tagline: "Semi Senior Full Stack Developer",
      rights: "All rights reserved.",
    },
    theme: {
      colors: "Theme Colors",
    },
  },
  es: {
    pageTitle: "Hernán Calvo | Desarrollador Full Stack Semi Senior",
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      portfolio: "Portfolio",
      looking: "Qué busco",
      about: "Sobre mí",
      contact: "Contacto",
    },
    home: {
      badge: "Desarrollador Full Stack Semi Senior",
      hello: "Hola, me llamo",
      im: "Soy",
      bio: "Desarrollador Full Stack Semi Senior con más de 2 años de experiencia profesional en Interassist SA. Trabajo con Laravel, React y TypeScript armando APIs REST, sistemas CRM e integraciones. Basado en Buenos Aires — abierto a roles full-time.",
      downloadCv: "Descargar CV",
      contactMe: "Contactame",
      seeWork: "Ver mi trabajo",
      hire: "Contratame",
    },
    typing: [
      "Desarrollador Full Stack Semi Senior",
      "Laravel · React · TypeScript",
      "Especialista en CRM & APIs",
      "Sistemas en producción",
    ],
    skills: {
      title: "Mis Skills",
    },
    looking: {
      title: "Qué busco",
      lead: "Busco un rol Full Stack Semi Senior donde pueda seguir siendo dueño de sistemas en producción de punta a punta.",
      i1: "Enfoque de stack: Laravel, React, TypeScript, APIs REST y bases de datos relacionales.",
      i2: "Modalidad: full-time — presencial en Buenos Aires, híbrido o remoto.",
      i3: "Entorno: productos en producción, ownership claro y espacio para seguir creciendo.",
      i4: "Aporto experiencia en plataformas CRM, integraciones, migraciones y limpieza de bases de datos.",
      cta: "Escribime",
    },
    experience: {
      title: "Experiencia",
      intro: "Trabajo profesional y productos personales que construí y puse en producción.",
      visitSite: "Visitar sitio",
      demoLabel: "Video demo",
      demoHint: "Para mostrar el demo, agregá este archivo:",
      interassist: {
        role: "Desarrollador Full Stack Semi Senior",
        industry: "Asistencia al Viajero",
        tenure: "2 años",
        summary:
          "Migré el CRM y el Core del negocio de Laravel 4.2 + Blade a un stack moderno, y sigo evolucionando la plataforma hacia Laravel 13 con React + TypeScript, además de hacer el trabajo de administrador de base de datos.",
        b1: "Migración del CRM/Core de Laravel 4.2 + Blade a Laravel 11 con API REST en React; actualmente migrando a Laravel 13 + React + TypeScript.",
        b2: "Limpieza de BBDD, relaciones, indexación y estándares; unificación de clientes duplicados con remapeo seguro de IDs por SQL.",
        b3: "Módulos de CRM clásico: clientes, empresas, prestadores de viajeros y vehículos, gestión de casos con cambio automático de estados.",
        b4: "Cotizador de planes, emisión de ventas, restricción de acceso por IP, perfiles por sector y middleware de acceso restringido.",
        b5: "Integraciones: WhatsApp API, Google Wallet (Android) para vouchers en e-wallet, API Keys y documentación Swagger para otros sistemas.",
        b6: "Cotizador para agencias y cotizador web público; carousel con alta/baja automática de imágenes por schedule, jobs y colas de Laravel.",
        b7: "Importación de archivos, planes, promociones, precompras y preventas.",
      },
      hcprode: {
        role: "Fundador y Desarrollador Full Stack",
        tenure: "Producto personal — en producción",
        summary:
          "Plataforma de pronósticos deportivos con Laravel 13 y React + TypeScript, torneos custom, monetización y Mercado Pago.",
        b1: "Torneos customizados y torneos de la vida real donde las empresas juegan el mismo evento dividido por empresa.",
        b2: "Motor de puntos con reglas especiales y puntaje de partidos según la cantidad de pronósticos.",
        b3: "Integración con Mercado Pago y paquetes de monetización.",
      },
      cuentas: {
        role: "App Android — división de gastos",
        tenure: "Proyecto personal — aún no publicada",
        summary:
          "Calculadora de gastos para uno o varios días, con adultos, hijos vinculados, exclusiones y pagos sugeridos por compensación.",
        b1: "Registro de gastos de un día o de varios días.",
        b2: "Adultos e hijos vinculados a adultos con porcentaje de gasto configurable.",
        b3: "Exclusión de usuarios en ciertos gastos; cálculo final y compensación sugerida si hace falta.",
      },
    },
    portfolio: {
      title: "Portfolio",
      heading: "Proyectos de práctica seleccionados",
      githubNote: "Todo el código, incluyendo el backend, está en mi",
      githubLink: "GitHub",
      view: "Ver proyecto",
      watch: "Ver demo",
      projects: {
        demo: {
          title: "Demo Full Stack",
          desc: "Grabación de pantalla del flujo completo de una aplicación full stack.",
        },
        products: {
          title: "Administración de Productos",
          desc: "API REST + frontend React para gestión CRUD de productos.",
        },
        crypto: {
          title: "Cotizador de Criptomonedas",
          desc: "Precios en vivo con conversión de moneda mediante API externa.",
        },
        expenses: {
          title: "Control de Gastos",
          desc: "Control de presupuesto con categorías y resumen de gastos.",
        },
        calories: {
          title: "Contador de Calorías",
          desc: "Registro diario de calorías de comidas y actividades.",
        },
        guitar: {
          title: "Tienda de Guitarras",
          desc: "Experiencia de carrito e-commerce para un catálogo de guitarras.",
        },
      },
    },
    about: {
      title: "Sobre mí",
      heading: "Soy Hernán Calvo y",
      role: "Desarrollador Full Stack Semi Senior",
      text: "Desarrollador Full Stack Semi Senior enfocado en Laravel, React y TypeScript. También estudio Ciencia de Datos en la Universidad Siglo 21 y estoy terminando el profesorado de Matemática. Empecé programando herramientas en Excel para torneos deportivos y después pasé al desarrollo web y sistemas en producción.",
      birthday: "Cumpleaños:",
      age: "Edad:",
      city: "Ciudad:",
      freelance: "Freelance:",
      available: "Disponible",
      downloadCv: "Descargar CV",
      hire: "Contratame",
      education: "Educación",
      courses: "Cursos",
      present: "Actualidad",
      edu1Title: "Licenciatura en Ciencia de Datos",
      edu1Text:
        "Carrera de grado en la Universidad Siglo 21 — modalidad a distancia — 18 materias aprobadas en 1.5 años.",
      edu2Title: "CSS La Guía Completa — Flexbox, CSS Grid, SASS +20 proyectos",
      edu2Text:
        "Flexbox, CSS Grid, Custom Properties, SASS, Mixins, workflows con Gulp, animaciones, RWD, transitions y transformations.",
      edu3Title: "JavaScript Moderno — Guía Definitiva +20 Proyectos",
      edu3Text:
        "REST APIs con JSON y Fetch, Async/Await, ES6+, POO con Classes y Prototypes, Promises, Callbacks y un proyecto MERN Full Stack.",
      edu4Title: "Desarrollo Web Completo con HTML5, CSS3, JS, PHP y MySQL",
      edu4Text:
        "Metodologías BEM y módulos, JavaScript moderno (ES6), PHP con Fetch API, sitios dinámicos y CRUD seguros con PHP y MySQL.",
      edu5Title: "React y TypeScript — Guía Completa +10 Proyectos",
      edu5Text:
        "Hooks, State, TypeScript, Zod, Zustand, React Query, Next.js, React Router, proyectos full stack MERN y PERN.",
      edu6Title: "Bootcamp Node.js — MVC y REST APIs",
      edu6Text:
        "MVC, REST APIs, ORMs, emails, autenticación, subida de archivos, EJS, Pug, React, mapas Leaflet y más.",
    },
    contact: {
      title: "Contactame",
      questions: "¿Tenés alguna pregunta?",
      services: "Estoy a tu disposición",
      call: "Llámame",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      send: "Envíame un email",
      responsive: "Respondo rápido a los mensajes",
    },
    footer: {
      tagline: "Desarrollador Full Stack Semi Senior",
      rights: "Todos los derechos reservados.",
    },
    theme: {
      colors: "Colores del tema",
    },
  },
};

let typedInstance = null;
let currentLang = localStorage.getItem("portfolio-lang") || "en";

function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }

  return age;
}

function setAge() {
  const ageEl = document.getElementById("age");
  if (ageEl) {
    ageEl.textContent = String(calculateAge(BIRTH_DATE));
  }
}

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.title = dict.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getByPath(dict, key);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = lang === "en" ? "ES" : "EN";
    langBtn.setAttribute(
      "aria-label",
      lang === "en" ? "Cambiar a español" : "Switch to English"
    );
  }

  initTyped(lang);
}

function initTyped(lang) {
  const el = document.querySelector(".typing");
  if (!el || typeof Typed === "undefined") return;

  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }

  el.textContent = "";

  typedInstance = new Typed(".typing", {
    strings: translations[lang].typing,
    typeSpeed: 90,
    backSpeed: 50,
    backDelay: 1400,
    loop: true,
  });
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "es" : "en";
  localStorage.setItem("portfolio-lang", currentLang);
  applyTranslations(currentLang);
}

function initSkillsAnimation() {
  const cards = document.querySelectorAll(".skill-card");
  if (!cards.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        const index = [...cards].indexOf(card);
        card.style.transitionDelay = `${index * 70}ms`;
        card.classList.add("is-visible");
        obs.unobserve(card);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
  );

  cards.forEach((card) => observer.observe(card));
}

function initExperienceVideos() {
  document.querySelectorAll(".exp-media").forEach((media) => {
    const video = media.querySelector("video");
    if (!video) return;

    const markReady = () => media.classList.add("has-video");
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("error", () => media.classList.remove("has-video"));
  });
}

function initMobileNav() {
  const toggler = document.getElementById("nav-toggler");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  if (!toggler || !sidebar) return;

  const setOpen = (open) => {
    sidebar.classList.toggle("open", open);
    document.body.classList.toggle("nav-open", open);
    toggler.classList.toggle("open", open);
    toggler.setAttribute("aria-expanded", open ? "true" : "false");
    toggler.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (backdrop) backdrop.hidden = !open;
  };

  toggler.addEventListener("click", () => {
    setOpen(!sidebar.classList.contains("open"));
  });

  if (backdrop) {
    backdrop.addEventListener("click", () => setOpen(false));
  }

  sidebar.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".aside .nav a");
  if (!sections.length || !links.length) return;

  const onScroll = () => {
    const scrollY = window.scrollY + 120;
    let current = sections[0].id;

    sections.forEach((section) => {
      if (section.offsetTop <= scrollY) {
        current = section.id;
      }
    });

    links.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", isActive);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  setAge();
  applyTranslations(currentLang);
  initSkillsAnimation();
  initExperienceVideos();
  initMobileNav();
  initActiveNav();

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", toggleLanguage);
  }
});
