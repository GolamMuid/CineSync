import { useState } from "react";
import Nav from "../components/ui/Nav";
import { Outlet } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import { useDebounce } from "@uidotdev/usehooks";
import SearchCardSmall from "../components/ui/search/SearchCardSmall";

function Main() {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");
	const debouncedSearch = useDebounce(search, 500);

	const {
		isLoading,
		// isError,
		data: searchedMovies,
		// error,
	} = useSearch(debouncedSearch);

	console.log(searchedMovies);

	return (
		<div className="dark w-full bg-blue-rgba text-white min-h-screen">
			<div className="bg-fixed bg-image">
				<Nav setSearch={setSearch} setIsFocused={setIsFocused} />
				<div className="max-w-[1080px] m-auto">
					<div
						className={`${
							isFocused ? "fixed" : "hidden"
						} top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 <bg-trans></bg-trans> bg-opacity-50 backdrop-blur-md z-30 w-[90vw] h-[400px] overflow-y-scroll  lg:w-[1080px]`}
					>
						{searchedMovies &&
							searchedMovies.results.map((movie) => {
								return <SearchCardSmall movie={movie} setSearch={setSearch} />;
							})}
					</div>

					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Main;
