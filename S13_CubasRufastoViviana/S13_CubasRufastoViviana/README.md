# Biblioteca Central — S13 AP7

Dashboard individual desarrollado con Angular 20 para la actividad **Desarrollo de un Dashboard con Angular Routing**.

## Vistas
- Inicio: indicadores y actividad reciente.
- Libros: catálogo de libros con búsqueda.
- Autores: tarjetas de autores.
- Préstamos: seguimiento de préstamos y devoluciones.
- Ruta comodín `**`: página no encontrada (404).

## Requisitos
- Node.js compatible con Angular 20.
- npm.

## Ejecutar localmente
```bash
npm install
npm start
```
Abrir `http://localhost:4200/`.

## Compilar
```bash
npm run build
```

## Angular Router utilizado
- `provideRouter(routes)` en `app.config.ts`.
- `RouterOutlet` en el componente raíz y en el layout del dashboard.
- `RouterLink` para navegar desde el menú.
- `RouterLinkActive` para resaltar la opción seleccionada.
- Ruta comodín `**` para direcciones inexistentes.

Los registros son datos simulados para fines académicos. Los botones de alta son demostrativos; no guardan información ni se conectan a un backend.

## Formularios de demostración

El dashboard incluye formularios para registrar, editar y eliminar libros, autores y préstamos. Los datos son simulados y se mantienen en memoria mientras la aplicación está abierta; no requieren backend ni base de datos. Al recargar la página, se restablecen los registros de ejemplo.

## Ejecución

```bash
npm install
npm start
```

Abrir `http://localhost:4200`.
