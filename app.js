const translations = {
  es: {
    "nav.services": "Servicios",
    "nav.process": "Proceso",
    "nav.why": "Nosotros",
    "nav.contact": "Contacto",
    "nav.cta": "Solicitar propuesta",
    menu: "Abrir menú",
    "hero.title": "Soluciones digitales a medida para operar con claridad",
    "hero.lead": "Menos planillas. Más control. Más ventas.",
    "hero.ctaPrimary": "Solicitar propuesta",
    "hero.ctaSecondary": "Explorar servicios",
    intro:
      "Ayudamos a empresas, comercios y emprendedores a mejorar sus procesos mediante el desarrollo de páginas web y sistemas personalizados.",
    "services.eyebrow": "Qué ofrecemos",
    "services.title": "Tres líneas de servicio, un mismo objetivo: resultados",
    "services.web.title": "Páginas web profesionales",
    "services.web.i1": "Landing pages",
    "services.web.i2": "Sitios corporativos",
    "services.web.i3": "Catálogos digitales",
    "services.web.i4": "Formularios de contacto",
    "services.web.i5": "Presencia online profesional",
    "services.systems.title": "Sistemas de gestión",
    "services.systems.i1": "Gestión de clientes",
    "services.systems.i2": "Control de ventas",
    "services.systems.i3": "Administración de stock",
    "services.systems.i4": "Seguimiento de tareas",
    "services.systems.i5": "Reportes e indicadores",
    "services.auto.title": "Automatización de procesos",
    "services.auto.text":
      "Transformamos tareas manuales en procesos digitales que permiten ahorrar tiempo, reducir errores y aumentar la productividad.",
    "process.eyebrow": "Metodología",
    "process.title": "Acompañamiento integral, de la definición al soporte operativo",
    "process.s1": "Análisis",
    "process.s2": "Diseño",
    "process.s3": "Desarrollo",
    "process.s4": "Implementación",
    "process.s5": "Capacitación",
    "process.s6": "Soporte",
    "why.eyebrow": "Nuestro enfoque",
    "why.title": "Por qué las empresas eligen NEXO",
    "why.i1": "Soluciones adaptadas a cada negocio",
    "why.i2": "Equipo dedicado y atención cercana",
    "why.i3": "Comunicación clara y directa",
    "why.i4": "Acompañamiento continuo post-lanzamiento",
    "contact.eyebrow": "Contacto",
    "contact.title": "Cuéntenos su desafío. Diseñamos la solución.",
    "contact.lead":
      "Recibirá una propuesta con alcance, plazos y siguiente paso — sin compromiso.",
    "contact.name": "Nombre",
    "contact.email": "Email corporativo",
    "contact.message": "¿En qué podemos ayudarle?",
    "contact.submit": "Enviar solicitud",
    "contact.success": "Solicitud recibida. Nos pondremos en contacto a la brevedad.",
    footer: "Soluciones digitales a medida para empresas y emprendedores.",
  },
  en: {
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.why": "About us",
    "nav.contact": "Contact",
    "nav.cta": "Request a proposal",
    menu: "Open menu",
    "hero.title": "Custom digital solutions for clearer operations",
    "hero.lead": "Less spreadsheets. More control. More sales.",
    "hero.ctaPrimary": "Request a proposal",
    "hero.ctaSecondary": "Explore services",
    intro:
      "We help companies, small businesses and entrepreneurs improve their operations through professional websites and tailored business systems.",
    "services.eyebrow": "What we offer",
    "services.title": "Three service lines, one goal: results",
    "services.web.title": "Professional websites",
    "services.web.i1": "Landing pages",
    "services.web.i2": "Corporate websites",
    "services.web.i3": "Digital catalogs",
    "services.web.i4": "Contact forms",
    "services.web.i5": "Professional online presence",
    "services.systems.title": "Business management systems",
    "services.systems.i1": "Customer management",
    "services.systems.i2": "Sales tracking",
    "services.systems.i3": "Inventory control",
    "services.systems.i4": "Task monitoring",
    "services.systems.i5": "Reports and dashboards",
    "services.auto.title": "Process automation",
    "services.auto.text":
      "We transform manual tasks into digital workflows that save time, reduce errors and improve productivity.",
    "process.eyebrow": "Methodology",
    "process.title": "End-to-end partnership, from definition to operational support",
    "process.s1": "Analysis",
    "process.s2": "Design",
    "process.s3": "Development",
    "process.s4": "Deployment",
    "process.s5": "Training",
    "process.s6": "Support",
    "why.eyebrow": "Our approach",
    "why.title": "Why companies choose NEXO",
    "why.i1": "Solutions tailored to each business",
    "why.i2": "Dedicated team and close attention",
    "why.i3": "Clear, direct communication",
    "why.i4": "Ongoing support after launch",
    "contact.eyebrow": "Contact",
    "contact.title": "Tell us your challenge. We'll design the solution.",
    "contact.lead":
      "You'll receive a proposal with scope, timeline and next steps — no commitment required.",
    "contact.name": "Name",
    "contact.email": "Work email",
    "contact.message": "How can we help?",
    "contact.submit": "Submit request",
    "contact.success": "Request received. We'll be in touch shortly.",
    footer: "Custom digital solutions for businesses and entrepreneurs.",
  },
};

let currentLang = "es";

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  document.title =
    lang === "es"
      ? "NEXO — Soluciones digitales a medida"
      : "NEXO — Custom digital solutions";
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

function setMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileNav.hidden = !open;
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  setMenu(open);
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  },
  { passive: true }
);

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
);

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 6, 4) * 70}ms`;
  observer.observe(el);
});

const form = document.querySelector("#contact-form");
const statusEl = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  statusEl.textContent = translations[currentLang]["contact.success"];
  form.reset();
});

applyLanguage("es");
