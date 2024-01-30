import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDetails from './WeatherDetails';
import ForecastList from './ForecastList';
import './App.css';

const API_KEY = '537660db473936dba26b73e2454c93c8';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      setError(null);
      const response = await fetch(
        `${API_BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError('Error fetching weather data. Please check the city name.');
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchForecastData = async () => {
    try {
      setError(null);
      const response = await fetch(
        `${API_BASE_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setForecastData(data.list);
    } catch (error) {
      setError('Error fetching forecast data. Please check the city name.');
      console.error('Error fetching forecast data:', error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
      fetchForecastData();
    }
  }, [city, unit]);

  return (
    <div className="app">
      <WeatherForm setCity={setCity} setUnit={setUnit} />
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherDetails data={weatherData} unit={unit} />}
      {forecastData && <ForecastList data={forecastData} unit={unit} />}
    </div>
  );
}

export default App;
