# FOCO — Landing comercial para pymes

Sitio estático bilingüe (**ES / EN**) orientado a **conversión**. El visitante objetivo es el dueño de un comercio, pyme o emprendimiento: debe entender en segundos qué hacemos, para quién, qué problema resolvemos y cómo contactarnos.

No vendemos tecnología ni “desarrollo”. Vendemos **tiempo recuperado, más ventas, menos errores y control del negocio**.

Antes de cambiar copy, estructura o diseño, lee **[Agent.md](./Agent.md)** (requisitos obligatorios).

---

## Marca

**FOCO** (reemplazó a NEXO).

|                     |                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------- |
| **Por qué no NEXO** | Genérico, saturado en LatAm (NexoSmart, Digital Nexo, etc.), poco diferenciador, SEO débil. |
| **Por qué FOCO**    | Corto, memorable, bilingüe, transmite claridad y orden.                                     |

Logo: isotipo de “foco” (círculo + punto) en SVG inline (header, hero y footer).

---

## Stack

- HTML semántico + CSS + JavaScript vanilla (sin build)
- Deploy: **Azure Static Web Apps** (GitHub Actions)
- Imágenes del hero en `assets/hero/` (locales, versionadas en el repo)

---

## Secciones (funnel CRO)

1. **Hero** — promesa clara + CTAs humanos + carrusel de 3 fotos
2. **Problemas** — identificación (“¿te suena familiar?”) + CTA
3. **Servicios** — web / sistemas / automatización (problema, beneficios, para quién, ejemplos)
4. **Para tu negocio** — ferretería, restaurante, contable, inmobiliaria, etc.
5. **Cómo trabajamos** — pasos humanos, sin metodología técnica
6. **Por qué FOCO** — confianza concreta (transparencia, soporte, lenguaje claro)
7. **Casos reales** — estudio contable LLC (web + pagos/admin)
8. **Preguntas frecuentes** — plazos, precio, pymes, soporte…
9. **Contacto** — formulario conversacional (negocio, necesidad, canal, qué pasa después)

### CTAs principales (ES)

- Hero primario / sección problemas: **Quiero mejorar mi negocio**
- Hero secundario: **Cómo podemos ayudarte**
- Header / menú: **Hablemos de tu negocio**
- Casos por negocio: **¿Tu negocio es diferente? Conversemos.**
- Formulario: **Quiero que me contacten**

---

## Estructura del repo

```
marketing-app/
├── index.html             # Marcado + fallback ES en data-i18n
├── styles.css
├── app.js                 # translations ES/EN, menú, reveal, carrusel, form
├── assets/hero/
│   ├── negocio-equipo.jpg
│   ├── comercio-atencion.jpg
│   └── pyme-trabajo.jpg
├── Agent.md               # Reglas obligatorias para agentes
├── README.md
└── .github/workflows/     # Azure Static Web Apps CI/CD
```

---

## Cómo verlo en local

```bash
python -m http.server 5173
```

Abrí [http://localhost:5173](http://localhost:5173).

Tras cambios de CSS/JS, conviene **Ctrl+F5**.

---

## Idiomas (i18n)

- Selector **ES / EN** en el header
- **Fuente de verdad** de textos: `translations` en `app.js`
- El HTML lleva texto ES como **fallback** (por si el JS tarda o falla); al cargar, `applyLanguage` lo reemplaza
- Al cambiar un string visible: actualizar **HTML + `app.js` (es y en)**
- Español en **castellano** (tú), **sin voseo**
- Menú FAQ en ES: **Preguntas frecuentes**

---

## Hero / imágenes

- Carrusel local: las 3 fotos de `assets/hero/` rotan con fade (~5,5 s)
- Botones del hero del **mismo tamaño** (grid)
- Respeta `prefers-reduced-motion` (sin rotación automática)

---

## Convenciones técnicas

- Preferir HTML semántico; evitar `div` innecesarios
- Estilos en **`rem`** (no `px`), salvo APIs que exijan `px` (p. ej. `IntersectionObserver.rootMargin`)
- Responsive móvil y escritorio

---

## SEO

- Meta title / description / keywords
- Open Graph + Twitter Card
- Schema.org (`Organization`, `WebSite`, `WebPage`, `FAQPage`)
- Actualizar `canonical` y `og:url` / `og:image` con el dominio definitivo

---

## Deploy

Push a `main` → Azure Static Web Apps.

| Parámetro         | Valor     |
| ----------------- | --------- |
| `app_location`    | `/`       |
| `api_location`    | _(vacío)_ |
| `output_location` | `.`       |

---

## Casos reales incluidos

1. Estudio contable — web y gestión de clientes para constitución de **LLC**
2. Mismo proyecto — **pagos por plataforma** + administración (datos, cobros, formularios)

---

## Próximos pasos

- Conectar el formulario a email / WhatsApp / CRM
- Sumar más casos reales (otros clientes)
- Dominio definitivo en canonical / Open Graph
- Opcional: email y WhatsApp visibles en footer
