import * as React from "react"
import { IWeather, WeatherContextType } from "@/types/weather"
import config from "@config/index"

export const WeatherContext = React.createContext<WeatherContextType | null>(null)

const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [weather, setWeather] = React.useState<IWeather | null>(null);

	const saveWeather = (weather: IWeather) => setWeather(weather)

	const getWeather = (city: string) => {
		fetch(`${config.weatherapi_url}/current.json?q=${city}&key=${config.weatherapi_key}`)
			.then((response) => response.json())
			.then((res) => setWeather(res))
			.catch(() => alert('Gagal mendapatkan lokasi weather'))
	}

	return (
		<WeatherContext.Provider value={{ weather, saveWeather, getWeather }}>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider;