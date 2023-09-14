import { useContext, useEffect } from "react";
import SearchBar from "@components/SearchBar"
import { LocationContext } from "@context/location.context";
import { LocationContextType } from "@/types/location";
import { WeatherContext } from "@context/weather.context"
import { WeatherContextType } from "@/types/weather";

function App() {
	const { location } = useContext(LocationContext) as LocationContextType
	const { getWeather, weather } = useContext(WeatherContext) as WeatherContextType

	useEffect(() => {
		if (location) {
			getWeather(location?.city)
		}
	}, [location])

	console.log('location', location)

	function replaceSizeInUrl(url: string | undefined) {
		if (url) {
			return url.replace("64x64", "128x128");
		} else {
			return " "
		}
	}

	return (
		<>
			<div className="relative bg-cloud-one w-screen h-screen bg-cover flex justify-center items-center after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-gray-600/30">
				<div className="bg-cloud-one bg-cover w-2/3 h-2/3 border-white z-50 rounded-3xl">
					<SearchBar />
					<div className="flex h-[calc(100%-80px)]">
						<div className="w-1/2 h-full flex justify-center flex-col items-center">
							<figure className="mb-5">
								<img src={`https:${replaceSizeInUrl(weather?.current?.condition?.icon)}`} alt="icon-weather" className="h-36 w-36" />
								<figcaption className="text-white">{weather?.current?.condition?.text}</figcaption>
							</figure>
							<ul>
								<li>
									<span>Humidity  </span>
									<span>{ weather?.current?.humidity }</span>
								</li>
							</ul>
						</div>
						<div className="text-center w-1/2 h-full flex flex-col justify-center items-center">
							<h1 className="font-bold text-white text-7xl mb-10">{ weather?.current?.temp_c }° C</h1>
							<div className="text-white text-center">
								<h1 className="text-2xl font-bold">{weather?.location?.name}</h1>
								<h2 className="text-xl font-bold">{weather?.location.region} , {weather?.location.country}</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
