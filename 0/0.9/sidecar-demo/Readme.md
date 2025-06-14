# Arquitectura de Microservicios con API Gateway y Sidecars (Logger)

Este proyecto es una demo de arquitectura basada en microservicios con Sidecar para logging. Utiliza Docker y Docker Compose para su orquestación.

##  Servicios incluidos

| Servicio         | Descripción                                         | Lenguaje | Puerto Interno |
|------------------|-----------------------------------------------------|----------|-----------------|
| `user-service`   | API simple que retorna información de usuarios      | Python   | 5001            |
| `user-logger`    | Sidecar que registra el número de accesos al `user-service` | Node.js  | 6001            |
| `product-service`| API que retorna información de productos            | Node.js  | 5002            |
| `product-logger` | Sidecar que registra accesos al `product-service`   | Node.js  | 6002            |
| `api-gateway`    | Enruta peticiones desde el frontend a los servicios | Node.js  | 5000            |

---

## 🧾 Requisitos

Asegúrate de tener instalado:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 📂 Estructura del Proyecto

```pgsql
sidecar-demo
│
├── api-gateway
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── docker-compose.yml
├── logs
│   ├── products.log
│   └── users.log
├── products-logger
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── products-service
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── Readme.md
├── user-logger
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
└── user-service
    ├── app.py
    ├── Dockerfile
    └── requirements.txt

```


## ¿Cómo ejecutar la demo?

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/sidecar-demo.git
cd sidecar-demo
docker compose up --build
```

### 2. Endpoints Disponibles

Los endpoints disponible deben accederse desde el Api gateway.
|Ruta|Acción|
|------|------------|
|/api/users|Devuelve datos de usuario desde user-service|
|/api/products|Devuelve productos desde product-service|

### 3. Ejemplos de prueba

```bash
curl http://localhost:5000/api/users
curl http://localhost:5000/api/products
```
