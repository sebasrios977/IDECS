# IDECS — Sitio Web Corporativo

Proyecto web construido con **Astro 4**, **Tailwind CSS** y **Resend** para el formulario de contacto.

## Tecnologías

- [Astro](https://astro.build) — framework SSG/hybrid con excelente SEO
- [Tailwind CSS](https://tailwindcss.com) — utilidades CSS, mobile-first
- [Resend](https://resend.com) — envío de correos transaccionales

---

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.astro          # Barra de navegación responsive
│   │   └── Footer.astro          # Pie de página
│   ├── sections/
│   │   ├── HeroSection.astro     # Hero de la página de inicio
│   │   ├── ServicesSection.astro # Sección de servicios
│   │   ├── AboutStripSection.astro # Franja "Sobre nosotros" (inicio)
│   │   ├── CtaBand.astro         # Banda CTA reutilizable
│   │   └── ContactForm.astro     # Formulario de contacto
│   └── ui/
│       ├── Button.astro          # Botón (variantes: primary, ghost)
│       ├── SectionLabel.astro    # Etiqueta mono sobre títulos
│       ├── StatCard.astro        # Tarjeta de métrica
│       ├── ServiceCard.astro     # Tarjeta de servicio
│       ├── ProjectCard.astro     # Fila/tarjeta de proyecto
│       └── TeamCard.astro        # Tarjeta de integrante del equipo
├── data/
│   ├── site.ts                   # Constantes globales: nombre, teléfono, servicios, valores...
│   └── projects.ts               # Listado de proyectos del portafolio
├── layouts/
│   └── BaseLayout.astro          # Layout base con SEO (title, meta, OG, schema.org)
├── pages/
│   ├── index.astro               # Inicio
│   ├── proyectos.astro           # Proyectos con filtro por categoría
│   ├── nosotros.astro            # Nosotros (historia, valores, equipo)
│   ├── contacto.astro            # Contacto + formulario
│   └── api/
│       └── contact.ts            # API route — procesa y envía correo con Resend
└── styles/
    └── global.css                # Fuentes Google + directivas Tailwind
```

---

## Instalación y desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env y completar:
#   RESEND_API_KEY=re_xxxxx
#   CONTACT_EMAIL=tu-correo@tuempresa.com
#   PUBLIC_SITE_URL=https://tuempresa.com

# 3. Correr en desarrollo
npm run dev
```

El sitio estará disponible en http://localhost:4321

---

## Personalización rápida

### Cambiar nombre, teléfono, dirección
Editar `src/data/site.ts` → objeto `SITE`.

### Agregar / editar proyectos
Editar `src/data/projects.ts` → arreglo `PROJECTS`.  
Para agregar imagen: colocar el archivo en `/public/projects/` y poner la ruta en el campo `image`.

### Cambiar servicios
Editar `src/data/site.ts` → arreglo `SERVICES`.

---

## Configurar Resend

1. Crear cuenta en [resend.com](https://resend.com)
2. Verificar tu dominio (o usar el sandbox `onboarding@resend.dev` para pruebas)
3. Generar API Key y colocarla en `.env`
4. En `src/pages/api/contact.ts`, cambiar el campo `from` al correo de tu dominio verificado

---

## Despliegue (Vercel recomendado)

```bash
# Instalar CLI de Vercel
npm i -g vercel

# Desplegar
vercel

# Agregar variables de entorno en el dashboard de Vercel:
# RESEND_API_KEY, CONTACT_EMAIL, PUBLIC_SITE_URL
```

También es compatible con **Netlify**, **Cloudflare Pages** y cualquier proveedor que soporte Node.js.

> **Nota:** Como el proyecto usa `output: 'hybrid'` (por la API route de contacto),
> necesita un adaptador de servidor. Para Vercel: `npm i @astrojs/vercel` y
> agregar `adapter: vercel()` en `astro.config.mjs`.

---

## SEO incluido

- `<title>` y `<meta description>` por página
- Tags Open Graph y Twitter Card
- `<link rel="canonical">` automático
- Schema.org `Organization` en JSON-LD
- `robots.txt`
- Sitemap (agregar integración `@astrojs/sitemap` en `astro.config.mjs`)
