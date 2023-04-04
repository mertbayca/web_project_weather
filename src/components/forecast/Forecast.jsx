import React from "react";
import './Forecast.css'

function Forecast({ forecastData }) {
  if (!forecastData || !forecastData.list) {
    return null;
  }

  const forecastList = forecastData.list.slice(0, 5);

  return (
    <div className="forecast">
      <div className="f_header">
        <h1>5 Day Forecast</h1>
      </div>
      <div className="forecast_list">
        {forecastList.map((forecast) => {
          const forecastDate = new Date(forecast.dt_txt);
          forecastDate.setDate(forecastDate.getDate() + forecastList.indexOf(forecast) + 1);
          const forecastIcon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
          return (
            <div className="forecast_item" key={forecast.dt}>
              <div className={`f_box ${Math.round(forecast.main.temp - 273.15) < 10 ? 'cold' : ''}`}>
                <div className="f_text">
                  <p>{forecastDate.toLocaleDateString()}</p>
                  <img src={forecastIcon} alt={forecast.weather[0].description} />
                  <p>{forecast.weather[0].description}</p>
                  <p>Temperature: {Math.round(forecast.main.temp - 273.15)}°C</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
