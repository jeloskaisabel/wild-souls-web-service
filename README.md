
# Proyecto Wild Souls Web Service

Este es un proyecto completo de ecommerce que incluye un servidor backend construido con Node.js y Express, y un frontend utilizando Vue.js y Bootstrap.

## Estructura del Proyecto

```
C:.
├───dist
│   ├───css
│   └───js
├───ecommerce-api
│   ├───node_modules
│   ├───src
│   │   ├───controllers
│   │   ├───models
│   │   ├───routes
│   │   ├───middlewares
│   │   └───app.js
│   ├───package.json
│   └───server.js
└───examples
├───frontend
│   ├───node_modules
│   ├───public
│   ├───src
│   │   ├───assets
│   │   ├───components
│   │   ├───router
│   │   ├───store
│   │   ├───views
│   │   └───App.vue
│   ├───package.json
│   └───vue.config.js
```

## Requisitos

- Node.js
- npm o yarn

## Instalación

### Backend

1. Clona el repositorio:
    ```sh
    git clone https://github.com/jeloskaisabel/wild-souls-web-service.git
    ```

2. Navega al directorio del backend:
    ```sh
    cd ecommerce-api
    ```

3. Instala las dependencias:
    ```sh
    npm install
    # o
    yarn install
    ```

4. Cambia el valor de la IP de tu máquina en el archivo `src/app.js`:

    Abre `src/app.js` y busca la línea que contiene la configuración del servidor. Debería verse algo así:

    ```javascript
    const IP = '127.0.0.1'; // Cambia '127.0.0.1' por la IP de tu máquina
    ```

    Cambia `'127.0.0.1'` por la IP de tu máquina.

5. Inicia el servidor:
    ```sh
    node server.js
    ```

El servidor se ejecutará en `http://localhost:3000`.

### Frontend

1. Navega al directorio del frontend:
    ```sh
    cd frontend
    ```

2. Instala las dependencias:
    ```sh
    npm install
    # o
    yarn install
    ```

3. Cambia el valor de la IP de tu máquina en el archivo `vue.config.js`:

    Abre `vue.config.js` y busca la configuración del proxy para las solicitudes API. Debería verse algo así:

    ```javascript
    module.exports = {
      devServer: {
        proxy: {
          '/api': {
            target: 'http://127.0.0.1:3000', // Cambia '127.0.0.1' por la IP de tu máquina
            changeOrigin: true
          }
        }
      }
    }
    ```

    Cambia `'127.0.0.1'` por la IP de tu máquina.

4. Inicia la aplicación frontend:
    ```sh
    npm run serve
    # o
    yarn serve
    ```

La aplicación frontend se ejecutará en `http://localhost:8080`.

## Dependencias

### Backend

- `express`: Framework para aplicaciones web en Node.js.
- `cors`: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- `dotenv`: Módulo para cargar variables de entorno desde un archivo `.env`.

Para instalar estas dependencias, se utilizan los siguientes comandos:

```sh
npm install express cors dotenv
# o
yarn add express cors dotenv
```

### Frontend

- `vue`: Framework para construir interfaces de usuario.
- `vue-router`: Enrutador oficial para Vue.js.
- `vuex`: Estado centralizado para aplicaciones Vue.js.
- `axios`: Cliente HTTP basado en promesas para el navegador y node.js.
- `bootstrap`: Framework CSS para diseño responsivo.

Para instalar estas dependencias, se utilizan los siguientes comandos:

```sh
npm install vue vue-router vuex axios bootstrap
# o
yarn add vue vue-router vuex axios bootstrap
```

## Puntos Finales de la API

- `GET /api/products`: Obtener todos los productos.
- `GET /api/products/:id`: Obtener un producto por ID.
- `POST /api/products`: Crear un nuevo producto.
- `PUT /api/products/:id`: Actualizar un producto existente por ID.
- `DELETE /api/products/:id`: Eliminar un producto por ID.

## Contribuciones

1. Haz un fork del repositorio.
2. Crea una nueva rama:
    ```sh
    git checkout -b nombre-rama
    ```
3. Realiza tus cambios.
4. Haz un commit de tus cambios:
    ```sh
    git commit -m 'Agrega una nueva característica'
    ```
5. Empuja a la rama:
    ```sh
    git push origin nombre-rama
    ```
6. Abre un pull request.