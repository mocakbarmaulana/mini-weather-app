import SearchBar from "@components/SearchBar"
import Content from "@components/Content"

function App() {

  // return (
  // 	<>
  // 		<div className="relative md:bg-cloud-one w-screen h-screen bg-cover flex justify-center items-center after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-gray-600/30">
  // 			<div className="bg-cloud-one bg-cover w-2/3 h-2/3 border-white z-50 rounded-3xl">
  // 				<SearchBar />
  // 				<Content />
  // 			</div>
  // 		</div>
  // 	</>
  // );

  return (
    <div className="h-screen font-sans">
      <div className="relative bg-cloud-one h-full bg-cover after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-indigo-500/80 after:z-10">
        <div className="relative z-50">
          <SearchBar />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App;
