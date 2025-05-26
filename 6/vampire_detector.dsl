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
            description "Sistema que detecta vampiros mediante un modelo YOLOv11 embebido en la app móvil, con backend para autenticación, chat, mapas y gestión de detecciones"

            mobileApp = container "Aplicación Móvil" {
                technology "Flutter"
                description "App que integra detección, chat, mapa y alertas. Usa yolo-flutter-app para ejecutar detección local con el modelo YOLOv11 embebido"
            }

            yoloFlutterLib = container "yolo-flutter-app" {
                technology "Flutter Plugin (nativo)"
                description "Librería puente que conecta Flutter con el modelo YOLOv11 embebido usando Platform Channels"
            }

            yoloEmbedded = container "YOLOv11 Embedded Model" {
                technology "YOLOv11 (on-device)"
                description "Modelo embebido y optimizado para detección en el dispositivo móvil"
            }

            fastapiServer = container "Backend API" {
                technology "FastAPI (Python)"
                description "API REST que orquesta autenticación, mapa, noticias, detección, notificaciones y chatbot"
            }

            database = container "Base de Datos" {
                technology "PostgreSQL"
                description "Almacena datos de usuarios, ubicaciones, detecciones, alertas, configuraciones y chat"
            }

            modelTrainingPipeline = container "YOLO Training Pipeline" {
                technology "Python + Ultralytics + PyTorch"
                description "Pipeline para entrenamiento y validación del modelo YOLOv11 usando datasets anotados"
            }

            trainingDataset = container "Dataset de Entrenamiento" {
                technology "Imágenes + Anotaciones (YOLO format)"
                description "Colección de imágenes de vampiros y especies con sus respectivas etiquetas para entrenamiento"
            }


            user -> mobileApp "Usa la app en su dispositivo"

            // Detección en el dispositivo
            mobileApp -> yoloFlutterLib "Invoca librería para detección"
            yoloFlutterLib -> yoloEmbedded "Ejecuta detección"
            yoloEmbedded -> yoloFlutterLib "Retorna resultados"
            yoloFlutterLib -> mobileApp "Envía resultados detectados"

            // Backend
            mobileApp -> fastapiServer "Autenticación, detecciones, mapas, chat"
            fastapiServer -> googleOAuth "OAuth"
            fastapiServer -> discordOAuth "OAuth"
            fastapiServer -> facebookOAuth "OAuth"
            fastapiServer -> openAI "Chatbot"
            fastapiServer -> osm "Mapas"
            fastapiServer -> database "CRUD de datos"

            // Entrenamiento del modelo (proceso externo)
            trainingDataset -> modelTrainingPipeline "Provee datos de entrenamiento"
            modelTrainingPipeline -> yoloEmbedded "Genera modelo optimizado embebido"
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
            title "Contexto del Sistema - Detector de Vampiros"
            autolayout tb 100 50
        }   

        container vampireApp {
            include user
            include mobileApp
            include modelTrainingPipeline
            include trainingDataset
            include yoloFlutterLib
            include yoloEmbedded
            include fastapiServer
            include database
        
            // Incluyo aquí los contenedores externos en bloque, juntos y consecutivos
            include googleOAuth
            include discordOAuth
            include facebookOAuth
            include openAI
            include osm
            
            title "Vista de Contenedores - Detector de Vampiros (con Entrenamiento)"
            autolayout lr 100 50
        }
        theme default
    }
}