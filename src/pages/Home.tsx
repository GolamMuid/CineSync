import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/ui/MovieCard";
import { IMovie } from "../types/movie";
import Loader from "../components/ui/loader/Loader";
import { getTopRatedMovies, getTrendingMovies } from "../api/api";

function Home() {
  const { isLoading: trendLoading, data: trendingMovies } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: async () => {
      const res = await getTrendingMovies();
      return res.results; // No need to extract 'data' here
    },
  });

  const { isLoading: topLoading, data: topRatedMovies } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: async () => {
      const res = await getTopRatedMovies();
      return res.results; // No need to extract 'data' here
    },
  });

  return (
    <div className="mt-8">
      <div className="md-8">
        {trendLoading ? (
          <Loader />
        ) : (
          <>
            <div className="text-3xl pl-4">
              Trending
              <hr />
            </div>
            <div className="gap-4 p-4 m-auto flex flex-col items-center sm:grid grid-cols-2 md:grid-cols-4">
              {trendingMovies.map((movie: IMovie, index: number) => (
                <MovieCard movie={movie} key={index} />
              ))}
            </div>
          </>
        )}
      </div>

      <div>
        {topLoading ? (
          <Loader />
        ) : (
          <div className="mt-16">
            <div className="text-3xl pl-4">
              Top Rated
              <hr />
            </div>
            <div className="gap-4 p-4 m-auto flex flex-col items-center sm:grid grid-cols-2 md:grid-cols-4">
              {topRatedMovies.map((movie: IMovie, index: number) => (
                <MovieCard movie={movie} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
