import { useState } from 'react';

function SearchBar({ onSearch, isLoading }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="flex-1 px-4 py-2 rounded-lg border-2 border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-white/30 text-white rounded-lg hover:bg-white/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading || !city.trim()}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;