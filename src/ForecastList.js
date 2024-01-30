import React from 'react';

const ForecastList = ({ data, unit }) => {
  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };
  const dailyData = data.filter((item, index) => index % 8 === 0);

  return (
    <div className="forecast-list">
      {dailyData.map((item) => (
        <div key={item.dt} className="forecast-item">
          <p>{formatDay(item.dt)}</p>
          <p>Avg. Temperature: {item.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
          <p>Description: {item.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            alt={item.weather[0].description}
          />
        </div>
      ))}
    </div>
  );
};

export default ForecastList;
