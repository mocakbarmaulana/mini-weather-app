import { WeatherContext } from "@/context/weather.context"
import { WeatherContextType } from "@/types/weather"
import { useContext } from "react"

const Hello = () => {
	const { weather } = useContext(WeatherContext) as WeatherContextType
	console.log('weather from hello', weather)

	return (
		<div>
			<h1>
				Hello World From Pages Component
			</h1>
			<p>{ weather?.location?.country }</p>
		</div>
	)
}

export default Hello