import * as React from "react"
import { IWeather, WeatherContextType, IFetching } from "@/types/weather"
import config from "@config/index"

export const WeatherContext = React.createContext<WeatherContextType | null>(null)

const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [weather, setWeather] = React.useState<IWeather | null>(null);
	const [fetching, setFetching] = React.useState<IFetching>({
		get: false, error: false, success: false
	})

	const saveWeather = (weather: IWeather) => setWeather(weather)

	const getWeather = (city: string) => {
		setFetching((prev: IFetching) => ({ ...prev, get: true, error: false, success: false }))
		fetch(`${config.weatherapi_url}/current.json?q=${city}&key=${config.weatherapi_key}`)
			.then((response) => response.json())
			.then((res) => {
				setFetching((prev: IFetching) => ({ ...prev, success: true }))
				setWeather(res)
			})
			.catch(() => {
				setFetching((prev: IFetching) => ({ ...prev, error: true }))
				alert('Gagal mendapatkan lokasi weather')
			})
			.finally(() => setFetching((prev: IFetching) => ({ ...prev, get: false })))
	}

	return (
		<WeatherContext.Provider value={{ weather, saveWeather, getWeather, fetching }}>
			{children}
		</WeatherContext.Provider>
	)
}
export default WeatherProvider;
