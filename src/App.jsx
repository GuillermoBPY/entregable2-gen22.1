import axios from "axios";
import { useEffect, useState } from "react";
import BgVideo from "./components/BgVideo";
import swal from "sweetalert";
import WeatherApp from "./components/WeatherApp";
import "./styles/App.css";

function App() {
  const [coords, setcoords] = useState();
  const [weather, setweather] = useState(false);
  const [temperature, settemperature] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [permission, setpermission] = useState(false);
  const [city, setcity] = useState(false);
  const [cityCode, setcityCode] = useState();

  const success = (pos) => {
    const ubication = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    };

    setcoords(ubication);
  };
  const navGeoPos = () => navigator.geolocation.getCurrentPosition(success);

  useEffect(() => {
    if (coords || city) {
      const apiKey = "da6e98f8f39ec5dba4e442e9b538f8af";
      let url = "";
      city
        ? (url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${cityCode}&appid=${apiKey}`)
        : (url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}`);
      axios
        .get(url)
        .then((ress) => {
          setweather(ress.data);
          const obj = {
            celsius: (ress.data.main.temp - 273.15).toFixed(1),
            farenheit: ((ress.data.main.temp - 273.15) * 9/5 + 32).toFixed(
              1
            ),
          };
          settemperature(obj);
          setisLoading(false);
        })
        .catch((err) => swal("Sorry, location not found"));
    }
  }, [coords, city]);

  useEffect(() => {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        if (permissionStatus.state === "granted") {
          setpermission(true);
          navGeoPos();
        }
      });
  }, []);

  const getpermision = () => {
    if (!permission)
      return (
        <div className="loading__card">
          <button onClick={navGeoPos} className="loading__card--btn">
            Enable Location
          </button>
          <h3 className="loading__card--advice">
            Please, enable location permission in your browser to fully use
            Weather App
          </h3>
        </div>
      );
  };

  return (
    <div className="App">
      {isLoading ? (
        <div className="weatherbg loading">
          <video className=" loading" autoPlay loop muted>
            <source src="/bgvideos/loading.mp4" type="video/mp4" />
          </video>
          {getpermision()}
        </div>
      ) : (
        <WeatherApp
          weather={weather}
          temperature={temperature}
          setcity={setcity}
          setcityCode={setcityCode}
        />
      )}
      <BgVideo weather={weather} />
      <div className="codedby">
        <a
          href="https://github.com/GuillermoBPY/entregable2-gen22.1"
          target={"_blank"}
        >
          <i class="bx bxl-github"></i>
          <p>CODED BY GUILLERMOBPY</p>
        </a>
      </div>
    </div>
  );
}

export default App;
