/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";
import { IMovieCardProps } from "../../types/movie";

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={movie.title}
          className="w-full object-cover h-[360px]"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{movie.title}</b>
        <p className="text-default-500">{movie.vote_average}</p>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
