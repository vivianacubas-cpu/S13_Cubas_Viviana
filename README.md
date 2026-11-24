# S15 | M15 - Publicación del Proyecto Angular en GitHub y Render

Proyecto utilizado: **Biblioteca Central** (Angular 20). Se conserva el proyecto original de S13 y su estructura dentro de `LOGUIN/`.

## 1. Preparar y comprobar el proyecto local

Abre una terminal dentro de la carpeta `LOGUIN`:

```bash
cd LOGUIN
npm ci
npm start
```

Abre `http://localhost:4200` y comprueba:
- Login visible y funcional.
- Acceso al Dashboard y a Inicio, Libros, Autores y Préstamos.
- Navegación entre las secciones.
- Cierre de sesión y protección de las rutas.

Credenciales de demostración que ya utiliza el proyecto:
- Correo: `admin@biblioteca.com`
- Contraseña: `123456`

> La autenticación actual usa credenciales fijas para fines educativos. No es un mecanismo de autenticación apropiado para producción.

## 2. Actualizar el mismo repositorio de GitHub

No crees otro repositorio. Desde la raíz del repositorio (donde está este `README.md` y `render.yaml`):

```bash
git status
git add .
git commit -m "chore(deploy): prepare Angular project for Render"
git push
```

Si trabajas en una rama distinta de la rama principal, selecciona esa misma rama al configurar Render.

## 3. Generar la compilación de producción

Desde `LOGUIN/`:

```bash
npm ci
npm run build
```

El proyecto Angular 20 genera los archivos publicables en:

```text
LOGUIN/dist/biblioteca-central/browser
```

Comprueba que dentro de esa carpeta exista `index.html`. El directorio de publicación configurado para Render corresponde a esa ruta relativa a la raíz del repositorio.

## 4. Crear el servicio Static Site en Render

1. Entra en https://dashboard.render.com/.
2. Inicia sesión y autoriza la conexión con GitHub.
3. Selecciona **New +** y luego **Static Site**.
4. Elige el mismo repositorio de GitHub que contiene este proyecto.
5. Selecciona la rama que deseas publicar.

## 5. Parámetros de compilación

El archivo `render.yaml` incluido en la raíz del ZIP deja preparada esta configuración para Render Blueprint:

| Campo | Valor |
|---|---|
| Tipo | Static Site |
| Runtime | `static` |
| Build Command | `cd LOGUIN && npm ci && npm run build` |
| Publish Directory | `LOGUIN/dist/biblioteca-central/browser` |
| Auto-Deploy | Activado al actualizar la rama |

Si configuras el servicio manualmente en el Dashboard, introduce exactamente el Build Command y Publish Directory de la tabla.

## 6. Configurar rutas SPA

El `render.yaml` también incluye la regla requerida para Angular Router:

| Campo | Valor |
|---|---|
| Source | `/*` |
| Destination | `/index.html` |
| Action | `Rewrite` |

Esta regla permite abrir o recargar directamente rutas internas sin recibir un error 404.

## 7. Desplegar

1. Guarda la configuración o crea el servicio.
2. Espera a que Render instale dependencias y ejecute la compilación.
3. Revisa los Deploy Logs.
4. Confirma que el servicio aparezca como **Live**.

## 8. Obtener la URL pública

Render asignará una dirección HTTPS con el formato:

```text
https://nombre-del-servicio.onrender.com
```

Copia la URL real que Render muestre en tu servicio. No se puede conocer ni inventar antes de crear el servicio.

## 9. Verificación final

Abre la URL pública y comprueba:
- Login visible.
- Validación de las credenciales de demostración.
- Dashboard e Inicio cargan correctamente.
- Secciones Libros, Autores y Préstamos navegables.
- Las rutas internas se pueden recargar sin error 404.
- Las rutas protegidas redirigen al Login cuando no hay sesión.
- Cierre de sesión operativo.
- Enlace accesible desde otro navegador o dispositivo.

## Entregables solicitados en el PDF

Adjunta en tu entrega:

1. Enlace al mismo repositorio de GitHub actualizado.
2. URL pública funcional de Render.
3. Cinco capturas de pantalla:
   - Repositorio actualizado en GitHub.
   - Configuración del proyecto en Render.
   - Despliegue exitoso con estado **Live**.
   - Login de la aplicación publicada.
   - Dashboard y navegación funcionando.

## Importante

El ZIP deja preparado el proyecto y la configuración de despliegue. Para completar la publicación real debes subir los cambios a tu GitHub, crear/conectar el Static Site en tu cuenta de Render y esperar el estado **Live**. La URL pública y las capturas reales solo existen después de ese proceso.
