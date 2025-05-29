import { useState } from 'react';

const useGeolocation = () => {
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCurrentLocation = () => {
    
    if (!navigator.geolocation) {
      setError('Geolocalización no soportada en este navegador');
      return;
    }

    setLoading(true);
    setError(null);

    const options = {
      enableHighAccuracy: true,
      timeout: 10000, 
      maximumAge: 300000 
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setLoading(false);
      },
      (error) => {
        let errorMessage = 'Error al obtener ubicación';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Permiso de ubicación denegado';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Ubicación no disponible';
            break;
          case error.TIMEOUT:
            errorMessage = 'Tiempo de espera agotado';
            break;
          default:
            errorMessage = 'Error desconocido de geolocalización';
        }
        
        setError(errorMessage);
        setLoading(false);
      },
      options
    );
  };

  const clearError = () => setError(null);

  return {
    position,
    loading,
    error,
    getCurrentLocation,
    clearError,
    isSupported: !!navigator.geolocation
  };
};

export default useGeolocation;