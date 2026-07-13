# FOCO — Landing comercial para pymes

Sitio estático bilingüe (**ES / EN**) orientado a **conversión**. El visitante objetivo es el dueño de un comercio, pyme o emprendimiento: debe entender en segundos qué hacemos, para quién, qué problema resolvemos y cómo contactarnos.

No vendemos tecnología ni “desarrollo”. Vendemos **tiempo recuperado, más ventas, menos errores y control del negocio**.

---

## Marca

**FOCO** (reemplazó a NEXO).

| | |
|---|---|
| **Por qué no NEXO** | Genérico, saturado en LatAm (NexoSmart, Digital Nexo, etc.), poco diferenciador, SEO débil. |
| **Por qué FOCO** | Corto, memorable, bilingüe, transmite claridad y orden. |

Logo: isotipo de “foco” (círculo + punto) en SVG inline.

---

## Stack

- HTML semántico + CSS + JavaScript vanilla (sin build)
- Deploy: **Azure Static Web Apps** (GitHub Actions)
- Imágenes del hero en `assets/hero/` (locales, no CDN externo)

---

## Secciones (funnel CRO)

1. **Hero** — promesa clara + CTAs humanos + carrusel de 3 fotos
2. **Problemas** — identificación (“¿te suena familiar?”)
3. **Servicios** — web / sistemas / automatización (beneficio + para quién + ejemplos)
4. **Para tu negocio** — rubros (ferretería, restaurante, contable, etc.)
5. **Cómo trabajamos** — experiencia simple, sin metodología técnica
6. **Por qué FOCO** — confianza concreta (presupuesto, soporte, lenguaje claro)
7. **Casos reales** — estudio contable LLC (web + pagos/admin)
8. **Preguntas frecuentes** — objeciones (plazos, precio, pymes, soporte)
9. **Contacto** — formulario conversacional (negocio, necesidad, canal)

---

## Estructura del repo

```
marketing-app/
├── index.html
├── styles.css
├── app.js                 # i18n ES/EN + menú + reveal + carrusel + form
├── assets/hero/           # Fotos del banner (descargables / versionadas)
│   ├── negocio-equipo.jpg
│   ├── comercio-atencion.jpg
│   └── pyme-trabajo.jpg
├── agente.md              # Reglas obligatorias para agentes / cambios futuros
├── README.md
└── .github/workflows/     # Azure Static Web Apps CI/CD
```

---

## Cómo verlo en local

```bash
python -m http.server 5173
```

Abrí [http://localhost:5173](http://localhost:5173).

Tras cambios de CSS/JS, conviene **Ctrl+F5** (caché).

---

## Idiomas

- Selector **ES / EN** en el header
- Textos en `app.js` → objeto `translations`
- Español en **castellano** (tú), **sin voseo**
- Menú FAQ en ES: **Preguntas frecuentes**

---

## Hero / imágenes

- Carrusel: las 3 imágenes de `assets/hero/` rotan con fade (~5,5 s)
- No dependen de Unsplash en runtime
- Respetan `prefers-reduced-motion`

---

## SEO

- Meta title / description / keywords
- Open Graph + Twitter Card
- Schema.org (`Organization`, `WebSite`, `WebPage`, `FAQPage`)
- Actualizar `canonical` y `og:url` cuando haya dominio definitivo

---

## Deploy

Push a `main` → Azure Static Web Apps.

| Parámetro | Valor |
|-----------|--------|
| `app_location` | `/` |
| `api_location` | *(vacío)* |
| `output_location` | `.` |

---

## Casos reales incluidos

1. Estudio contable — web y gestión de clientes para constitución de **LLC**
2. Mismo proyecto — **pagos por plataforma** + administración (datos, cobros, formularios)

---

## Próximos pasos

- Conectar el formulario a email / WhatsApp / CRM
- Sumar más casos reales (si hay otros clientes)
- Dominio definitivo en canonical / Open Graph
- Opcional: email y WhatsApp visibles en footer

---

## Documentación para agentes

Antes de tocar copy, estructura o diseño, leé **[agente.md](./agente.md)**: ahí están los requisitos que **sí o sí** debe cumplir esta landing.
