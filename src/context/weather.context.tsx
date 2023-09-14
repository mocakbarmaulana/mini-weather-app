import * as React from "react"
import { IWeather, WeatherContextType } from "@/types/weather"

export const WeatherContext = React.createContext<WeatherContextType | null>(null)

const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [weather, setWeather] = React.useState<IWeather | null>(null);

	const saveWeather = (weather: IWeather) => setWeather(weather)

	return (
		<WeatherContext.Provider value={{ weather, saveWeather }}>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider;