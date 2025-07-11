import React, { useState } from "react";
import axios from "axios";
import "./WeatherApi.css";
function WeatherApi() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "895284fb2d2c50a520ea537456963d9c";

  const fetchWeather = async () => {
    if (!location) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      location
    )}&units=metric&appid=${API_KEY}`; // changed to metric

    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setData({});
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchWeather();
      setLocation("");
    }
  };

  return (
    <div className="app">
      <h2>Weather App</h2>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter Location"
        type="text"
      />

      {data.name && (
        <div className="weather-info">
          <h3>{data.name}</h3>
          {data.main && <p>Temperature: {data.main.temp.toFixed()}°C</p>}
          {data.weather && <p>Condition: {data.weather[0].main}</p>}
          {data.main && <p>Feels Like: {data.main.feels_like.toFixed()}°C</p>}
          {data.main && <p>Humidity: {data.main.humidity}%</p>}
          {data.wind && <p>Wind Speed: {data.wind.speed.toFixed()} m/s</p>}
        </div>
      )}
    </div>
  );
}

export default WeatherApi;
