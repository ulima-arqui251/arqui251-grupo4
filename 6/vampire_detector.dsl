workspace {

    model {
        user = person "Usuario" {
            description "Persona que usa el dispositivo móvil para identificar vampiros"
        }

        discord = softwareSystem "Discord" {
            description "Plataforma externa donde se publican alertas"
        }

        google = softwareSystem "Google OAuth" {
            description "Proveedor externo de autenticación mediante OAuth"
        }

        vampireApp = softwareSystem "Detector de Vampiros" {
            description "Sistema que detecta vampiros mediante un modelo YOLO embebido en la app móvil y provee backend para CRUD y autenticación"

            mobileApp = container "Aplicación Móvil" {
                technology "Flutter + YOLOv5 (on-device)"
                description "App móvil que ejecuta detección local con YOLO y se comunica con backend para gestión de datos y autenticación"
            }

            fastapiServer = container "Backend API" {
                technology "FastAPI (Python) en Azure"
                description "Provee endpoints REST para autenticación y CRUD de datos"
            }

            database = container "Base de Datos" {
                technology "PostgreSQL"
                description "Almacena información de usuarios, resultados y configuración"
            }

            user -> mobileApp "Usa la app instalada en el dispositivo"
            mobileApp -> fastapiServer "Consume API para autenticación y gestión de datos"
            fastapiServer -> database "Lee y escribe datos"
            fastapiServer -> discord "Publica alertas y notificaciones"
            fastapiServer -> google "Autentica usuarios mediante OAuth"
        }
    }

    views {
        systemContext vampireApp {
            include user
            include vampireApp
            include discord
            include google
            autolayout lr
            title "Contexto del Sistema - Detector de Vampiros"
        }

        container vampireApp {
            include user
            include mobileApp
            include fastapiServer
            include database
            include discord
            include google
            autolayout lr
            title "Vista de Contenedores - Detector de Vampiros"
        }

        theme default
    }
}
