export interface ILocation {
    status: string
    country: string
    countryCode: string
    region: string
    regionName: string
    city: string
    zip: string
    lat: number
    lon: number
    timezone: string
    isp: string
    org: string
    as: string
    query: string
}

export interface IFetching {
    get: boolean,
    error: boolean,
    success: boolean
}

export type LocationContextType = {
    location: ILocation | null,
    loader: IFetching,
    saveLocation: (location: ILocation) => void
    updateLoader: (loader: IFetching) => void
}
