function SearchBar() {
	return (
		<div className="flex justify-center my-4">
			<form>
				<input type="text" className="p-2 px-4 w-64 bg-white text-sm focus:outline-none rounded-full" placeholder="Masukan kota anda" />
			</form>
		</div>
	)
}

export default SearchBar;