export interface IWeather {
  location: ILocationWeather
  current: ICurrentWeather
}

export interface ILocationWeather {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface ICurrentWeather {
  last_updated_epoch: number
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: IConditionWeather
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
}

export interface IConditionWeather {
  text: string
  icon: string
  code: number
}

export interface IFetching {
  get: boolean,
  error: boolean,
  success: boolean
}

export type WeatherContextType = {
  weather: IWeather | null,
  fetching: IFetching | null,
  saveWeather: (location: IWeather) => void
  getWeather: (city: string) => void
}