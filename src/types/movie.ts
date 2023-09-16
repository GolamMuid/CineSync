export type IMovie = {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
};

export type IMovieCardProps = {
  movie: IMovie;
};

export type IGenre = {
  id: number;
  name: string;
};
