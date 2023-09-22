import { Card, CardBody } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { IMovie } from "../../../types/movie";

function SearchCardSmall({ movie }: { movie: IMovie }) {
  console.log(movie);
  return (
    <Link to={`/${movie.id}`}>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 p-2 mb-2 w-full"
        shadow="sm"
      >
        <CardBody className="p-0">
          <div className="flex gap-4 items-center">
            <div className="relative flex justify-center">
              {movie.poster_path === null ? (
                <img
                  alt="Album cover"
                  className="object-cover h-12"
                  src={`./no_image.jpg`}
                />
              ) : (
                <img
                  alt="Album cover"
                  className="object-cover w-full h-20"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              )}
            </div>

            <div className="text-sm md:text-lg">{movie.title}</div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}

export default SearchCardSmall;
