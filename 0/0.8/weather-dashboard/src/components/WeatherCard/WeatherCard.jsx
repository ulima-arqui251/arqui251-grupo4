import { Cloud, Sun, CloudRain, Thermometer, Droplets, Wind, Eye, Gauge } from 'lucide-react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { current, location } = weatherData;

  // Función para obtener icono del clima
  const getWeatherIcon = (condition) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('soleado') || conditionLower.includes('despejado')) {
      return <Sun className="main-weather-icon sun" />;
    }
    if (conditionLower.includes('lluvias torrenciales') || conditionLower.includes('lluvia  moderada a intervalos')) {
      return <CloudRain className="main-weather-icon rain" />;
    }
    return <Cloud className="main-weather-icon cloud" />;
  };

  // Formatear fecha de actualización
  const formatLastUpdated = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location-info">
          <h2 className="city-name">{location.name}</h2>
          <p className="region-country">{location.region}, {location.country}</p>
          <p className="last-updated">
            Actualizado: {formatLastUpdated(current.last_updated)}
          </p>
        </div>
        <div className="weather-icon-container">
          {getWeatherIcon(current.condition.text)}
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature-section">
          <div className="current-temp">{Math.round(current.temp_c)}°C</div>
          <div className="condition-text">{current.condition.text}</div>
          <div className="feels-like">
            Sensación térmica: {Math.round(current.feelslike_c)}°C
          </div>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <div className="detail-icon">
            <Droplets size={20} />
          </div>
          <div className="detail-content">
            <span className="detail-label">Humedad</span>
            <span className="detail-value">{current.humidity}%</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <Wind size={20} />
          </div>
          <div className="detail-content">
            <span className="detail-label">Viento</span>
            <span className="detail-value">{current.wind_kph} km/h</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <Eye size={20} />
          </div>
          <div className="detail-content">
            <span className="detail-label">Visibilidad</span>
            <span className="detail-value">{current.vis_km} km</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <Gauge size={20} />
          </div>
          <div className="detail-content">
            <span className="detail-label">Presión</span>
            <span className="detail-value">{current.pressure_mb} mb</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <Thermometer size={20} />
          </div>
          <div className="detail-content">
            <span className="detail-label">Índice UV</span>
            <span className="detail-value">{current.uv}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;