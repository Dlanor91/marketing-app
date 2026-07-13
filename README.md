# FOCO — Landing comercial para pymes

Sitio bilingüe (ES / EN) orientado a **conversión**: ayuda a dueños de comercios, pymes y emprendimientos a entender en segundos qué hacemos, para quién, qué problema resolvemos y cómo contactarnos.

No vendemos tecnología. Vendemos **tiempo recuperado, más ventas y control del negocio**.

---

## Marca

La marca activa del sitio es **FOCO** (reemplazo de NEXO).

**Por qué no NEXO:** nombre genérico, saturado en LatAm (NexoSmart, Digital Nexo, Nexo Digital, etc.), poco diferenciador y débil para SEO de intención comercial.

**Por qué FOCO:** corto, memorable, transmite claridad / concentración en el negocio, funciona en español e inglés, y se alinea con el mensaje “orden y foco en resultados”.

---

## Secciones (funnel CRO)

1. **Hero** — promesa clara + CTA humano  
2. **Problemas** — identificación  
3. **Servicios** — beneficios + para quién + ejemplos  
4. **Casos por negocio** — ferretería, restaurante, contable, etc.  
5. **Cómo trabajamos** — experiencia, no metodología técnica  
6. **Por qué elegirnos** — confianza concreta  
7. **Testimonios** — estructura lista para casos reales  
8. **FAQ** — objeciones  
9. **Contacto conversacional** — formulario de diagnóstico  

---

## Estructura

```
marketing-app/
├── index.html
├── styles.css
├── app.js
├── .github/workflows/   # Azure Static Web Apps
└── README.md
```

---

## Local

```bash
python -m http.server 5173
```

Abrí http://localhost:5173

---

## Idiomas

Selector ES/EN en el header. Textos en `app.js` → objeto `translations`.

---

## Deploy

Push a `main` → Azure Static Web Apps (`app_location: /`, `output_location: .`).

---

## Próximos pasos recomendados

- Conectar el formulario a email / WhatsApp / CRM  
- Reemplazar testimonios ilustrativos por casos reales  
- Actualizar `canonical` y Open Graph con el dominio definitivo  
