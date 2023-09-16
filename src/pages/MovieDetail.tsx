import { Chip, Image } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";
import { IGenre } from "../types/movie";
import Loader from "../components/ui/loader/Loader";

function MovieDetail() {
  const { id } = useParams();

  const { isLoading, data: movieDetail } = useQuery({
    queryKey: ["movieDetail"],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_MY_TOKEN}`,
          },
        }
      );
      const data = await res.data;
      return data;
    },
  });

  console.log(movieDetail);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-4">
          <div className="max-h-[400px] overflow-hidden relative">
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
              className="hidden md:block"
            />
            <div className="overlay"></div>
          </div>

          <div className="flex flex-col items-start gap-4 md:flex-row">
            <div className="w-full p-4">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={movieDetail.title}
                className="object-cover m-auto max-w-[500px]"
                src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <p className="font-bold text-5xl">{movieDetail.original_title}</p>
              <p className="font-bold ">{movieDetail.tagline}</p>
              <div>
                <span className="font-medium"> Release Date : </span>
                {movieDetail.release_date}
              </div>
              <div>
                <span className="font-medium"> Overview : </span>
                {movieDetail.overview}
              </div>

              <div>
                <span className="font-medium"> Budget : </span>
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  movieDetail.budget
                )}
              </div>

              <div>
                <span className="font-medium"> Revenue : </span>
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  movieDetail.revenue
                )}
              </div>

              <div>
                {movieDetail.genres.map((genre: IGenre) => {
                  return (
                    <Chip
                      color="primary"
                      variant="flat"
                      className="mr-2"
                      key={genre.id}
                    >
                      {genre.name}
                    </Chip>
                  );
                })}
              </div>
              <div>
                <span className="font-medium"> More Info : </span>
                <a href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}>
                  <img src="./imdb.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
