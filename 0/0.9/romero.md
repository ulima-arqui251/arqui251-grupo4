# Romero: Patrón Static Content Hosting

![Pattern](https://media.geeksforgeeks.org/wp-content/uploads/20240930172614/Static-Content-Hosting-Pattern---System-Design.webp)

Nota. Obtenido de [GeeksForGeeks, s.f.](https://www.geeksforgeeks.org/system-design/static-content-hosting-pattern-system-design/)

---

## Problema

Las aplicaciones modernas, especialmente en arquitecturas web orientadas a microservicios, necesitan mostrar contenido estático como HTML, CSS, JavaScript e imágenes de forma rápida y segura.

Este contenido se alojaba en servidores web junto con la lógica del backend, lo que genera varios problemas (Cloudflare, s.f.):

- Cuellos de botella en el rendimiento del servidor al manejar tanto contenido dinámico como estático.
- Escalabilidad limitada en picos de tráfico.
- Tiempo de carga elevado por falta de distribución geográfica.
- Seguridad comprometida al exponer toda la aplicación en un mismo servidor.
- Costos innecesarios por usar recursos de cómputo para servir archivos estáticos.

---

## Solución

El patrón **Static Content Hosting** propone desacoplar el contenido estático de la lógica del backend y servirlo desde plataformas de almacenamiento distribuido y redes de distribución de contenido (CDN) (AWS, s.f.; Google Cloud, s.f.; Microsoft, s.f.a).

Este contenido puede incluir:

- Archivos HTML generados (Single Page Applications).
- Recursos estáticos como imágenes, fuentes, scripts, hojas de estilo.
- Assets construidos por frameworks frontend como React, Angular o Vue.

La solución se implementa típicamente con servicios como:

- **Amazon S3 + CloudFront** (AWS, s.f.)
- **Azure Blob Storage + Azure CDN** (Microsoft, s.f.a)
- **Google Cloud Storage + Cloud CDN** (Google Cloud, s.f.)
- **Firebase Hosting**, **Netlify**, **Vercel** (Firebase, s.f.; Netlify, s.f.; Vercel, s.f.)

---

## Ventajas

- **Desempeño:** Entrega rápida desde nodos CDN distribuidos globalmente (Cloudflare, s.f.).
- **Escalabilidad:** Maneja millones de solicitudes sin necesidad de backend.
- **Simplicidad operativa:** No requiere mantenimiento de infraestructura compleja.
- **Seguridad:** Aísla el backend, permite HTTPS, CORS y headers seguros.
- **Costo-eficiencia:** Solo se paga por almacenamiento y tráfico, no por instancias activas (AWS, s.f.).

---

## Rol de la CDN

Una **Content Delivery Network (CDN)** cumple funciones críticas como:

- Cacheo de contenido en múltiples ubicaciones (Cloudflare, s.f.).
- Reducción de latencia sirviendo desde el nodo más cercano.
- Protección frente a amenazas mediante WAF, mitigación DDoS, tokens, etc.
- Versionado de recursos para despliegues sin afectar sesiones activas.

---

## Complementos

- **CI/CD Pipelines** (GitHub Actions, GitLab CI, Vercel) para despliegues automáticos.
- **Invalidación de caché** tras cada deploy (Netlify, s.f.; Vercel, s.f.).
- **Infraestructura como código** con Terraform o Pulumi (HashiCorp, s.f.).

---

## Casos de Aplicación

- **Aplicaciones Frontend SPA:**  
  Frameworks como React o Angular generan contenido estático desplegable en S3 o Vercel (AWS, s.f.; Vercel, s.f.).

- **Sitios Corporativos y Landing Pages:**  
  Sitios sin backend dinámico pueden ser completamente alojados en Firebase o Netlify (Firebase, s.f.; Netlify, s.f.).

- **Documentación Técnica y Blogs:**  
  Herramientas como Hugo o Gatsby permiten generar sitios estáticos rápidos y versionables (Gatsby, s.f.; Hugo, s.f.).

- **E-Commerce Headless:**  
  El frontend se aloja en CDN y se conecta vía APIs al backend (Strapi, s.f.).

---

## Ejemplo de Arquitectura

![Arquitectura](https://learn.microsoft.com/en-us/azure/architecture/patterns/_images/static-content-hosting-pattern.png)

Nota. Obtenido de [Microsoft, s.f.b](https://learn.microsoft.com/en-us/azure/architecture/patterns/static-content-hosting)

Un diagrama donde:

- El cliente accede a HTML/JS/CSS desde una CDN.
- La CDN extrae recursos desde un bucket de almacenamiento.
- El backend está separado y se expone solo para APIs seguras.

---

## Referencias

Amazon Web Services. (s.f.). _Amazon CloudFront_. https://aws.amazon.com/cloudfront/  
Cloudflare. (s.f.). _What is a CDN?_. https://www.cloudflare.com/learning/cdn/what-is-a-cdn/  
Firebase. (s.f.). _Firebase Hosting_. https://firebase.google.com/docs/hosting  
Gatsby. (s.f.). _Gatsby Documentation_. https://www.gatsbyjs.com/docs/
GeeksforGeeks. (s.f.). _Static content hosting pattern – system design_. https://www.geeksforgeeks.org/static-content-hosting-pattern-system-design/
Google Cloud. (s.f.). _Hosting a static website_. https://cloud.google.com/storage/docs/hosting-static-website  
HashiCorp. (s.f.). _Terraform_. https://www.terraform.io/  
Hugo. (s.f.). _The world’s fastest framework for building websites_. https://gohugo.io/  
Microsoft. (s.f.a). _Host a static website in Azure Storage_. https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website
Microsoft. (s.f.b). _Static Content Hosting pattern_. https://learn.microsoft.com/en-us/azure/architecture/patterns/static-content-hosting  
Netlify. (s.f.). _Deploying static sites_. https://docs.netlify.com/  
Strapi. (s.f.). _Strapi Documentation_. https://strapi.io/  
Vercel. (s.f.). _What is Vercel?_. https://vercel.com/docs/concepts/overview/what-is-vercel
