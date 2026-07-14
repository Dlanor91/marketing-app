# FOCO — Landing comercial para pymes

Sitio estático bilingüe (**ES / EN**) orientado a **conversión** (CRO v2). El visitante objetivo es el dueño de un comercio, pyme o emprendimiento: debe entender en segundos qué hacemos, para quién, qué problema resolvemos y cómo contactarnos.

No vendemos tecnología ni “desarrollo”. Vendemos **tiempo recuperado, más ventas, menos errores y control del negocio**.

### Docs del proyecto

| Archivo | Para qué |
|---------|----------|
| **[AGENT.md](./AGENT.md)** | Reglas obligatorias al editar (producto, idioma, responsive, checklist) |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | Cómo está armado el sitio (archivos, i18n, deploy, breakpoints) |
| **[COPY.md](./COPY.md)** | Voz, mensajes canónicos y CTAs preferidos |

Si el cambio lo amerita —nuevas secciones, CTAs, comportamiento, docs— actualizá también este README en el mismo trabajo (ver sección 10 de `AGENT.md`).

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

Detalle técnico: [ARCHITECTURE.md](./ARCHITECTURE.md).

---

## Secciones (funnel CRO v2)

1. **Hero** — *Más control. Menos caos.* + CTAs + señales de confianza + carrusel
2. **Problemas** — tarjetas problema + consecuencia + CTA
3. **Servicios** — web / sistemas / automatización / marketing (4 tarjetas)
4. **Para tu negocio** — rubros con icono y resultado corto
5. **Cómo trabajamos** — 6 pasos humanos
6. **Confianza / Relación** — por qué siguen con nosotros
7. **Preguntas frecuentes**
8. **Contacto** — formulario conversacional (incluye marketing)

### Qué se eliminó a propósito (ruido / repetición)

- Sección **Casos reales** (mejor contarlo en la reunión personal; en web suele sonar a humo sin prueba verificable)
- Sección Visión / “Resultados”
- Caja “Lo que puedes conseguir”
- Franja de números
- Segunda sección “Por qué FOCO”
- Historias secundarias no verificadas

### CTAs principales (ES)

Ver lista canónica en [COPY.md](./COPY.md). Resumen:

- Hero: **Quiero mejorar mi negocio** / **Cómo podemos ayudarte**
- Header: **Hablemos de tu negocio**
- Problemas / casos: **Quiero mejorar mi negocio** / **¿Tu negocio es diferente? Conversemos.**
- Formulario: **Quiero que me contacten**

---

## Estructura del repo

```
marketing-app/
├── index.html
├── styles.css
├── app.js
├── assets/
│   ├── favicon.svg
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   └── hero/
├── AGENT.md
├── ARCHITECTURE.md
├── COPY.md
├── README.md
└── .github/workflows/
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
- El HTML lleva texto ES como **fallback**; al cargar, `applyLanguage` lo reemplaza
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
- Estilos en **`rem`** (no `px`), bordes con `--hairline`; bloque **CRO v2** al final de `styles.css`
- Full responsive (móvil, tablet, **1024px**, desktop). Nav horizontal solo desde `72rem` (~1152px); debajo, menú hamburguesa (sin wraps en header)
- `service-grid` en 2 columnas (tablet) y 2×2 o 4 columnas (desktop)

Más detalle: [ARCHITECTURE.md](./ARCHITECTURE.md) y [AGENT.md](./AGENT.md) §6.

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

## Próximos pasos

- Conectar el formulario a email / WhatsApp / CRM
- Dominio definitivo en canonical / Open Graph
- Opcional: email y WhatsApp visibles en footer
