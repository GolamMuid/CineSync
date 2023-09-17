import { useState } from "react";
import Nav from "../components/ui/Nav";
import { Outlet } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import { useDebounce } from "@uidotdev/usehooks";

function Main() {
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
				<Nav setSearch={setSearch} />
				<div className="max-w-[1080px] m-auto">
					<div
						className={`${
							search.length > 0 ? "fixed" : "hidden"
						} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 <bg-trans></bg-trans> bg-opacity-50 backdrop-blur-md z-30 w-[90vw] overflow-auto lg:w-[1080px]`}
					>
						<ul>
							{!isLoading &&
								searchedMovies.results.map((movie) => {
									return <li> {movie.title} </li>;
								})}
						</ul>
					</div>

					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Main;
