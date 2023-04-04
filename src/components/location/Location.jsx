import React, { useState } from 'react';
import axios from 'axios';
import './Location.css';
import Weather from '../weather/Weather';
import Forecast from '../forecast/Forecast';

function Location() {
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=82749d8fe84aaddb588c6e2e4cd57ad7`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=82749d8fe84aaddb588c6e2e4cd57ad7`;
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl),
      ]);
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setError('');
    } catch (error) {
      console.log(error);
      setError('Sorry, we could not find the location you were looking for.');
    }
  };

  return (
    <div>
      <div className="search_bar">
        <input
          type="text"
          placeholder="City,Country"
          value={location}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
        {error && <p className="error">{error}</p>}
      </div>
      {weatherData && <Weather weatherData={weatherData} />}
      {forecastData && <Forecast forecastData={forecastData} />}
    </div>
  );
}

export default Location;