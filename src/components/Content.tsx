import { useContext, useEffect } from "react";
import { LocationContext } from "@context/location.context";
import { LocationContextType } from "@/types/location";
import { WeatherContext } from "@context/weather.context"
import { WeatherContextType } from "@/types/weather";

const Content = () => {

  const { location } = useContext(LocationContext) as LocationContextType
  const { getWeather, weather } = useContext(WeatherContext) as WeatherContextType

  useEffect(() => {
    if (location) {
      getWeather(location?.city)
    }
  }, [location])

  function replaceSizeInUrl(url: string | undefined) {
    if (url) {
      return url.replace("64x64", "128x128");
    } else {
      return " "
    }
  }

  // return (
  //   <div className="flex h-[calc(100%-80px)]">
  //     <div className="w-1/2 h-full flex justify-center flex-col items-center">
  //       <figure className="mb-5">
  //         <img src={`https:${replaceSizeInUrl(weather?.current?.condition?.icon)}`} alt="icon-weather" className="h-36 w-36" />
  //         <figcaption className="text-white">{weather?.current?.condition?.text}</figcaption>
  //       </figure>
  //       <ul>
  //         <li>
  //           <span>Humidity  </span>
  //           <span>{weather?.current?.humidity}</span>
  //         </li>
  //       </ul>
  //     </div>
  //     <div className="text-center w-1/2 h-full flex flex-col justify-center items-center">
  //       <h1 className="font-bold text-white text-7xl mb-10">{weather?.current?.temp_c}° C</h1>
  //       <div className="text-white text-center">
  //         <h1 className="text-2xl font-bold">{weather?.location?.name}</h1>
  //         <h2 className="text-xl font-bold">{weather?.location.region} , {weather?.location.country}</h2>
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <div className="w-full h-full">
      <div className="text-center text-white">
        <h1 className="font-bold text-4xl">{weather?.location?.name}</h1>
        <p className="text-xl font-bold">{weather?.location?.region} , {weather?.location?.country}</p>
        <div className="flex flex-col justify-center items-center mt-10">
          <figure>
            <img src={`https:${replaceSizeInUrl(weather?.current?.condition?.icon)}`} alt="icon-weather" className="h-44 w-44" />
            <figcaption className="text-white text-xl capitalize">{weather?.current?.condition?.text}</figcaption>
          </figure>
          <div className="my-5">
            <h2 className="font-bold text-6xl">{weather?.current?.temp_c}° C</h2>
            <ul className="flex flex-col gap-y-3 my-3">
              <li>
                <span>Humidity: </span>
                <span>{weather?.current?.humidity}</span>
              </li>
              <li>
                <span>Last Updated: </span>
                <span>{weather?.current?.last_updated}</span>
              </li>
              <li>
                <span>Wind : </span>
                <span>{weather?.current?.wind_kph}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;