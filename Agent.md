# Agente — requisitos obligatorios (FOCO)

Este archivo define lo que **debe cumplirse siempre** al editar o ampliar la landing. Si un cambio contradice esto, no se mergea.

Audiencia: dueños de comercios, pymes y emprendimientos.  
Objetivo: **conversión** (contacto), no impresionar a desarrolladores.

---

## 1. Qué vendemos (y qué no)

### Sí

- Resultados: ahorrar tiempo, vender más, reducir errores, tener control, organizar el negocio, eliminar tareas repetitivas, información clara.
- Lenguaje simple, cercano y profesional.
- Beneficios concretos por sección.

### No

- Vender “desarrollo”, stacks, frameworks, ERP, Full Stack, APIs, etc.
- Frases vacías: *soluciones digitales*, *transformación digital*, *innovación*, *tecnología de punta*, *nos adaptamos*, *equipo profesional* (sin sustancia).
- Jerga técnica o tono de software factory.

El visitante **no** sabe qué es un sistema de gestión, una automatización ni un desarrollo a medida: hay que explicarlo con problemas y resultados de negocio.

---

## 2. Idioma

- **Español castellano** (conjugación de *tú*): tienes, quieres, puedes, Mira, Cuéntanos…
- **Prohibido el voseo**: vos, tenés, querés, podés, contanos, mirá, por vos, etc.
- Sitio **bilingüe ES / EN**: todo texto visible debe existir en `translations` (`app.js`).
- Al cambiar un string en HTML, actualizar también `app.js` (y al revés).

---

## 3. Marca

- Marca activa: **FOCO** (no volver a NEXO salvo decisión explícita del dueño).
- Logo / wordmark coherente en header, hero y footer.
- CTAs humanos, no corporativos fríos.
  - Preferir: *Quiero mejorar mi negocio*, *Hablemos de tu negocio*, *Cómo podemos ayudarte*, *¿Tu negocio es diferente? Conversemos.*
  - Evitar: *Solicitar propuesta* como único CTA principal.

---

## 4. Estructura comercial mínima (no eliminar sin reemplazo)

La landing debe responder en ~10 segundos:

1. ¿Qué hacen?
2. ¿Para quién?
3. ¿Qué problema solucionan?
4. ¿Por qué elegirlos?
5. ¿Qué pasa si los contacto?

### Secciones que tienen que existir

| Sección | Rol |
|---------|-----|
| Hero | Promesa clara + CTA primario + secundario |
| Problemas | Identificación del dolor |
| Servicios | 3 líneas: web / sistemas / automatización, con problema, beneficios, para quién, ejemplos |
| Para tu negocio | Casos por tipo de negocio |
| Cómo trabajamos | Pasos humanos (sin metodología técnica) |
| Por qué FOCO | Confianza concreta (transparencia, soporte, lenguaje claro) |
| Casos reales | Historias reales (no inventar testimonios falsos) |
| Preguntas frecuentes | Objeciones (precio, plazos, pymes, soporte…) |
| Contacto | Formulario conversacional + qué pasa después |

Si una sección no ayuda a vender, se puede rediseñar; no dejar agujeros en el funnel.

---

## 5. Formulario de contacto

Debe sentirse como el inicio de una conversación, no un formulario genérico.

Campos / datos mínimos:

- Nombre
- Tipo de negocio
- Qué necesita resolver (opciones / checks)
- Problema en sus palabras
- Canal preferido (email / WhatsApp / llamada)
- Dato de contacto

Incluir señales de confianza (sin compromiso, respuesta en 24 h, lenguaje claro) y mensaje post-envío claro.

---

## 6. HTML / CSS / JS

- **HTML semántico**: preferir `section`, `header`, `nav`, `article`, `figure`, `main`, `footer`, `menu`, `fieldset`, `details`… Evitar `div` decorativos innecesarios.
- Unidades en **`rem`** (no `px` en estilos). Excepción: `IntersectionObserver.rootMargin` solo acepta `px` o `%`.
- Responsive obligatorio (móvil y escritorio).
- Animaciones con sentido; respetar `prefers-reduced-motion`.
- Hero: carrusel local en `assets/hero/` (no depender de URLs externas en producción).
- Mantener diseño premium, mucho aire, buena jerarquía; sin sobrecargar.

---

## 7. Copywriting

- Reescribir con criterio comercial, no rellenar.
- Cada título debe captar atención; cada botón, invitar al clic.
- Tono: cercano, profesional, fácil de entender.
- No sonar corporativo vacío ni técnico.
- Casos reales: solo hechos reales del cliente; no inventar citas.

---

## 8. SEO (mantener al cambiar contenidos)

- Meta title y description alineados al mensaje de negocio
- Open Graph / Twitter
- Schema.org cuando aplique (Organization, FAQ, etc.)
- Headings en orden lógico (`h1` único en hero)
- Alts cuando una imagen aporte significado (decorativas: `alt=""` + `aria-hidden` si aplica)

---

## 9. Checklist rápido antes de cerrar un cambio

- [ ] ¿Un dueño de pyme lo entiende sin saber de IT?
- [ ] ¿Habla de resultados, no de tecnología?
- [ ] ¿Español sin voseo?
- [ ] ¿ES y EN actualizados?
- [ ] ¿CTAs claros y humanos?
- [ ] ¿Funnel completo intacto?
- [ ] ¿Casos reales sin inventar?
- [ ] ¿Semántica + `rem` + responsive OK?
- [ ] ¿Hero sigue rotando imágenes locales?

---

## 10. Fuera de alcance por defecto

No agregar stacks, blogs técnicos, dashboards de vanity metrics, ni secciones “sobre nosotros” genéricas que no empujen al contacto, salvo pedido explícito del dueño del producto.
