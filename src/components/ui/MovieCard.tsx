/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";
import { IMovieCardProps } from "../../types/movie";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  console.log(movie);

  const handleClick = (id: string) => {
    console.log(id);
  };

  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => handleClick(movie.id)}
      className="w-fit bg-[#00000078] backdrop-blur-sm"
    >
      <Link to={`/${movie.id}`}>
        <CardBody className="overflow-visible p-0 ">
          <Image
            shadow="sm"
            radius="sm"
            width="100%"
            alt={movie.title}
            className="w-full object-cover h-[480px] sm:h-[360px]"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </CardBody>
        <CardFooter className="text-medium justify-between">
          <b>{movie.title}</b>
          <div className="flex items-center gap-2">
            <div className="text-default-500">{movie.vote_average}</div>
            <div className="text-base text-yellow-400">
              <FaStar />
            </div>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default MovieCard;
