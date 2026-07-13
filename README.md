# 🌟 Portafolio — Victor Da Silva Bertola

Bienvenido a mi **Portafolio Personal** 👋
Este sitio muestra mi perfil profesional, proyectos destacados y formas de contacto como **Desarrollador Backend Junior**.

🔗 Sitio en vivo: https://silbertvb.github.io/Portafolio/

---

## 🧠 Sobre mí

Técnico Superior en Desarrollo de Aplicaciones Web (2026), con prácticas en una plataforma SaaS de telemedicina en producción (Careexpand) donde trabajé con TypeScript, Node.js, React y APIs REST en flujos profesionales de Git, code review y CI/CD. Actualmente completo la certificación IT Specialist – Python (INF-303). Aporto además 7 años de experiencia previa en gestión de negocio y equipos.

---

## 🚀 Stack

### 🛠️ Backend
- Node.js
- Express
- TypeScript
- JavaScript
- APIs REST
- WebSockets

### 🖥️ Frontend
- React
- HTML5
- CSS3
- Tailwind CSS

### 🗄️ Bases de datos
- PostgreSQL
- MongoDB
- MySQL

### ⚙️ DevOps
- Docker
- Git / GitHub
- GitHub Actions
- Linux
- Railway
- Netlify

### 📚 En formación
- Python (certificación IT Specialist INF-303)

---

## 📁 Proyectos destacados

### 🎓 EduTech — Plataforma e-learning full-stack (TFG)
Monorepo con npm workspaces: frontend en React + Vite y backend en Express con base de datos PostgreSQL. Autenticación con Google OAuth 2.0 (Passport) y cuentas locales con contraseña hasheada, control de acceso por roles (alumno/profesor/administrador), CRUD completo de cursos, lecciones y tests, y backoffice de administración. Base de datos en Docker, desplegado en Railway.

- 🔗 Repositorio: https://github.com/silbertvb/EduTech
- 🔗 Demo: https://edutech-production-703d.up.railway.app/ (si no responde por ser hosting en capa gratuita, el portafolio incluye un botón "Ver capturas" con pantallazos reales de la app)

**Tecnologías:** React · Vite · Express · PostgreSQL · Passport (OAuth 2.0) · Docker · Railway

### 📅 Event App — Gestión de eventos en tiempo real
Aplicación web para la gestión y visualización de eventos en tiempo real entre cliente y servidor, con filtrado por categoría y fechas, e inscripción con actualización inmediata del contador de participantes. Arquitectura modular: backend (API REST + WebSocket) separado del frontend (React con Context API).

**Tecnologías:** Node.js · Express · MongoDB · Socket.IO · React · Tailwind CSS · Context API · WebSockets

### 🗺️ Guía Interactiva de Puntos de Interés — España
Aplicación web 100% cliente para explorar puntos de interés geolocalizados en España. Cada punto incluye una guía multimedia con reproductor de audio/vídeo HTML5 y un mini-mapa real con Leaflet y OpenStreetMap. Calcula la distancia a cada lugar con la fórmula de Haversine a partir de la ubicación del usuario (procesada siempre en local, nunca enviada a un servidor). Incluye un formulario para añadir nuevos puntos de interés, diseño responsivo con CSS Grid y `clamp()`, y roles ARIA para accesibilidad.

- 🔗 Repositorio: https://github.com/silbertvb/Guia_interactiva_POI
- 🔗 Demo: https://silbertvb.github.io/Guia_interactiva_POI/

**Tecnologías:** HTML5 · CSS3 · JavaScript (vanilla) · Leaflet · OpenStreetMap · Geolocation API

---

## 📬 Contacto

El formulario de contacto envía los mensajes vía [Formspree](https://formspree.io/), con confirmación de éxito/error gestionada por JavaScript (fetch) sin salir de la página. También hay vías directas siempre visibles:

- ✉️ Email (con botón para copiar la dirección al portapapeles)
- LinkedIn
- GitHub

---

## 📌 Cómo ejecutar en local

Este portafolio es un sitio **estático HTML/CSS/JS** publicado con **GitHub Pages**. No requiere instalación de backend ni base de datos.

1. Clona el repositorio:
   ```sh
   git clone https://github.com/silbertvb/Portafolio.git
   ```
2. Entra en la carpeta y sírvela con un servidor estático simple, por ejemplo:
   ```sh
   cd Portafolio
   python -m http.server 8000
   ```
3. Abre `http://localhost:8000` en el navegador.
