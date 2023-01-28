import axios from "axios";
import { useEffect, useState } from "react";
import BgVideo from "./components/BgVideo";
import WeatherApp from "./components/WeatherApp";
import "./styles/App.css";

function App() {
  const [coords, setcoords] = useState();
  const [weather, setweather] = useState(false);
  const [temperature, settemperature] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const success = (pos) => {
      const ubication = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };

      setcoords(ubication);
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords) {
      const apiKey = "da6e98f8f39ec5dba4e442e9b538f8af";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}`;
      axios
        .get(url)
        .then((ress) => {
          setweather(ress.data);
          const obj = {
            celsius: (ress.data.main.temp - 273.15).toFixed(1),
            farenheit: (((ress.data.main.temp - 273.15) * 9) / 5 + 32).toFixed(
              1
            ),
          };
          settemperature(obj);
          setisLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  return (
    <div className="App">
      {isLoading ? (
        <div className="weatherbg loading">
          <video className=" loading" autoPlay loop muted>
            <source src="src/assets/bgvideos/loading.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <WeatherApp weather={weather} temperature={temperature} />
      )}
      <BgVideo weather={weather} />
    </div>
  );
}

export default App;
