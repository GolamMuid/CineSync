import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

function SearchCardLarge({ movie }) {
  return (
    <Link to={`/${movie.id}`}>
      <Card shadow="sm" className="w-full mb-4" isPressable>
        <CardBody className="flex flex-row  items-center gap-4">
          {movie.poster_path === null ? (
            <img
              alt={movie.title}
              className="object-cover h-[140px]"
              src={`./no_image.jpg`}
            />
          ) : (
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={movie.title}
              className="w-full object-cover h-[140px]"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          )}
          <div>
            <div className="font-bold text-lg"> {movie.title} </div>
            <div className="font-bold text-sm">
              {" "}
              Release Date: {movie.release_date}{" "}
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}

export default SearchCardLarge;
