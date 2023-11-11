export type IMovie = {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date?: string;
};

export type IMovieCardProps = {
  movie: IMovie;
};

export type IGenre = {
  id: number;
  name: string;
};
