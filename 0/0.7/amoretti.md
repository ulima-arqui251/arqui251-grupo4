# Tema: DevOps

![](https://devopedia.org/images/article/54/7602.1513404277.png)

## **Desarrollo conceptual**

### ¿Qué es DevOps?

DevOps es una metodología que combina desarrollo de software (Dev) y operaciones de TI (Ops). 

El objetivo es acortar el ciclo de vida del desarrollo, aumentar la calidad del software y facilitar la entrega continua mediante la colaboración, automatización y monitoreo constante.

### Origen de DevOps

DevOps surge a finales de los años 2000 como respuesta a la separación tradicional entre los equipos de desarrollo y operaciones. Se basa en prácticas ágiles y lean, promoviendo integración continua, entrega continua y una cultura de responsabilidad compartida.

### DevOps vs SRE

DevOps es un enfoque cultural y metodológico, mientras que SRE (Site Reliability Engineering) es una disciplina creada por Google con un enfoque más ingenieril. Ambos buscan confiabilidad y eficiencia, pero SRE tiene un enfoque más fuerte en automatización y métricas como el SLO y el error budget.

### Modelos de Madurez (Maturity Models)

Los modelos de madurez en DevOps evalúan el grado de adopción de prácticas DevOps en una organización. Se miden dimensiones como automatización, colaboración, despliegue continuo y monitoreo. Los niveles van desde inicial (ad-hoc) hasta optimizado (automatización completa y mejora continua).

### DevSecOps, FinOps, MLOps…

Extensiones de DevOps que aplican sus principios a dominios específicos:

* **DevSecOps**: integra seguridad desde el inicio del ciclo de vida.
* **FinOps**: gestión financiera colaborativa para servicios cloud.
* **MLOps**: gestión y automatización del ciclo de vida de modelos de machine learning.

### Software de CI/CD

Herramientas que automatizan la integración y entrega de software:

* **Jenkins**: plataforma de automatización extensible.
* **AWS CodePipeline**: servicio de CI/CD de AWS totalmente gestionado.
* **GitHub Actions**: permite automatizar flujos de trabajo directamente desde GitHub.
* **Azure DevOps**: suite de Microsoft para CI/CD y colaboración.

---

## **Consideraciones técnicas**

### Requisitos técnicos

* **SO**: Windows, macOS o Linux.
* **RAM**: mínimo 8 GB recomendado.
* **CPU**: procesador moderno de múltiples núcleos.
* **GPU**: necesaria solo si se usa MLOps con modelos de machine learning.

### Conocimientos previos

* Familiaridad con el código fuente y control de versiones (Git).
* Comprensión básica de pruebas unitarias.
* Conocimiento general de despliegue a servicios cloud como AWS, Azure o GCP.

### Instalación de VS Code

Instalar Visual Studio Code según el sistema operativo:

* Descargar desde [https://code.visualstudio.com/](https://code.visualstudio.com/)
* Seguir el instalador correspondiente (Windows, macOS, Linux).

### Extensión de GitHub Actions

* Buscar “GitHub Actions” en la marketplace de extensiones de VS Code.
* Instalar para facilitar la edición y validación de archivos de flujo de trabajo.

### ¿Qué es un YAML?

YAML (_YAML Ain't Markup Language_) es un formato legible por humanos para la serialización de datos. Se usa comúnmente en configuración de CI/CD. Es similar a JSON pero más simple y menos verboso.

### Estructura de YAML

* Usa indentación por espacios (no tabulaciones).
* Representa datos como clave: valor.
* Puede incluir listas, objetos anidados y variables.

```yaml
name: CI Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Tests
        run: npm test
```

---

## **Demo (Código)**

### Uso de GitHub Actions

Se presentará un flujo de trabajo básico de CI usando GitHub Actions, incluyendo patrones comunes como:

* Checkout del repositorio.
* Instalación de dependencias.
* Ejecución de pruebas.
* Despliegue a entornos.

### (Opcional) GitHub for Students

Se mostrará cómo registrarse y acceder a herramientas gratuitas para estudiantes como dominios, créditos cloud y servicios premium.

### Pruebas automatizadas

Demostración de cómo configurar y ejecutar pruebas unitarias automáticamente dentro del flujo CI.

### Ambientes dev, test, prod

Explicación y ejemplo del uso de ambientes separados:

* Dev: desarrollo activo.
* Test: pruebas automáticas.
* Prod: entorno en producción.

### Código de ejemplo

Repositorio con una aplicación simple (e.g. Node.js o Python) con pruebas y configuración CI/CD lista para usar.

### Ejecución de pipeline

Muestra del pipeline ejecutándose en GitHub Actions después de un push al repositorio.

### Verificación de despliegue

Confirmación de que el código se desplegó correctamente en el entorno destino (e.g. página estática en GitHub Pages o contenedor en la nube).

