# Subir Archivo JSON a MongoDB Atlas

Este proyecto proporciona un script en JavaScript para cargar datos de un archivo JSON a una base de datos MongoDB Atlas.

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- Una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Configuración

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Dennis290699/Curso-DB2-Mongo-Atlas.git
   cd tu_repositorio
   ```

2. **Instala las dependencias:**

   ```bash
   npm install mongodb
   ```

3. **Configura tu cadena de conexión de MongoDB Atlas:**

   Reemplaza `TU_CONEXIÓN_MONGO_ATLAS` en el script `upload.js` con tu cadena de conexión de MongoDB Atlas. Debería verse algo como esto:

   ```plaintext
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
   ```

## Estructura del Proyecto

El proyecto contiene los siguientes archivos:

- `upload.js`: El script principal que carga los datos del archivo JSON a MongoDB Atlas.
- `Marvel.json`: El archivo JSON que contiene los datos a cargar.

## Uso

1. **Coloca tu archivo JSON:**

   Asegúrate de que el archivo `Marvel.json` esté en el mismo directorio que `upload.js`. Si está en otra ubicación, ajusta la ruta en el script.

2. **Ejecuta el script:**

   ```bash
   node upload.js
   ```

   Este comando ejecutará el script y cargará los datos a tu base de datos MongoDB Atlas. Verás un mensaje en la consola indicando el número de documentos insertados y el tiempo que tomó la operación.

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
