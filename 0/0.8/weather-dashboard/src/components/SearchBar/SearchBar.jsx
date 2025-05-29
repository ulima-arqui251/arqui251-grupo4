import { MapPin, Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ 
  value, 
  onChange, 
  onSearch, 
  onLocationRequest, 
  loading 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch(value.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Buscar ciudad..."
          className="search-input"
          disabled={loading}
        />
        
        <button
          type="button"
          onClick={handleSubmit}
          className="search-button"
          disabled={loading || !value.trim()}
        >
          <Search size={20} />
        </button>
        
        <button
          type="button"
          onClick={onLocationRequest}
          className="location-button"
          disabled={loading}
          title="Usar mi ubicación"
        >
          <MapPin size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;