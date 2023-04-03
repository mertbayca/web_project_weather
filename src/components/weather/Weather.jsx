import React from 'react';

function Weather({ weatherData }) {
  if (!weatherData) {
    return null;
  }

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const weatherIcon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  return (
    <div className="weather">
      <h2>{weatherData.name}</h2>
      <img src={weatherIcon} alt={weatherData.weather[0].description} />
      <p>{weatherData.weather[0].description}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Feels like: {Math.round(weatherData.main.feels_like - 273.15)}°C</p>
    </div>
  );
}
export default Weather