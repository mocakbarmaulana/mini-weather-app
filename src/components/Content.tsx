import { useContext, useEffect } from "react";
import { LocationContext } from "@context/location.context";
import { LocationContextType } from "@/types/location";
import { WeatherContext } from "@context/weather.context"
import { WeatherContextType } from "@/types/weather";

const Content = () => {

  const { location } = useContext(LocationContext) as LocationContextType
  const { getWeather, weather, fetching } = useContext(WeatherContext) as WeatherContextType

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

  return (
    <div className="w-full h-full">
      {
        fetching?.get && (
          <div className="text-center">
            <p className="text-white">Memuat data...</p>
          </div>
        )
      }
      {
        fetching?.success && (
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
        )
      }
      {
        fetching?.error && (
          <div className="text-center">
            <p className="text-white">Tidak ada kota dengan nama tersebut !</p>
          </div>
        )
      }
    </div>
  )
}

export default Content;