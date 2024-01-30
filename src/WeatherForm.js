
import React, { useState } from 'react';

const WeatherForm = ({ setCity, setUnit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select onChange={(e) => setUnit(e.target.value)}>
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
