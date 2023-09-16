import { Chip, CircularProgress, Image, ScrollShadow } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  console.log(id);

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
        <CircularProgress size="lg" aria-label="Loading..." />
      ) : (
        <div>
          {/* <Image
            src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
          /> */}

          <div className="flex flex-col items-start gap-4 md:flex-row">
            <div>
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={movieDetail.title}
                className="object-cover "
                // src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* <p className="font-bold text-4xl">{movieDetail.original_title}</p> */}
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
                {movieDetail.genres.map((genre) => {
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
