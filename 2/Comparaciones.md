# Decisión 1

## Título:

**Elección entre Base de Datos No Relacional (MongoDB) vs Relacional (PostgreSQL)**

### Contexto:

El sistema necesita manejar información estructurada como usuarios, transacciones, y relaciones complejas entre diferentes entidades. Los datos deben cumplir con integridad referencial y propiedades ACID para evitar inconsistencias. Se prevé crecimiento en volumen y necesidad futura de análisis avanzado.

### Alternativas:

**MongoDB (No Relacional)**

- Alta flexibilidad para esquemas que cambian frecuentemente.
- Escalabilidad horizontal sencilla.
- Menor control sobre integridad referencial.

**PostgreSQL (Relacional)**

- Fuerte en integridad de datos y relaciones complejas.
- Soporte para tipos de datos avanzados (JSON, arrays, etc.).
- Buen rendimiento en operaciones analíticas.

### Criterios de Elección:

- Consistencia e integridad de datos.
- Requerimientos de análisis estructurado.
- Escalabilidad y soporte a largo plazo.
- Familiaridad del equipo técnico.

### Decisión:

**Se elige PostgreSQL.**

### Sustento:

PostgreSQL proporciona una solución robusta para garantizar la integridad de datos, soportar relaciones complejas y realizar análisis avanzados. Esto es clave en una arquitectura donde las operaciones financieras y la trazabilidad son críticas.

---

# Decisión 2

## Título:

**Elección entre REST API y gRPC para la comunicación entre servicios**

### Contexto:

El sistema requiere exponer servicios para frontend y posiblemente integraciones con terceros. Se prioriza simplicidad de implementación, compatibilidad con múltiples lenguajes y facilidad de testing, dado que el equipo actual es pequeño y necesita iterar rápido.

### Alternativas:

**gRPC**

- Alto rendimiento y soporte para transmisión eficiente de datos binarios.
- Ideal para comunicaciones internas en microservicios.
- Curva de aprendizaje más pronunciada y menos amigable para frontend.

**REST API**

- Amplio soporte en la web y facilidad de integración con clientes en JavaScript/Flutter.
- Facilidad de documentación con herramientas como Swagger.
- Ideal para APIs públicas o expuestas a terceros.

### Criterios de Elección:

- Facilidad de integración con frontend.
- Compatibilidad multiplataforma.
- Curva de aprendizaje.
- Facilidad de documentación y testing.

### Decisión:

**Se elige REST API.**

### Sustento:

REST es más accesible para desarrolladores frontend y backend. Su amplia adopción y compatibilidad lo convierten en la mejor opción para una API pública y mantenible. Permite una mejor experiencia en entornos móviles y web.

---

# Decisión 3

## Título:

**Elección entre FastAPI y Django como framework backend en Python**

### Contexto:

El backend debe construirse de forma rápida, moderna y con buena performance. El equipo tiene experiencia en Python. Se busca buena documentación, soporte para tipos, y facilidad para exponer servicios API que puedan escalar a futuro.

### Alternativas:

**Django**

- Framework completo con ORM, admin, autenticación y más.
- Más pesado para servicios ligeros tipo API.

**FastAPI**

- Ligero, rápido y moderno.
- Soporte para tipado estático (Pydantic) y OpenAPI automático.
- Excelente para servicios RESTful eficientes.

### Criterios de Elección:

- Performance y tiempo de respuesta.
- Rapidez de desarrollo.
- Soporte a OpenAPI y documentación automática.
- Escalabilidad y modularidad.

### Decisión:

**Se elige FastAPI.**

### Sustento:

FastAPI ofrece mayor rendimiento para APIs y facilita la generación automática de documentación. Es ideal para microservicios modernos, tiene menor sobrecarga que Django y permite escalar modularmente con facilidad.

---

# Decisión 4

## Título:

**Elección entre Lenguaje Multiplataforma (Flutter) vs Lenguaje Nativo (Kotlin para Android)**

### Contexto:

Se necesita desarrollar una app móvil usable tanto en Android como en iOS, manteniendo bajos los costos de desarrollo y mantención. El equipo es reducido y se prioriza lanzar MVP funcional en corto tiempo.

### Alternativas:

**Kotlin (Nativo Android)**

- Alto rendimiento, acceso completo al sistema operativo.
- Necesidad de desarrollo separado para iOS.

**Flutter (Multiplataforma)**

- Código único para iOS y Android.
- UI consistente y personalizable con buen rendimiento.
- Comunidad y soporte en crecimiento.

### Criterios de Elección:

- Velocidad de desarrollo.
- Costo de mantenimiento.
- Compatibilidad multiplataforma.
- Experiencia del equipo.

### Decisión:

**Se elige Flutter.**

### Sustento:

Flutter permite acelerar el desarrollo con un solo código base para ambas plataformas. Esto reduce costos de mantenimiento y tiempos de entrega, lo cual es crítico para un MVP o producto en etapas tempranas.

---

# Decisión 5

## Título:

**Elección entre lenguaje no tipado (Python) vs lenguaje tipado (TypeScript) para frontend**

### Contexto:

El sistema frontend está enfocado en brindar una interfaz web rica e interactiva. Se busca evitar errores comunes en tiempo de ejecución y facilitar el trabajo colaborativo en un equipo creciente.

### Alternativas:

**Python (con frameworks como Brython)**

- Familiar para desarrolladores backend.
- Limitado en herramientas y ecosistema para frontend moderno.

**TypeScript**

- Superconjunto de JavaScript con tipado estático.
- Ayuda a evitar errores comunes y mejora el autocompletado y refactorización.
- Compatible con los principales frameworks como React, Angular o Vue.

### Criterios de Elección:

- Prevención de errores en tiempo de ejecución.
- Herramientas de desarrollo y soporte IDE.
- Escalabilidad del código.
- Productividad del equipo en frontend.

### Decisión:

**Se elige TypeScript.**

### Sustento:

TypeScript mejora la mantenibilidad y escalabilidad del frontend, especialmente a medida que el equipo crece. Su compatibilidad con librerías modernas lo hace ideal para construir una interfaz sólida y confiable desde el inicio.

---

# Decisión 6

## Título:

**Elección entre Azure vs Render para el despliegue y administración de servicios en la nube**

### Contexto:

El equipo se encuentra desarrollando una aplicación web de tamaño mediano orientada a usuarios finales con requerimientos de alta disponibilidad, despliegue rápido y manejo sencillo. No se cuenta con un DevOps dedicado, por lo cual la facilidad de configuración y mantenimiento es un factor determinante. El presupuesto es limitado, y se busca una solución que permita escalar de forma progresiva sin generar gastos excesivos desde el inicio.

### Alternativas:

**Azure (Microsoft Azure)**

- Plataforma empresarial con un ecosistema robusto, altamente escalable y con múltiples servicios integrados (base de datos, funciones serverless, Kubernetes, etc.).
- Ideal para soluciones complejas, con políticas de seguridad avanzadas y soporte empresarial.
- Requiere experiencia en configuración y administración de recursos (VNet, permisos, políticas, etc.), lo que puede ser una barrera inicial para equipos pequeños.

**Render**

- Plataforma moderna que ofrece despliegue automático desde repositorios (como GitHub), con configuración mínima.
- Permite crear servicios web, cron jobs, workers, bases de datos y más con una interfaz sencilla.
- Precios accesibles, con una capa gratuita suficiente para pruebas y pequeños entornos productivos.
- Excelente documentación y comunidad en crecimiento.

### Criterios de Elección:

- Facilidad de despliegue y configuración sin necesidad de conocimientos avanzados en infraestructura.
- Escalabilidad progresiva sin grandes costos iniciales.
- Integración directa con herramientas de desarrollo modernas (GitHub Actions, Docker, CI/CD).
- Soporte y documentación clara para desarrolladores.
- Disponibilidad de funcionalidades mínimas necesarias (hosting, bases de datos, certificados SSL automáticos, etc.).

### Decisión:

**Se elige Render como la plataforma de nube.**

### Sustento:

Render permite al equipo concentrarse en el desarrollo sin tener que invertir tiempo en configurar infraestructura compleja. La curva de aprendizaje es baja, y la integración con herramientas modernas permite ciclos de despliegue rápidos y seguros.  
El costo inicial es menor en comparación con Azure, lo que es ideal para un proyecto en crecimiento.  
A pesar de que Azure es más robusto para arquitecturas complejas, Render cumple con todos los requisitos actuales del proyecto con menor fricción, y puede escalar conforme se necesite. Además, la automatización del HTTPS, los deploys por Git y el monitoreo básico son suficientes en esta etapa.
