import React, { useEffect, useState } from "react";

const WeatherApp = ({ weather, temperature }) => {
  const [isCelsius, setisCelsius] = useState(true);
  const handleTemperature = () => setisCelsius(!isCelsius);
  const [time, setTime] = useState(new Date());

  function usertime() {
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return <p>{time.toLocaleTimeString()}</p>;
  }

  return (
    <section className="weathercard">
      <div className="weathercard__titol">
        <h1>Weather App</h1>
        <h2>
          {weather?.name}, {weather?.sys.country}
        </h2>
        <div>{usertime()}</div>
      </div>
      <div className="weathercard__body">
        <figure className="weathercard__body--figure">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />
        </figure>
        <div className="weathercard__body--info">
          <h3>{weather?.weather[0].description}</h3>
          <ul>
            <li>
              <span>
                <i className="bx bxl-tailwind-css"></i> Wind Speed:{" "}
              </span>
              {weather?.wind.speed} m/s
            </li>
            <li>
              <span>
                <i className="bx bx-cloud"></i> Clouds:{" "}
              </span>
              {weather?.clouds.all} %
            </li>
            <li>
              <span>
                <i className="bx bx-vertical-bottom"></i> Pressure:{" "}
              </span>
              {weather?.main.pressure} hPa
            </li>
          </ul>
        </div>
      </div>
      <footer className="weathercard__footer">
        <h3>Temperature</h3>
        {isCelsius ? (
          <p>
            <i className="bx bxs-thermometer"></i> {temperature?.celsius} °C
          </p>
        ) : (
          <p>
            <i className="bx bxs-thermometer"></i> {temperature?.farenheit} °F
          </p>
        )}
        <button onClick={handleTemperature}>
          {isCelsius ? "Change to °F" : "Change to °C"}
        </button>
      </footer>
    </section>
  );
};

export default WeatherApp;
