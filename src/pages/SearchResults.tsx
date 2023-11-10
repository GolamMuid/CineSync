import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSearchedMovies } from "../api/api";
import Loader from "../components/ui/loader/Loader";
import SearchCardLarge from "../components/ui/search/SearchCardLarge";

function SearchResults() {
  const { name } = useParams();

  const { isLoading, data: searchedMovies } = useQuery({
    queryKey: ["searchedMovies"],
    queryFn: async () => {
      const res = await getSearchedMovies(name);
      return res.data; // No need to extract 'data' here
    },
  });

  console.log(searchedMovies);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {searchedMovies?.results.map((movie) => {
            return <SearchCardLarge movie={movie} />;
          })}
        </>
      )}
    </div>
  );
}

export default SearchResults;
