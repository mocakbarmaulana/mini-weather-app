import { WeatherContext } from "@/context/weather.context";
import { WeatherContextType } from "@/types/weather";
import React, { useContext, useEffect, useState } from "react";

function SearchBar() {
	const { getWeather } = useContext(WeatherContext) as WeatherContextType
	const [search, setSearch] = useState<string>("")

	useEffect(() => {
		let timer: number | undefined;
    
    if (search) {
      timer = setTimeout(() => {
				getWeather(search)
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
	}, [search])

	return (
		<div className="flex justify-center h-20 items-center">
			<form>
				<input type="text" className="p-2 px-4 w-64 bg-white text-sm focus:outline-none rounded-full" placeholder="Masukan kota anda" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
			</form>
		</div>
	)
}

export default SearchBar;