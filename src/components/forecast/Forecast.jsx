import React from "react";

function Forecast({ forecastData }) {
  if (!forecastData || !forecastData.list) {
    return null;
  }

  const forecastList = forecastData.list.slice(0, 5);

  return (
    <div className="forecast">
      <h2>5 Day Forecast</h2>
      <div className="forecast-list">
        {forecastList.map((forecast) => {
          const forecastDate = new Date(forecast.dt_txt);
          const forecastIcon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
          return (
            <div className="forecast-item" key={forecast.dt}>
              <p>{forecastDate.toLocaleDateString()}</p>
              <img src={forecastIcon} alt={forecast.weather[0].description} />
              <p>{forecast.weather[0].description}</p>
              <p>Temperature: {Math.round(forecast.main.temp - 273.15)}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
