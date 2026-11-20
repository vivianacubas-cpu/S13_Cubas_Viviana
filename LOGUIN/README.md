# S14 | AP8 - Biblioteca Central

Implementación educativa de autenticación en el proyecto Angular de S13, conservando el Dashboard y sus secciones: Inicio, Libros, Autores y Préstamos.

## Requisitos
- Node.js compatible con Angular 20
- npm

## Ejecutar el proyecto
```bash
npm install
npm start
```
Luego abrir `http://localhost:4200`.

## Credenciales de prueba
- Correo: `admin@biblioteca.com`
- Contraseña: `123456`

## Implementación de autenticación
- `src/app/features/auth/login/`: formulario de Login.
- `src/app/core/services/auth.service.ts`: validación de credenciales y gestión de sesión mediante `localStorage`.
- `src/app/core/guards/auth.guard.ts`: protección de rutas y redirección a `/login`.
- `src/app/app.routes.ts`: ruta pública de Login y rutas del Dashboard protegidas.
- `src/app/core/layout/dashboard/`: botón para cerrar sesión.

La sesión se guarda con la clave `biblioteca_session` en `localStorage`. Esta validación utiliza credenciales fijas únicamente con fines educativos y no debe utilizarse como autenticación de producción.
