import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <button className="btn btn-outline-info" type="submit" value="Search">
            Go {`>`}
          </button>
          <button type="button" className="btn btn-dark" id="current-loc">
            Current location
          </button>
        </div>
      </form>
      <h1>Cape Town</h1>
      <ul>
        <li>Tuesday 19:41</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row col-auto p-2">
        <div className="col-6">
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly cloudy"
            />

            <span className="temperature">12</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 82%</li>
            <li>Wind: 15km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
