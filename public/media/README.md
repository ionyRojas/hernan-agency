# Carpeta de medios de Digital Mys

Aquí viven **todas las imágenes** de la web. La página lee estas rutas desde
`src/content/media.ts`, así que para cambiar una imagen solo hay que **reemplazar el archivo con
el mismo nombre**. No hace falta tocar código.

Mientras llega el material real, cada espacio tiene una imagen gris que dice "IMAGEN PENDIENTE" y
el nombre del archivo que la reemplaza.

## Reglas

- Nombres en **minúsculas, sin tildes ni espacios**: `galeria-01.jpg`, no `Galería 1.JPG`.
- Formato **JPG o WebP** (logos en **SVG**).
- Ancho de **1920 px** para la portada de inicio y **1600 px** para el resto.
- Capturas de posts en formato vertical **9:16** (por ejemplo 1080x1920 px).
- Peso máximo recomendado: **300 KB por imagen**. Usa [squoosh.app](https://squoosh.app) si pesa más.
- **No se aceptan videos.** Si quieren mostrar un video, se sube una captura y se enlaza al post de
  Instagram o TikTok (ver `src/content/posts.ts`).

## Qué va en cada carpeta

| Carpeta                         | Contenido                                                       |
| ------------------------------- | --------------------------------------------------------------- |
| `brand/`                        | `logo.svg`, `logo-claro.svg`, `og-default.jpg` (1200x630)       |
| `hero/`                         | `hero.jpg`, portada de inicio                                   |
| `equipo/`                       | `influencer.jpg`, `fernanda.jpg`, `fundadores.jpg`              |
| `videos-fundador/`              | Portadas que enlazan a los videos en redes                      |
| `servicios/<servicio>/`         | `portada.jpg` y `galeria-01.jpg`...                             |
| `sectores/<sector>/`            | `portada.jpg` y `galeria-01.jpg`...                             |
| `influencers/`                  | `portada.jpg`                                                   |
| `casos/<slug-del-caso>/`        | `portada.jpg` y `galeria-01.jpg`...                             |
| `clientes/`                     | `logo-<cliente>.svg` (solo con autorización del cliente)        |
| `redes/`                        | Capturas verticales de posts: `post-01.jpg`, `post-02.jpg`...   |

## Cómo agregar algo nuevo

1. Sube el archivo a su carpeta con el nombre indicado.
2. Si es un slot nuevo, agrega la ruta en `src/content/media.ts`.
3. Ejecuta `pnpm check-media` para validar nombres, pesos y que no falte nada.
