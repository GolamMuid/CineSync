import { useState } from "react";
import Nav from "../components/ui/Nav";
import { Outlet } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import { useDebounce } from "@uidotdev/usehooks";
import SearchCardSmall from "../components/ui/search/SearchCardSmall";
import { IMovie } from "../types/movie";
import Loader from "../components/ui/loader/Loader";

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
				<Nav
					search={search}
					setSearch={setSearch}
					setIsFocused={setIsFocused}
				/>
				<div className="max-w-[1080px] m-auto">
					<div
						className={`${
							isFocused ? "fixed" : "hidden"
						} top-[68px] rounded-lg left-1/2 transform -translate-x-1/2  bg-transparent bg-opacity-50 backdrop-blur-md z-30  ${
							search.length > 0 ? "h-[400px]" : "h-[80px]"
						} h-[400px] overflow-y-scroll md:w-[400px]`}
					>
						{search.length === 0 ? (
							<div className="text-center mt-4">
								Type the name of a movie to search
							</div>
						) : (
							<div>
								{isLoading ? (
									<Loader />
								) : (
									<>
										{searchedMovies?.results?.map((movie: IMovie) => (
											<SearchCardSmall movie={movie} />
										))}
									</>
								)}
							</div>
						)}
					</div>

					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Main;
