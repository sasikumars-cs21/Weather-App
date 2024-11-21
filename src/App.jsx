import { useState } from 'react';
import { getWeatherByCity } from './services/weatherApi';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-4">
      <div className="max-w-md mx-auto pt-10">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Weather App
        </h1>
        
        <SearchBar onSearch={handleSearch} isLoading={loading} />
        
        <div className="space-y-4">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {weather && !loading && !error && <WeatherCard weather={weather} />}
          
          {!weather && !loading && !error && (
            <div className="text-center text-white text-lg">
              Search for a city to see the weather
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;