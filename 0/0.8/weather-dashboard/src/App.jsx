import { useState, useEffect } from 'react';
import './App.css';
import useWeather from './hooks/useWeather';
import useGeolocation from './hooks/useGeolocation';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCard from './components/WeatherCard/WeatherCard';
import ForecastCard from './components/ForecastCard/ForecastCard';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const [searchCity, setSearchCity] = useState('');
  
  // Hooks personalizados
  const weather = useWeather();
  const geolocation = useGeolocation();

  // Manejar búsqueda por ciudad
  const handleSearch = (cityName) => {
    if (cityName.trim()) {
      weather.searchByCity(cityName);
      setSearchCity('');
    }
  };

  // Manejar solicitud de geolocalización
  const handleLocationRequest = () => {
    geolocation.getCurrentLocation();
  };

  // Efecto para manejar cuando se obtiene la geolocalización
  useEffect(() => {
    if (geolocation.position && !geolocation.error) {
      weather.searchByCoordinates(geolocation.position);
    }
  }, [geolocation.position]);

  // Verificar si la API está configurada
  const isApiConfigured = weather.isConfigured;

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">Dashboard del Clima</h1>
          <p className="app-subtitle">
            Demostración de integración con WeatherAPI
          </p>
        </header>

        <main className="app-content">
          {!isApiConfigured && (
            <div className="api-warning">
              <h3 className="api-warning-title">⚠️ Configuración requerida</h3>
              <p className="api-warning-text">
                Para usar esta demo, necesitas una API Key gratuita de{' '}
                <a 
                  href="https://www.weatherapi.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  WeatherAPI.com
                </a>
                <br />
                Crea un archivo .env con: VITE_WEATHER_API_KEY=tu_api_key_aqui
              </p>
            </div>
          )}

          <SearchBar
            value={searchCity}
            onChange={setSearchCity}
            onSearch={handleSearch}
            onLocationRequest={handleLocationRequest}
            loading={weather.loading || geolocation.loading}
          />

          {(weather.loading || geolocation.loading) && (
            <div className="loading-state">
              <LoadingSpinner 
                message={
                  geolocation.loading 
                    ? "Obteniendo tu ubicación..." 
                    : "Cargando datos del clima..."
                } 
              />
            </div>
          )}

          {geolocation.error && !weather.loading && (
            <div className="error-state">
              <ErrorMessage
                message={geolocation.error}
                onRetry={() => {
                  geolocation.clearError();
                  geolocation.getCurrentLocation();
                }}
              />
            </div>
          )}

          {weather.error && !weather.loading && !geolocation.loading && (
            <div className="error-state">
              <ErrorMessage
                message={weather.error}
                onRetry={() => {
                  weather.clearError();
                  weather.retry();
                }}
              />
            </div>
          )}

          {!weather.loading && !geolocation.loading && !weather.error && weather.hasData && (
            <>
              <section className="weather-section">
                <WeatherCard weatherData={weather.weatherData} />
              </section>
              {weather.forecast && weather.forecast.length > 0 && (
                <section className="forecast-section">
                  <h2 className="forecast-title">
                    Pronóstico de {weather.forecast.length} días
                  </h2>
                  <div className="forecast-grid">
                    {weather.forecast.map((forecastDay, index) => (
                      <ForecastCard
                        key={forecastDay.date}
                        forecastDay={forecastDay}
                        index={index}
                      />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </main>

      </div>
    </div>
  );
}

export default App;
