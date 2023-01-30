import React, { useEffect, useState } from "react";

const BgVideo = ({ weather }) => {
  const defaultbg = (
    <video autoPlay loop muted>
      <source src="bgvideos/default.mp4" type="video/mp4" />
    </video>
  );

  const weatherCondDay = {
    Ash: (
      <video key={"Ash"} autoPlay loop muted>
        <source src="bgvideos/bgday/Ash.mp4" type="video/mp4" />
      </video>
    ),
    Clear: (
      <video key={"Clear"} autoPlay loop muted>
        <source src="bgvideos/bgday/Clear.mp4" type="video/mp4" />
      </video>
    ),
    Clouds: (
      <video key={"Clouds"} autoPlay loop muted>
        <source src="bgvideos/bgday/Clouds.mp4" type="video/mp4" />
      </video>
    ),
    Drizzle: (
      <video key={"Drizzle"} autoPlay loop muted>
        <source src="bgvideos/bgday/Drizzle.mp4" type="video/mp4" />
      </video>
    ),
    Dust: (
      <video key={"Dust"} autoPlay loop muted>
        <source src="bgvideos/bgday/Dust.mp4" type="video/mp4" />
      </video>
    ),
    Fog: (
      <video key={"Fog"} autoPlay loop muted>
        <source src="bgvideos/bgday/Fog.mp4" type="video/mp4" />
      </video>
    ),
    Haze: (
      <video key={"Haze"} autoPlay loop muted>
        <source src="bgvideos/bgday/Haze.mp4" type="video/mp4" />
      </video>
    ),
    Mist: (
      <video key={"Mist"} autoPlay loop muted>
        <source src="bgvideos/bgday/Mist.mp4" type="video/mp4" />
      </video>
    ),
    Rain: (
      <video key={"Rain"} autoPlay loop muted>
        <source src="bgvideos/bgday/Rain.mp4" type="video/mp4" />
      </video>
    ),
    Sand: (
      <video key={"Sand"} autoPlay loop muted>
        <source src="bgvideos/bgday/Sand.mp4" type="video/mp4" />
      </video>
    ),
    Smoke: (
      <video key={"Smoke"} autoPlay loop muted>
        <source src="bgvideos/bgday/Smoke.mp4" type="video/mp4" />
      </video>
    ),
    Snow: (
      <video key={"Snow"} autoPlay loop muted>
        <source src="bgvideos/bgday/Snow.mp4" type="video/mp4" />
      </video>
    ),
    Squall: (
      <video key={"Squall"} autoPlay loop muted>
        <source src="bgvideos/bgday/Squall.mp4" type="video/mp4" />
      </video>
    ),
    Thunderstorm: (
      <video key={"Thunderstrom"} autoPlay loop muted>
        <source src="bgvideos/bgday/Thunderstorm.mp4" type="video/mp4" />
      </video>
    ),
    Tornado: (
      <video key={"Tornado"} autoPlay loop muted>
        <source src="bgvideos/bgday/Tornado.mp4" type="video/mp4" />
      </video>
    ),
  };

  const [weathermain, setweathermain] = useState(false);
  const [videosrc, setvideosrc] = useState();

  useEffect(() => {
    if (weathermain && weatherCondDay[weathermain])
      setvideosrc(weatherCondDay[weathermain]);
    if (weathermain && !weatherCondDay[weathermain]) setvideosrc(defaultbg);
  }, [weathermain]);

  useEffect(() => {
    if (weather) setweathermain(weather?.weather?.[0].main);
  }, [weather]);

  return <div className="weatherbg">{videosrc}</div>;
};

export default BgVideo;
