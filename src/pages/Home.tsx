import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/ui/MovieCard";
import axios from "axios";
import { IMovie } from "../types/movie";

function Home() {
  const { isLoading, data: movieData } = useQuery({
    queryKey: ["movieData"],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_MY_TOKEN}`,
          },
        }
      );
      const data = await res.data.results;
      return data;
    },
  });

  console.log(movieData);

  return (
    <>
      {!isLoading && (
        <div className="gap-4 p-4 mt-8 grid grid-cols-1 sm:grid-cols-4">
          {movieData.map((movie: IMovie, index: number) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
