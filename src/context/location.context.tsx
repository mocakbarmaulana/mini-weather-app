import * as React from "react";
import { ILocation, IFetching, LocationContextType } from "@/types/location";
import config from "@config/index"

export const LocationContext = React.createContext<LocationContextType | null>(null);

const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [location, setLocation] = React.useState<ILocation | null>(null);
	const [loader, setLoader] = React.useState<IFetching>({
		get: false,
		error: false,
		success: false
	});

	const updateLoader = (loader: IFetching) => setLoader(loader)

	const saveLocation = (location: ILocation) => setLocation(location)

	React.useEffect(() => {
		fetch(config.location_api)
			.then((response) => response.json())
			.then((res: ILocation) => {
				setLocation(res)
				setLoader((prev: IFetching) => ({
					...prev, success: true
				}))
			})
			.catch(() => setLoader((prev: IFetching) => ({ ...prev, error: true })))
			.finally(() => setLoader((prev: IFetching) => ({ ...prev, get: false })))
	}, [])

	return (
		<LocationContext.Provider value={{ loader, location, updateLoader, saveLocation }}>
			{children}
		</LocationContext.Provider>
	)
}

export default LocationProvider