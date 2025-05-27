# Tema: Cifrado de Datos

![Imagen ilustrativa sobre cifrado de datos](https://www.ikusi.com/mx/wp-content/uploads/sites/2/2022/06/ikusi_ikusi_image_539.jpeg)

## **Desarrollo conceptual**

### ¿Qué es el Cifrado de Datos?

Según la página web de Kaspersky, el cifrado de datos se define como la conversión de datos de un formato legible a un formato codificado, los cuales podrán ser leídos o procesados luego de descifrarlos. Por otra parte, IBM lo describe como el proceso de transformar texto plano legible a un texto cifrado ilegible para ocultar información sensible a usuarios no autorizados. Finalmente, Avast lo define como un método de protección de datos que consiste en alterarlos hasta hacerlos ilegibles.

### ¿Cómo funciona el Cifrado de Datos?

El cifrado de datos tiene la función de convertir los datos de algo legible a no legible. Tiene la finalidad de proteger la confidencialidad de la información, para que personas no autorizadas puedan visualizar datos sensibles. También, puede lograr proteger la integidad de la información, ya que hay ocasiones en el cual se utiliza encriptamiento, como hashes o firmas digitales, para asegurar que no se ha realizado alguna modificación no autorizada de los datos.

### Tipos de Cifrado

Existen dos tipos de cifrados:

* Cifrados Simetricos: Utiliza la misma clave (clave compartida) para la codificación y decodificación de datos. Por otro lado, se debe enviar la clave al receptor. Esto aumenta el riesgo de que quede comprometida si la intercepta un tercero como un hacker.

* Cifrados Asimétricos: Utiliza dos claves distintas (pública y privada) para la codificación y decodificación de datos. La clave pública puede ser divulgada y compartida para el encriptamiento de datos. Sin embargo, la clave privada debe ser resguardada por el propietario, ya que con ella se desencripta la información.

### Cifrados Simetricos vs Cifrados Asimétricos

|Características|Cifrado Simétricos|Cifrado Asimétricos|
| ------------   | ------------------ | ------------------------- |
|Número de claves|1 (clave compartida)|2 (clave pública y privada)|
|Velocidad       |Más rápido          |Más lento                  |
|Seguridad en intercambio|Difícil de compartir clave de forma segura|Más seguro: clave pública se puede divulgar|
|Autenticación|No proporciona autenticación|Sí, permite firmar digitalmente|
|Uso típico|Cifrado de datos masivos (ej. AES)|Intercambio de claves, firmas digitales (ej. RSA)|
|Escalabilidad|Mala: requiere muchas claves para múltiples pares|Buena: cada usuario solo necesita 1 par de claves|
|Confidencialidad|Sí, si la clave está segura|Sí, clave privada debe protegerse|

### Algoritmos de cifrado

#### Cifrados Simetricos

* DES: Proviene de la sigla "estandar de cifrado de datos". Es un algoritmo de cifrado simétrico que se encuentra obsoleto. Es vulnerable a los ataques de fuerza bruta debido a tener una clave relativamente corta (56 bits).
* Triple DES (3DES): Proviene de la sigla de "estandar de cifrado triple de datos". Aplica el algoritmo DES tres veces a cada bloque de datos, aumentando significativamente la longitud de la clave y reforzando la seguridad. A pesar de presentar mejoras en cuanto a la seguridad, en comparación a su predecesor DES, algunos consideran que está descontinuada y otros que no. Sin embargo, se coincide de que el algoritmo AES lo está desplazando en gran medida.
* AES: Proviene de las siglas "Advanced Encryption Standard". Algunos lo consideran como el estándar de referencia para el cifrado de datos. Cifra los datos en grandes bloques de 128 bits y dispone de claves de distintos tamaños. Además, cada clave pasa por distintas rondas de cifrado (el proceso de codificación y descodificación) para brindar mayor seguridad. En AES-128, una clave de 128 bits, pasa por 10 rondas. AES-192 una clave de 192 bits, pasa por 12 rondas. Finalmente, AES-256, una clave de 256 bits, pasa 14 rondas.

#### Cifrados Asimetricos

* RSA: Proviene de las siglas "Rivest-Shamir-Adleman", el nombre de sus inventores. Se basa en la complejidad matemática de los números primos para generar pares de claves pudiendo tener una longitud de 1024 bits hasta los 2048 bits. Suele utilizarse para firmas digitales y para enviar datos por correo electrónico, chats, navegadores seguros y VPN.

* Criptografía de curva elíptica (ECC): Es un método de cifrado asimétrico basado en las propiedades matemáticas de las curvas elípticas sobre campos finitos. Ofrece una sólida seguridad con longitudes más cortas que otros algoritmos. Al ser más liviana, lo hace adecuado para dispositivos de recursos limitados como smartphones y dispositivos IoT.

---

## **Consideraciones técnicas**

### Requisitos técnicos

* **SO**: Windows, macOS o Linux.
* **RAM**: mínimo 8 GB recomendado.
* **CPU**: procesador moderno de múltiples núcleos.

### Conocimientos previos

* Familiaridad con fundamentos de criptgrafía como: Texto plano y texto cifrado, claves simétricas y asimétricas, algoritmos de cifrado y descifrado e integridad, autenticación y no repudio.
* Dominio básico o intermedio en al menos un lenguaje de programación: Python, Javascript, Bash, entre otros.
* Conocimiento de estructuras de datos como cadenas, arreglos, y manejo de archivos.
* Buenas prácticas de manejo de claves.
* Conciencia de amenazas comunes como ataques de fuerza bruta, MITM (man-in-the-middle), etc.
* Uso básico de la terminal o consola de comandos.
* Conocimiento básico del sistema operativo (Linux/Windows/MacOS).

### Instalación de IDE VS Code

Para instalar el IDE Visual Studio Code debe seguirse los siguientes pasos:

* Descargar desde [https://code.visualstudio.com/](https://code.visualstudio.com/)
* Seguir los pasos indicados en la página web según el instalador que le corresponde a tu sistema operativo (Windows, macOS, Linux).

### Instalación de NodeJs

Para instalar el NodeJs debe seguirse los siguientes pasos:

* Descargar desde [https://nodejs.org/es/download](https://nodejs.org/es/download)
* Seguir los pasos indicados en la página web según el instalador que le corresponde a tu sistema operativo (Windows, macOS, Linux).

### Librerías

* express
* body-parser
* firebase-admin (para Firestore, pero puede ser cualquier librería para el manejo de su de base de datos)
* crypto
* dotenv (para poder acceder a las variables de entorno)

### Buenas prácticas

* Uso de protocolo Https (TLS).
* Utilización de variables de entorno para evitar hacer hardcode de claves de encriptación.
* Utilización de Middleware para el encryptamiento de datos.

### ¿Qué es un Middleware?

Dentro de un servicio backend, el middleware es una función o componente intermedio que se ejecuta entre la solicitud del cliente (request) y la respuesta del servidor (response). Su objetivo es procesar, modificar o actuar sobre la solicitud o la respuesta antes de que lleguen a su destino final

---

## **Demo (Código)**

### Estructura del proyecto (En este caso NodeJs y FireStore)

```pgsql
project/
├── node_modules
├── src
|   ├── config
|   │   └── firebaseConfig.js
|   ├── controllers
|   │   └── userController.js
|   ├── middleware
|   │   ├── aesMiddleware.js
│   │   └── rsaMiddleware.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── services
│   │   └── userService.js
│   └── utils
│       ├── aesUtils
│       │   ├── decrypt.js
│       │   └── encrypt.js
|       └── rsaUtils
│           ├── decrypt.js
│           └── encrypt.js
├── app.js
├── index.js                   
├── .env                       # Variables de entorno
├── .env.example               # Variables de entorno ejemplo plantilla
├── .gitignore                 
├── package.json
├── package-lock.json
└── Readme.md

```

### Generación de claves

Demostración de cómo generar claves para los algoritmos de encriptamiento AES y RSA.

### Prueba de encriptamiento y guardado en Base de Datos

Explicación y ejemplo de la creación y llamada de un usuario con información sensible desde una base de datos.

### Código de ejemplo

Repositorio con una aplicación Backend simple para el registro y llamada de usuario con Node.js (Express) y Firestore.

## **Bibliografía**

* Cifrado de datos y cómo hacerlo. (2018, noviembre 21). /. <https://latam.kaspersky.com/resource-center/definitions/encryption?srsltid=AfmBOorj8u4Op0VE8103KVo3uMK1U7sfxjvDYAjZGPK8bIc29w64ShkH>
* DeWitt, D., & Polacko, M. (2021, abril 22). Cifrado de datos: ¿en qué consiste? Cifrado de datos: ¿en qué consiste?; Avast. <https://www.avast.com/es-es/c-encryption>
* ¿Qué es el cifrado? (2024, septiembre 9). Ibm.com. <https://www.ibm.com/es-es/topics/encryption>
