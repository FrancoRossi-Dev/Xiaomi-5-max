# Xiaomi 5 Max — React + Tailwind Showcase

A modern, animated single-page marketing website for the Xiaomi 5 Max electric scooter. Built with React 19 and Tailwind CSS 4, it features scroll-triggered animations, a parallax 3D product viewer, an infinite draggable testimonial carousel, and a fully responsive layout.

> Content is localized in Spanish and targets the Uruguayan market.

---

## Features

- **Animated Hero** — Scooter image with 3D perspective rotation that follows the mouse, a floating idle animation, and an electric glow pulse effect.
- **Characteristics Grid** — Six product features displayed in a staggered two-column layout with scroll-triggered entrance animations.
- **Store Locations** — Table listing six physical store locations in Uruguay with address and contact details.
- **Infinite Testimonial Carousel** — Auto-scrolling marquee with 15 customer reviews. Supports drag/touch interaction; pauses on user input and resumes on release.
- **Contact & Newsletter Form** — Controlled form with name, email, Uruguayan department selector, and newsletter opt-in.
- **Fixed Navigation** — Header that shrinks and blurs on scroll, with smooth anchor-link navigation.

---

## Tech Stack

| Layer        | Technology                             |
| ------------ | -------------------------------------- |
| UI Framework | React 19                               |
| Build Tool   | Vite 7 + SWC                           |
| Styling      | Tailwind CSS 4                         |
| Animations   | Motion 12 (Framer Motion successor)    |
| Linting      | ESLint 9 with React rules              |
| Formatting   | Prettier + prettier-plugin-tailwindcss |

---

## Project Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css                  # Global styles, Tailwind, CSS custom properties
├── assets/                    # Images (WebP optimized) and SVG icons
├── data/
│   └── copy.js                # All page content (nav links, features, store locations)
├── features/
│   ├── navigation/            # NavBar, NavLink
│   ├── hero/                  # Hero section with parallax scooter
│   ├── characteristics/       # Feature plates with stagger animations
│   ├── locations/             # Store location table
│   ├── testimonials/          # Infinite scrolling marquee
│   └── contact/               # Newsletter form + social links
├── shared/
│   ├── Button.jsx
│   ├── Section.jsx
│   ├── Logo.jsx
│   ├── ChangeTheme.jsx
│   └── animations/
│       └── AnimatedHeader.jsx
└── hooks/                     # Custom React hooks
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repository
git clone https://github.com/your-username/xiaomiReactTailwind.git
cd xiaomiReactTailwind

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## Implementation Highlights

- **Motion library** drives all animations: `whileInView` for scroll triggers, spring-smoothed parallax, and staggered children.
- **CSS custom properties** (`--color-bg`, `--color-accent`, etc.) enable a dark-first theming system.
- **WebP images** throughout for optimised asset delivery.
- **CSS Modules** isolate form styles from global scope.
- **Path alias** `@` maps to `src/` for clean imports across the codebase.
- **SWC compiler** replaces Babel for significantly faster builds.

---

## License

This project is for educational and portfolio purposes. Xiaomi and Xiaomi 5 Max are trademarks of their respective owners.

---

---

# Xiaomi 5 Max — Showcase con React + Tailwind

Sitio web de marketing de una sola página (SPA), moderno y animado, para el scooter eléctrico Xiaomi 5 Max. Desarrollado con React 19 y Tailwind CSS 4, incluye animaciones activadas por scroll, un visor de producto 3D con parallax, un carrusel de testimonios infinito y arrastrable, y un diseño completamente responsivo.

> El contenido está en español y está orientado al mercado uruguayo.

---

## Funcionalidades

- **Hero animado** — Imagen del scooter con rotación 3D en perspectiva que sigue el movimiento del mouse, animación flotante de reposo y efecto de brillo eléctrico pulsante.
- **Grilla de características** — Seis funciones del producto en un layout de dos columnas con animaciones de entrada escalonadas activadas al hacer scroll.
- **Ubicaciones de tiendas** — Tabla con seis tiendas físicas en Uruguay, incluidas dirección y datos de contacto.
- **Carrusel infinito de testimonios** — Marquee con desplazamiento automático y 15 reseñas de clientes. Soporta interacción táctil y con mouse; se pausa al interactuar y se reanuda al soltar.
- **Formulario de contacto y newsletter** — Formulario controlado con nombre, email, selector de departamento uruguayo y opción de suscripción al newsletter.
- **Navegación fija** — Encabezado que se reduce y aplica blur al hacer scroll, con navegación suave por anclas.

---

## Stack tecnológico

| Capa                 | Tecnología                             |
| -------------------- | -------------------------------------- |
| Framework UI         | React 19                               |
| Herramienta de build | Vite 7 + SWC                           |
| Estilos              | Tailwind CSS 4                         |
| Animaciones          | Motion 12 (sucesor de Framer Motion)   |
| Linting              | ESLint 9 con reglas para React         |
| Formateo             | Prettier + prettier-plugin-tailwindcss |

---

## Estructura del proyecto

```
src/
├── App.jsx
├── main.jsx
├── index.css                  # Estilos globales, Tailwind, variables CSS personalizadas
├── assets/                    # Imágenes (optimizadas en WebP) e iconos SVG
├── data/
│   └── copy.js                # Todo el contenido de la página (nav, características, tiendas)
├── features/
│   ├── navigation/            # NavBar, NavLink
│   ├── hero/                  # Sección hero con parallax del scooter
│   ├── characteristics/       # Placas de características con animaciones escalonadas
│   ├── locations/             # Tabla de ubicaciones de tiendas
│   ├── testimonials/          # Marquee de desplazamiento infinito
│   └── contact/               # Formulario de newsletter + links sociales
├── shared/
│   ├── Button.jsx
│   ├── Section.jsx
│   ├── Logo.jsx
│   ├── ChangeTheme.jsx
│   └── animations/
│       └── AnimatedHeader.jsx
└── hooks/                     # Hooks personalizados de React
```

---

## Inicio rápido

**Requisitos:** Node.js 18+

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/xiaomiReactTailwind.git
cd xiaomiReactTailwind

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173) en tu navegador.

### Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Build de producción → dist/
npm run preview   # Vista previa del build de producción
npm run lint      # Ejecutar ESLint
```

---

## Detalles de implementación

- **Librería Motion** para todas las animaciones: `whileInView` para triggers de scroll, parallax con suavizado de spring y animaciones escalonadas en hijos.
- **Variables CSS personalizadas** (`--color-bg`, `--color-accent`, etc.) para un sistema de temas con modo oscuro por defecto.
- **Imágenes WebP** en todo el proyecto para una entrega de assets optimizada.
- **CSS Modules** (`ContactForm.module.css`) para aislar los estilos del formulario del alcance global.
- **Alias de ruta** `@` apunta a `src/` para imports más limpios en todo el código.
- **Compilador SWC** en lugar de Babel para builds significativamente más rápidos.

---

## Licencia

Este proyecto es de uso educativo y como portfolio. Xiaomi y Xiaomi 5 Max son marcas registradas de sus respectivos propietarios.
