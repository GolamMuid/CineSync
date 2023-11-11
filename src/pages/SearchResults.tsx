import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSearchedMovies } from "../api/api";
import Loader from "../components/ui/loader/Loader";
import SearchCardLarge from "../components/ui/search/SearchCardLarge";
import { IMovie } from "../types/movie";

function SearchResults() {
  const { name = "" } = useParams();

  const { isLoading, data: searchedMovies } = useQuery({
    queryKey: ["searchedMovies", name],
    queryFn: async () => {
      const res = await getSearchedMovies(name);
      return res.data;
    },
  });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {searchedMovies?.results.map((movie: IMovie) => {
            return <SearchCardLarge movie={movie} key={movie.id} />;
          })}
        </>
      )}
    </div>
  );
}

export default SearchResults;
