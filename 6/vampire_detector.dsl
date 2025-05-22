workspace {

    model {
        user = person "Usuario" {
            description "Persona que usa el dispositivo móvil para identificar vampiros"
        }

        googleOAuth = softwareSystem "Google OAuth" {
            description "Proveedor de autenticación externa mediante OAuth 2.0"
        }

        discordOAuth = softwareSystem "Discord OAuth" {
            description "Proveedor de autenticación externa mediante OAuth 2.0"
        }

        facebookOAuth = softwareSystem "Facebook OAuth" {
            description "Proveedor de autenticación externa mediante OAuth 2.0"
        }

        openAI = softwareSystem "OpenAI LLM" {
            description "Servicio externo para generación de respuestas del chatbot"
        }

        osm = softwareSystem "OpenStreetMap API" {
            description "Proveedor de mapas y datos geográficos abiertos"
        }

        vampireApp = softwareSystem "Detector de Vampiros" {
            description "Sistema que detecta vampiros mediante un modelo YOLOv11 embebido en la app móvil y provee backend para gestión de módulos y autenticación"

            mobileApp = container "Aplicación Móvil" {
                technology "Flutter"
                description "App Flutter que muestra mapa, noticias, chat, y detección. Se comunica con backend y usa yolo-flutter-app para detección local."
            }

            yoloFlutterLib = container "yolo-flutter-app" {
                technology "Flutter Plugin (nativo)"
                description "Librería puente que conecta Flutter con el modelo YOLOv11 embebido usando Platform Channels"
            }

            yoloEmbedded = container "YOLOv11 Embedded Model" {
                technology "YOLOv11 (on-device)"
                description "Modelo de detección de especies vampíricas embebido en el dispositivo, invocado a través de la librería yolo-flutter-app"
            }

            fastapiServer = container "Backend API" {
                technology "FastAPI (Python) en Azure"
                description "Orquestador central que ofrece APIs REST para autenticación, noticias, detección, ubicación, notificaciones y chatbot"
            }

            database = container "Base de Datos" {
                technology "PostgreSQL"
                description "Almacena información de usuarios, detecciones, configuración, historial de chats y alertas"
            }

            # Flujo detección en dispositivo
            mobileApp -> yoloFlutterLib "Invoca funciones de la librería"
            yoloFlutterLib -> yoloEmbedded "Ejecuta detección con el modelo YOLOv11"
            yoloEmbedded -> yoloFlutterLib "Devuelve especies detectadas"
            yoloFlutterLib -> mobileApp "Retorna resultados a la app"

            # Flujo backend
            mobileApp -> fastapiServer "Solicita inicio de sesión OAuth, noticias, mapa, detecciones y chatbot"
            fastapiServer -> googleOAuth "Autentica usuarios vía OAuth"
            fastapiServer -> discordOAuth "Autentica usuarios vía OAuth"
            fastapiServer -> facebookOAuth "Autentica usuarios vía OAuth"
            fastapiServer -> openAI "Solicita respuestas para el chatbot"
            fastapiServer -> osm "Consulta datos de mapa"
            fastapiServer -> database "Lee y escribe datos de usuarios, chat, detecciones y alertas"

            # Conexión usuario
            user -> mobileApp "Usa la app instalada en el dispositivo"
        }
    }

    views {
        systemContext vampireApp {
            include user
            include vampireApp
            include googleOAuth
            include discordOAuth
            include facebookOAuth
            include openAI
            include osm
            autolayout lr
            title "Contexto del Sistema - Detector de Vampiros"
        }

        container vampireApp {
            include user
            include mobileApp
            include yoloFlutterLib
            include yoloEmbedded
            include fastapiServer
            include database
            include googleOAuth
            include discordOAuth
            include facebookOAuth
            include openAI
            include osm
            autolayout lr
            title "Vista de Contenedores - Detector de Vampiros"
        }

        theme default
    }
}