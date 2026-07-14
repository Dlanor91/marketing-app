# Copy — voz y mensajes canónicos (FOCO)

Guía de contenido para la landing. Las reglas duras (tú/voseo, qué no vender, funnel) viven en [`AGENT.md`](./AGENT.md). Acá están los **mensajes preferidos** y el tono para no reinventar en cada cambio.

---

## Premisa

El visitante es dueño de un comercio, pyme o emprendimiento. En ~10 segundos debe entender:

1. Qué hacemos  
2. Para quién  
3. Qué problema resolvemos  
4. Por qué confiar  
5. Qué pasa si nos contacta  

Objetivo de la página: **una conversación** (formulario / CTA), no impresionar con jerga.

---

## Voz

| Sí | No |
|----|----|
| Cercano, profesional, claro | Corporativo vacío (“sinergias”, “partners estratégicos”) |
| Castellano con *tú* | Voseo (*vos*, *tenés*, *contanos*…) |
| Problema → consecuencia → resultado | Features técnicos (APIs, stacks, ERP…) |
| “Tu negocio”, “tu equipo” | “Soluciones digitales”, “transformación digital” |
| Promesas acotadas y honestas | Testimonios o casos inventados / no verificables en web |

Explicá sistemas, web o automatización **como resultados** (“pedidos ordenados”, “menos doble carga”), nunca como productos IT.

---

## Mensajes hero (canónicos ES)

| Rol | Texto |
|-----|--------|
| Marca | **FOCO** |
| Título | Más control. Menos caos. |
| Lead | Creamos páginas web, sistemas, automatizaciones y estrategias digitales que ayudan a pequeñas y medianas empresas a vender más, ahorrar tiempo y tomar mejores decisiones. |
| Nota | Primera conversación sin costo. Te respondemos en menos de 24 horas. |

Señales de confianza en hero (hechos generales, no “casos” inventados):

- +5 años ayudando a empresas  
- Hasta +70% menos tareas manuales en muchos proyectos  
- Hasta +15% más ventas según el tipo de negocio  
- Atención cercana y directa  

Si un número deja de ser defendible, **sacalo o suavizalo**; no inventes métricas.

---

## CTAs preferidos (ES)

| Contexto | Preferir | Evitar como único CTA |
|----------|----------|------------------------|
| Hero primario | Quiero mejorar mi negocio | Solicitar propuesta |
| Hero secundario | Cómo podemos ayudarte | Ver servicios (frío) |
| Header | Hablemos de tu negocio | Contactar |
| Problemas / rubros | Quiero mejorar mi negocio / ¿Tu negocio es diferente? Conversemos. | Más info |
| Formulario | Quiero que me contacten | Enviar |

EN: mantener el mismo *intent* (mejora del negocio, conversación), no traducciones literales robóticas.

---

## Funnel — promesa por sección

| Sección | Debe lograr |
|---------|-------------|
| Hero | Claridad + urgencia suave + CTA |
| Problemas | “Esto me pasa” + costo de no actuar |
| Servicios | 4 caminos claros (web / sistemas / automatización / marketing), títulos en pregunta |
| Para tu negocio | “Trabajan con gente como yo” |
| Cómo trabajamos | Proceso humano, sin metodología consulting |
| Relación | Por qué vuelven: respuesta, claridad, presupuesto transparente |
| FAQ | Bajar miedo a precio, plazos, “somos chicos”, soporte |
| Contacto | Baja fricción; qué pasa después del envío |

**No en la web:** “casos reales” sin prueba verificable (p. ej. CompaniaUSA). Eso se cuenta en la reunión.

---

## Formulario — tono

- Intro: como inicio de conversación, no “complete el formulario”.
- Checks de necesidad: lenguaje de negocio (“quiero vender más online”), no módulos de software.
- Post-envío: confirmación clara + plazo de respuesta (alineado a “menos de 24 horas”).

---

## Palabras y frases a evitar

- desarrollo / Full Stack / API / ERP / microservicios / cloud-native  
- transformación digital / innovación / tecnología de punta / solución integral  
- nos adaptamos a tus necesidades (sin sustancia)  
- equipo multidisciplinario / partners / sinergia  
- testimonios inventados o “clientes felices” genéricos  

---

## Checklist al tocar copy

1. ¿ES sin voseo y EN alineado en `app.js`?  
2. ¿El HTML fallback ES coincide?  
3. ¿Sigue hablando de resultados?  
4. ¿Algún CTA quedó corporativo por costumbre?  
5. ¿Inventé un caso o métrica? → sacar.  

Fuente de verdad de strings: `translations` en `app.js` (ver [`ARCHITECTURE.md`](./ARCHITECTURE.md)).
