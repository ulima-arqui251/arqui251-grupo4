# Tema: Integración con APIs de terceros

![](./docs/api2.png)

## **Desarrollo conceptual**

### ¿Qué son las APIs?

Una API (Application Programming Interface) es una interfaz de programación de aplicaciones que permite que diferentes software se comuniquen entre sí. Es un conjunto de reglas, protocolos y herramientas que especifica cómo los componentes de software deben interactuar. En otras palabras, las APIs actúan como intermediarios que permiten que las aplicaciones intercambien datos y funcionalidades de manera estructurada y segura, sin necesidad de conocer los detalles internos de implementación de cada sistema.

![](./docs/api.png)

### ¿Cómo funcionan las APIs?

El proceso básico sigue un patrón de solicitud-respuesta donde una aplicación cliente envía una petición (request) a través de la API, y el servidor procesa esta solicitud y devuelve una respuesta (response) con los datos solicitados o confirmación de la acción realizada.

El flujo típico de una API incluye los siguientes pasos: 

1. Primero, la aplicación cliente construye una solicitud HTTP que incluye el método (GET, POST, PUT, DELETE), la URL del endpoint, headers con metadatos, y opcionalmente un cuerpo con datos.
2. Luego, la API recibe la solicitud, valida la autenticación y autorización, procesa la petición accediendo a bases de datos o servicios internos.
3. Finalmente devuelve una respuesta estructurada que incluye un código de estado HTTP, headers de respuesta, y los datos solicitados en formato JSON, XML u otro formato acordado.

### Componentes de una API

1. Endpoints (Puntos de acceso):

Son las URLs específicas donde la API puede ser accedida. Cada endpoint representa un recurso particular o funcionalidad específica. Por ejemplo: https://api.ejemplo.com/usuarios para gestionar usuarios o https://api.ejemplo.com/productos/123 para acceder a un producto específico.

2. Métodos HTTP:
Definen el tipo de operación a realizar sobre el recurso:

- GET: Recuperar datos sin modificarlos
- POST: Crear nuevos recursos
- PUT: Actualizar recursos existentes completamente
- PATCH: Actualizar parcialmente un recurso
- DELETE: Eliminar recursos

3. Headers (Cabeceras):

Son componentes de las solicitudes y respuestas HTTP que proporcionan información adicional sobre los datos que se transmiten. Incluyen metadatos como tipo de contenido, autenticación, versión de la API, y configuraciones de cache.

4. Parámetros:

- Query Parameters: Se envían en la URL (?parametro=valor)
- Path Parameters: Forman parte de la ruta del endpoint (/usuarios/{id})
- Body Parameters: Enviados en el cuerpo de la solicitud (principalmente POST/PUT)

5. Códigos de Estado HTTP:

Indican el resultado de la operación:

- 2xx: Éxito (200 OK, 201 Created, 204 No Content)
- 4xx: Error del cliente (400 Bad Request, 401 Unauthorized, 404 Not Found)
- 5xx: Error del servidor (500 Internal Server Error, 503 Service Unavailable)

6. Formato de Datos:

Estructura en la que se intercambia información, comúnmente JSON, XML, o formats binarios.

### Tipos de APIs

**RESTful (Representational State Transfer)**

REST es un estilo arquitectónico que utiliza los métodos HTTP estándar para realizar operaciones sobre recursos identificados por URLs. REST permite que las aplicaciones cliente intercambien datos con un servidor utilizando verbos HTTP, que es el protocolo de comunicación estándar de internet. Se basa en principios como la ausencia de estado (stateless), la arquitectura cliente-servidor, y la capacidad de cache.

**OData (Open Data Protocol)**

OData es un protocolo estándar para construir y consumir APIs RESTful que proporciona un conjunto rico de funcionalidades para consultar y manipular datos. Permite operaciones avanzadas como filtrado, ordenamiento, paginación, y selección de campos específicos directamente a través de parámetros de consulta en la URL.

**SOAP (Simple Object Access Protocol)**

SOAP es un protocolo de comunicación basado en XML que define un formato estandardizado para el intercambio de información estructurada. SOAP realiza operaciones que representan lógica, a diferencia de REST que opera con recursos que representan datos.

**GraphQL**

GraphQL es un lenguaje de consulta diseñado para proporcionar una alternativa más eficiente y flexible a las APIs REST tradicionales. GraphQL es un lenguaje de consulta de API que define especificaciones de cómo una aplicación cliente debe solicitar datos de un servidor remoto.



