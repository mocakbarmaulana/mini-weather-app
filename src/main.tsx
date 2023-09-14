import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LocationProvider from "@/context/location.context.tsx";
import WeatherProvider from '@/context/weather.context.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<LocationProvider>
			<WeatherProvider>
			<App />
			</WeatherProvider>
		</LocationProvider>
	</React.StrictMode>,
)
