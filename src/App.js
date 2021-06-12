import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search app</h1>
        <Weather defaultCity="Johannesburg" />
        <footer>
          This project was coded by{" "}
          <a href="Https://www.kccd.co.za" target="_blank" rel="noreferrer">
            {" "}
            Kelly Williams
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KellyW-coder/react-weather-search-v2"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
