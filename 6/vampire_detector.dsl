workspace {

    model {
        user = person "Usuario" {
            description "Persona que usa el dispositivo móvil para identificar vampiros"
        }

        oauthProviders = softwareSystem "OAuth 2.0 de terceros" {
            description "Proveedores de autenticación externa mediante OAuth 2.0"

            googleOAuth = container "Google OAuth" {
                technology "OAuth 2.0"
                description "Proveedor de autenticación externa mediante OAuth 2.0"
            }

            discordOAuth = container "Discord OAuth" {
                technology "OAuth 2.0"
                description "Proveedor de autenticación externa mediante OAuth 2.0"
            }

            facebookOAuth = container "Facebook OAuth" {
                technology "OAuth 2.0"
                description "Proveedor de autenticación externa mediante OAuth 2.0"
            }
        }

        llmProvider = softwareSystem "Proveedor de modelo grande de lenguaje" {
            description "Servicio externo para generación de respuestas del chatbot"

            gptModel = container "gpt-4o-mini" {
                technology "OpenAI API"
                description "Modelo de lenguaje para generar respuestas del chatbot"
            }
        }

        geolocationService = softwareSystem "Geolocation Service" {
            description "Servicio externo para geolocalización y mapas"

            osmAPI = container "OpenStreetMap API" {
                technology "OpenStreetMap API"
                description "Proveedor de mapas y datos geográficos abiertos"
            }
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
                technology "YOLOv11n (on-device)"
                description "Modelo embebido y optimizado para detección en el dispositivo móvil"
            }

            fastapiServer = container "Backend API" {
                technology "FastAPI (Python)"
                description "API REST que orquesta autenticación, mapa, noticias, detección, notificaciones y chatbot"

                userController = component "UserController" {
                    technology "FastAPI Controller"
                    description "Maneja operaciones relacionadas con el usuario (perfil, configuración, etc.)"
                }

                authController = component "AuthController" {
                    technology "FastAPI Controller"
                    description "Gestiona autenticación OAuth y generación de tokens"
                }

                noticiasController = component "NoticiasController" {
                    technology "FastAPI Controller"
                    description "Proporciona acceso a noticias sobre vampiros y eventos relacionados"
                }

                chatbotController = component "ChatbotController" {
                    technology "FastAPI Controller"
                    description "Orquesta las solicitudes al modelo LLM para generar respuestas del chatbot"
                }

                reportesController = component "ReportesController" {
                    technology "FastAPI Controller"
                    description "Maneja la recepción y consulta de reportes de vampiros detectados"
                }
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

            // Backend (Contenedores)
            mobileApp -> fastapiServer "Autenticación, detecciones, mapas, chat"

            fastapiServer -> googleOAuth "OAuth"
            fastapiServer -> discordOAuth "OAuth"
            fastapiServer -> facebookOAuth "OAuth"

            fastapiServer -> gptModel "Chatbot"
            fastapiServer -> osmAPI "Mapas"

            // Backend (Componentes)
            mobileApp -> userController "Consulta perfil, preferencias, etc."
            mobileApp -> authController "Realiza login mediante OAuth"
            mobileApp -> noticiasController "Consulta noticias y alertas"
            mobileApp -> chatbotController "Envía mensajes para respuesta del LLM"
            mobileApp -> reportesController "Envía y consulta reportes de vampiros"

            authController -> googleOAuth "OAuth"
            authController -> discordOAuth "OAuth"
            authController -> facebookOAuth "OAuth"

            chatbotController -> gptModel "Solicita generación de respuesta"

            userController -> database "Lee/Escribe datos de usuario"
            reportesController -> database "Lee/Escribe reportes"
            noticiasController -> database "Lee noticias"

            reportesController -> osmAPI "Solicita datos de ubicación (opcional)"


            fastapiServer -> database "CRUD de datos"

            // Entrenamiento del modelo (proceso externo)
            trainingDataset -> modelTrainingPipeline "Provee datos de entrenamiento"
            modelTrainingPipeline -> yoloEmbedded "Genera modelo optimizado embebido"
        }
    }

    views {
        styles {
            element "Person" {
                background #66aa66
                shape person
            }

            element "Software System" {
                background #66bb88
            }

            element "Container" {
                background #88bb99
            }
            
            element "Component" {
                background #99ccaa
            }
        }

        systemContext vampireApp {
            include user

            include vampireApp

            include oauthProviders
            include llmProvider
            include geolocationService

            title "Contexto del Sistema - Detector de Vampiros"
            autolayout tb 100 50


        }   

        container vampireApp {
            include user
            
            // Contenedores del sistema
            include mobileApp
            include modelTrainingPipeline
            include trainingDataset
            include yoloFlutterLib
            include yoloEmbedded
            include fastapiServer
            include database
        
            // Contenedores externos
            include googleOAuth
            include discordOAuth
            include facebookOAuth

            include gptModel

            include osmAPI
            
            title "Vista de Contenedores - Detector de Vampiros (con Entrenamiento)"
            autolayout tb 200 50

        }
        

        component fastapiServer {
            include user
            
            // Contenedores
            include mobileApp
            include database
            include googleOAuth
            include discordOAuth
            include facebookOAuth
            include gptModel
            include osmAPI

            // Componentes del server backend
            include userController
            include authController
            include noticiasController
            include chatbotController
            include reportesController



            title "Vista de Componentes - Backend FastAPI"
            autolayout tb 150 50
        }

        theme default

    }
}