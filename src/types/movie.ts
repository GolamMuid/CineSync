export type IMovie = {
  title: string;
  poster_path: string;
  vote_average: number;
};

export type IMovieCardProps = {
  movie: IMovie;
};
