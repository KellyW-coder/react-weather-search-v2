import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Thursday 19:49",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="input-group mb-3 mt-3">
            <input
              className="form-control shadow-sm"
              type="search"
              placeholder="Search city here...."
              autoFocus="on"
              autoComplete="off"
            />
            <button
              className="btn btn-outline-info"
              type="submit"
              value="Search"
            >
              Go {`>`}
            </button>
            <button type="button" className="btn btn-dark" id="current-loc">
              Current location
            </button>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row col-auto p-2">
          <div className="col-6">
            <div>
              <img src={weatherData.iconUrl} alt={weatherData.description} />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3ae6bdb32a731d95f7ea1efdd218128c";
    let city = "Johannesburg";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading data";
  }
}
