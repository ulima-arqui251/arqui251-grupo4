# Imagen base ligera de Python 3.10
FROM python:3.10-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /user-service

# Copia primero solo los archivos necesarios para instalar dependencias (mejora el cache)
COPY requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Luego copia el resto del código fuente
COPY . .

# Expone el puerto en caso de ser necesario (opcional)
EXPOSE 5001

# Comando por defecto para ejecutar la aplicación
CMD ["python", "app.py"]
