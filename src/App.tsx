import SearchBar from "@components/SearchBar"

function App() {
  // const [weather, setWeather] = useState({});
  // const [city, setCity] = useState("");
  // useEffect(() => {
  //   getLocation()
  // }, [])

  // useEffect(() => {
  //   if (city) {
  //     fetch(`${config.weatherapi_url}/current.json?` + new URLSearchParams({
  //       key: config.weatherapi_key,
  //       q: city
  //     })).then((response) => response.json()).then((res) => setWeather(res))
  //   }
  // }, [city])

  // function getLocation() {
  //   fetch('http://ip-api.com/json/')
  //     .then((response) => response.json())
  //     .then((res) => setCity(res?.regionName))
  // }

  // console.log("regionname", weather)

  // function replaceSize(url: string) {
  //   const pattern = /(\d{1,2}x64)/;

  //   // Mengganti pola tersebut dengan "128x128"
  //   const newUrl = url.replace(pattern, '128x128');

  //   return newUrl;
  // }

  return (
    <>
      <div className="relative bg-cloud-one w-screen h-screen bg-cover flex justify-center items-center after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-gray-600/30">
        <div className="bg-cloud-one bg-cover w-2/3 h-2/3 border-white z-50 rounded-3xl">
          <SearchBar />
          <div>
            {/* <figure>
              <img src={replaceSize(weather?.current?.condition?.icon)} className="w-44 h-44" />
            </figure> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
