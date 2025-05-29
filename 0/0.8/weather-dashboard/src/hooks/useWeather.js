import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL || 'https://api.weatherapi.com/v1';

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentCity, setCurrentCity] = useState('');

  // Función para obtener clima por ciudad o coordenadas
  const fetchWeather = async (location) => {
    if (!API_KEY || API_KEY === 'TU_API_KEY_AQUI') {
      setError('API Key no configurada. Por favor, configura VITE_WEATHER_API_KEY en tu archivo .env');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Construir query - puede ser ciudad o coordenadas lat,lon
      const query = typeof location === 'string' ? location : `${location.latitude},${location.longitude}`;

      // Obtener clima actual
      const currentResponse = await fetch(
        `${BASE_URL}/current.json?key=${API_KEY}&q=${query}&aqi=yes&lang=es`
      );

      if (!currentResponse.ok) {
        if (currentResponse.status === 400) {
          throw new Error('Ciudad no encontrada');
        } else if (currentResponse.status === 401) {
          throw new Error('API Key inválida');
        } else if (currentResponse.status === 403) {
          throw new Error('Límite de llamadas excedido');
        } else {
          throw new Error('Error al obtener datos del clima');
        }
      }

      const currentData = await currentResponse.json();

      // Obtener pronóstico
      const forecastResponse = await fetch(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=no&alerts=no&lang=es`
      );

      if (!forecastResponse.ok) {
        throw new Error('Error al obtener pronóstico');
      }

      const forecastData = await forecastResponse.json();

      // Actualizar estados
      setWeatherData(currentData);
      setForecast(forecastData.forecast.forecastday);
      setCurrentCity(currentData.location.name);

    } catch (err) {
      console.error('Error obteniendo clima:', err);
      setError(err.message);
      setWeatherData(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  // Función para buscar por ciudad
  const searchByCity = (cityName) => {
    if (!cityName || !cityName.trim()) {
      setError('Por favor, ingresa una ciudad válida');
      return;
    }
    fetchWeather(cityName.trim());
  };

  // Función para buscar por coordenadas
  const searchByCoordinates = (coordinates) => {
    if (!coordinates || !coordinates.latitude || !coordinates.longitude) {
      setError('Coordenadas inválidas');
      return;
    }
    fetchWeather(coordinates);
  };

  const clearError = () => setError(null);

  // Función para reintentar la última búsqueda
  const retry = () => {
    if (currentCity) {
      fetchWeather(currentCity);
    }
  };

  // Cargar clima inicial (Lima por defecto)
  useEffect(() => {
    const defaultCity = import.meta.env.VITE_DEFAULT_CITY || 'Lima';
    fetchWeather(defaultCity);
  }, []);

  return {
    weatherData,
    forecast,
    loading,
    error,
    currentCity,
    searchByCity,
    searchByCoordinates,
    clearError,
    retry,
    hasData: !!weatherData,
    isConfigured: !!API_KEY && API_KEY !== 'TU_API_KEY_AQUI'
  };
};

export default useWeather;