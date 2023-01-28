import React, { useEffect, useState } from 'react'

const BgVideo = ({weather}) => {
  const defaultbg = <video autoPlay loop muted><source src="bgvideos/default.mp4" type="video/mp4" /></video>;

  const weatherCondDay = {
    Ash:<video autoPlay loop muted><source src="bgvideos/bgday/Ash.mp4" type="video/mp4" /></video>,
    Clear:<video autoPlay loop muted><source src="bgvideos/bgday/Clear.mp4" type="video/mp4" /></video>,
    Clouds:<video autoPlay loop muted><source src="bgvideos/bgday/Clouds.mp4" type="video/mp4" /></video>,
    Drizzle:<video autoPlay loop muted><source src="bgvideos/bgday/Drizzle.mp4" type="video/mp4" /></video>,
    Dust:<video autoPlay loop muted><source src="bgvideos/bgday/Dust.mp4" type="video/mp4" /></video>,
    Fog:<video autoPlay loop muted><source src="bgvideos/bgday/Fog.mp4" type="video/mp4" /></video>,
    Haze:<video autoPlay loop muted><source src="bgvideos/bgday/Haze.mp4" type="video/mp4" /></video>,
    Rain:<video autoPlay loop muted><source src="bgvideos/bgday/Rain.mp4" type="video/mp4" /></video>,
    Sand:<video autoPlay loop muted><source src="bgvideos/bgday/Sand.mp4" type="video/mp4" /></video>,
    Smoke:<video autoPlay loop muted><source src="bgvideos/bgday/Smoke.mp4" type="video/mp4" /></video>,
    Snow:<video autoPlay loop muted><source src="bgvideos/bgday/Snow.mp4" type="video/mp4" /></video>,
    Squall:<video autoPlay loop muted><source src="bgvideos/bgday/Squall.mp4" type="video/mp4" /></video>,
    Thunderstorm:<video autoPlay loop muted><source src="bgvideos/bgday/Thunderstorm.mp4" type="video/mp4" /></video>,
    Tornado:<video autoPlay loop muted><source src="bgvideos/bgday/Tornado.mp4" type="video/mp4" /></video>,
    }

const [weathermain, setweathermain] = useState(false)
const [videosrc, setvideosrc] = useState()

useEffect(() => {
  if(weathermain && weatherCondDay[weathermain]) setvideosrc(weatherCondDay[weathermain])
  if(weathermain && !weatherCondDay[weathermain]) setvideosrc(defaultbg)


}, [weathermain])

useEffect(() => {
  if(weather) setweathermain(weather?.weather?.[0].main)
}, [weather])


  return (
    <div className='weatherbg'>
    {videosrc}
    </div>
  )
}

export default BgVideo