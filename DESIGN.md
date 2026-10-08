---
name: PelvisMujer
description: Espacio integral de salud pélvica y acompañamiento femenino — kinesiología, yoga y Gestalt
colors:
  rojo: "#ED4137"
  rojo-oscuro: "#E22727"
  crema: "#EDD0B2"
  morado: "#4E2226"
  marengo: "#2D2D2D"
  marfil: "#F7F2EA"
  blanco: "#FFFFFF"
typography:
  display:
    fontFamily: "Quentin, cursive"
    fontSize: "clamp(3rem, 5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "Quentin, cursive"
    fontSize: "clamp(1.875rem, 3vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  note:
    fontFamily: "Awelier, serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 400
    fontStyle: "italic"
    lineHeight: 1.35
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
  microLabel:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.22em"
  cardBody:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.65
  chipText:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.4
  uiBody:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.5
  signature:
    fontFamily: "Quentin, cursive"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.2
rounded:
  pill: "9999px"
  card: "1.6rem"
  card-lg: "1.8rem"
  ficha: "1.4rem"
  focus: "2px"
  arch: "borde superior a pleno arco (border-radius superior 50% del ancho)"
spacing:
  section: "5rem móvil / 7rem–8rem escritorio"
  container: "ancho máximo 72rem, márgenes laterales 1.25rem móvil / 2rem escritorio"
components:
  button-primary:
    backgroundColor: "{colors.rojo-oscuro}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "#c81f1f"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.morado}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.crema}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  chip:
    backgroundColor: "{colors.crema} al 30–60%"
    textColor: "{colors.morado}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
---

# Design System: PelvisMujer

## Overview

**Creative North Star: "El cuerpo como hogar"**

El sistema visual de PelvisMujer habita la línea de la marca: entrar a la página es entrar a una casa cálida con arcos. La paleta oficial (crema, rojo, morado, marengo) vive en superficies enteras —bandas de marfil, hero tinturado morado, footer morado— nunca reducida a acentos sobre blanco. La fotografía real es protagonista; la tipografía script Quentin pone la voz humana en los titulares y Montserrat cuida la legibilidad del cuerpo.

Densidad baja-a-media con ritmo editorial: secciones amplias alternando blanco, marfil y crema, una sola GM de sombras derivadas del morado, y el motivo floral como sello ocasional. Está prohibido el patrón de la categoría (fila de tarjetas idénticas, rótulos eyebrow sobre titulares) y cualquier atribución falsa de identidad en fotografía.

**Key Characteristics:**
- Paleta oficial aplicada como superficie, no como decoración
- Arcos y pilares redondeados como gramática de marco heredada del logo
- Script caligráfica (Quentin) + sans humanista (Montserrat) + notas en serif suave
- Fotografía real verificada, siempre local, con procedencia documentada
- Sombras ambiente suaves, siempre derivadas del morado

## Colors

Paleta cálida de clínica-hogar: tierra crema, acento coral-rojo y profundidad vino-morada sobre tinta grafito.

### Primary
- **rojo** (#ED4137): headings display y acentos activos solo a gran tamaño (sobre blanco ≥3:1); flor-sello de la marca. Nunca como fondo de texto pequeño blanco.
- **rojo-oscuro** (#E22727): CTAs primarios solid y badges con texto blanco (pasa AA 4.5:1 el texto pequeño). Hover deriva a #c81f1f.

### Secondary
- **crema** (#EDD0B2): texto sobre morado, marcos de arco decorativos, chips y tiles cálidos, veladuras de foto.
- **marfil** (#F7F2EA): fondo de bandas alternas (superficie fría-cálida intermedia entre blanco y crema).

### Neutral
- **morado** (#4E2226): footer, hero veladura, tarjetas de texto fuerte, títulos display oscuros, sombras.
- **marengo** (#2D2D2D): texto de cuerpo en superficies claras (al 85–90% para respirar).

### Named Rules
**La Superficie Rule.** La paleta se usa en campos enteros (bandas, hero, footer); un tinte crema o marfil guía toda sección. Un acento aislado sobre blanco es errata, no diseño.
**El AA Rule.** El texto pequeño sobre rojo usa rojo-oscuro; sobre crema/marfil el cuerpo es marengo, no rojo.

## Typography

**Display Font:** Quentin (script caligráfica de trazo seco, auto-hospedada en /fonts/Quentin.otf; uso comercial libre por Get Studio)
**Body Font:** Montserrat (300–700, vía next/font)
**Note Font:** Awelier = serif suave en itálica (hoy sustituto OFL "Quando" en /fonts/Quando.woff2; reemplazable por MADE Awelier si se compra su licencia comercial)

**Character:** la script firma el tono humano y familiar; Montserrat sostiene claridad clínica; las notas en serif suave insuflan intimidad editorial. Tres voces, un solo registro: cálido, profesional, en primera persona.

### Hierarchy
- **Display** (400, 3–4.5rem, 1.1): mitad de página, un titular por sección. Solo frases cortas.
- **Title/Quote** (400, 1.875–2.5rem, 1.15): citas y frases de marca en Quentin.
- **Note** (italic, 1.25–1.5rem): frases de marca ("Tu cuerpo es tu hogar"), no texto informativo.
- **Body** (400, 0.98rem, 1.65): párrafos en Montserrat ≤66–75ch.
- **CardBody** (400, 0.9rem, 1.65): texto de tarjetas y tiles.
- **ChipText** (500, 0.8rem): chips de disciplinas y credenciales.
- **UiBody** (500, 0.95rem): CTAs y links de acción.
- **Label** (600, 0.7rem, 0.18em): etiquetas de sección dentro de badges/fichas.
- **MicroLabel** (600, 0.65rem, 0.22em): labels de ficha sobre foto; el paso más pequeño del sistema.

### Named Rules
**La Tres Voces Rule.** Quentin nunca lleva párrafos ni datos; Montserrat nunca lleva titulares; la nota decorativa nunca lleva UI.

## Layout

Contenedor único de 72rem con márgenes generosos; el hero y el footer son full-bleed. Ritmo vertical de 5rem (móvil) a 7–8rem (escritorio) entre secciones, con más aire sobre el titular que debajo. Grids asimétricos: hero 1.05/0.95, concepto 0.95/1.05, fondos con par de columnas desiguales y tiles desfasados verticalmente (mt-10) para romper la fila uniforme. Móvil: una columna, orden texto→imagen→CTA, fichas apiladas.

## Elevation & Depth

Profundidad ambiente: sombras difusas grandes con offset y blur, siempre teñidas de morado o rojo, nunca grises neutros. Las superficies en reposo ya portan una sombra baja; hover la profundiza y levanta (translate-y). En fondo oscuro (morado) la profundidad se logra por contraste de capa, no por sombra.

### Shadow Vocabulary
- **card** (`0 18px 44px -26px rgba(78,34,38,0.28)`): tarjetas y tiles en reposo.
- **card-hover** (`0 34px 64px -28px rgba(78,34,38,0.40)`): hover de tarjetas de programa.
- **photo-arch** (`0 36px 70px -30px rgba(78,34,38,0.40)`): composición fotográfica grande.
- **cta** (`0 18px 40px -14px rgba(226,39,39,0.60)`): CTAs rojos, acompañados de hover -translate-y-0.5.

### Named Rules
**La Sombra Tintada Rule.** Toda sombra lleva componente morado/rojo y blur ≥24px; un halo sin offset o gris plano no pertenece al sistema.

## Shapes

Radio generoso en todo el lenguaje: píldoras (9999px) para botones/chips, tarjetas 1.4–1.8rem de esquina continua. La firma del sistema es el **arco**: las fotos verticales se enmarcan con top rounded-full (imagen a pleno arco), a veces con segundo arco menor superpuesto y borde blanco de 6px. Bordes-hairline crema/morado al 20–30% para contener en lugar de sombrear. El motivo floral de 8 pétalos aparece como sello pequeño, nunca como etiqueta.

## Components

### Buttons
- **Shape:** píldora completa (9999px), altura táctil ≥44px.
- **Primary:** fondo rojo-oscuro, texto blanco 0.95rem/500, px-7 py-3.5, sombra cta; **hover** #c81f1f + lift; **active** vuelve al asiento.
- **Secondary:** contorno morado/30 con texto morado sobre claro; sobre fondo oscuro, contorno crema/50 y texto crema; hover rellena suave.
- **Nav CTA:** versión compacta (px-5 py-2.5) del primary en la barra.

### Chips / Tags
- **Style:** crema al 30–60% con texto morado (600, 0.78–0.8rem); tags sobre foto usan cápsula blanca/90 con texto morado y tracking amplio.

### Cards / Containers
- **Corner Style:** 1.4–1.8rem continuo.
- **Background:** blanco puro (sobre banda marfil) o crema/60 y morado (tiles cualidades).
- **Shadow Strategy:** card/card-hover (ver Elevation).
- **Border:** hairline crema en borde blanco; sin borde en tiles de color pleno.
- **Internal Padding:** p-7 bases, p-8/p-12 en tarjetas mayores.

### Navigation
- Barra sticky translúcida (white/90 + backdrop-blur) con hairline crema inferior; links 0.9rem con subrayado activo rojo; CTA pill rojo derecha. Móvil: panel acordeón con altura animada, filas activas crema, CTA full-width.

### Firma: ficha de entrada (Entry Ficha)
Tarjeta-link con foto plena, veladura inferior de #231214, label mayúsculas 0.65rem/0.22em crema y título script 2xl blanco + flecha circular que pasa a rojo en hover. Es la puerta del sistema: convierte fotografía en navegación.

## Do's and Don'ts

### Do:
- **Do** usar la paleta oficial como campos de color enteros (hero morado-veladura, bandas marfil/crema, footer morado).
- **Do** enmarcar toda fotografía vertical en arco (top rounded-full) o ficha con veladura inferior.
- **Do** verificar contraste antes de pintar texto pequeño: blanco AA va sobre rojo-oscuro o morado; marengo sobre crema/marfil.
- **Do** mantener la fotografía local con su nota de procedencia en public/img/PROVENANCE.md y reemplazarla por fotos propias manteniendo importancia y formato.
- **Do** respetar prefers-reduced-motion y la visibilidad sin JavaScript en revelados y zooms.

### Don't:
- **Don't** devolver al patrón genérico de la categoría: no filas de tarjetas idénticas (desfase, imágenes propias y tamaños desiguales siempre), ni rótulos eyebrow sobre titulares.
- **Don't** usar sombras grises, halos sin offset, texto con gradiente, bordes de color >1px de lado único, ni glass decorativo.
- **Don't** presentar fotografías de banco con rostro como la fundadora o el equipo: ninguna identidad falsa; los retratos reales llegarán cuando existan.
- **Don't** hosting hotlinks externos (Pinterest, thumbnails de Google, Vogue, etc.): toda imagen vive en el repo.
- **Don't** encadenar la script Quentin a texto de lectura o datos; Montserrat carga la información.
