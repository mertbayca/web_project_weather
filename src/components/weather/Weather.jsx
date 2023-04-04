import React from 'react';
import './Weather.css'

function Weather({ weatherData }) {
  if (!weatherData) {
    return null;
  }

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const weatherIcon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  return (
    <div className="weather">
      <div className={`w_box ${temperature < 10 ? 'cold' : ''} ${weatherData.weather[0].description.includes('rain') ? 'rain' : '' }`}>
        <h2>{weatherData.name}</h2>
        <img src={weatherIcon} alt={weatherData.weather[0].description} />
        <p>{weatherData.weather[0].description}</p>
        <p>Temperature: {temperature}°C</p>
        <p>Feels like: {Math.round(weatherData.main.feels_like - 273.15)}°C</p>
      </div>
    </div>
  );
}
export default Weather