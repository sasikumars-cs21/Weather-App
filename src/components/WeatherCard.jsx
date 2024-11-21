import { WiHumidity, WiStrongWind, WiThermometer, WiBarometer } from 'react-icons/wi';

function WeatherCard({ weather }) {
  const {
    name,
    main: { temp, humidity, pressure },
    weather: [{ description, icon }],
    wind: { speed }
  } = weather;

  return (
    <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-lg shadow-lg">
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <div className="flex justify-center mb-4">
          <img 
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="w-24 h-24"
          />
        </div>
        <p className="text-6xl font-bold mb-4">
          {Math.round(temp)}°C
        </p>
        <p className="text-xl capitalize mb-6">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-2">
            <WiHumidity className="text-3xl" />
            <div>
              <p className="text-sm">Humidity</p>
              <p className="text-lg font-semibold">{humidity}%</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <WiStrongWind className="text-3xl" />
            <div>
              <p className="text-sm">Wind Speed</p>
              <p className="text-lg font-semibold">{speed} m/s</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <WiThermometer className="text-3xl" />
            <div>
              <p className="text-sm">Temperature</p>
              <p className="text-lg font-semibold">{temp}°C</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <WiBarometer className="text-3xl" />
            <div>
              <p className="text-sm">Pressure</p>
              <p className="text-lg font-semibold">{pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;