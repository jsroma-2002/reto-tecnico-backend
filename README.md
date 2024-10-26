# Documentación del API

## Descripción

Este API proporciona endpoints para interactuar con productos almacenados en DynamoDB y datos de planetas de Star Wars. Está construido utilizando el framework Serverless y se ejecuta en AWS Lambda y API Gateway.

## Endpoints

### Productos

### **Crear Producto**

- **URL:** `/db/products`

- **Método:** `POST`

- **Descripción:** Crea un nuevo producto en la base de datos

**Cuerpo de la solicitud:**

``` json
{
  "name": "Nombre del Producto",
  "value": 100
}

 ```

**Respuesta exitosa:**

``` json
{
  "id": "id-del-producto",
  "name": "Nombre del Producto",
  "value": 100
}

 ```

#### **Obtener Producto por ID**

- **URL:** `/db/products/:id`

- **Método:** `GET`

- **Descripción:** Obtiene un producto por su ID

**Parámetros de URL:**

- `id`: ID del producto

**Respuesta exitosa:**

``` json
{
  "id": "id-del-producto",
  "name": "Nombre del Producto",
  "value": 100
}

 ```

**Respuesta producto No encontrado:**

``` json
{
  "message": "Product not found"
}

 ```

### Planetas

#### **Obtener Planetas**

- **URL:** `/integration/star-wars/planets`

- **Método:** `GET`

- **Descripción:** Obtiene una lista de planetas desde la API de Star Wars.

**Respuesta exitosa:**

``` json
[
  {
    "name": "Tatooine",
    "climate": "arid",
    "terrain": "desert",
    "population": "200000"
  },
  {
    "name": "Alderaan",
    "climate": "temperate",
    "terrain": "grasslands, mountains",
    "population": "2000000000"
  }
]

 ```

### Despliegue

Para desplegar el API, ejecuta el siguiente comando:

``` shell
serverless deploy

 ```

Después de desplegar, deberías ver una salida similar a:

``` shell
Deploying "serverless-http-api" to stage "dev" (us-east-1)
✔ Service deployed to stack serverless-http-api-dev (91s)
endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  handler: serverless-http-api-dev-handler (1.6 kB)

 ```

### Configuración

La configuración del servicio se encuentra en el archivo [serverless.yml]. Aquí puedes ajustar los parámetros del servicio, como el nombre de la tabla de DynamoDB y las políticas de IAM.

### Dependencias

Las dependencias del proyecto están listadas en el archivo [package.json]. Asegúrate de instalar las dependencias necesarias antes de ejecutar o desplegar el proyecto:

``` shell
npm install
 ```

### Pruebas

Las pruebas unitarias para el modelo de productos se encuentran en la carpeta  ``__tests__``. Puedes ejecutar las pruebas utilizando Mocha:

``` shell
npm test

 ```

## Documentación

## Swagger

Puedes encontrar la documentación asociada al proyecto en la carpeta ``docs``.

Adicionalmente se encuentra expuesta la documentación en SWAGGER/ OpenApi: <https://app.swaggerhub.com/apis-docs/JoseRoncal/NODEJS_BACKEND/1.0.0>

**Importante**: La documentación en Swagger esta expuesta bajo un free trial, es posible que no se encuentre disponible al finalizar este periodo. Se recomienda utilizar el archivo ``open-api-doc.json`` incluido en la documentación para despliegues en local y revisión.

## Postman

Puedes encontrar la documentación asociada al proyecto en la carpeta ``docs`` bajo el nombre ``api-usage-documentation.postman_collection``.
