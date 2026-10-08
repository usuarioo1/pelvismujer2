# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Mujeres hispanohablantes (contexto regulatorio chileno: "Kinesióloga", pago vía MercadoPago) que buscan salud pélvica y bienestar integral desde la etapa fértil/ciclo menstrual hasta gestación, parto, posparto y climaterio. Muchas llegan con dolor, incoordinación o temor tras embarazo/parto; buscan acompañamiento profesional humano, no tratamiento frío. Secundario: parejas/acompañantes y mujeres que ya conocen el espacio por redes sociales.

## Product Purpose

PelvisMujer es el espacio de Daniela Flores, Kinesióloga especializada en piso pélvico y embarazo, que integra kinesiología de piso pélvico, yoga, meditación, terapia Gestalt y neurociencia para acompañar a mujeres en cada etapa de su ciclo vital. El sitio presenta el espacio, su enfoque y su catálogo (membresía, sesiones, talleres, espacio online), genera confianza y convierte en contacto/agendamiento; la membresía también puede comprarse directamente (MercadoPago).

## Positioning

"Habitar tu cuerpo es volver a casa": rehabilitación desde la escucha, el movimiento y la conciencia corporal — el cuerpo como territorio que habitar, no una máquina que corregir. Ningún vecino honesto puede copiar la combinación de kinesiología clínica de piso pélvico + Gestalt + yoga en un proceso por etapas de vida (ciclicidad, gestación, parto, posparto, climaterio).

## Operating Context

Sitio en español. Servicios presenciales y online. Contacto vía formulario (/formulario: nombre, email, teléfono, programa de interés) para coordinar evaluación; pagos por MercadoPago con flujo existente (PagoDialog). Instagram/Facebook/YouTube como canales de comunidad.

## Capabilities and Constraints

- Catálogo real confirmado: Espacio Online (Autoconocimiento Femenino, Programa para Gestantes, Meditaciones para Cada Ciclo), Membresía Raíz Cíclica, Sesiones 1:1 (Dolor Pélvico, Parto Consciente, Puerperio), Talleres y Cursos (Preparación al Parto, Taller Instinto, Taller RCP).
- El formulario aún no tiene backend conectado (solo registra localmente); no prometer envío automático ni respuesta instantánea.
- Stack heredado: Next.js 15 (App Router) + Tailwind CSS 4 + lucide-react; navbar y footer son globales en layout.
- Rutas vivas a preservar: /conocenos, /membresia, /membresiaRaizCiclica, /raizCiclica, /sesiones-uno-a-uno (+ dolorPelvico, partoConsciente, puerperio), /talleresYcursos (+ 3 talleres), /espacioOnline (+ 3 programas), /formulario, /terminosYCondiciones.
- Hecho decidido en esta sesión: fotografía = stock real verificado, descargado y alojado localmente (public/), fácil de reemplazar por fotos propias; identidad visual conservada (ver Brand Commitments); sección de equipo = fundadora (sin integrantes ficticios hasta existir datos reales).

## Brand Commitments

- Paleta oficial (binding): Rojo #ED4137, Rojo oscuro #E22727, Crema #EDD0B2, Morado #4E2226, Marengo #2D2D2D (src/assets/colores.md).
- Tipografías definidas: Quentin (títulos), Montserrat (cuerpo), Awelier (decorativo). Quentin y Awelier no tienen archivos en el repo — se deben cargar o sustituir con equivalencia digna, sin cambiar la intención caligráfica/femenina.
- Motivo floral de 8 pétalos ya usado en la marca; logos existentes en src/assets (logoNavbar.png, logonav2.png, logoForm.png).
- Registro de la fundadora: Daniela Flores Rojas, Kinesióloga, su historia real es material de confianza (no editar sus hechos sin aprobación).

## Evidence on Hand

- Copy real de misión/visión/posición en /conocenos; descripciones reales de los 3 programas más elegidos (MasVendidos.jsx).
- Identidad y biografía real de la fundadora (Concepto.jsx).
- Sin fotografía real disponible hoy: todas las imágenes actuales son 404 locales o hotlinks frágiles (Pinterest, Google thumbnails, Vogue). No inventar testimonios, precios publicados, casos clínicos ni personas ("Lupita" era ficticia y no debe volver). Prohibido fabricar cifras de resultados.

## Product Principles

1. Verdad sobre fabricación: la confianza se apoya en la fundadora real y en credenciales reales; nunca en personas, datos o promesas inventadas.
2. El cuerpo como hogar: cálida y profesional a la vez — credibilidad clínica kinesiológica + calidez de acompañamiento.
3. Guiar por etapa, no empujar: cada sección debe resonar con una etapa de vida concreta (ciclo, gestación, posparto, madurez).
4. Activos locales y duraderos: sin hotlinks frágiles; toda imagen vive en el repo con procedencia documentada.

## Accessibility & Inclusion

Sitio en español: `<html lang="es">` es obligatorio. Contraste AA en fondos crema (#2D2D2D sobre #EDD0B2 cumple; texto blanco pequeño sobre #ED4137 no: reservarlo para ≥18px/700 o reforzar con #4E2226). Público clave incluye mujeres gestantes y adultas mayores: interacciones simples, foco visible, tamaño táctil ≥44px, jerarquía clara. Respetar `prefers-reduced-motion`.
