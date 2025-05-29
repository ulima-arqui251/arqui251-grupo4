import { Cloud, Sun, CloudRain } from 'lucide-react';
import './ForecastCard.css';

const ForecastCard = ({ forecastDay, index }) => {
  // Función simple para obtener iconos
  const getWeatherIcon = (condition) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('soleado') || conditionLower.includes('despejado')) {
      return <Sun className="weather-icon sun" />;
    }
    if (conditionLower.includes('lluvias torrenciales') || conditionLower.includes('lluvia  moderada a intervalos')) {
      return <CloudRain className="weather-icon rain" />;
    }
    return <Cloud className="weather-icon cloud" />;
  };

  // Formatear día
  const formatDay = (dateString, index) => {
    if (index === 0) return 'Hoy';
    if (index === 1) return 'Mañana';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { weekday: 'short' });
  };

  const day = forecastDay.day;
  const date = forecastDay.date;

  return (
    <div className="forecast-card">
      <div className="forecast-day">
        {formatDay(date, index)}
      </div>
      
      <div className="forecast-icon">
        {getWeatherIcon(day.condition.text)}
      </div>
      
      <div className="forecast-condition">
        {day.condition.text}
      </div>
      
      <div className="forecast-temps">
        <span className="temp-max">{Math.round(day.maxtemp_c)}°</span>
        <span className="temp-min">{Math.round(day.mintemp_c)}°</span>
      </div>
      
      <div className="forecast-rain">
        💧 {day.daily_chance_of_rain}%
      </div>
    </div>
  );
};

export default ForecastCard;