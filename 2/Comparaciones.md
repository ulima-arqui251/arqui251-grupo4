# Decisión 1

## Título: **Elección entre Base de Datos No Relacional (MongoDB) vs Relacional (PostgreSQL)**

### Contexto:

Desmodus App gestiona entidades con estructura clara y relaciones definidas, como usuarios, registros de especies y ubicaciones geográficas. 
Aunque podría haber cierta variabilidad en atributos secundarios, el núcleo de los datos responde bien a esquemas estructurados.
Se anticipa crecimiento en volumen de información y una futura necesidad de realizar consultas complejas y análisis sobre las relaciones entre entidades.

### Alternativas:

**MongoDB (No Relacional)**

- Alta flexibilidad para esquemas que cambian frecuentemente.
- Escalabilidad horizontal sencilla.
- Menor control sobre integridad referencial.
- Menos eficiente para relaciones complejas entre entidades.

**PostgreSQL (Relacional)**

- Fuerte en integridad de datos y relaciones complejas.
- Soporte para tipos de datos avanzados (JSON, arrays, etc.).
- Buen rendimiento en operaciones analíticas estructuradas.
- Amplio soporte para extensiones como PostGIS, útil para datos geoespaciales.

### Criterios de Elección:

- Predominancia de datos estructurados y relaciones entre entidades.
- Consistencia e integridad de datos.
- Requerimientos de análisis estructurado.
- Escalabilidad y soporte a largo plazo.
- Familiaridad del equipo técnico.
- Integración eficiente con FastAPI mediante ORMs (SQLAlchemy, SQLModel).
- Compatibilidad con PostGIS para funciones geoespaciales, clave en el mapeo de avistamientos.

### Decisión:

**Se elige PostgreSQL.**

### Sustento:

PostgreSQL ofrece una solución sólida para modelar datos estructurados y con relaciones claras, que representan la base funcional del sistema. Su integración con FastAPI mediante ORMs facilita el desarrollo backend, mientras que su soporte para extensiones como PostGIS lo vuelve ideal para operaciones geoespaciales necesarias en la localización de especies en mapas. Aunque se valoró la flexibilidad de MongoDB, no existe un requerimiento fuerte de esquemas dinámicos, por lo que priorizar un modelo relacional robusto asegura coherencia, rendimiento en consultas y sostenibilidad a largo plazo.

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

#### Criterios de Elección:

- Facilidad de integración con frontend.
- Compatibilidad multiplataforma.
- Curva de aprendizaje.
- Facilidad de documentación y testing.

### Decisión:

Se elige **REST API**.

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

## Título: **Elección entre Lenguaje Multiplataforma (Flutter) vs Lenguaje Nativo (Kotlin para Android)**

### Contexto:

Se necesita desarrollar una app móvil usable tanto en Android como en iOS, manteniendo bajos los costos de desarrollo y mantención. 
El equipo es reducido y se prioriza lanzar MVP funcional en corto tiempo. 
Cabe mencionar que el uso de hardware es crítico para los módulos planteados de la aplicación (e.g. uso de cámara, gps y núcleos del sistema móvil para realizar la inferencia con el mejor rendimiento).

### Alternativas:

**Kotlin (Nativo Android)**

- Alto rendimiento, acceso completo al sistema operativo.
- Necesidad de desarrollo separado para iOS.

**Flutter (Multiplataforma)**

- Código único para iOS y Android.
- UI consistente y personalizable con buen rendimiento.
- Comunidad y soporte en crecimiento.

### Criterios de Elección:

- **Velocidad de desarrollo**.
- **Costo** de mantenimiento.
- Compatibilidad **multiplataforma**.
- **Experiencia del equipo**.

### Decisión:

**Se elige Flutter.**

### Sustento:

Flutter permite acelerar el desarrollo con un solo código base para ambas plataformas. 
Esto reduce costos de mantenimiento y tiempos de entrega, lo cual es crítico para un MVP o producto en etapas tempranas. 
Para el apartado de inferencias en el mismo dispositivo, se cuenta con el apoyo de librerías de código abierto que permiten la interacción del código abstracto de Flutter con código nativo del sistema operativo del ambiente de ejecución (Java para Android y Swift para iOS) por lo que el uso de operaciones de bajo nivel está garantizado gracias a esta funcionalidad de Flutter.

---

# Decisión 5

## Título:

**Elección entre lenguaje no tipado (Python) vs lenguaje tipado (TypeScript) para frontend**

### Contexto:

El sistema frontend está enfocado en brindar una interfaz web rica e interactiva. Se busca evitar errores comunes en tiempo de ejecución y facilitar el trabajo colaborativo en un equipo creciente.

### Alternativas:

**Python**

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

**Elección entre Azure Web App vs Render para el despliegue y administración de servicios en la nube**

### Contexto:

El equipo se encuentra desarrollando una aplicación web de tamaño mediano orientada a usuarios finales, con requerimientos de alta disponibilidad, despliegue rápido y mantenimiento sencillo. 
No se cuenta con un perfil DevOps dedicado, por lo que se busca una solución que minimice la complejidad operativa. 
Además, el presupuesto es limitado, lo que obliga a priorizar opciones que ofrezcan un crecimiento progresivo sin costos elevados en etapas iniciales.

### Alternativas:

**Azure Web App**

- Servicio gestionado dentro del ecosistema de Azure que permite desplegar aplicaciones web con soporte para runtimes como Python.
- Ofrece integración con otros servicios de Azure (como Azure Database, Application Insights, etc.).
- Requiere conocimientos básicos de configuración de entornos en Azure, manejo de App Services, y gestión de recursos mediante Azure Portal o CLI.
- Los costos pueden escalar rápidamente al agregar recursos adicionales o en entornos productivos.

**Render**

- Plataforma orientada a desarrolladores que permite desplegar servicios web directamente desde repositorios Git, con mínima configuración.
- Ofrece servicios integrados como bases de datos, workers, y cron jobs, además de deploys automáticos y certificados SSL sin intervención manual.
- Presenta un modelo de precios accesible, con una capa gratuita útil para desarrollo y pruebas.
- La interfaz es simple, con documentación clara y flujos de trabajo compatibles con herramientas modernas como Docker, GitHub Actions, y CI/CD.

### Criterios de Elección:

- Facilidad de despliegue y configuración sin necesidad de conocimientos avanzados en infraestructura.
- Escalabilidad progresiva sin grandes costos iniciales.
- Integración directa con herramientas de desarrollo modernas (GitHub Actions, Docker, CI/CD).
- Disponibilidad de funcionalidades mínimas necesarias (hosting, bases de datos, certificados SSL automáticos, monitoreo básico).
- Curva de aprendizaje acorde a un equipo pequeño sin DevOps dedicado.

### Decisión:

Se elige **Render** como la PAAS del servidor.

### Sustento:

Render responde mejor a las necesidades operativas actuales del equipo al permitir un flujo de despliegue sencillo, automático y sin fricción desde entornos de desarrollo modernos como GitHub. A diferencia de Azure Web App con runtime Python, que requiere una configuración más detallada y mayor familiaridad con su ecosistema, Render minimiza la carga operativa y acelera los ciclos de entrega. Sus capacidades integradas (SSL, base de datos, deploys automáticos) cubren los requisitos actuales sin necesidad de configurar recursos adicionales. Además, su modelo de precios flexible permite escalar el servicio conforme crece el proyecto, sin incurrir en gastos innecesarios durante la etapa inicial de desarrollo.
