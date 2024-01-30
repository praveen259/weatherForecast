
import React from 'react';

const WeatherDetails = ({ data, unit }) => {
  return (
    <div className="weather-details">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Min/Max Temperature: {data.main.temp_min}°{unit === 'metric' ? 'C' : 'F'} / {data.main.temp_max}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s, {data.wind.deg}°</p>
      <p>Description: {data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
      />
    </div>
  );
};

export default WeatherDetails;
