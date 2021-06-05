import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "3ae6bdb32a731d95f7ea1efdd218128c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // city search
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3 mt-3">
            <input
              className="form-control shadow-sm"
              type="search"
              placeholder="Search city here...."
              autoFocus="on"
              autoComplete="off"
              onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="blue" height={50} width={50} />;
  }
}
